import MenuItem from "./MenuItem";
import { AiOutlineCoffee } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

function StudentMenu() {
  return (
    <div>
      <MenuItem icon={AiOutlineCoffee} label="My enroll" address="myEnroll" />
      <MenuItem
        icon={RiAccountCircleLine}
        label="Profile"
        address="profile"
      />
    </div>
  );
}

export default StudentMenu;
