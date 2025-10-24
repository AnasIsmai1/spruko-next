"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Dhaval Patel",
      date: "12 Aug, 2022",
      img: "../assets/images/profile/1.jpg",
      text: "Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.",
    },
    {
      name: "Navin Telsko",
      date: "11 Nov, 2022",
      img: "../assets/images/profile/3.jpg",
      text: "Consetetur diam voluptua justo eirmod sed dolor. Ipsum amet clita ut nonumy justo, dolore et dolor dolor clita dolor justo Lorem sanctus ipsum sea sit.",
    },
    {
      name: "Mosh",
      date: "16 Apr, 2022",
      img: "../assets/images/profile/2.jpg",
      text: "Tempor diam sed vero sed nonumy sed lorem gubergren amet. No no consetetur at duo duo sed et lorem dolor. Sea kasd gubergren voluptua lorem.",
    },
    {
      name: "Dhaval Patel",
      date: "12 Aug, 2022",
      img: "../assets/images/profile/1.jpg",
      text: "Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.",
    },
    {
      name: "Navin Telsko",
      date: "11 Nov, 2022",
      img: "../assets/images/profile/3.jpg",
      text: "Consetetur diam voluptua justo eirmod sed dolor. Ipsum amet clita ut nonumy justo, dolore et dolor dolor clita dolor justo Lorem sanctus ipsum sea sit.",
    },
    {
      name: "Mosh",
      date: "16 Apr, 2022",
      img: "../assets/images/profile/2.jpg",
      text: "Tempor diam sed vero sed nonumy sed lorem gubergren amet. No no consetetur at duo duo sed et lorem dolor. Sea kasd gubergren voluptua lorem.",
    },
  ];

  return (
    <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="py-2"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <div className="relative text-lg bg-blue-700 box-border caret-transparent shrink-0 h-full leading-[27px] w-full md:max-w-[450px] mr-2.5 rounded-[10px]">
              <div className="relative text-white bg-blue-700 box-border caret-transparent flex flex-col break-words w-full rounded-[10px]">
                <div className="box-border caret-transparent grow break-words p-6">
                  <div className="items-center box-border caret-transparent flex break-words">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="relative items-center box-border caret-transparent shrink-0 h-[60px] justify-center leading-[0px] object-cover break-words w-[60px] mr-2 rounded-[50%]"
                    />
                    <div className="box-border caret-transparent grow break-words">
                      <h6 className="text-base font-semibold box-border caret-transparent leading-[19.2px] break-words font-urbanist">
                        {t.name}
                      </h6>
                      <span className="text-[11px] box-border caret-transparent leading-[16.5px] break-words">
                        {t.date}
                      </span>
                    </div>
                    <span className="text-6xl italic box-border caret-transparent block leading-[0px] opacity-30 ml-auto">
                      “
                    </span>
                  </div>
                  <p className="text-sm box-border caret-transparent leading-[21px] break-words mt-2">
                    {t.text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
