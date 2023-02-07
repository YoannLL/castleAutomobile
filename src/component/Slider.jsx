import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "../styles/slider.css";

import photo1 from "../data/photo1.jpg"
import photo2 from "../data/photo2.webp"
import photo3 from "../data/photo3.jpg"

export function SliderPhoto () {

  return (
    <div className='slider-div'>
      <Carousel autoPlay infiniteLoop interval={8000} className="slider">
        <img src={photo1} />
        <img src={photo2} />
      </Carousel>
    </div>
  );
}
