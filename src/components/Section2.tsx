import { SECTION_TWO_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="w-full sm:px-8 px-4 mt-20" id="Section-2">
      <div className="w-full flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full sm:px-5">
          <Image
            alt="innovative-web-development"
            width={400}
            height={200}
            className="w-full"
            src={SECTION_TWO_IMAGE}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <p className="text-[42px] font-[700] tracking-wider text-start sm:mt-0 mt-5">
            BUILDING YOUR DIGITAL DREAMS
          </p>
          <p className="sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start">
            At Élève Brands, we create stunning websites where every detail
            matters. We make sure your site looks amazing and works perfectly.
          </p>
          <p className="sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start">
            We use the latest technology to build custom web solutions that
            engage your audience on all devices.
          </p>
          <p className="sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start">
            Our mobile-responsive designs ensure your site works great
            everywhere, keeping your customers engaged.
          </p>
          <p className="sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start">
            Partner with us to bring your vision to life. From start to finish,
            we aim to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
