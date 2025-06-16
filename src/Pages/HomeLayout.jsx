// src/layouts/HomeLayout.js
import { useRecoilState } from "recoil";
import { gameQuerys } from "../recoil/atoms/userAtom";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/index";

const HomeLayout = () => {
  const [gameQuery, setGameQuery] = useRecoilState(gameQuerys); // Use Recoil state for gameQuery

  return (
    <div className="min-h-screen border-solid bg-white dark:bg-[#151515] text-black dark:text-white">
      {/* <NavBar
        onSearch={(searchText) =>
          setGameQuery((prevState) => ({ ...prevState, searchText }))
        }
      /> */}
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        // onSearch={(searchText) =>
        //   setGameQuery((prevState) => {
        //     const updatedGameQuery = { ...prevState, searchText };
        //     console.log("Updated gameQuery:", updatedGameQuery); // Log the updated state
        //     return updatedGameQuery;
        //   })
        // }
      />{" "}
      {/* Pass onSearch to NavBar */}
      <Outlet /> {/* Render nested routes */}
    </div>
  );
};

export default HomeLayout;
