import React, { useState, useEffect } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [NavItems, setNavItems] = useState([
    { title: "Home", path: "/" },
    { title: "Data Science", path: "/about" },
    { title: "Blog", path: "/contact" },
    { title: "Contact", path: "/contact" },
    { title: "Write For Us", path: "/contact"},
    { title: "About Us", path: "/contact"}
  ]);

  // useEffect(() => {
  //   fetch("https://api.example.com/navItems")
  //     .then((response) => response.json())
  //     .then((data) => setNavItems(data));
  // }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-gray-600 flex  absolute top-0 w-[100vw] text-blue-50 p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="./vite.svg" alt="TopIndiaTips Logo" />
            <div className="text-white font-bold text-xl mx-2">
              Top India Tips
            </div>
          </div>
          <ul className="hidden md:flex space-x-4">
            {NavItems.map((item, index) => (
              <li key={index}>
                <a className="text-white hover:text-gray-300"> {item.title} </a>
              </li>
            ))}
          </ul>
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "absolute md:hidden left-0 top-[100%] w-[100vw] ease-in-out duration-500 -z-10"
                : "ease-in-out w-[100vw] duration-500 absolute top-[-1000%] left-0"
            }>
            {/* Mobile Logo */}

            {/* Mobile Navigation Items */}
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="py-2 border-b border-gray-300  hover:bg-gray-200 hover:font-bold  duration-300 text-black cursor-pointer border-gray-600 text-center">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
