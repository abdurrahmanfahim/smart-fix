import HomeIcon from "@/assets/icons/svg/HomeIcon";
import PhoneIcon from "@/assets/icons/svg/PhoneIcon";
import SettingsIcon from "@/assets/icons/svg/SettingsIcon";
import SidebarCalenderIcon from "@/assets/icons/svg/SidebarCalenderIcon";

const sidebarData = [
  {
    icon: <HomeIcon className={'size-6 sm:size-12 '} />,
    text: "Dashboard Overview",
    routeName: "/",
  },
  {
    icon: <PhoneIcon className={'size-6 sm:size-12'} />,
    text: "Call Logs",
    routeName: "/call-logs",
  },
  {
    icon: <SidebarCalenderIcon className={'size-6 sm:size-12'} />,
    text: "Appointments",
    routeName: "/appointments",
  },
  {
    icon: <SettingsIcon className={'size-6 sm:size-12'} />,
    text: "Settings",
    routeName: "/settings",
  },
];

export default sidebarData;
