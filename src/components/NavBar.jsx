import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import ThemeToggle from "./toggleSwitch";

function NavBar({ onSearch }) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2">
      <div className="flex items-center w-full">
        {/* Logo */}
        <Link to="/" className="w-[15%] sm:w-[5%] max-w-[80px] mx-2 lg:mx-4">
          <img
            src="/images/game.svg"
            alt="home logo"
            className="w-full" // Make sure image takes full width of the Link container
          />
        </Link>
        {/* Search Input */}
        <div className="flex-grow  mx-2 lg:mx-4">
          <SearchInput onSearch={onSearch} />
        </div>
      </div>
      {/* About Link (Hidden on mobile) */}
      <Link
        to="/about"
        className="hidden sm:block px-3 py-1 rounded-md transition 
             text-gray-800 hover:bg-blue-100 hover:text-blue-700
             dark:text-gray-200 dark:hover:bg-zinc-700 dark:hover:text-white"
      >
        About
      </Link>{" "}
      {/* This hides the About link on mobile */}
      {/* Theme Toggle */}
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default NavBar;
