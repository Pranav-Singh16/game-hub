import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";

const items = ["item1", "item2", "item3"];

const PlatformSelector = () => {
  const dark = useRecoilValue(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
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
            //for adding a range of colour in like from gery-800 to 700 then 800
            dark
              ? "bg-gradient-to-r from-zinc-700 via-zinc-700 to-zinc-700 text-white"
              : // : "bg-gradient-to-r from-blue-200 via-blue-200 to-blue-200 text-white"
                // "bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 text-gray-800"
                "bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 text-gray-800"
          }`}
        >
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className={`px-4 py-2 cursor-pointer hover:bg-opacity-75 transition-all duration-200 ${
                dark ? "hover:bg-gray-600" : "hover:bg-slate-400"
              }`}
            >
              {item}
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

// const items = ["item1", "item2", "item3"];

// const PlatformSelector = () => {
//   const dark = useRecoilValue(isDarkMode);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState("");

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

//   const handleSelect = (item) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative w-60">
//       <label
//         className={`block mb-1 text-sm font-medium ${
//           dark ? "text-white" : "text-gray-800"
//         }`}
//       >
//         Select a platform
//       </label>

//       <div
//         className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
//           dark
//             ? "bg-gray-800 text-white border-gray-600"
//             : "bg-white text-gray-800 border-gray-300"
//         }`}
//         onClick={toggleDropdown}
//       >
//         <span>{selectedItem || "Platforms"}</span>
//         {/* <span className="text-sm"></span> */}
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
//           className={`absolute z-10 mt-1 w-full border rounded-md shadow-md ${
//             dark
//               ? "bg-gray-800 text-white border-gray-600"
//               : "bg-white text-gray-800 border-gray-200"
//           }`}
//         >
//           {items.map((item) => (
//             <li
//               key={item}
//               onClick={() => handleSelect(item)}
//               className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                 dark ? "hover:bg-gray-700" : ""
//               }`}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PlatformSelector;

// // import { useState } from "react";
// // import { useRecoilValue } from "recoil";
// // import { isDarkMode } from "../recoil";

// // const PlatformSelector = () => {
// //   const [selectedItem, setSelectedItem] = useState("");
// //   const dark = useRecoilValue(isDarkMode);

// //   const handleChange = (event) => {
// //     setSelectedItem(event.target.value);
// //   };

// //   return (
// //     <div className="flex flex-col gap-2">
// //       <label
// //         htmlFor="itemSelect"
// //         className={dark ? "text-white" : "text-gray-800"}
// //       >
// //         Select an item
// //       </label>
// //       <select
// //         id="itemSelect"
// //         value={selectedItem}
// //         onChange={handleChange}
// //         className={`pl-4 pr-10 py-2 rounded-md border ${
// //           dark
// //             ? "bg-gray-800 text-white border-gray-600"
// //             : "bg-white text-gray-800 border-gray-300"
// //         }`}
// //       >
// //         <option value="">Platforms </option>
// //         <option value="item1">item1</option>
// //         <option value="item2">item2</option>
// //         <option value="item3">item3</option>
// //       </select>
// //     </div>
// //   );
// // };

// // export default PlatformSelector;
