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
import AddClass from "../Components/Dashboard/TeacherDashboard/AddClass";
import AllClasses from "../Components/Dashboard/AdminDashboard/AllClasses";
import MyClass from "../Components/Dashboard/TeacherDashboard/MyClass";
import UpdateClass from "../Components/Dashboard/TeacherDashboard/UpdateClass";
import AllClass from "../Pages/AllClass";
import ClassDetails from "../Components/Dashboard/StudentDashboard/ClassDetails";

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
        path: "/allClass",
        element: <AllClass />,
      },
      {
        path: "/classDetails/:id",
        element: <PrivateRoute><ClassDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/classDetails/${params?.id}`),
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
    children: [
      // admin dashboard menu

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
      {
        path: "adminAllClasses",
        element: <AllClasses />,
      },

      // teacher dashboard menu
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClass",
        element: <MyClass />,
      },
      {
        path: "myClass/updateClass/:id",
        element: <UpdateClass />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/update/${params?.id}`),
      },
    ],
  },
]);
