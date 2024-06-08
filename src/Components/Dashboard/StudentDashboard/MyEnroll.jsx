import { MdOutlineAccountCircle } from "react-icons/md";
import useMyEnroll from "../../../Hooks/useMyEnroll";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Services/AuthProvider";
import Default from "../../Default";

function MyEnroll() {
  const { myEnrollClasses } = useMyEnroll();
  const { user } = useContext(AuthContext);
  console.log(myEnrollClasses);
  return (
    <div>
      <div className=" mx-4">
        <h2 className="text-2xl lg:text-3xl mb-5 text-gray-800 font-semibold">
          Hi {user?.displayName}!👋
        </h2>
      </div>
      {myEnrollClasses?.length === 0 ? (
        <Default title={"You are not enrolled"} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 ">
          {myEnrollClasses?.map((classes, index) => (
            <a
              key={index}
              href="#"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src={classes?.photo}
                alt=""
                className="h-64 w-full object-cover transition rounded-2xl duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="mt-4 pb-8">
                <dl>
                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-semibold text-xl">{classes?.title.slice(0,30)}</dd>
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
                    to={`enrollClassDetails/${classes?.classId}`}
                    className="btn w-full rounded-full text-white bg-[#7330ff] hover:bg-[#8c57ff] "
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEnroll;
