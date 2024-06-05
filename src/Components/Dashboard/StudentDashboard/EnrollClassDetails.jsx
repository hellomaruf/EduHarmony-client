import { useLoaderData } from "react-router-dom";

function EnrollClassDetails() {
  let count = 1;
  const assignment = useLoaderData();
  console.log(assignment);
  return (
    <div>
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
                    <td>{ item?.title}</td>
                    <td><span className=" badge badge-outline">{ item?.deadline}</span></td>
                    <td>{ item?.description.slice(0,60)}......</td>
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
    </div>
  );
}

export default EnrollClassDetails;
