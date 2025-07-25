"use client";
import { details } from "../zoom";
// import { useEffect, useRef } from "react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "./partner.css";
// import "./slider.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

const Partners = () => {
  // const swiperWrapperRef: any = useRef(null);
  // function adjustMargin() {
  //   const screenWidth = window.innerWidth;
  //   if (swiperWrapperRef.current) {
  //     swiperWrapperRef.current.style.marginLeft =
  //       screenWidth <= 520
  //         ? "0px"
  //         : screenWidth <= 650
  //         ? "-50px"
  //         : screenWidth <= 800
  //         ? "-100px"
  //         : "-150px";
  //   }
  // }
  // useEffect(() => {
  //   adjustMargin();
  //   window.addEventListener("resize", adjustMargin);
  //   return () => {
  //     window.removeEventListener("resize", adjustMargin);
  //   };
  // });
  const partners = details[0].partners;

  return (
    <div>
      <div className="max-w-5/6 mx-auto mt-10 py-8">
        <h1 className="text-3xl text-center my-3 font-semibold">
          Proudly Supported By
        </h1>
        <hr className="w-14 border-3 rounded text-error mx-auto" />
        <div>
          {/* <Swiper
            spaceBetween={50}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1000, // time between slides in ms
              disableOnInteraction: false, // continue autoplay after user interactions
            }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            initialSlide={5} //sets the initial slide to display on page load
            centeredSlides //centers the active slide
            slidesPerView="auto" //number of slides to show at once
            speed={3000} //transition speed between slides
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }} //responsive breakpoints
          > */}
          {/* Add your reputation items here */}

          <div className="overflow-hidden py-10 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
            {partners.map((item, index) => (
              // <SwiperSlide>
              <div
                key={index}
                className="w-30 hover:scale-105 cursor-crosshair rounded-xl bg-transparent overflow-hidden "
              >
                <figure>
                  <img
                    src={item}
                    // alt={item.name}
                    className="object-contain"
                  />
                </figure>
              </div>
            ))}
          </div>
          {/* </Swiper> */}
          {/* Repeat for more items */}
        </div>
      </div>
    </div>
  );
};

export default Partners;
