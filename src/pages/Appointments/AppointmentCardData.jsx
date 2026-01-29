import CalenderIcon from "@/assets/icons/svg/CalenderIcon"
import CheckIcon from "@/assets/icons/svg/CheckIcon"
import ExclamationIcon from "@/assets/icons/svg/ExclamationIcon"
import TickIcon from "@/assets/icons/svg/TickIcon"

const appointmentsCardData = [
    {
      icon: <CalenderIcon />,
      title: 'Total Booked',
      value: '34',
      percent: '+8 this week',
    },
    { 
      icon: <TickIcon />,
      title: 'AI Booked',
      value: '28',
      percent: '82% of total',
    },
    {
      icon: <ExclamationIcon />,
      title: 'Pending',
      value: '3',
      percent: 'Awaiting confirmation',
    }
]

export default appointmentsCardData