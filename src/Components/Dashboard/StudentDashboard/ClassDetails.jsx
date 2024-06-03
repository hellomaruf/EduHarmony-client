import { RiAccountCircleLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

function ClassDetails() {
  const classData = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="group block">
        <img
          src={classData?.photo}
          alt=""
          className="h-[350px] w-full rounded-2xl object-cover sm:h-[400px]"
        />

        <div className=" grid grid-cols-3 gap-4 items-center justify-center">
          <div className="mt-3 flex justify-between col-span-2 text-sm">
            <div>
              <h3 className="text-gray-900 text-2xl font-semibold mt-3">
                {classData?.title}
              </h3>

              <p className=" text-lg mt-3 text-gray-500">
                {classData?.description}
              </p>
              <div className="my-6 flex items-center gap-3">
                <div className="">
                  <RiAccountCircleLine className="text-4xl " />
                </div>
                <div className="">
                  <h3 className="font-bold text-lg">{classData?.name}</h3>
                  <h4>{classData?.email}</h4>
                </div>
              </div>
              <p className=" font-semibold text-[#7330FF] text-3xl mt-2">
                ${classData?.price}
              </p>
              <Link to='/payment'  className="btn rounded-full mt-6 bg-[#7330FF] hover:bg-[#8750ff] text-white">
                Pay ${classData?.price}
              </Link>
            </div>
          </div>
          <div className=" col-span-1 bg-gradient-to-r from-[#7330FF] to-[#5617e0] rounded-xl p-6 my-6">
            <h2 className="text-xl font-semibold pb-2 text-white">
              Enrollment Deadline
            </h2>
            <p className="text-gray-200 text-sm">
              This limited-time enrollment period is your chance to invest in
              yourself and your future. With top-notch courses, expert
              instructors, and exclusive discounts, theres no better time to
              start learning. Act fast—enroll today and take the first step
              towards achieving your educational and professional dreams with
              EduLearn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetails;
