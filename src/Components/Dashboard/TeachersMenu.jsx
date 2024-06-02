import { RiAccountCircleLine } from "react-icons/ri"
import MenuItem from "./MenuItem"
import { MdOutlineAddToPhotos } from "react-icons/md"
import { BiBookmarkAlt } from "react-icons/bi"

function TeachersMenu() {
  return (
    <div>
        <MenuItem
        icon={MdOutlineAddToPhotos}
        label="Add Class"
        address="add-class"
      />
      <MenuItem
        icon={BiBookmarkAlt}
        label="My Class"
        address="my-class"
      />
      <MenuItem
        icon={RiAccountCircleLine}
        label="Profile"
        address="teacher-profile"
      />
    </div>
  )
}

export default TeachersMenu