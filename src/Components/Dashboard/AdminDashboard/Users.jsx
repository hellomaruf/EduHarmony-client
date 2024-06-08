import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Spinner from "../../../Utils/Spinner";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Services/AuthProvider";

function Users() {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', currentPage],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
  });

 
  const handleMakeAdmin = async (item) => {
    await axiosSecure.patch(`/users/${item?._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: `${item?.name} is now Admin!`,
          text: "Do you want to continue",
          icon: "success",
          confirmButtonColor: "#7330ff",
          confirmButtonText: "Cool",
        });
        refetch();
      }
    });
  };
  const count = users?.count;
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
                <th className="text-base text-[#7330ff] font-medium"></th>
                <th className="text-base text-[#7330ff] font-medium">Name</th>
                <th className="text-base text-[#7330ff] font-medium">Email</th>
                <th className="text-base text-[#7330ff] font-medium">
                  Make Admin
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.result?.map((item, index) => (
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
                  <th className="flex font-normal">
                    {item?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className=" text-2xl btn-circle flex items-center justify-center bg-orange-50 hover:bg-orange-100 rounded-full text-orange-500"
                      >
                        <MdOutlineAdminPanelSettings />
                      </button>
                    )}
                  </th>
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

export default Users;
