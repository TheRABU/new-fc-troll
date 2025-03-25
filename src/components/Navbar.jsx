import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsMenuAppFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="px-4 md:px-16 py-2 mx-center top-0 z-50 sticky flex justify-between items-center "
        // style={{
        //   background: "rgba(255, 255, 255, 0.21)",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(5.5px)",
        //   WebkitBackdropFilter: "blur(5.5px)",
        //   border: "1px solid rgba(255, 255, 255, 0.3)",
        // }}
        style={{
          background: "rgba( 35, 61, 179, 0.7 )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: " blur( 1px )",
          WebkitBackdropFilter: "blur( 1px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <div className="logo-wrapper flex justify-start items-center gap-x-1 -mt-4">
          <div className="nav-logo">
            <img className="w-[65px] h-full" src="/logo.png" alt="logo-img" />
          </div>
          <h1 className="text-2xl text-white">FCTroll Football</h1>
        </div>
        <div className="links cursor-pointer">
          <ul className="hidden lg:flex justify-center items-center list-none gap-x-3">
            <li className="text-white hover:text-violet-100">Home</li>
            <li className="text-white hover:text-violet-100">Get Started</li>
            <li className="text-white hover:text-violet-100">What's More?</li>
          </ul>
        </div>
        {/* Mobile menu btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu lg:hidden flex justify-center text-3xl"
        >
          {isOpen ? (
            <BsMenuAppFill className="text-white" />
          ) : (
            <BsFillMenuButtonWideFill className="text-white" />
          )}
          {/* Mobile links */}
          {isOpen && (
            <ul className="absolute top-14 right-5 bg-slate-300 shadow-lg rounded-md p-3 flex flex-col items-center gap-2 w-[140px]">
              <li className="text-black hover:text-violet-100 cursor-pointer p-4 text-lg">
                Home
              </li>
              <li className="text-black hover:text-violet-100 cursor-pointer p-4 text-lg">
                Get Started
              </li>
              <li className="text-black hover:text-violet-100 cursor-pointer p-4 text-lg">
                What's More?
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
