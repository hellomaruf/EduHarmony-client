import { useLoaderData } from "react-router-dom";

function EnrollClassDetails() {
  let count = 1;
  const assignment = useLoaderData();
  console.log(assignment);
  return (
    <div>
      <label htmlFor="my_modal_6" className="btn rounded-full bg-[#7330FF] hover:bg-[#864dff] text-white mb-4">
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
                  <button className="btn btn-sm rounded-full bg-[#7330ff] hover:bg-[#834aff] text-white">
                    Submit
                  </button>
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
          <form  action="">
         
            <div className="mt-4">
              <label htmlFor="firstname" className=" font-medium">
                Rating
              </label>
              <input
                // {...register("deadline", { required: true })}
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
                // {...register("description", { required: true })}
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
    </div>
  );
}

export default EnrollClassDetails;
