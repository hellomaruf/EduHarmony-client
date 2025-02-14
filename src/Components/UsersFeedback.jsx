import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rate } from "antd";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "./../Shared/SectionTitle";
import { Slide } from "react-awesome-reveal";
function UsersFeedback() {
  const axiosPublic = useAxiosPublic();
  const { data: feedback } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/feedback");
      return data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={"What our happy User says!!"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // 320: {
          //   slidesPerView: 1,
          // },
          // 640: {
          //   slidesPerView: 3,
          // },
          320: {
            slidesPerView: 1,
          },
          // when window width is between 641px and 1024px
          641: {
            slidesPerView: 2,
          },
          // when window width is >= 1025px
          1025: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {feedback?.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide direction="right" cascade damping={0.1}>
              <div className="p-10 mx-4 relative my-16 border-2 border-gray-400 rounded-xl ">
                <div className=" ">
                  {/* <VscFeedback className="text-2xl text-[#ffcc53]" /> */}
                  <div className="avatar absolute  -top-10">
                    <div className="w-20 z-10 rounded-full">
                      <img src={item?.img} />
                    </div>
                  </div>
                  <Rate className="mt-3" defaultValue={item?.rating} />
                  {/* <img className="w-10" src={rating} alt="" /> */}
                </div>
                <div className="mt-4">
                  <h2 className=" text-gray-900">
                    {item?.feedbackText?.slice(0, 60)}....
                  </h2>
                  <div className="mt-6 flex gap-3 items-center justify-start">
                    <div className=" ">
                      <h3 className="font-semibold">{item?.name}</h3>
                      <h5 className="text-gray-500">{item?.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UsersFeedback;
