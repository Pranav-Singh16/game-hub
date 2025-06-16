// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { isDarkMode } from "../recoil/index";

// export default function ThemeToggle() {
//   const [isDark, setIsDarkMode] = useRecoilState(isDarkMode);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <div className="flex items-center">
//       {/* Toggle visible only on mobile */}
//       <div className="flex items-center gap-2 p-4 sm:hidden">
//         <label className="relative inline-block w-12 h-6">
//           <input
//             type="checkbox"
//             checked={isDark}
//             onChange={(e) => setIsDarkMode(e.target.checked)}
//             className="opacity-0 w-0 h-0"
//           />
//           <span
//             className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition ${
//               isDark ? "bg-green-100" : "bg-gray-400 dark:bg-gray-600"
//             }`}
//           ></span>
//           <span
//             className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform ${
//               isDark ? "translate-x-6 dark:bg-gray-400" : "dark:bg-red-400"
//             }`}
//           ></span>
//         </label>
//       </div>

//       {/* For larger screens (sm and above) show the toggle and the text */}
//       <div className="hidden sm:flex items-center gap-2 p-4">
//         <div className="mr-2">{isDark ? "Dark Mode" : "Light Mode"}</div>
//         <label className="relative inline-block w-12 h-6">
//           <input
//             type="checkbox"
//             checked={isDark}
//             onChange={(e) => setIsDarkMode(e.target.checked)}
//             className="opacity-0 w-0 h-0"
//           />
//           <span
//             className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition ${
//               isDark ? "bg-green-100" : "bg-gray-400 dark:bg-gray-600"
//             }`}
//           ></span>
//           <span
//             className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform ${
//               isDark ? "translate-x-6 dark:bg-gray-400" : "dark:bg-red-400"
//             }`}
//           ></span>
//         </label>
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isDarkMode } from "../recoil/index";

export default function ThemeToggle() {
  const [isDark, setIsDarkMode] = useRecoilState(isDarkMode);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2 p-4">
        <label className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDarkMode(e.target.checked)}
            className="opacity-0 w-0 h-0"
          />
          <span
            className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition
                        ${
                          isDark
                            ? "bg-green-100"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
          ></span>
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform ${
              isDark ? "translate-x-6 dark:bg-gray-400" : "dark:bg-red-400"
            }`}
          ></span>
        </label>
      </div>
      <div className="hidden sm:block">{isDark ? "Dark" : "Light"}</div>
    </div>
  );
}
