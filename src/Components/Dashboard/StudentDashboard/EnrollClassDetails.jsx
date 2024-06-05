import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Services/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

function EnrollClassDetails() {
  let count = 1;
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: async (feedback) => {
      await axiosPublic.post("/feedback", feedback);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    const feedbackInfo = {
      title: data?.category,
      feedbackText: data?.description,
      rating: data?.rating,
      name: user?.displayName,
      img: user?.photoURL,
    };
    mutation.mutate(feedbackInfo);
  };
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn rounded-full bg-[#7330FF] hover:bg-[#864dff] text-white mb-4"
      >
        Teaching Evaluation Report
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
                  <span className=" badge badge-outline">{item?.deadline}</span>
                </td>
                <td>{item?.description.slice(0, 60)}......</td>
                <td>
                  <label  htmlFor="my_modal_8" className="btn btn-sm rounded-full bg-[#7330ff] hover:bg-[#834aff] text-white">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-full ">
              <label htmlFor="firstname" className="text-lg font-medium">
                Category
              </label>
              <select
                className="w-full rounded-md focus:bg-base-200  p-2 outline-none border"
                name="category"
                id="category"
                {...register("category", { required: true })}
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
                {...register("rating", { required: true })}
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
          <form onSubmit={handleSubmit(onSubmit)}>
         
            <div className="">
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
