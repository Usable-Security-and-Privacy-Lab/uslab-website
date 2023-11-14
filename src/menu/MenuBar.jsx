// Much of the responsive menu is based on https://awadieudonne.com/blog/How-to-create-a-responsive-hamburger-navigation-menu-ReactJS-and-Styled-Components

import Menu from "./Menu.jsx";

const MenuBar = ({ prefix, items, open }) => {
  let base =
    "bg-gray-800 lg:bg-white flex flex-nowrap lg:w-full flex-col fixed top-0 right-0 m-0 h-full overflow-y-auto pt-8 pl-8 lg:flex-row lg:justify-center lg:bg-gray-100 lg:border-y  lg:border-gray-300 lg:p-0 lg:static lg:mt-2 lg:px-10 lg:mb-0 lg:transform-none";
  if (!open) {
    base = base + " translate-x-full";
  } else {
    base = base + " transform-none";
  }
  return (
    <div className={base}>
      <div className="flex lg:flex-col lg:justify-center">
        <img className="pr-5 h-10" src="/images/fhtw-small-logo.svg" />
      </div>
      {items.map((menu, index) => {
        return <Menu prefix={prefix} items={menu} key={index} />;
      })}
    </div>
  );
};

export default MenuBar;
