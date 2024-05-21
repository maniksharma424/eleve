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
    name: "Services",
    redirect: "#",
  },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className=' w-full flex justify-between items-center sm:px-8 px-4 sm:py-3 py-2 fixed top-0 shadow-header bg-white z-[500]'>
      <span className=' text-primary text-[35px] font-[700]'>eleve</span>
      <ul className=' sm:flex hidden justify-end items-center lg:gap-6 sm:gap-3'>
        {headerLinks.map((link) => {
          return (
            <li
              className='relative'
              key={link.name}
              onMouseEnter={() => setDropdown(link.name === "Services")}
              onClick={() => setDropdown(!dropdown)}
            >
              <a
                href={link.redirect}
                className='ml-4 text-[16px] font-[300] relative'
              >
                {link.name}
              </a>
              {dropdown && link.name === "Services" && (
                <div
                  className='absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg'
                  onMouseLeave={() => setDropdown(false)}
                >
                  <ul>
                    <li className='px-4 py-2 hover:bg-gray-100'>
                      <a href='#Section-4'>Web Development</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-100'>
                      <a href='#Section-4'>SEO and content</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-100'>
                      <a href='#Section-4'>Logo Designing</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          );
        })}

        <a
          href={mailtoLink}
          className=' text-white bg-primary px-3 py-1 h-fit rounded-sm  shadow-contact-button'
        >
          Contact us
        </a>
      </ul>
      <SideNavBar />
    </div>
  );
};

export default Header;
