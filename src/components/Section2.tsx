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
          <p className=" text-[42px] font-[700] tracking-wider text-start sm:mt-0 mt-5">
            CRAFTING DIGITAL MASTERPIECES WITH ELEVE
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Dive deep into the art of website design with Élève Brands, where
            every pixel matters. Our approach ensures your digital presence is
            not just functional but also breathtaking.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Harness the power of cutting-edge technology with custom web
            solutions tailored to engage and convert your target audience
            seamlessly across all devices.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Experience mobile-responsive designs that ensure your site performs
            flawlessly, offering a consistent user experience that boosts
            customer engagement.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Join forces with us to turn your vision into digital reality; from
            initial concept to final execution, our full-stack development
            process is designed to exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
