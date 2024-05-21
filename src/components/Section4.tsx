import { solutions } from "@/constants";
import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <div className="w-full sm:mt-16 mt-8 sm:px-8 px-4" id='Section-4'>
      <p className=" text-[42px] font-[700] text-center">
        Benefit through our suite of solutions!
      </p>
      <ul className="w-full grid sm:grid-cols-2 grid-cols-1 gap-8 sm:my-20 my-12">
        {solutions.map((solution) => {
          return (
            <li key={solution.name} className=" flex">
              <Image
                src={solution.imageUrl}
                alt="solution-image"
                width={110}
                height={78}
                className="w-[100px] h-[78px] object-contain shadow-lg rounded-lg solutiion-image "
              />
              <div className=" flex-1 pl-8">
                <p className=" text-[26px] font-[600]">{solution.name}</p>

                <p className="  text-[20px] font-[600] ">
                  {solution.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Section4;
