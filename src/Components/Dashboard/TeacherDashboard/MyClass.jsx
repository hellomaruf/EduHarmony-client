import { FiEdit } from "react-icons/fi";
import { MdOutlineAccountCircle, MdOutlineDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Services/AuthProvider";
import Spinner from "../../../Utils/Spinner";

function MyClass() {
  //   const { classes } = useClasses();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: classes, isLoading } = useQuery({
    queryKey: "myClass",
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myClasses/${user?.email}`);
      return data;
    },
  });
  console.log(classes);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-8 mr-8">
          {classes?.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={item?.photo}
                alt=""
                className="h-64 w-full object-cover transition rounded-2xl duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="mt-4 pb-8">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">${item?.price}</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-semibold text-xl">{item?.title}</dd>
                    <dd className="font-normal text-sm pt-2">
                      {item?.description.slice(0, 70)}......
                    </dd>
                    <div className=" flex items-center justify-between">
                      <div
                        className={
                          item?.status === "rejected"
                            ? "badge  mt-2 badge-error text-white"
                            : "badge  mt-2 badge-warning text-white"
                        }
                      >
                        {item?.status}
                      </div>
                      <div className=" space-x-3 text-white">
                        <a
                          className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                          href="#"
                        >
                          <FiEdit />
                        </a>

                        <a
                          className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                          href="#"
                        >
                          <MdOutlineDelete />
                        </a>
                      </div>
                    </div>
                  </div>
                </dl>

                <div className="mt-2 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <MdOutlineAccountCircle className="text-2xl text-[#7330ff]" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="font-medium text-base">{item?.name}</p>
                      <p className="text-gray-500">{item?.email}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="btn w-full rounded-full text-white bg-[#7330ff] hover:bg-[#8c57ff] ">
                    See Details
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyClass;
