"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
const Slider = () => {
  const arr = [1, 23, 2, 3];
  const swiper = useSwiper();
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        {arr.map((row, key) => {
          return (
            <SwiperSlide key={key}>
              <img
                src="/images/slideImages/img2.webp"
                alt="/images/slideImages/img2.webp"
                className="h-auto w-svw"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
