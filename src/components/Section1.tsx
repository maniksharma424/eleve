"use client";
import { SECTION_ONE_IMAGE, mailtoLink } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import SignUp from "./SignModal";

const Section1 = () => {
  // Connect modal
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="w-full sm:px-8 px-4 sm:mt-[50px] mt-6 pt-[200px]"
      id="Section-1"
    >
      <div className="w-full flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 w-full">
          <p className="text-[42px] font-[900] tracking-wider text-start sm:mt-0 mt-5">
            LIGHT UP YOUR BRAND ONLINE!
          </p>
          <p className="text-[28px] font-[600] mt-5 tracking-wide text-secondary text-start">
            At èlève Brands, we turn your website into a digital powerhouse. We
            create stunning designs and smooth user experiences to make sure
            your website shows off your brand and keeps visitors engaged.
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
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-primary px-5 py-1 shadow-contact-button text-[22px] sm:w-fit w-full mt-4 font-[500] rounded-lg"
      >
        Get in Touch
      </button>
      {showModal && (
        <SignUp showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Section1;
