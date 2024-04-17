import { SECTION_THREE_IMAGE } from "@/constants";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className=" w-full sm:px-8 px-4 mt-20 bg-[#f3fbff]">
      <div className=" w-full flex sm:flex-row flex-col-reverse ">
        <div className="sm:w-1/2 w-full sm:px-5">
          <p className=" text-[42px] font-[700]  text-start  sm:mt-0 mt-5">
            GO-TO TOOLS FOR MANAGING YOUR CAMPAIGNS
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start ">
            Collaborate with influencers with an inbuilt payment gateway.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start ">
            Track your digital campaigns with our campaign tracker and replicate
            the most successful campaign.
          </p>

          <p className=" sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start ">
            Discover more than 50 thousand influencers from different segregated
            categories on five most popular social media platforms.
          </p>
          <p className=" sm:text-[18px] text-[12px] font-[600] mt-2 sm:mt-5 tracking-wide text-secondary text-start ">
            Get a highly committed and experienced team who are proactive to our
            brands needs{" "}
          </p>
        </div>
        <div className="sm:w-1/2 w-full sm:px-5">
          <Image
            alt="get-in-touch"
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
