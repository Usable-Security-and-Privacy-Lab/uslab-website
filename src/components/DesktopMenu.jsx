import { useState } from "react";

// Original ideas for responsive menubar adapted from
//  https://awadieudonne.com/blog/How-to-create-a-responsive-hamburger-navigation-menu-ReactJS-and-Styled-Components

const DesktopMenu = (props) => {
  return (
    <MenuBar
      prefix={props.prefix}
      items={props.items}
      currentPath={props.currentPath}
    />
  );
};

const MenuBar = ({ prefix, items, currentPath }) => {
  return (
    <div className="flex justify-center border-b border-gray-300 w-full bg-white">
      <div className="flex flex-nowrap  justify-between w-1/2 flex-row bg-white  p-0 px-10 mb-0">
        {items.map((item, index) => {
          return (
            <Menu
              prefix={prefix}
              item={item}
              currentPath={currentPath}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const Menu = ({ prefix, item, currentPath, index }) => {
  if (currentPath === item.url) {
    return (
      <div key={index} className="h-12 flex flex-col justify-center">
        <span
          className="font-gothic  text-lg mt-0  text-sky-600"
          href={prefix + item.url}
        >
          {item.title}
        </span>
      </div>
    );
  } else {
    return (
      <div key={index} className="h-12 flex flex-col justify-center">
        <a
          className="no-underline font-gothic text-lg mt-0 hover:underline text-default hover:text-sky-500"
          href={prefix + item.url}
        >
          {item.title}
        </a>
      </div>
    );
  }
};

export default DesktopMenu;
