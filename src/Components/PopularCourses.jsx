import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MdOutlineAccountCircle } from "react-icons/md";
import SectionTitle from "../Shared/SectionTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";

function PopularCourses() {
  const axiosSecure = useAxiosSecure();
  const { data: classes } = useQuery({
    queryKey: "classes",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allClassesForAdmin");
      return data;
    },
  });
  const popularClasses = classes?.result?.filter(
    (classItem) => classItem.totalEnrollment > 10
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pb-5">
        <SectionTitle className="" title={"Our Popular Classes"} />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
          {popularClasses?.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide direction="right" cascade damping={0.1} >
              <a
                key={index}
                href="#"
                className="group mx-4 relative block overflow-hidden h-full  rounded-2xl"
              >
                <img
                  src={item?.photo}
                  alt=""
                  className="h-64 w-full object-cover transition rounded-2xl duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="mt-4 pb-8">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <dd className="text-xl text-gray-500">${item?.price}</dd>
                    </div>

                    <div>
                      <dt className="sr-only">Address</dt>

                      <dd className="font-semibold text-xl">
                        {item?.title.slice(0, 30)}....
                      </dd>
                      <dd className="font-normal text-sm pt-2">
                        {item?.description.slice(0, 70)}......
                      </dd>
                    </div>
                  </dl>
                  <div className=" flex items-center justify-between">
                    <div className="mt-6 my-6 flex items-center gap-8 text-xs">
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <MdOutlineAccountCircle className="text-2xl text-[#7330ff]" />

                        <div className="mt-1.5 sm:mt-0">
                          <p className="font-medium text-base">{item?.name}</p>
                          <p className="text-gray-500">{item?.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-start">
                      <h3 className="text-base bg-[#f4f0ff] font-medium text-[#7330FF] border-2 border-[#7330FF] py-1 px-3 rounded-full">
                        Best Seller
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
        </Slide>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default PopularCourses;
