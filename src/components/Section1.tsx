import { SECTION_ONE_IMAGE, mailtoLink } from "@/constants";
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className=" w-full sm:px-8 px-4 sm:mt-[76px] mt-6 pt-[200px]">
      <div className=" w-full flex sm:flex-row flex-col-reverse ">
        <div className="sm:w-1/2 w-full">
          <p className=" text-[42px] font-[900] tracking-wider text-start  sm:mt-0 mt-5">
            IGNITE YOUR BRAND{"'"}S DIGITAL FLAME!
          </p>
          <p className=" text-[28px] font-[600] mt-5 tracking-wide text-secondary text-start ">
            At Eleve Brands, we transform your online space into a digital
            powerhouse. From stunning visual designs to seamless user
            experiences, we ensure your website reflects the essence of your
            brand and engages users at every click.
          </p>
        </div>
        <div className="sm:w-1/2 w-full">
          <Image
            alt="get-in-touch"
            width={400}
            height={200}
            className="w-full"
            src={SECTION_ONE_IMAGE}
          />
        </div>
      </div>
      <a
        href={mailtoLink}
        className=" text-white bg-primary px-5 py-1 rounded-sm  shadow-contact-button text-[22px] sm:w-fit w-full mt-4 font-[500] "
      >
        Get in touch
      </a>
    </div>
  );
};

export default Section1;
