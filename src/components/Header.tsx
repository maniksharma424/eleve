"use client";
import React, { useState } from "react";
import SideNavBar from "./SideNav";
import { mailtoLink } from "@/constants";

const headerLinks = [
  {
    name: "Lets Connect",
    redirect: "#Section-1",
  },
  {
    name: "What we do?",
    redirect: "#Section-2",
  },
  {
    name: "Benifits",
    redirect: "#Section-4",
  }
];

const Header = () => {
  return (
    <div className=' w-full flex justify-between items-center sm:px-8 px-4 sm:py-3 py-2 fixed top-0 shadow-header bg-white z-[500]'>
      <span className=' text-primary text-[35px] font-[700]'>eleve brands</span>
      <ul className=' sm:flex hidden justify-end items-center lg:gap-6 sm:gap-3'>
        {headerLinks.map((link) => {
          return (
            <a
              href={link.redirect}
              className='ml-4 text-[16px] font-[300]'
              key={link.name}
            >
              {link.name}
            </a>
          );
        })}

        <a
          href={mailtoLink}
          className=' text-white bg-primary px-3 py-1 h-fit rounded-lg  shadow-contact-button '
        >
          Contact us
        </a>
        
      </ul>
      <SideNavBar />
    </div>
  );
};

export default Header;
