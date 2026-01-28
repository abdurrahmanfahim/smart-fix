import HomeIcon from "@/assets/icons/svg/HomeIcon";
import PhoneIcon from "@/assets/icons/svg/PhoneIcon";
import SettingsIcon from "@/assets/icons/svg/SettingsIcon";
import SidebarCalenderIcon from "@/assets/icons/svg/SidebarCalenderIcon";

const sidebarData = [
  {
    icon: <HomeIcon />,
    text: "Dashboard Overview",
    routeName: "/",
  },
  {
    icon: <PhoneIcon />,
    text: "Call Logs",
    routeName: "/call-logs",
  },
  {
    icon: <SidebarCalenderIcon />,
    text: "Appointments",
    routeName: "/appointments",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
    routeName: "/settings",
  },
];

export default sidebarData;
