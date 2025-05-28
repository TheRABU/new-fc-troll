import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "/logo.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const NewNav = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Generate Image", path: "/generate-image" },
  ];

  const signOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link key={link.path}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `font-medium px-5 ${isActive ? "text-primary" : ""}`
          }
        >
          {link.title}
        </NavLink>
      </Link>
    ));

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm md:px-5 xl:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {renderLinks(true)}
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl cursor-pointer flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo"
              className="h-8 md:h-10 lg:h-12 w-auto rounded-xl"
            />
            TrollFC
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{renderLinks()}</ul>
        </div>

        {user ? (
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL
                        ? `${user.photoURL}`
                        : `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={signOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end ">
            <Link to={"/login"}>
              <span className="text-blue-700 font-medium">Login / Signup</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NewNav;
