import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const MenuSubItem = ({ item,className }) => {
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = (key) => {
      console.log(openSubMenus);
      setOpenSubMenus((prevOpenSubMenus) => ({
        ...prevOpenSubMenus,
        [key]: !prevOpenSubMenus[key],
      }));
    };
  return (
    <ul className={` bg-blue-100 w-full subitem ${className}`}>
      {item.map((sub_item, index) => (
        <li
          key={index}
          className="hover:bg-slate-200 py-2 border-t border-blue-300 text-center">
          {sub_item.title}
          {sub_item.sub && sub_item.sub.length > 0 ? (
            <span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="ml-1 "
                onClick={() => toggleSubMenu(sub_item.title)}
              />

              {/* <SubMenu
                item={sub_item.sub}
                key={sub_item.title}
                className={openSubMenus[sub_item.title] ? "block" : "hidden"}
              /> */}
              <MenuSubItem
                item={sub_item.sub}
                className={openSubMenus[sub_item.title] ? "block" : "hidden"}
              />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

const SubMenu = ({ item, className }) => {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (key) => {
    console.log(openSubMenus);
    setOpenSubMenus((prevOpenSubMenus) => ({
      ...prevOpenSubMenus,
      [key]: !prevOpenSubMenus[key],
    }));
  };
  return (
    <ul
      className={`submenu ${className} absolute left py-2 w-max bg-white  shadow-lg drop-shadow-lg divide-y rounded-lg`}>
      {item.map((sub_item) => (
        <li key={sub_item.title}>
          <a
            href={sub_item.path}
            className="hover:bg-slate-200 my-4 pl-8 pr-2 text-center">
            {sub_item.title}
          </a>

          {sub_item.sub && sub_item.sub.length > 0 ? (
            <span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="ml-1 pr-6"
                onClick={() => toggleSubMenu(sub_item.title)}
              />

              {/* <SubMenu
                item={sub_item.sub}
                key={sub_item.title}
                className={openSubMenus[sub_item.title] ? "block" : "hidden"}
              /> */}
              <MenuSubItem
                item={sub_item.sub}
                className={openSubMenus[sub_item.title] ? "block" : "hidden"}
              />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
