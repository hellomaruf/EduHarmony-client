import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Images/EduHero.png";
import img2 from "../assets/Images/EduHero1.png";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
function Hero() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-2 items-center justify-center gap-4">
        <div className=" space-y-6">
          <h1 className="text-5xl font-semibold">
            Your <span className="text-[#7330FF]">Education</span>, Our
            Management: The Perfect Partnership.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            illum eaque porro, voluptatibus deleniti eius nobis? Veritatis autem
            quisquam atque in voluptates molestiae, quo, provident aut illum
            repellendus sapiente recusandae!
          </p>
          <button className="text-white bg-[#7330FF] btn rounded-full">
            Get Started
          </button>
        </div>
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
      </div>
    </div>
  );
}

export default Hero;
