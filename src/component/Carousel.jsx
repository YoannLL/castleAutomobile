import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/carousel.css";

import photo1 from "../data/photo1.jpg"
import photo2 from "../data/photo2.webp"
import photo3 from "../data/photo3.jpg"
// import required modules
import { Pagination } from "swiper";

export function Carousel () {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={photo1} /></SwiperSlide>
        <SwiperSlide><img src={photo2} /></SwiperSlide>
        <SwiperSlide><img src={photo3} className="image-placement" /></SwiperSlide>
      </Swiper>
    </>
  );
}
