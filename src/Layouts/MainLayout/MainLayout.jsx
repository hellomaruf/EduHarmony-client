import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav";

function MainLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainLayout;
