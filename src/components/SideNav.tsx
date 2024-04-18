"use client";
import React, { useState } from "react";

const navLinks = [
  {
    name: "Eleve Explore",
    redirect: "/",
    sub: [
      { name: "Eleve AI Analytics", redirect: "/" },
      { name: "Influencer Marketing", redirect: "/" },
      { name: "Collaboration Dashboard", redirect: "/" },
    ],
  },
  {
    name: "Solutions",
    redirect: "/",
    sub: [
      { name: "Brands", redirect: "/" },
      { name: "Agencies", redirect: "/" },
    ],
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

const SideNavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      {/* Backdrop */}
      {showNavBar && (
        <div
          className='fixed inset-0 bg-black opacity-80 z-40'
          onClick={toggleNavBar}
        ></div>
      )}

      {/* Side Navigation Bar */}
      <div
        className={`fixed left-0 top-0 h-full bg-primary w-2/3 shadow-lg z-50 transform transition-transform ${
          showNavBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        {navLinks.map((link) => {
          return (
            <ul className='py-2 text-white' key={link.name}>
              <li className=' py-1 text-[20px] font-[400] ml-3'>
                <a href={link.redirect}>{link.name}</a>
              </li>
              {link.sub &&
                link.sub.map((subLinks) => {
                  return (
                    <ul key={subLinks.name}>
                      <li className='ml-8 py-1 font-[400] text-slate-100'>
                        <a href={subLinks.redirect}>{subLinks.name}</a>
                      </li>
                    </ul>
                  );
                })}
            </ul>
          );
        })}
      </div>

      <button
        onClick={toggleNavBar}
        className=' block sm:hidden text-primary mt-4 '
      >
        <Burger />
      </button>
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

export default SideNavBar;
