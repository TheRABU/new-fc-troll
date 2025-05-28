import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { delay, motion } from "motion/react";
const Signup = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw", // Start from the left
    },
    animate: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw", // Exit to the right
      transition: {
        ease: "easeInOut",
      },
    },
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
        <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
            <div className="text-right mb-4">
              <span className="text-gray-500">Already got an account?</span>
              <Link to={"/login"} className="text-blue-500 font-medium">
                Login
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>

            <div className="flex flex-col space-y-4 mb-8">
              <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-md hover:bg-gray-50">
                <FcGoogle className="text-4xl" />
              </button>
            </div>

            <form>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    for="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your email address
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Email address"
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
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-blue-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
          <div className="z-10 relative">
            {/* <h2 className="text-2xl font-bold mb-6">Your Logo</h2> */}
            <div className="mt-20 md:mt-32">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sign Up</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                FCTroll
              </h2>
              <p className="max-w-md opacity-90">
                Create new account and start a new journey with FCTroll Football
                today.
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
      </motion.div>
    </>
  );
};

export default Signup;
