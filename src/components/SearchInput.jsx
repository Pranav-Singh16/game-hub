import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

const SearchInput = () => {
  const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state

  return (
    <div className="flex">
      <input
        name="myInput"
        placeholder={"Search Games..."}
        className={`
          w-[100%] // Make the input take up the remaining space
          px-4 py-2
          border rounded-md
          ${
            darkMode
              ? "bg-zinc-800 text-white border-zinc-600"
              : "bg-white text-black border-gray-300"
          }
          focus:outline-none focus:outline-none focus:ring-0
        `}
      />
    </div>
  );
};

export default SearchInput;

// import React from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state

//   return (
//     <div>
//       <input
//         name="myInput"
//         defaultValue={"Search Games..."}
//         className={`
//           w-full
//           px-4 py-1
//           border rounded-md
//           ${
//             darkMode
//               ? "bg-zinc-800 text-white border-zinc-600 focus:outline-none focus:ring-0"
//               : "bg-white text-black border-gray-300 focus:outline-none focus:ring-0"
//           }
//           // For tablets and up (md:), set the width to 20% and add a margin of 60px
//           md:w-1/5 md:ml-[60px]
//           // For laptops and up (lg:), apply 20% left margin (ml-[20%])
//           lg:ml-[84%]
//         `}
//       />
//     </div>
//   );
// };

// export default SearchInput;

// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state

//   return (
//     <div>
//       <input
//         name="myInput"
//         className={`
//           w-full
//           px-4 py-1
//           border rounded-md
//           ${
//             darkMode
//               ? "bg-zinc-800 text-white border-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-zinc-00"
//               : "bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
//           }
//         `}
//       />
//     </div>
//   );
// };

// export default SearchInput;

// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
//   return (
//     <div>
//       <input
//         name="myInput"
//         className={`
//           w-full
//           px-4 py-2
//           border rounded-md
//           ${
//             darkMode
//               ? "bg-gray-800 text-white border-gray-600"
//               : "bg-white text-black border-gray-300"
//           }
//           focus:outline-none focus:ring-2 focus:ring-indigo-500
//         `}
//       />
//     </div>
//   );
// };

// export default SearchInput;
