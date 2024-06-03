import { RiAccountCircleLine } from "react-icons/ri";
import MenuItem from "./MenuItem";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BiBookmarkAlt } from "react-icons/bi";

function TeachersMenu() {
  return (
    <div>
      <MenuItem icon={BiBookmarkAlt} label="My Class" address="myClass" />
      <MenuItem
        icon={MdOutlineAddToPhotos}
        label="Add Class"
        address="addClass"
      />
      <MenuItem icon={RiAccountCircleLine} label="Profile" address="profile" />
    </div>
  );
}

export default TeachersMenu;
