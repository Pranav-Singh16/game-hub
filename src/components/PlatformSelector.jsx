import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = ({ onSelectPlatform }) => {
  const dark = useRecoilValue(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const { platforms } = usePlatforms();
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle platform selection
  const handleSelect = (platform) => {
    setSelectedItem(platform.name); // Update selected item
    setIsOpen(false); // Close dropdown
    onSelectPlatform(platform); // Notify parent
  };

  return (
    <div className="relative w-50">
      <label
        className={`block mb-1 text-sm font-medium ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        {/* Select a platform */}
      </label>

      <div
        className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
          dark
            ? "bg-zinc-800 text-white border-zinc-800"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedItem || "Platforms"}</span>
        <span className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 w-full rounded-md shadow-lg transition-all duration-200 ${
            dark
              ? "bg-gradient-to-r from-zinc-700 via-zinc-700 to-zinc-700 text-white"
              : "bg-gradient-to-r from-slate-300 via-slate-300 to-slate-300 text-gray-800"
          }`}
        >
          {platforms.map((platform) => (
            <li
              key={platform.id}
              onClick={() => handleSelect(platform)} // Update state and close dropdown
              className={`px-4 py-1 cursor-pointer hover:bg-opacity-75 transition-all text-xs sm:text-sm duration-200 ${
                dark ? "hover:bg-gray-600" : "hover:bg-slate-400"
              }`}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;

// import { useState } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil";
// import usePlatforms from "../hooks/usePlatforms";

// // const PlatformSelector = ({ onSelectPlatform }) => {
// const PlatformSelector = ({ onSelectPlatform }) => {
//   const dark = useRecoilValue(isDarkMode);
//   const [isOpen, setIsOpen] = useState(false);
//   const { platforms } = usePlatforms();
//   console.log("platforms", platforms);
//   const [selectedItem, setSelectedItem] = useState("");

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

//   // const handleSelect = (item) => {
//   //   setSelectedItem(item);
//   //   setIsOpen(false);
//   // };

//   return (
//     <div className="relative w-50">
//       <label
//         className={`block mb-1 text-sm font-medium ${
//           dark ? "text-white" : "text-gray-800"
//         }`}
//       >
//         {/* Select a platform */}
//       </label>

//       <div
//         className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
//           dark
//             ? "bg-zinc-800 text-white border-zinc-800"
//             : "bg-white text-gray-800 border-gray-300"
//         }`}
//         onClick={toggleDropdown}
//       >
//         <span>{selectedItem || "Platforms"}</span>
//         <span className="text-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//             />
//           </svg>
//         </span>
//       </div>

//       {isOpen && (
//         <ul
//           className={`absolute z-10 mt-1 w-full rounded-md shadow-lg transition-all duration-200 ${
//             //for adding a range of colour in like from gery-800 to 700 then 800
//             dark
//               ? "bg-gradient-to-r from-zinc-700 via-zinc-700 to-zinc-700 text-white"
//               : "bg-gradient-to-r from-slate-300 via-slate-300 to-slate-300 text-gray-800"
//           }`}
//         >
//           {platforms.map((platform) => (
//             <li
//               key={platform.id}
//               // onClick={() => handleSelect(item)}
//               onClick={() => {
//                 onSelectPlatform(platform);
//               }}
//               className={`px-4 py-1 cursor-pointer hover:bg-opacity-75 transition-all text-xs sm:text-sm duration-200 ${
//                 dark ? "hover:bg-gray-600" : "hover:bg-slate-400"
//               }`}
//             >
//               {platform.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PlatformSelector;
