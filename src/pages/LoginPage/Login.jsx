import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { animate, motion } from "motion/react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw", // Start from the right
    },
    animate: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        animate: 1,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw", // Exit to the left
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const { googleLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginEmailPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photoURL: result.user?.photoURL,
          uid: result.user?.uid,
        };
        // console.log("User signed in successfully", userInfo);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Invalid email or password");
        throw new error();
      });
  };

  // Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photoURL: result.user?.photoURL,
          uid: result.user?.uid,
        };
        console.log(userInfo);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        throw new Error();
      });
  };

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col md:flex-row min-h-screen"
      >
        {/* <div className="flex flex-col md:flex-row min-h-screen"> */}
        <div className="bg-blue-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
          <div className="z-10 relative">
            {/* <h2 className="text-2xl font-bold mb-6">Your Logo</h2> */}
            <div className="mt-20 md:mt-32">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sign in to
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                FCTroll
              </h2>
              <p className="max-w-md opacity-90">
                Sign in to get back into the features which can be activated
                only with you being logged in.
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-1/3 transform translate-x-1/4">
            <div className="relative w-64 h-64">
              <svg
                className="text-white/20 absolute top-10 left-10 w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>

              <svg
                className="text-white/20 absolute bottom-10 right-10 w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-40 h-40">
                  <svg
                    className="text-orange-400 w-40 h-40 transform rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="text-white/20 absolute bottom-10 left-10 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>

        <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
            <div className="text-right mb-4">
              <span className="text-gray-500">No Account?</span>
              <Link to={"/sign-up"} className="text-blue-500 font-medium">
                Sign up
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold">Sign in</h1>
            </div>

            <div className="flex flex-col space-y-4 mb-8">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <FcGoogle className="text-4xl" />
              </button>
            </div>

            <form onSubmit={handleLoginEmailPass}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your username or email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Username or email address"
                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    <span className="text-sm font-medium text-red-700">
                      {error}
                    </span>
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-blue-500 text-sm">
                      Forgot Password
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="hidden lg:block absolute bottom-8 left-8">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">Login as</h3>
          </div>
          <div className="flex space-x-4">
            <div className="bg-gray-100 rounded-lg p-4 w-36 relative">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img
                    src="/placeholder.svg"
                    alt="john doe"
                    width="60"
                    height="60"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-center">John Doe</h4>
                <p className="text-xs text-gray-500 text-center mt-1">
                  John Doe
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* </div> */}
      </motion.div>
    </>
  );
};

export default Login;
