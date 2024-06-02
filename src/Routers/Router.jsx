import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import UsersFeedback from "../Components/UsersFeedback";
import TeachOnEdu from "../Pages/TeachOnEdu";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Users from "../Components/Dashboard/AdminDashboard/Users";
import TeacherRequest from "../Components/Dashboard/AdminDashboard/TeacherRequest";
import Profile from "../Components/Dashboard/AdminDashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/feedback",
        element: <UsersFeedback />,
      },
      {
        path: "/teachOnEdu",
        element: (
          <PrivateRoute>
            <TeachOnEdu />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    // admin dashboard menu
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "teacherRequest",
        element: <TeacherRequest />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
