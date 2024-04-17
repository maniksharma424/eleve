"use client";
import React, { useState } from "react";

const headerLinks = [
  {
    name: "Eleve Explore",
    redirect: "#",
  },
  {
    name: "Solutions",
    redirect: "#",
  },
  {
    name: "Rank me",
    redirect: "#",
  },
  {
    name: "Hochads",
    redirect: "#",
  },
  {
    name: "Blogs",
    redirect: "#",
  },
];

const Header = () => {
  return (
    <div className=' w-full flex justify-between sm:px-8 px-4 sm:py-3 py-2 fixed top-0 shadow-header bg-white z-[999]'>
      <span className=' text-primary text-[35px] font-[700]'>eleve</span>
      <ul className=' sm:flex hidden justify-end items-center lg:gap-6 sm:gap-3'>
        {headerLinks.map((link) => {
          return (
            <a href={link.redirect} className='text-[16px] font-[300]' key={link.name}>
              {link.name}
            </a>
          );
        })}
        <button className=' text-white bg-primary px-3 py-1 rounded-sm  shadow-contact-button'>
          Contact us
        </button>
      </ul>
      <BurgerBtn />
    </div>
  );
};

export default Header;

const BurgerBtn = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return(
    <>
    <button
          id='navbar-toggle'
          onClick={navToggler}
          className=' block sm:hidden py-4 text-primary '
        >
          <Burger />
        </button>

     <nav
          id='navbar-links'
          className={`mt-5 ${
            isNavOpen ? "block" : "hidden"
          } sm:hidden flex-col absolute top-full left-2 right-0 bg-white`}
        >
          {headerLinks.map((link) => {
            return (
              <div className='mb-2' key={link.name}>
                <a href={link.redirect} className='text-primary text-[16px] font-[400] z-50 hover:text-primary hover:text-lg transition-all duration-300'>
                  {link.name}
                </a>
              </div>
            );
          })}
        </nav>
  </>
  );
};

const Burger = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='lucide lucide-menu'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
};
