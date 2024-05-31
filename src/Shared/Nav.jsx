import { NavLink } from "react-router-dom";

function Nav() {
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
        to="/allClasses"
        className={({ isActive }) =>
          isActive ? "text-[#7330FF] mx-3" : " mx-3"
        }
      >
        All Classes
      </NavLink>
      <NavLink
        to="/teachOnEduHarmory"
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
      <div className="navbar max-w-7xl mx-auto">
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
          <div className="flex items-center justify-center gap-2">
            <i className="ri-graduation-cap-fill text-2xl text-[#7330FF]"></i>
            <a className=" text-2xl font-semibold">EduHarmony</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#7330FF] text-white rounded-full">Sign In</a>
          {/* Profile */}
          <div className="dropdown dropdown-end ml-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
