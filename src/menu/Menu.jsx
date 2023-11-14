import { useState } from "react";
import Dropdown from "./Dropdown";
import { FaCaretDown } from "react-icons/fa";

const Menu = ({ prefix, items }) => {
  const [dropdown, setDropdown] = useState(false);
  let base = " ";
  return (
    // relative after:absolute after:top-[8px] after:right-4 after:text-[6px] after:content-['\25CF'] last:after:content-none
    <div className="py-1 pr-10 lg:pr-0 m-0">
      {items.submenu ? (
        <>
          <div className="lg:h-12 flex flex-col justify-center mt-2 lg:mt-0 lg:ml-5">
            <button
              className="text-white text-base lg:text-default"
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              <div className="flex font-gothic">
                {items.title}

                <FaCaretDown className="mt-1" />
              </div>
            </button>
          </div>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <div className="lg:h-12 lg:ml-5  flex flex-col justify-center">
          <a
            className="no-underline font-gothic text-white text-base mt-2 lg:mt-0 lg:hover:underline lg:text-default lg:hover:text-sky-500"
            href={prefix + items.url}
          >
            {items.title}
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
