import { useQuery } from "@tanstack/react-query";
import BecomeTeacher from "../Components/BecomeTeacher";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import TotalCount from "../Components/TotalCount";
import UsersFeedback from "../Components/UsersFeedback";
import useAllEnroll from "../Hooks/useAllEnroll";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import useClasses from "./../Hooks/useClasses";
import PopularCourses from "../Components/PopularCourses";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";

function Home() {
  const { user, loading} = useContext(AuthContext)
  const { classes } = useClasses();
  const { allEnroll } = useAllEnroll();
  const axiosSecure = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: "users",
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  return (
    <div>
      <Hero />
      <div className="py-8">
        <Partners />
      </div>
      <div className="py-8">
        <PopularCourses />
      </div>
      <div className="py-8">
        <TotalCount classes={classes} allEnroll={allEnroll} allUsers={users} />
      </div>
      <div className="py-8">
        <UsersFeedback />
      </div>
      <div className="py-8">
        <BecomeTeacher />
      </div>
    </div>
  );
}

export default Home;
