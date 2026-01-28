import { Outlet } from "react-router";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className="bg-main-gradient min-h-screen w-full  ">
      <div className="flex  ">
        <div className="sticky h-dvh top-0">
          <Sidebar />
        </div>
        <div className="main-content w-full">
          <div className="header">
            <Header />
          </div>
          <div className="overflow-y-auto ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
