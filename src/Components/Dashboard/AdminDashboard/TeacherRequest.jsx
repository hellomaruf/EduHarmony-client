import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Spinner from "../../../Utils/Spinner";

function TeacherRequest() {
  const axiosSecure = useAxiosSecure();
  const { data: teacherRequest, isLoading } = useQuery({
    queryKey: "teacherRequest",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/teacherRequest");
      return data;
    },
  });
  console.log(teacherRequest);
  return (
    <div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-base text-[#7330ff] font-medium">Photo</th>
                <th className="text-base text-[#7330ff] font-medium">Name</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Experience
                </th>
                <th className="text-base text-[#7330ff] font-medium">Title</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Category
                </th>
                <th className="text-base text-[#7330ff] font-medium">Status</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Approved{" "}
                </th>
                <th className="text-base text-[#7330ff] font-medium">Reject</th>
              </tr>
            </thead>
            <tbody>
              {teacherRequest?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle rounded-full w-12 h-12">
                          <img
                            src={item?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{item?.name}</div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item?.experience}
                    </span>
                  </td>
                  <td>
                    <th className="flex font-normal">{item?.title}</th>
                  </td>
                  <td>
                    <th className="flex font-normal">{item?.category}</th>
                  </td>
                  <td>
                    <th className="flex font-normal ">
                      <span className="badge badge-secondary badge-outline">
                        {item?.status}
                      </span>
                    </th>
                  </td>
                  <td>
                    <th className="flex font-normal ">
                      <button className="btn btn-sm rounded-full bg-green-100 text-green-600">
                        Approved
                      </button>
                    </th>
                  </td>
                  <td>
                    <th className="flex font-normal ">
                      <button className="btn btn-sm rounded-full bg-red-100 text-red-600">
                        Reject
                      </button>
                    </th>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TeacherRequest;
