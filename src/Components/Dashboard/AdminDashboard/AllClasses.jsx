import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Spinner from "../../../Utils/Spinner";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Services/AuthProvider";

function AllClasses() {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: classes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "classes",
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allClassesForAdmin");
      return data;
    },
  });
  console.log(classes?.length);

  const handleApproved = async (item) => {
    await axiosSecure
      .patch(`/approvedClasses/${item?._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Approve Successfully!!");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRejected = async (item) => {
    await axiosSecure
      .patch(`/rejectClasses/${item?._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Rejected Successfully!!");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mr-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="text-base text-[#7330FF] font-medium"></th>
                <th className="text-base text-[#7330FF] font-medium">Title</th>
                <th className="text-base text-[#7330FF] font-medium">Email</th>
                <th className="text-base text-[#7330FF] font-medium">
                  Description
                </th>
                <th className="text-base text-[#7330FF] font-medium"></th>
                <th className="text-base text-[#7330FF] font-medium"></th>
                <th className="text-base text-[#7330FF] font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="avatar">
                      <div className="w-20 rounded">
                        <img src={item?.photo} />
                      </div>
                    </div>
                  </td>
                  <td>{item?.title}</td>
                  <td>{item?.email}</td>
                  <td>{item?.description.slice(0, 60)}...</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleApproved(item)}
                      className="btn btn-sm rounded-full bg-green-100 text-green-600"
                    >
                      Approved
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRejected(item)}
                      className="btn btn-sm rounded-full bg-red-100 text-red-600"
                    >
                      Reject
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={item?.status === "pending" && "rejected"}
                      className="btn btn-sm  rounded-full bg-[#7330FF] hover:bg-[#864eff] text-white"
                    >
                      Progress
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AllClasses;
