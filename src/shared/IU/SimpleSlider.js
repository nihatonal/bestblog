import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./SimpleSlider.css";

const carouselProperties = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "slide",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SimpleSlider = (props) => {
  return (
    <div className="container">
      <Slider {...carouselProperties}>
        <div className="full-screen-block slider1_1">
          <div className="sliderTitleBlock">
            <h3 className="homeSliderTitleTop">Creative Ideas</h3>
            <h1 className="homeSliderTitle">
              Unlock your <br /> <span>potential</span>
            </h1>
          </div>
        </div>
        <div className="full-screen-block slider1_2">
          <div className="sliderTitleBlock">
            <h3 className="homeSliderTitleTop">Our Philosophy</h3>
            <h1 className="homeSliderTitle">
              Increase your <br /> <span>productivity</span>
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
