import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import { useRecoilValue } from "recoil";
import { isDarkMode, newWorkSelector } from "./recoil";
import GameGrid from "./components/GameGrid";

function App() {
  const dark = useRecoilValue(isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="hidden lg:block">
        <Navbar />
        <div className="flex">
          <div className="bg-yellow-400 dark:bg-purple-500 text-white w-1/2 p-4">
            Aside
          </div>
          <div className="bg-blue-400 w-1/2 p-4">Main</div>
          <GameGrid />
        </div>
      </div>

      <div className="lg:hidden min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <div className="bg-blue-400 dark:bg-purple-500">Main</div>
      </div>
    </div>
  );
}

export default App;
