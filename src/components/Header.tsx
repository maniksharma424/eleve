import React from "react";

const Header = () => {
  const headerLinks = [
    {
      name: "Eleve Explore",
      redirect: "/",
    },
    {
      name: "Solutions",
      redirect: "/",
    },
    {
      name: "Rank me",
      redirect: "/",
    },
    {
      name: "Hochads",
      redirect: "/",
    },
    {
      name: "Blogs",
      redirect: "/",
    },
  ];
  return (
    <div className=" w-full flex justify-between sm:px-8 px-4 sm:py-3 py-2 fixed top-0 shadow-header bg-white z-[999]">
      <span className=" text-primary text-[35px] font-[700]">eleve</span>
      <ul className=" sm:flex hidden justify-end items-center lg:gap-6 sm:gap-3">
        {headerLinks.map((link) => {
          return (
            <li className="text-[16px] font-[300]" key={link.name}>
              {link.name}
            </li>
          );
        })}
        <button className=" text-white bg-primary px-3 py-1 rounded-sm  shadow-contact-button">
          Contact us
        </button>
      </ul>
      <button className=" block sm:hidden text-primary">
        <Burger />
      </button>
    </div>
  );
};

export default Header;
const Burger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};
