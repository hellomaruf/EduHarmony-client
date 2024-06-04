import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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

  const { data: assignment, refetch } = useQuery({
    queryKey: "assignment",
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/assignment/${id}`);
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (assignment) => {
      await axiosSecure.post("/assignment", assignment);
    },
    onSuccess: (data) => {
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Assignment Added Successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const assignmentInfo = {
      classId: id,
      title: data?.title,
      deadline: data?.deadline,
      description: data?.description,
    };
    mutation.mutate(assignmentInfo);
    reset();
  };

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
                  {assignment?.length}
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
        <div className=" mt-10 space-y-3 max-w-2xl px-8">
          <h2 className="text-2xl font-medium">
            Creating a new challenge for your students?{" "}
          </h2>
          <p>
            The Add Assignment feature allows you to effortlessly set up
            assignments for your online class. It streamlines the process,
            letting you provide clear instructions and expectations for your
            students.
          </p>
          <label
            htmlFor="my_modal_6"
            className="btn rounded-full bg-[#7330ff] hover:bg-[#864eff] text-white"
          >
            Create <IoMdAddCircle />
          </label>
        </div>
      </section>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Add Class Assignment!</h3>
          <p className="py-4"></p>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Assignment Title
              </label>
              <input
                {...register("title", { required: true })}
                required
                name="title"
                type="text"
                placeholder="Enter a Title"
                className="w-full focus:bg-base-200 focus:border-[#7330ff]  rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Assignment Deadline
              </label>
              <input
                {...register("deadline", { required: true })}
                required
                name="deadline"
                type="date"
                placeholder="Enter a Title"
                className="w-full focus:bg-base-200 focus:border-[#7330ff]  rounded-md  p-2 outline-none border"
              />
            </div>
            <div className=" mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Short Description
              </label>
              <textarea
                {...register("description", { required: true })}
                required
                name="description"
                type="text"
                placeholder="Enter a Short Description"
                className="w-full focus:bg-base-200 focus:border-[#7330ff] rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                className="btn rounded-full bg-base-300"
              >
                Cancel
              </label>

              <button
                type="submit"
                className="btn rounded-full text-white bg-[#7330ff] hover:bg-[#8349ff]"
              >
                Add Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SeeDetails;
