import { SECTION_THREE_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full sm:px-8 px-4 mt-20 bg-[#f3fbff]">
      <div className="w-full flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full sm:px-5">
          <p className="text-[42px] font-[700] text-start sm:mt-0 mt-5">
            YOUR VISION, OUR CODE – UNLEASH POTENTIAL
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Deploy dynamic web applications with our full-stack development
            expertise.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Scale and maintain your digital products with our continuous
            integration and delivery services.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Boost your online presence with responsive designs and modern UX/UI
            practices.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Get round-the-clock support and proactive development solutions for
            your business.
          </p>
        </div>

        <div className="sm:w-1/2 w-full sm:px-5">
          <Image
            alt="web-development-strategy"
            width={400}
            height={200}
            className="w-full"
            src={SECTION_THREE_IMAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
