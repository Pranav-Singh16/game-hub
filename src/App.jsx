import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/NavBar";
import { useRecoilValue } from "recoil";
import { isDarkMode, newWorkSelector } from "./recoil";
import GameGrid from "./components/GameGrid";
import { HomeLayout, Landing, About, Error } from "./Pages/index";

function App() {
  const dark = useRecoilValue(isDarkMode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

//   return (
//     // <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//     //   <div className="hidden lg:block">
//     //     <Navbar />
//     //     <div className="flex">
//     //       <div className="bg-yellow-400 dark:bg-purple-500 text-white w-1/2 p-4">
//     //         Aside
//     //       </div>
//     //       <div className="bg-blue-400 w-1/2 p-4">Main</div>
//     //       <GameGrid />
//     //     </div>
//     //   </div>

//     //   <div className="lg:hidden min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//     //     <Navbar />
//     //     <div className="bg-blue-400 dark:bg-purple-500">Main</div>
//     //   </div>
//     // </div>
//     // );
//     // <div>hello</div>
//   );
// }

export default App;
