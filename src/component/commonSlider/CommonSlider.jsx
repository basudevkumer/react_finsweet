import "./commonSlider.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//  slider  images
import SlidImageOne from "../../assets/aboutslidlogo1.png";
import SlidImageTwo from "../../assets/aboutslidlogo2.png";
import SlidImageTree from "../../assets/aboutslidlogo3.png";
import SlidImageFour from "../../assets/aboutslidlogo4.png";
import SlidImageFive from "../../assets/aboutslidlogo5.png";
import SlidImageSix from "../../assets/aboutslidlogo6.png";

import { Image } from "react-bootstrap";

const CommonSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Image src={SlidImageOne}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide  >
          <Image src={SlidImageTwo} className="commonImages" />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageTree} className="commonImages" />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageFour} className="commonImages" />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageFive} className="commonImages" />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageSix}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageOne} className="commonImages" />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageTwo}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageTree}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageFour}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageFive}  className="commonImages"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={SlidImageSix} className="commonImages" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommonSlider;
