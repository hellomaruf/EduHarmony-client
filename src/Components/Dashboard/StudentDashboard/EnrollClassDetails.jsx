import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Services/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { IoMdAdd } from "react-icons/io";
import toast from "react-hot-toast";

function EnrollClassDetails() {
  let count = 1;
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  console.log(assignment);
  const { id } = useParams();

  const {
    register: feedbackRegister,
    handleSubmit: handleFeedbackSubmit,
    reset: feedbackReset,
  } = useForm();
  const {
    register: assignmentSubmitRegister,
    handleSubmit: handleAssignmentSubmit,
    reset: asignmentReset,
  } = useForm();
  const mutation = useMutation({
    mutationFn: async (feedback) => {
      await axiosPublic.post("/feedback", feedback);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Feedback Send Successfully!");
      feedbackReset();
    },
  });
  const onSubmitFeedback = (data) => {
    console.log(data);
    const feedbackInfo = {
      title: data?.category,
      feedbackText: data?.description,
      rating: data?.rating,
      name: user?.displayName,
      img: user?.photoURL,
      classId: id,
    };
    mutation.mutate(feedbackInfo);
  };

  const assignmentMutation = useMutation({
    mutationFn: async (assignment) => {
      await axiosPublic.post("/assignmentSubmission", assignment);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Assignment Send Successfully!");
      asignmentReset();
    },
  });
  const onSubmitAssigment = (data) => {
    console.log(data);
    const submitInfo = {
      details: data?.details,
      classId: assignment[0].classId,
      studentName: user?.displayName,
      studentEmail: user?.email,
    };
    console.log(submitInfo);
    assignmentMutation.mutate(submitInfo);
  };
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn rounded-full ml-4 bg-[#7330FF] hover:bg-[#864dff] text-white mb-4"
      >
        Teaching Evaluation Report <IoMdAdd className="text-xl" />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-base text-[#7330FF] font-medium">Title</th>
              <th className="text-base text-[#7330FF] font-medium">Deadline</th>
              <th className="text-base text-[#7330FF] font-medium">
                Description
              </th>
              <th className="text-base text-[#7330FF] font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {assignment?.map((item, index) => (
              <tr key={index} className="">
                <th>{count++}</th>
                <td>{item?.title}</td>
                <td>
                  <span className="">{item?.deadline}</span>
                </td>
                <td>{item?.description.slice(0, 50)}......</td>
                <td>
                  <label
                    htmlFor="my_modal_8"
                    className="btn btn-sm rounded-full bg-[#7330ff] hover:bg-[#834aff] text-white"
                  >
                    Submit
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Add Teaching Evaluation Report!</h3>
          <p className="py-4"></p>
          <form onSubmit={handleFeedbackSubmit(onSubmitFeedback)}>
            <div className="col-span-full ">
              <label htmlFor="firstname" className="text-lg font-medium">
                Category
              </label>
              <select
                className="w-full rounded-md focus:bg-base-200  p-2 outline-none border"
                name="category"
                id="category"
                {...feedbackRegister("category", { required: true })}
              >
                <option value="web development">Web Development</option>
                <option value="mobile app development">
                  Mobile App Development
                </option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud computing">Cloud Computing</option>
                <option value="DSA">DSA</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Rating
              </label>
              <input
                {...feedbackRegister("rating", { required: true })}
                required
                name="rating"
                type="number"
                placeholder="Enter Rating"
                className="w-full focus:bg-base-200 focus:border-[#7330ff]  rounded-md  p-2 outline-none border"
              />
            </div>
            <div className=" mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Short Description
              </label>
              <textarea
                {...feedbackRegister("description", { required: true })}
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
                Add Feedback
              </button>
            </div>
          </form>
        </div>
      </div>

      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Submit Your Assignment!</h3>
          <p className="py-4"></p>
          <form onSubmit={handleAssignmentSubmit(onSubmitAssigment)}>
            <div className="">
              <label htmlFor="firstname" className=" font-medium">
                Details
              </label>
              <textarea
                {...assignmentSubmitRegister("details", { required: true })}
                required
                name="details"
                type="text"
                placeholder="Put your link and descreption here"
                className="w-full focus:bg-base-200 focus:border-[#7330ff] rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="modal-action">
              <label
                htmlFor="my_modal_8"
                className="btn rounded-full bg-base-300"
              >
                Cancel
              </label>

              <button
                type="submit"
                className="btn rounded-full text-white bg-[#7330ff] hover:bg-[#8349ff]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnrollClassDetails;
