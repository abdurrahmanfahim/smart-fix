import { Outlet } from "react-router";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className="bg-main-gradient w-full font-inter flex flex-1 min-w-0  ">
        <Sidebar />
        <div className="main-content w-full">
            <Header />
          <div className=" ">
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Layout;
