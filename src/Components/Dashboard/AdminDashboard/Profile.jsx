import { useContext } from "react";
import { AuthContext } from "../../../Services/AuthProvider";
import useRole from "../../../Hooks/useRole";
import { AiOutlineMail } from "react-icons/ai";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();

  console.log(user);
  return (
    <div className="flex justify-center items-center h-[600px] ">
      <div className=" border-[#7330ff] border-2 bg-gray-50 rounded-2xl w-3/5">
        <div className="flex flex-col items-center justify-center p-4 ">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-36 w-3h-36  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 uppercase text-xs text-white bg-[#7330ff] mt-2 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-2xl font-semibold text-gray-800 ">
            {user?.displayName}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="space-y-6 text-sm text-gray-600 ">
              <div className="flex items-center gap-3">
                <AiOutlineMail className="text-2xl" />
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
