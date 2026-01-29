import BotIcon from "@/assets/icons/svg/BotIcon";
import CalenderFillIcon from "@/assets/icons/svg/CalenderFillIcon";
import CallIcon from "@/assets/icons/svg/CallIcon";
import ClockIcon from "@/assets/icons/svg/ClockIcon";
import CrossIcon from "@/assets/icons/svg/CrossIcon";
import SwapIcon from "@/assets/icons/svg/SwapIcon";

  const cardsData = [
    {
      title: "Total Calls Today",
      count: 127,
      percent: "+12%",
      posIcon: <CallIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: "AI-Handled Calls",
      count: 98,
      percent: "+77%",
      posIcon: <BotIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: "Warm Transfer",
      count: 23,
      percent: "+18%",
      posIcon: <SwapIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: "Appointments Booked",
      count: 34,
      percent: "+8%",
      posIcon: <CalenderFillIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: "Missed/Failed Calls",
      count: 6,
      percent: "-3%",
      posIcon: <CrossIcon className={'size-8 sm:size-12'} />,
    },
    {
      title: "Avg Call Duration",
      count: '3:42',
      percent: "+15%",
      posIcon: <ClockIcon className={'size-8 sm:size-12'} />,
    },
];
  
export default cardsData;