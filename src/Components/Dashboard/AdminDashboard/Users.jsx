import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Spinner from "../../../Utils/Spinner";

function Users() {
  const axiosSecure = useAxiosSecure();
  const { data: users, isLoading } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  console.log(users);
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
                <th className="text-base text-[#7330ff] font-medium">Email</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Make Admin
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
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
                      {item?.email}
                    </span>
                  </td>
                  <th className="flex ">
                    <button className=" text-2xl btn-circle flex items-center justify-center bg-orange-50 hover:bg-orange-100 rounded-full text-orange-500">
                      <MdOutlineAdminPanelSettings />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Users;
