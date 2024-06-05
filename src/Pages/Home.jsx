import { useQuery } from "@tanstack/react-query";
import BecomeTeacher from "../Components/BecomeTeacher";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import TotalCount from "../Components/TotalCount";
import UsersFeedback from "../Components/UsersFeedback";
import useAllEnroll from "../Hooks/useAllEnroll";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useClasses from "./../Hooks/useClasses";

function Home() {
  const { classes } = useClasses();
  const { allEnroll } = useAllEnroll();
  const axiosPublic = useAxiosPublic();
  const { data: users } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users");
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
