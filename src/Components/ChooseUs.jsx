import { IoIosArrowRoundForward } from "react-icons/io";
import SectionTitle from "../Shared/SectionTitle";
import { AiOutlineContainer, AiOutlineMacCommand } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { RiUploadCloudLine } from "react-icons/ri";

function ChooseUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={"Why Should Choose EduHarmony"} />
      <div className="grid grid-cols-3 gap-8">
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <FiHome />
            </h3>
            <h4 className="text-2xl font-medium">Learn Anywhere</h4>
          </div>
          <p className="text-sm">
            Authoritatively deploy pandemic models via client-centered
            partnerships. Distinctively productize top-line process improvements
            rather than.
          </p>
          <button className="flex items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward />
          </button>
        </div>
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <BiMessageSquareDots />
            </h3>
            <h4 className="text-2xl font-medium">Discussion Session</h4>
          </div>
          <p className="text-sm">
            Synergistically foster enabled intellectual capital through cost
            effective portals. Interactively repurpose turnkey manufactured
            products.
          </p>
          <button className="flex items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward />
          </button>
        </div>
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <AiOutlineMacCommand />
            </h3>
            <h4 className="text-2xl font-medium">Case Studies</h4>
          </div>
          <p className="text-sm">
            Collaboratively expedite optimal sources before synergistic quality
            vectors. Monotonectally actualize long-term high-impact total
            linkage.
          </p>
          <button className="flex items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward />
          </button>
        </div>
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <LuCalendarDays />
            </h3>
            <h4 className="text-2xl font-medium">Schedule With Mentor</h4>
          </div>
          <p className="text-sm">
            Globally mesh enterprise-wide convergence rather than top-line
            applications. Proactively communicate high standards in e-markets.
          </p>
          <button className="flex items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward />
          </button>
        </div>
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <AiOutlineContainer />
            </h3>
            <h4 className="text-2xl font-medium">Best Certificate</h4>
          </div>
          <p className="text-sm">
            Authoritatively formulate standardized growth strategies whereas
            maintainable portals. Quickly target go forward benefits whereas.
          </p>
          <button className="flex items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward />
          </button>
        </div>
        <div className=" p-6 space-y-2 rounded-2xl transition duration-300 hover:text-white hover:bg-[#7330FF]  bg-gray- shadow-lg">
          <div className="flex gap-3 items-center">
            <h3 className=" text-3xl ">
              <RiUploadCloudLine />
            </h3>
            <h4 className="text-2xl font-medium">Upload Portfolio</h4>
          </div>
          <p className="text-sm">
            Proactively build transparent outside the box thinking after
            adaptive collaboration and idea-sharing. Efficiently transform.
          </p>
          <button className="flex  items-center  font-medium">
            Discover More
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
