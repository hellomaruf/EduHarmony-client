import img from "../assets/Images/def.png";

function Default({ title }) {
  return (
    <div className="flex items-center  justify-center h-[calc(100vh-136px)]">
      <div className="max-w-xl  mx-auto flex flex-col items-center justify-center text-center ">
        <img className="w-[200px] " src={img} alt="" />
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default Default;
