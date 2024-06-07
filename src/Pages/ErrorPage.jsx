import Lottie from "lottie-react";
import error from "../assets/Images/error-page.json";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center text-center justify-center h-[550px]">
          <div className="">
          <Lottie className="w-[600px] h-full" animationData={error} />
          <Link to='/' className="btn rounded-full bg-[#7330FF] hover:bg-[#8750ff] text-white">Home Page</Link>
         </div>
    </div>
  );
}

export default ErrorPage;
