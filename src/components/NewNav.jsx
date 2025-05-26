import { Link, NavLink } from "react-router-dom";

const NewNav = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Generate Image", path: "/generate-image" },
  ];

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
      <div className="navbar bg-base-100 shadow-sm">
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
          <NavLink to="/" className="btn btn-ghost text-xl">
            TrollFC
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{renderLinks()}</ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NewNav;
