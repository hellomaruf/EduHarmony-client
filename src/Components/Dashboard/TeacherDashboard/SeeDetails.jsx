import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

function SeeDetails() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  console.log(id);
  const { data: enrollment } = useQuery({
    queryKey: "enrollment",
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/enrollment/${id}`);
      return data;
    },
  });

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
          <div className="">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col space-y-2 rounded-2xl border border-gray-400 px-4 py-8 text-center">
                <h3 className="flex items-center justify-center text-4xl">
                  <BiBarChartAlt2 className="text-center" />
                </h3>
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Enrollment
                </dt>
                <dd className="text-3xl font-bold text-[#7330FF] md:text-5xl">
                  {enrollment?.length}
                </dd>
              </div>

              <div className="flex flex-col space-y-2 rounded-2xl border border-gray-400 px-4 py-8 text-center">
                <h3 className="flex items-center justify-center text-4xl">
                  <MdOutlineAssignment />
                </h3>
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Assignment
                </dt>

                <dd className="text-4xl font-bold text-[#7330FF] md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col space-y-2 rounded-2xl border border-gray-400 px-4 py-8 text-center">
                <h3 className="flex items-center justify-center text-4xl">
                  <FaRegCircleCheck />
                </h3>
                <dt className="order-last text-lg font-medium text-gray-500">
                  Assignment Submitted
                </dt>

                <dd className="text-4xl font-bold text-[#7330FF] md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeeDetails;
