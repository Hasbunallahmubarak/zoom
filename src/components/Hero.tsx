// import React from "react";

import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full overflow-hidden h-70">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://www.zoomlifestyle.com/images/boost-your-chances.jpg"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.zoomlifestyle.com/images/mail-banner.png"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide3" className="carousel-item relative w-full">
          <img
            // src="https://www.zoomlifestyle.com/images/zn-thunt.png"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
      <div className="hero-content mx-auto max-w-5/6 flex-col gap-30 lg:flex-row">
        <div>
          <p className="text-sm opacity-90">Next Millionnaire Draw (Weekly):</p>
          <Countdown />
        </div>
        <div className="text-center lg:text-left">
          {/* <h1 className="text-5xl font-bold">Welcome to Zoom Lifestyle</h1> */}
          <h1 className="py-6 text-3xl">
            Get Your Tickets to enter the Next ₦1 MILLION Draw!
          </h1>
          <button className="btn btn-error text-base-100">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
