import { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Services/AuthProvider";
import useRole from "../../Hooks/useRole";
import StudentMenu from "./StudentMenu";
import AdminMenu from "./AdminMenu";
import TeachersMenu from "./TeachersMenu";
import { TiThMenuOutline } from "react-icons/ti";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-50 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
            <div className="flex items-center justify-center gap-3">
            <i className="ri-graduation-cap-fill text-3xl md:text-4xl text-[#7330FF]"></i>
            <div>
            <a className=" text-xl md:text-2xl font-semibold">EduHarmony</a>
              <p className="tracking-[5px] text-xs md:text-sm">Microlearning</p>
           </div>
          </div>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <TiThMenuOutline className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <Link to="/">
              <div className="flex items-center justify-center gap-3">
            <i className="ri-graduation-cap-fill text-3xl md:text-4xl text-[#7330FF]"></i>
            <div>
            <a className=" text-xl md:text-2xl font-semibold">EduHarmony</a>
              <p className="tracking-[5px] text-xs md:text-sm">Microlearning</p>
           </div>
          </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
             
              {role === "student" && <StudentMenu />}
              {role === "admin" && <AdminMenu />}
              {role === "teacher" && <TeachersMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-200 rounded-full  hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
