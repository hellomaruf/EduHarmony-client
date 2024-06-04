import { Link } from "react-router-dom";
import img from "../assets/Images/teach.jpg";
function BecomeTeacher() {
  return (
    <div className=" max-w-7xl mx-auto my-8">
      <div className="flex items-center justify-center gap-8  ">
        <div className="">
          <img className="max-w-96 rounded-xl" src={img} alt="" />
        </div>
        <div className=" space-y-4">
          <h2 className="text-4xl font-semibold">Become a Teacher</h2>
          <p className="text-base">
            Becoming a teacher is a journey filled with dedication, passion, and
            a commitment to shaping future generations. This noble profession
            offers the opportunity to make a lasting impact on students lives,
            fostering their intellectual and emotional growt. Hands-on
            experience is crucial. Student teaching placements provide practical
            training under the supervision of experienced educators, allowing
            aspiring teachers to apply their learning in real classroom
            settings.
          </p>
          <Link
            to="/teachOnEdu"
            className="btn rounded-full bg-[#7330FF] hover:bg-[#905cff] text-white"
          >
            Become a Teacher
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BecomeTeacher;
