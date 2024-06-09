import Marquee from "react-fast-marquee";
import partner1 from "../assets/Images/partner1.png";
import partner2 from "../assets/Images/partner2.png";
import partner3 from "../assets/Images/partner3.png";
import partner4 from "../assets/Images/partner4.png";
import partner5 from "../assets/Images/partner5.png";
import partner6 from "../assets/Images/partner6.png";
import partner7 from "../assets/Images/partner7.png";
import { Slide } from "react-awesome-reveal";

function Partners() {
  return (
    <div className="py-12">
      <div className="mx-4">
        <h3
          data-aos="fade-down"
          data-aos-duration="1000"
          className=" text-lg mb-8 max-w-2xl text-center mx-auto "
        >
          Educational institution partnerships involve alliances with other
          schools, businesses, and organizations to enhance resources,
          opportunities.
        </h3>
      </div>
      <Slide direction="right">
        <Marquee gradient gradientColor="#fff" gradientWidth={100} className="">
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner1} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner2} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner3} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner4} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner5} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner6} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner4} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner5} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner6} alt="" />
          </div>
          <div className=" pr-6">
            <img className="h-12 md:h-16 lg:h-20" src={partner7} alt="" />
          </div>
        </Marquee>
      </Slide>
    </div>
  );
}

export default Partners;
