const Dropdown = ({ submenus, dropdown }) => {
  let base = "hidden";
  if (dropdown) base = "";
  return (
    <div
      className={
        base +
        " lg:bg-white lg:border lg:border-gray-300 lg:text-black px-3 pl-5 lg:py-0 lg:pb-3 min-w-[120px] lg:absolute "
      }
    >
      <ul className="border-l border-l-white lg:border-0 pl-2 lg:pl-0 lg:text-sm">
        {submenus.map((submenu, index) => (
          <li key={index} className="list-none py-2 px-1 ml-0">
            <a
              className="no-underline text-white hover:text-white lg:hover:underline lg:text-default lg:hover:text-sky-500"
              href={submenu.url}
            >
              {submenu.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
