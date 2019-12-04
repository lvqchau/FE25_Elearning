import React from "react";
import Slider from "react-slick";
import "../css/_carousel.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2
};

const Carousel = () => {
  return (
    <div className="carousel m-5">
      <h1 className="display-4 text-center mb-5">Our Best Instructors</h1>
      <Slider {...settings}>
        <div className="carousel_item">
          <div className="carousel_image"></div>
          <div className="carousel_info">
            <h3>G. Richards</h3>
            <p>Professional teacher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image2"></div>
          <div className="carousel_info2">
            <h3>Maria Jane</h3>
            <p>Professional tearcher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image"></div>
          <div className="carousel_info">
            <h3>G. Richards</h3>
            <p>Professional teacher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image2"></div>
          <div className="carousel_info2">
            <h3>Maria Jane</h3>
            <p>Professional tearcher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image"></div>
          <div className="carousel_info">
            <h3>G. Richards</h3>
            <p>Professional teacher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image2"></div>
          <div className="carousel_info2">
            <h3>Maria Jane</h3>
            <p>Professional tearcher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image"></div>
          <div className="carousel_info">
            <h3>G. Richards</h3>
            <p>Professional teacher</p>
          </div>
        </div>
        <div className="carousel_item">
          <div className="carousel_image2"></div>
          <div className="carousel_info2">
            <h3>Maria Jane</h3>
            <p>Professional tearcher</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
