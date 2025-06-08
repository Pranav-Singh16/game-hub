import { Outlet } from "react-router-dom";
import { NavBar } from "../components/index";

const HomeLayout = () => {
  return (
    <div className="min-h-screen border-solid bg-white dark:bg-[#151515] text-black dark:text-white">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
