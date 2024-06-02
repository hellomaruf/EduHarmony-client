import BecomeTeacher from "../Components/BecomeTeacher";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import UsersFeedback from "../Components/UsersFeedback";

function Home() {
  return (
    <div>
      <Hero />
      <div className="py-8">
        <Partners />
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
