import React, { Component } from "react";
// import Slider from "react-slick";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

const Carousel = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../public/Carousel_img/1.jpeg"
              alt="Slide1"
              width={1100}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../public/Carousel_img/2.jpg"
              alt="Slide2"
              width={1100}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../public/Carousel_img/3.jpg"
              alt="Slide3"
              width={1100}
              height={500}
            />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
    // <div>
    //   <Slider {...settings}>
    //     <div>
    //       <img src="../asset/Carousel_img" />
    //     </div>
    //     <div className="">
    //       <img src="../asset/Carousel_img/hero-1.jpg" alt="Img2" />
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>
    // </div>
  );
};

export default Carousel;
