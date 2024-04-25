"use client";
import React from "react";

// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-stars";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { data } from "@/constants";

const Section5 = () => {
  return (
    <div className="space-y-4 mx-auto text-center px-6 h-auto">
      <h2 className=" text-[42px] font-[700]">
        Here what our customers have to say
      </h2>
      <p className=" text-[22px]  text-gray-500">
        Discover testimonials from satisfied customers who have experience
        benifits of our product and services
      </p>

      <div className="relative group mt-10">
        <div className="sm:px-10">
          <Swiper
            loop
            modules={[Navigation]}
            navigation={{ prevEl: "#prev-btn", nextEl: "#next-btn" }}
            slidesPerView={1.3}
            spaceBetween={10}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
          >
            {data.map((review, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-slate-100 flex flex-col items-center mb-5 py-4 space-y-4 rounded-lg">
                    <Image
                      className="rounded-full aspect-square object-cover"
                      alt="icon"
                      width={100}
                      height={100}
                      src={review.pic}
                    ></Image>
                    <p className="break-words px-5 text-[20px]">
                      {review.description}
                    </p>
                    <h2 className="font-[700] text-[18px]">{review.name}</h2>
                    <p className="text-[14px]">{review.designation}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="absolute top-2/4 z-10 w-full md:group-hover:flex justify-between hidden">
          <div className="p-2 bg-slate-100 rounded-full" id="prev-btn">
            <svg
              className="h-5 w-5"
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z" />
            </svg>
          </div>
          <div className="p-2 bg-slate-100 rounded-full" id="next-btn">
            <svg
              className="h-5 w-5"
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
