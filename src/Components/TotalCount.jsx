import { FaUsers } from "react-icons/fa";
import img from "../assets/Images/eduImg1.png";
import { CgMenuGridR } from "react-icons/cg";
import { MdBookmarks } from "react-icons/md";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

function TotalCount({ classes, allEnroll, allUsers }) {
  const [counterOn, setCouterOn] = useState(false);
  return (
    <div className="max-w-7xl mx-auto lg:my-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 gap-8 items-center justify-center">
        <Slide cascade damping={0.1}>
          <div className="">
            <img src={img} alt="" />
          </div>
        </Slide>
        <div className=" space-y-3 ">
          <Slide direction="right" cascade damping={0.1}>
            <h2 className="text-3xl lg:text-4xl pb-2 font-semibold">
              Learning Knows No Bounds!
            </h2>
            <p className="pb-5 text-sm lg:text-base">
              Online learning, also known as e-learning, has revolutionized the
              way education is delivered and accessed. It offers a flexible and
              convenient alternative to traditional classroom-based instruction,
              allowing learners to access educational content anytime, anywhere,
              using internet-enabled devices such as computers, tablets, and
              smartphones.
            </p>
            <ScrollTrigger
              onEnter={() => {
                setCouterOn(true);
              }}
              onExit={() => {
                setCouterOn(false);
              }}
            >
              <div className="">
                {counterOn && (
                  <div className="flex flex-col lg:flex-row shadow-md p-6 rounded-lg gap-8 mt-5">
                    <div className="flex lg:border-r-2 border-gray-500 lg:pr-4 items-center justify-between gap-4">
                      <div className="">
                        <div className="stat-title">All Users</div>
                        <div className="text-5xl font-semibold">
                          <CountUp
                            start={1}
                            end={allUsers?.length}
                            duration={4}
                            // delay={1}
                          />
                        </div>
                      </div>
                      <div className=" ">
                        <FaUsers className="text-4xl text-[#7330FF]" />
                      </div>
                    </div>

                    <div className="flex lg:border-r-2 border-gray-500 lg:pr-4  items-center  justify-between gap-4">
                      <div className="">
                        <div className="stat-title">Total Classes</div>
                        <div className="text-5xl font-semibold">
                          <CountUp
                            start={1}
                            end={classes?.length}
                            duration={4}
                            // delay={1}
                          />
                        </div>
                      </div>
                      <div className=" text-secondary">
                        <CgMenuGridR className="text-4xl text-[#7330FF]" />
                      </div>
                    </div>

                    <div className="flex  items-center  justify-between gap-4">
                      <div className="">
                        <div className="stat-title">Total Enrollment</div>
                        <div className="text-5xl font-semibold">
                          <CountUp
                            start={1}
                            end={allEnroll?.length}
                            duration={4}
                            // delay={1}
                          />
                        </div>
                      </div>
                      <div className=" text-secondary">
                        <MdBookmarks className="text-4xl text-[#7330FF]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollTrigger>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default TotalCount;
