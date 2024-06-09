import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";
import blankProfile from "../assets/Images/blankProfile.webp";
import toast from "react-hot-toast";
import useRole from "../Hooks/useRole";

function Nav() {
  const { user, logout, setUser } = useContext(AuthContext);
  const [role, ,] = useRole();
  console.log(role);

  const handleLogout = () => {
    logout();
    setUser("");
    toast.success("Logout Successfully!!");
  };
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#7330FF] mx-3" : " mx-3"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allClass"
        className={({ isActive }) =>
          isActive ? "text-[#7330FF] mx-3" : " mx-3"
        }
      >
        All Classes
      </NavLink>
      <NavLink
        to="/teachOnEdu"
        className={({ isActive }) =>
          isActive ? "text-[#7330FF] mx-3" : " mx-3"
        }
      >
        Teach on EduHarmony
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-3">
            <i className="ri-graduation-cap-fill text-4xl text-[#7330FF]"></i>
            <div>
            <a className=" text-2xl font-semibold">EduHarmony</a>
              <p className="tracking-[5px] text-sm">Microlearning</p>
           </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            ""
          ) : (
            <Link
              to="/signIn"
              className="btn bg-[#7330FF] hover:bg-[#905cff] text-white rounded-full"
            >
              Sign In
            </Link>
          )}

          {/* Profile */}
          <div className="dropdown dropdown-end ml-4 z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL ? user?.photoURL : blankProfile}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="py-3 bg-gray-100">
                <span className="pl-2 text-[18px] font-semibold  text-[#7330FF]">
                  {user?.displayName}
                </span>
                {/* <p className="pl-2 text-xs">{role}</p> */}
              </div>
              <div className="mt-3 space-y-2">
                <li className="bg-gray-50 rounded-md">
                  <Link
                    to={
                      role === "student"
                        ? "/dashboard/myEnroll"
                        : role === "teacher"
                        ? "/dashboard/myClass"
                        : role === "admin"
                        ? "/dashboard/teacherRequest"
                        : "/dashboard"
                    }
                    // to={
                    //   '/dashboard'
                    // }
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="bg-gray-50 rounded-md">
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
