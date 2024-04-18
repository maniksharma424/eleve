"use client";
import React, { useState } from "react";
import SideNavBar from "./SideNav";

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
      <SideNavBar />
    </div>
  );
};

export default Header;