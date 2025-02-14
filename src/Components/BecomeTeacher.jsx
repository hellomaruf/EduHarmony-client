import { Link } from "react-router-dom";
import img from "../assets/Images/teacher.png";
import { Slide } from "react-awesome-reveal";
function BecomeTeacher() {
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 mx-4 lg:grid-cols-5  items-center justify-center gap-8  ">
        <div className="col-span-2">
          <Slide direction="left" cascade damping={0.1}>
            <img className=" rounded-xl" src={img} alt="" />
          </Slide>
        </div>

        <div className=" space-y-4 col-span-3">
          <Slide direction="right" cascade damping={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Become a Teacher
            </h2>
            <p className="text-sm lg:text-base">
              Becoming a teacher is a journey filled with dedication, passion,
              and a commitment to shaping future generations. This noble
              profession offers the opportunity to make a lasting impact on
              students lives, fostering their intellectual and emotional growt.
              Hands-on experience is crucial. Student teaching placements
              provide practical training under the supervision of experienced
              educators, allowing aspiring teachers to apply their learning in
              real classroom settings.
            </p>
            <Link
              to="/teachOnEdu"
              className="btn rounded-full bg-[#7330FF] hover:bg-[#905cff] text-white"
            >
              Become a Teacher
            </Link>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default BecomeTeacher;
