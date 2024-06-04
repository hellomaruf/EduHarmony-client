import { MdOutlineAccountCircle } from "react-icons/md";
import useMyEnroll from "../../../Hooks/useMyEnroll";
import { Link } from "react-router-dom";

function MyEnroll() {
  const { myEnrollClasses } = useMyEnroll();
  console.log(myEnrollClasses);
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mr-6">
        {myEnrollClasses?.map((classes, index) => (
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
              src={classes?.photo}
              alt=""
              className="h-64 w-full object-cover transition rounded-2xl duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="mt-4 pb-8">
              <dl>
                <div>
                  <dt className="sr-only">Address</dt>

                  <dd className="font-semibold text-xl">{classes?.title}</dd>
                </div>
              </dl>

              <div className="mt-6 my-6 flex items-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <MdOutlineAccountCircle className="text-2xl text-[#7330ff]" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="font-medium text-base">
                      {classes?.teacherName}
                    </p>
                    <p className="text-gray-500">Instractor</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  //   to={`/classDetails/${item?._id}`}
                  className="btn w-full rounded-full text-white bg-[#7330ff] hover:bg-[#8c57ff] "
                >
                  Continue
                </Link>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyEnroll;
