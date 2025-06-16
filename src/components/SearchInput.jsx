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
