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
import Payment from "../Pages/Payment/Payment";
import MyEnroll from "../Components/Dashboard/StudentDashboard/MyEnroll";
import SeeDetails from "../Components/Dashboard/TeacherDashboard/SeeDetails";
import EnrollClassDetails from "../Components/Dashboard/StudentDashboard/EnrollClassDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <ClassDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/classDetails/${params?.id}`),
      },

      {
        path: "/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/payment/${params?.id}`),
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
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
      {
        path: "myClass/seeDetails/:id",
        element: <SeeDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/enrollment/${params?.id}`),
      },

      // student dahsboard menu
      {
        path: "myEnroll",
        element: <MyEnroll />,
      },
      {
        path: "myEnroll/enrollClassDetails/:id",
        element: (
          <PrivateRoute>
            <EnrollClassDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/enrollClassDetails/${params?.id}`
          ),
      },
    ],
  },
]);
