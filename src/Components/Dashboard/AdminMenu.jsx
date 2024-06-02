
import MenuItem from "./MenuItem";
import { LuGitPullRequestDraft, LuUsers2 } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { TiThSmall } from "react-icons/ti";

function AdminMenu() {
  return (
    <div>
      <MenuItem
        icon={LuGitPullRequestDraft}
        label="Teacher Request"
        address="teacher-request"
      />
      <MenuItem icon={LuUsers2} label="Users" address="users" />
      <MenuItem
        icon={TiThSmall}
        label="All Classes"
        address="all-classes"
      />
      <MenuItem
        icon={RiAccountCircleLine}
        label="profile"
        address="admin-profile"
      />
    </div>
  );
}

export default AdminMenu;
