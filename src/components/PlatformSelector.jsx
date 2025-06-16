import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }) => {
  const dark = useRecoilValue(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const { platforms } = usePlatforms();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (platform) => {
    onSelectPlatform(platform); // Pass to parent
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative w-30 md:w-50">
      <div
        className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${
          dark
            ? "bg-zinc-800 text-white border-zinc-800"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedPlatform?.name || "Platforms"}</span>
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
          {platforms.map((platform) => (
            <li
              key={platform.id}
              onClick={() => handleSelect(platform)}
              className={`px-4 py-1 cursor-pointer hover:bg-opacity-75 transition-all text-sm ${
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
