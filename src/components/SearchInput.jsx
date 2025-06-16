import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";
import { useRef } from "react";

const SearchInput = ({ onSearch }) => {
  const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
  const ref = useRef(null);

  return (
    <div className="flex">
      <form
        onSubmit={(event) => {
          event.preventDefault(); // Prevent default form submit behavior
          if (ref.current) {
            onSearch(ref.current.value); // Ensure ref is valid
            ref.current.value = "";
            // console.log(ref.current.value);
          }
        }}
        className="w-full relative"
      >
        <input
          ref={ref}
          name="myInput"
          placeholder="Search Games..."
          autoComplete="off" // Disable autocomplete to avoid form conflicts
          className={`w-full pl-10 pr-4 py-2 border rounded-full ${
            darkMode
              ? "bg-zinc-800 text-white border-zinc-600"
              : "bg-white text-black border-gray-300"
          } focus:outline-none focus:ring-0`}
        />

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchInput;

// import { useRef } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (ref.current) console.log(ref.current.value);
//         }}
//         className={`w-full relative`} // Add relative positioning to the form for absolute positioning inside
//       >
//         {/* Input Field */}
//         <input
//           ref={ref}
//           name="myInput"
//           placeholder={"Search Games..."}
//           className={`
//             w-full
//             pl-10 // Add padding to the left to make space for the icon inside
//             pr-4 py-2
//             border rounded-full
//             ${
//               darkMode
//                 ? "bg-zinc-800 text-white border-zinc-600"
//                 : "bg-white text-black border-gray-300"
//             }
//             focus:outline-none focus:ring-0
//           `}
//         />

//         {/* Search Icon (SVG inside the input field) */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
//             darkMode ? "text-white" : "text-black"
//           } w-[80%] h-[80%]`}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//           />
//         </svg>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

// import { useRef } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located

// const SearchInput = ({ onSearch }) => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (ref.current) onSearch(ref.current.value);
//         }}
//         className={`w-full relative`} // Add relative positioning to the form for absolute positioning inside
//       >
//         {/* Input Field */}
//         <input
//           ref={ref}
//           name="myInput"
//           placeholder={"Search Games..."}
//           className={`
//             w-full
//             pl-10 // Add padding to the left to make space for the icon inside
//             pr-4 py-2
//             border rounded-full
//             ${
//               darkMode
//                 ? "bg-zinc-800 text-white border-zinc-600"
//                 : "bg-white text-black border-gray-300"
//             }
//             focus:outline-none focus:ring-0
//           `}
//         />

//         {/* Search Icon (SVG inside the input field) */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//             darkMode ? "text-white" : "text-black"
//           }`}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//           />
//         </svg>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

// import { useRef } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located
// import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (ref.current) console.log(ref.current.value);
//         }}
//         className={`w-full relative`} // Add relative positioning to the form for absolute positioning inside
//       >
//         {/* Input Field */}
//         <input
//           ref={ref}
//           name="myInput"
//           placeholder={"Search Games..."}
//           className={`
//             w-full
//             pl-10 // Add padding to the left to make space for the icon inside
//             pr-4 py-2
//             border rounded-full
//             ${
//               darkMode
//                 ? "bg-zinc-800 text-white border-zinc-600"
//                 : "bg-white text-black border-gray-300"
//             }
//             focus:outline-none focus:ring-0
//           `}
//         />

//         {/* Search Icon (Positioned inside the input field) */}
//         <FaSearch
//           className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ${
//             darkMode ? "text-white" : "text-black"
//           }`}
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

// import { useRef } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (ref.current) console.log(ref.current.value);
//         }}
//         className={`flex w-full`} // Use flex and full width for form if needed
//       >
//         <input
//           ref={ref}
//           name="myInput"
//           placeholder={"Search Games..."}
//           className={`
//             w-full // Make the input take up the remaining space
//             px-4 py-2
//             border rounded-full
//             ${
//               darkMode
//                 ? "bg-zinc-800 text-white border-zinc-600"
//                 : "bg-white text-black border-gray-300"
//             }
//             focus:outline-none focus:ring-0
//           `}
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

// import { useRef } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index"; // Assuming this is where the state is located.

// const SearchInput = () => {
//   const darkMode = useRecoilValue(isDarkMode); // Get the current mode from Recoil state\
//   const ref = useRef(null);

//   return (
//     <div className="flex">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (ref.current) console.log(ref.current.value);
//         }}
//       >
//         <input
//           ref={ref}
//           name="myInput"
//           placeholder={"Search Games..."}
//           className={`
//           w-[100%] // Make the input take up the remaining space
//           px-4 py-2
//           border rounded-md
//           ${
//             darkMode
//               ? "bg-zinc-800 text-white border-zinc-600"
//               : "bg-white text-black border-gray-300"
//           }
//           focus:outline-none focus:outline-none focus:ring-0
//         `}
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchInput;
