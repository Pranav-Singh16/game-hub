import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import { useRecoilValue } from "recoil";
import { isDarkMode, newWorkSelector } from "./recoil";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const dark = useRecoilValue(isDarkMode);
  // const workData = useRecoilValue(newWorkSelector);

  console.log(dark);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 m-4 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button> */}

      <div className="hidden lg:block">
        <Navbar />
        <div className="flex">
          <div className="bg-yellow-400 dark:bg-black text-white w-1/2 p-4">
            Aside
          </div>
          <div className="bg-blue-400 w-1/2 p-4">Main</div>
        </div>
      </div>

      <div className="lg:hidden min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        {/* <nav className="bg-red-400 dark:bg-blue-500">Nav</nav> */}
        {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        <div className="bg-blue-400 dark:bg-purple-500">Main</div>
      </div>
    </div>
  );
}

export default App;
