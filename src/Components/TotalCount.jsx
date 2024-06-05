import { FaUsers } from "react-icons/fa";
import img from "../assets/Images/eduImg1.png";
import { CgMenuGridR } from "react-icons/cg";
import { MdBookmarks } from "react-icons/md";

function TotalCount({ classes, allEnroll, allUsers }) {
  console.log(classes);
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className=" space-y-3">
          <h2 className="text-4xl pb-2 font-semibold">
            Learning Knows No Bounds!
          </h2>
          <p className="pb-5">
            Online learning, also known as e-learning, has revolutionized the
            way education is delivered and accessed. It offers a flexible and
            convenient alternative to traditional classroom-based instruction,
            allowing learners to access educational content anytime, anywhere,
            using internet-enabled devices such as computers, tablets, and
            smartphones.
          </p>

          <div className="stats shadow mt-5">
            <div className="stat">
              <div className="stat-figure ">
                <FaUsers className="text-4xl text-[#7330FF]" />
              </div>
              <div className="stat-title">All Users</div>
              <div className="stat-value">{allUsers?.length}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
              <CgMenuGridR className="text-4xl text-[#7330FF]" />

              </div>
              <div className="stat-title">Total Classes</div>
              <div className="stat-value">{classes?.length}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
              <MdBookmarks className="text-4xl text-[#7330FF]" />

              </div>
              <div className="stat-title">Total Enrollment</div>
              <div className="stat-value">{allEnroll?.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCount;