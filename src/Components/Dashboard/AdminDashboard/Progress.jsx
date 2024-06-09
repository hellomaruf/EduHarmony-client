import { RiAccountCircleLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";

function Progress() {
  const classDetails = useLoaderData();
  console.log(classDetails);
  const axisoPublic = useAxiosPublic();
  const { data: feedback } = useQuery({
    queryKey: "feedback",
    queryFn: async () => {
      const { data } = await axisoPublic.get(
        `/feedbackForProgress/${classDetails?._id}`
      );
      return data;
    },
  });
 
  return (
    <div>
      <article className="flex bg-white transition mx-4">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]"></div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={classDetails?.photo}
            className="aspect-square h-full rounded-xl w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className=" text-2xl font-semibold">{classDetails?.title}</h3>
            </a>

            <p className="mt-2 line-clamp-3  text-gray-700">
              {classDetails?.description}
            </p>
            <div className="my-6 flex items-center gap-3">
              <div className="">
                <RiAccountCircleLine className="text-4xl " />
              </div>
              <div className="">
                <h3 className="font-bold text-lg">{classDetails?.name}</h3>
                <h4>{classDetails?.email}</h4>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {feedback?.map((item, index) => (
          <div
            key={index}
            className=" p-8 py-6 mt-7 shadow-lg rounded-xl mx-4 "
          >
            <div className=" flex gap-5">
              <div className="flex items-center justify-center text-center flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src={item?.img}
                  alt=""
                  className="self-center flex-shrink-0 w-32 h-32 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
                />
              </div>
              <div className="flex flex-col py-4">
                <h4 className="text-xl font-semibold ">{item?.name}</h4>
                <p>{item?.title}</p>
                <Rate className="py-2" defaultValue={item?.rating} />
              </div>
            </div>

            <p className="dark:text-gray-600 text-sm pt-5">
              {item?.feedbackText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;
