import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Images/EduHero.png";
import img2 from "../assets/Images/EduHero1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import {  Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center space-y-8 lg:space-y-0 mx-4 lg:mx-4 gap-4">
        <div className=" space-y-6 text-center lg:text-left">
          <Slide cascade damping={0.1}>
            <h1 className="text-4xl lg:text-5xl font-semibold">
              Your <span className="text-[#7330FF]">Education</span>, Our
              Management: The Perfect Partnership.
            </h1>
            <p>
              At EduHarmony, we are committed to transforming the way you learn.
              Our state-of-the-art online class website offers an immersive and
              interactive learning experience designed to meet the needs of
              learners worldwide. Whether youre looking to develop new skills.
            </p>
            <button className="text-white bg-[#7330FF] hover:bg-[#905cff] btn rounded-full">
              Get Started
            </button>
          </Slide>
        </div>
        <Slide direction="right" cascade damping={0.1}>
          <div className="z-0">
            <Swiper
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              effect={"fade"}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Hero;
