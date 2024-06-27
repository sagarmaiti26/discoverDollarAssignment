import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    console.log("Mouse entered");
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    console.log("Mouse left");
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            className="flex"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              <>
              </>
            ) : (
              <Link className="flex flex-col items-center group" to={items.url}>
                {depthLevel === 0 && (
                  <div className="h-16 w-16 justify-center">
                    <img
                      draggable="false"
                      className="h-full w-full object-contain "
                      src={items.icon}
                      alt={items.label}
                    />
                  </div>
                )}
                <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
                  {items.label}
                  {depthLevel === 0 && <span className="arrow"/>}
                </span>
              </Link>
            )}
            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span />
            )}
          </button>
          <Dropdown
          items={items}
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.label} {depthLevel > 0 ? <span>&raquo;</span> : <span />}
          </button>
          <Dropdown
            items={items}
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          to={items.url}
          className="flex flex-col  group "
        >
          {depthLevel === 0 && (
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={items.icon}
                alt={items.label}
              />
            </div>
          )}
          {depthLevel === 0 ? (
            <div className=" text-gray-800 font-medium group-hover:text-primary-blue text-center ">
              {items.label}
            </div>
          ) : (
            <span className="  text-gray-800 font-normal">
              {items.label}
            </span>
          )}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
