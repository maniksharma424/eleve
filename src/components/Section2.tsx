import { SECTION_TWO_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className=" w-full sm:px-8 px-4 mt-20">
      <div className=" w-full flex sm:flex-row flex-col ">
        <div className="sm:w-1/2 w-full sm:px-5">
          <Image
            alt="get-in-touch"
            width={400}
            height={200}
            className="w-full"
            src={SECTION_TWO_IMAGE}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <p className=" text-[42px] font-[700] tracking-wider text-start  sm:mt-0 mt-5">
            TRUST ELEVE EXPLORE FOR YOUR BRANDS
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Listen to your customers, track your competitors, and analyze your
            industry.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Use artificial intelligence to mine actionable information from
            humongous data present online.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Choose key opinion leaders that suit your brand s niche and uncover
            their demographic to enhance brand outreach.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] sm:mt-5 mt-2 tracking-wide text-secondary text-start ">
            Contextualize, execute your campaign with the right influencer
            harnessing word of mouth and maximize your brands buzz and reach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
