import MenuItem from "./MenuItem";
import { AiOutlineCoffee } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

function StudentMenu() {
  return (
    <div>
      <MenuItem icon={AiOutlineCoffee} label="My enroll" address="my-enroll" />
      <MenuItem
        icon={RiAccountCircleLine}
        label="Profile"
        address="my-listings"
      />
    </div>
  );
}

export default StudentMenu;
