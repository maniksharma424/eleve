import { SECTION_THREE_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full sm:px-8 px-4 mt-20 bg-[#f3fbff]" id="Section-3">
      <div className="w-full flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full sm:px-5">
          <p className="text-[42px] font-[700] text-start sm:mt-0 mt-5">
            ELEVATING BRANDS TO NEW HEIGHTS
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Build advanced web applications with our full-stack development
            skills, ensuring your site is strong and scalable.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Improve your site's performance with our continuous integration and
            delivery systems, keeping everything running smoothly.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Grow with responsive designs and modern UX/UI practices tailored to
            your audience, boosting engagement and conversions.
          </p>

          <p className="sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start">
            Benefit from our 24/7 support and proactive solutions, keeping your
            business ahead in the fast-changing digital world.
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
