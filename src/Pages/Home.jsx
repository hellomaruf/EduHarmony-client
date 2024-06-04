import BecomeTeacher from "../Components/BecomeTeacher";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import TotalCount from "../Components/TotalCount";
import UsersFeedback from "../Components/UsersFeedback";
import useClasses from "./../Hooks/useClasses";

function Home() {
  const { classes } = useClasses();
  return (
    <div>
      <Hero />
      <div className="py-8">
        <Partners />
      </div>
      <div className="py-8">
        <TotalCount classes={classes} />
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
