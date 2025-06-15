import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";

const SortSelector = ({ sortOrder, onSelectSortOrder }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const dark = useRecoilValue(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    onSelectSortOrder(value); // ✅ Fixed function name
    setIsOpen(false);
  };

  const currentSortLabel =
    sortOrders.find((order) => order.value === sortOrder)?.label || "Relevance";

  return (
    <div className="relative w-50">
      <div
        className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
          dark
            ? "bg-zinc-800 text-white border-zinc-800"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        <span>Order by: {currentSortLabel}</span>
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
      </div>

      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 w-full rounded-md shadow-lg transition-all duration-200 ${
            dark ? "bg-zinc-700 text-white" : "bg-slate-300 text-gray-800"
          }`}
        >
          {sortOrders.map((order) => (
            <li
              key={order.value}
              onClick={() => handleSelect(order.value)}
              className={`px-4 py-1 cursor-pointer hover:bg-opacity-75 transition-all text-sm ${
                dark ? "hover:bg-gray-600" : "hover:bg-slate-400"
              }`}
            >
              {order.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelector;

// import { useState } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil";
// import usePlatforms from "../hooks/usePlatforms";

// const SortSelector = ({ sortOrder, onSelectSortOrder }) => {
//   const sortOrders = [
//     { value: "", label: "Relevence" },
//     { value: "-added", label: "Date added" },
//     { value: "name", label: "Name" },
//     { value: "released", label: "Released date" },
//     { value: "-metacritic", label: "Popularity" },
//     { value: "-rating", label: "Average rating" },
//   ];
//   const dark = useRecoilValue(isDarkMode);
//   const [isOpen, setIsOpen] = useState(false);
//   //   const { sorts } = usesorts();

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

//   const handleSelect = (sort) => {
//     // onSelectsort(sort); // Pass to parent
//     onSelectSortOrder(sort);

//     setIsOpen(false); // Close dropdown
//   };

//   const currentSortLabel = sortOrders.find(
//     (order) => order.value === sortOrder
//   );

//   return (
//     <div className="relative w-50">
//       <div
//         className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
//           dark
//             ? "bg-zinc-800 text-white border-zinc-800"
//             : "bg-white text-gray-800 border-gray-300"
//         }`}
//         onClick={toggleDropdown}
//       >
//         {/* <span>{sortOrder?.name || "Order by: Relevence"}</span> */}
//         <span>Order by: {currentSortLabel?.label || "Relevance"}</span>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//           />
//         </svg>
//       </div>

//       {isOpen && (
//         <ul
//           className={`absolute z-10 mt-1 w-full rounded-md shadow-lg transition-all duration-200 ${
//             dark ? "bg-zinc-700 text-white" : "bg-slate-300 text-gray-800"
//           }`}
//         >
//           {sortOrders.map((order) => (
//             <li
//               key={order.value}
//               onClick={() => handleSelect(order.value)}
//               className={`px-4 py-1 cursor-pointer hover:bg-opacity-75 transition-all text-sm ${
//                 dark ? "hover:bg-gray-600" : "hover:bg-slate-400"
//               }`}
//             >
//               {order.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SortSelector;
