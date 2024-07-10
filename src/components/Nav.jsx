import React, { useState, useEffect } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SubMenu from "./SubMenu";
const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const pages = [
    {
      title: "Products",
      path: "/products",
      sub: [
        { title: "Sub1", path: "/sub1" },
        { title: "sub2", path: "/sub2" },
      ],
    },
    {
      title: "Pricing",
      path: "/pricing",
      sub: [
        {
          title: "Sub3",
          path: "/sub1",
          sub: [
            {
              title: "Sub31",
              path: "/sub1",
              sub: [
                { title: "Sub321", path: "/sub1" },
                { title: "sub421", path: "/sub2" },
              ],
            },
            { title: "sub41", path: "/sub2" },
          ],
        },
        { title: "sub4", path: "/sub2" },
      ],
    },
    { title: "Blog", path: "/blog" },
  ];
  const [NavItems, setNavItems] = useState(pages);

  // useEffect(() => {
  //   fetch("https://api.example.com/navItems")
  //     .then((response) => response.json())
  //     .then((data) => setNavItems(data));
  // }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (key) => {
    const updatedOpenSubMenus = {};
    Object.keys(openSubMenus).forEach((subMenuKey) => {
      updatedOpenSubMenus[subMenuKey] = false;
    });
    setOpenSubMenus((prevOpenSubMenus) => ({
      ...updatedOpenSubMenus,
      [key]: !prevOpenSubMenus[key],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.getElementById("nav");
      if (navElement && !navElement.contains(event.target)) {
        setOpenSubMenus({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      id="nav"
      className="flex justify-between content-center shadow-lg w-100 rounded shadow-blue-200 p-4">
      <div>
        <img src="test.png" alt="" className="inline h-full w-auto" />
        <div className="inline">Company name</div>
      </div>
      <div>
        <div className="">
          {NavItems.map((item) => (
            <div
              className=" inline-block"
              key={item.title}
              onMouseEnter={() => toggleSubMenu(item.title)}
              onMouseLeave={() => toggleSubMenu(item.title)}>
              <a href={item.path} key={item.title} className="text-black p-1.5">
                {item.title}
                {item.sub && item.sub.length > 0 ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="ml-1"
                    onClick={() => toggleSubMenu(item.title)}
                  />
                ) : null}
              </a>

              {item.sub && item.sub.length > 0 ? (
                <SubMenu
                  item={item.sub}
                  key={item.title}
                  className={openSubMenus[item.title] ? "block" : "hidden"}
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="hidden">
          <button onClick={handleNav} className="text-black">
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
