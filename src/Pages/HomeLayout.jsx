import { Outlet } from "react-router-dom";
import { NavBar } from "../components/index";

const HomeLayout = () => {
  return (
    <div className="min-h-screen border-solid bg-white dark:bg-gray-900 text-black dark:text-white">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
