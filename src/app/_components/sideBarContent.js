import SideBarListItem from "./sideBarListItem";
import HomeIcon from "../_components/homeIcon";
import SettingsIcon from "../_components/settingsIcon";
import ReserveIcon from "./reserveIcon";
import UserProfile from "./UserProfile";
import UserPenIcon from "./UserPenIcon";
import CabinIcon from "./cabinIcon";

const listItems = [
  {
    hoverName: "Home",
    icon: HomeIcon,
    toLink: "/about",
    itemName: "Home",
  },
  {
    hoverName: "Reservations",
    icon: ReserveIcon,
    toLink: "/account/reservations",
    itemName: "Reservations",
  },
  {
    hoverName: "Settings",
    icon: SettingsIcon,
    toLink: "/settings",
    itemName: "Settings",
  },
  {
    hoverName: "Available Cabins",
    icon: CabinIcon,
    toLink: "/cabins",
    itemName: "Cabins",
  },

  {
    hoverName: "User Profile Settings",
    icon: UserPenIcon,
    toLink: "/account/profile",
    itemName: "Profile Settings",
  },
];

function SideBarContent() {
  return (
    <div className="  flex flex-col  justify-between items-center gap-60">
      <ul className="menu grow  flex-1 flex-col items-center justify-center ">
        {listItems.map((item, i) => {
          return (
            <SideBarListItem
              key={i + 1}
              hoverName={item.itemName}
              icon={item.icon}
              itemName={item.itemName}
              toLink={item.toLink}
            />
          );
        })}
      </ul>
      <UserProfile />
    </div>
  );
}

export default SideBarContent;
