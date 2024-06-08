import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div>
      <div className="">
        <Sidebar />
      </div>
      <div className="lg:ml-72 pt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
