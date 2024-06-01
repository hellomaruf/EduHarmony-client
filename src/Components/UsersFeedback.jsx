import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import rating from "../assets/Images/rating.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "./../Shared/SectionTitle";
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
    <div>
      <SectionTitle title={"What our happy User says!!"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {feedback?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-10 my-6 bg-gray-50 shadow-lg rounded-xl mx-6">
              <div className=" my-3">
                {/* <VscFeedback className="text-2xl text-[#ffcc53]" /> */}
                <img className="w-10" src={rating} alt="" />
              </div>
              <h2 className="text-lg text-gray-900">
                {item?.feedbackText.slice(0, 70)}....
              </h2>
              <div className="mt-6 flex gap-3 items-center justify-start">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className=" ">
                  <h3 className="font-semibold">{item?.name}</h3>
                  <h5 className="text-gray-500">{item?.title}</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UsersFeedback;
