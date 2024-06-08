import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Spinner from "../../../Utils/Spinner";
import toast from "react-hot-toast";
import { useState } from "react";

function TeacherRequest() {
  const axiosSecure = useAxiosSecure();
  //   const [isDisabled, setIsDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const {
    data: teacherRequest,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "teacherRequest",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/teacherRequest");
      return data;
    },
  });

  // Approved for teacher
  const handleTeacherApproved = async (email, id) => {
    await axiosSecure
      .patch(`/teacherApproved/${email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Approve Successfully!!");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await axiosSecure
      .patch(`/teacherApprovedRequest/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Reject teacher request
  const handleTeacherReject = async (id) => {
    await axiosSecure
      .patch(`/teacherReject/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Reject Successfully!!");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const count = teacherRequest?.count;
  const numberOfPage = Math.ceil(count / itemsPerPage);
  // const [itemsPerPage, setItemsPerPage] = useState(10)

  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages?.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  console.log(teacherRequest);
  return (
    <div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <table className="table min-w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-base text-[#7330ff] font-medium"></th>
                <th className="text-base text-[#7330ff] font-medium">Name</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Experience
                </th>
                <th className="text-base text-[#7330ff] font-medium">Title</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Category
                </th>
                <th className="text-base text-[#7330ff] font-medium">Status</th>
                <th className="text-base text-[#7330ff] font-medium"></th>
                <th className="text-base text-[#7330ff] font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {teacherRequest?.result?.map((item, index) => (
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
                      <span
                        className={
                          item?.status === "pending"
                            ? "badge badge-warning text-white"
                            : "badge badge-error text-white"
                        }
                      >
                        {item?.status}
                      </span>
                    </th>
                  </td>
                  <td>
                    <th className="flex font-normal ">
                      <button
                        disabled={item?.role === "teacher"}
                        onClick={() =>
                          handleTeacherApproved(item?.email, item?._id)
                        }
                        className="btn btn-sm rounded-full bg-green-100 text-green-600"
                      >
                        Approved
                      </button>
                    </th>
                  </td>
                  <td>
                    <th className="flex font-normal ">
                      <button
                        disabled={item?.role === "teacher"}
                        onClick={() => handleTeacherReject(item?._id)}
                        className="btn btn-sm rounded-full bg-red-100 text-red-600"
                      >
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
      <div className="text-center my-7">

        <button onClick={handlePrevPage} className="btn  mr-3">
          Prev
        </button>
        {pages.map((page, idx) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "btn mr-3 rounded-full w-10  bg-[#7330ff] hover:bg-[#8c57ff] text-white"
                : "btn rounded-full mr-3 w-10 "
            }
            key={idx}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn  mr-3">
          Next
        </button>
      </div>
    </div>
  );
}

export default TeacherRequest;
