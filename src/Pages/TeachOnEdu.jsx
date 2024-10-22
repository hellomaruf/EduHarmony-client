import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useRole from "../Hooks/useRole";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import img from "../assets/Images/teach.png";

function TeachOnEdu() {
  const { user, setLoading } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [role] = useRole();
  const { data: applyTeaching } = useQuery({
    queryKey: "applyTeaching",
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/applyInformation/${user?.email}`
      );
      return data;
    },
  });
  console.log(applyTeaching?.status);
  const handleApplyTeaching = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const experience = form.experience.value;
    const title = form.title.value;
    const category = form.category.value;

    const applyTeachingInfo = {
      name,
      email,
      experience,
      title,
      category,
      photo: user?.photoURL,
      status: "pending",
      role,
    };
    console.log(applyTeachingInfo);
    await axiosSecure
      .post("/applyTeaching", applyTeachingInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Request Successfull Wait for Admin Approval!");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto  my-16">
      {applyTeaching?.status === "reject" && (
        <h2 className=" text-2xl font-semibold mb-6 mx-4">Your Request is Rejected❎</h2>
      )}

      {applyTeaching?.status === "accepted" ? (
        <div className=" flex mx-4 flex-col items-center justify-center h-[500px] text-center">
          <img className="w-80" src={img} alt="" />
          <h2 className="text-2xl font-semibold pt-4">
            A teacher cannot request to become a teacher
          </h2>
        </div>
      ) : (
        <div className="mx-4">
          <form
            onSubmit={handleApplyTeaching}
            noValidate=""
            action=""
            className="container  flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-sm  border-2 bg-base-100 border-[#7330FF]">
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full border focus:bg-base-200 focus:border-[#7330FF]  rounded-md p-2 outline-none  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Email
                  </label>
                  <input
                    required
                    defaultValue={user?.email}
                    disabled
                    name="email"
                    type="text"
                    placeholder="Enter Book Name"
                    className="w-full border focus:bg-base-200 focus:border-[#7330FF]  rounded-md p-2 outline-none  "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Experience
                  </label>
                  <select
                    className="w-full rounded-md focus:bg-base-200  p-2 outline-none border"
                    name="experience"
                    id="experience"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="experienced">Experienced</option>
                    <option value="mid-level">Mid-level</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Title
                  </label>
                  <input
                    required
                    name="title"
                    type="text"
                    placeholder="Enter a Title"
                    className="w-full focus:bg-base-200 focus:border-[#7330FF] rounded-md p-2 outline-none border "
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Category
                  </label>
                  <select
                    className="w-full rounded-md focus:bg-base-200  p-2 outline-none border"
                    name="category"
                    id="category"
                  >
                    <option value="web development">Web Development</option>
                    <option value="mobile app development">
                      Mobile App Development
                    </option>
                    <option value="digital marketing">Digital Marketing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud computing">Cloud Computing</option>
                    <option value="DSA">DSA</option>
                  </select>
                </div>

                <div className="">
                  <input
                    className="bg-[#7330FF] rounded-full hover:bg-[#8851ff] btn text-white   py-2 font-bold"
                    type="submit"
                    value={
                      applyTeaching?.status === "reject"
                        ? "Again Apply"
                        : "Apply for Teach"
                    }
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default TeachOnEdu;
