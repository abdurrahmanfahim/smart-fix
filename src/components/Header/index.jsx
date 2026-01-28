import { useLocation } from "react-router";
import BallIcon from "../../assets/icons/svg/BallIcon";
import avatar from "../../assets/images/avatar.png";
const Header = () => {
    const { pathname } = useLocation()
    return (
        <header className="sticky top-0 left-0 bg-primary w-full flex items-center justify-between px-6 py-2">
            <h1 className=" font-inter font-normal text-[32px] leading-9 text-white">
                {pathname == '/' && 'Dashboard Overview'}
                {pathname == '/call-logs' && 'Call Logs & History'}
                {pathname == '/appointments' && 'Appointments'}
                {pathname.includes('/settings') && 'Settings'}
            </h1>

            <div className="flex items-center justify-center space-x-10">
                <BallIcon />
                <img src={avatar} alt="profileImg" />
            </div>
        </header>
    )
}

export default Header 
