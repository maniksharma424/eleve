import { SECTION_TWO_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className=" w-full sm:px-8 px-4 mt-20">
      <div className=" w-full flex sm:flex-row flex-col ">
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
          <p className=" text-[42px] font-[700] tracking-wider text-start  sm:mt-0 mt-5">
            ENGINEER THE FUTURE WITH ELEVE DEVELOPMENT
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Architect your online presence with cutting-edge web solutions
            tailored for impact.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Leverage the latest in frontend and backend technologies to create
            seamless, scalable platforms.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Optimize your user experience with intuitive interfaces and
            responsive design that adapts to all devices.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Partner with us to transform your concepts into reality with agile,
            full-stack development that stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
