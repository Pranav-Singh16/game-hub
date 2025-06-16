import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import ThemeToggle from "./toggleSwitch";

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2">
      <div className="flex items-center w-full">
        {/* Logo */}
        <img
          src="/images/game.svg"
          alt="home logo"
          className="w-[15%] sm:w-[5%] max-w-[80px] mx-4" // On mobile (default) logo takes 20% width, on larger screens 10%
        />
        {/* Search Input */}
        <div className="flex-grow mx-4">
          <SearchInput />
        </div>
      </div>
      {/* About Link (Hidden on mobile) */}
      <Link to="/about" className="hidden sm:block mr-4">
        About
      </Link>{" "}
      {/* This hides the About link on mobile */}
      {/* Theme Toggle */}
      <div className="ml-4">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default NavBar;

// import { Link } from "react-router-dom";
// import SearchInput from "./SearchInput";
// import ThemeToggle from "./toggleSwitch";

// function NavBar() {
//   return (
//     <div className="flex items-center justify-between w-full px-4 py-2">
//       <div className="flex items-center w-full">
//         {/* Logo */}
//         <img
//           src="/images/game.svg"
//           alt="home logo"
//           className="w-[10%] max-w-[80px] mx-4" // Logo takes 10% of the width, max-width ensures it doesn't get too big
//         />
//         {/* Search Input */}
//         <div className="flex-grow mx-4">
//           {" "}
//           {/* Flex-grow makes the search input take up remaining space */}
//           <SearchInput />
//         </div>
//       </div>
//       {/* About Link */}
//       <Link to="/about" className="mr-4">
//         About
//       </Link>
//       {/* Theme Toggle */}
//       <div className="ml-4">
//         <ThemeToggle />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// import { Link } from 'react-router-dom';
// import SearchInput from "./SearchInput";
// import ThemeToggle from "./toggleSwitch";

// function NavBar() {
//   return (
//     <div className="flex items-center justify-between w-full px-4 py-2">
//       <div className="flex items-center w-full">
//         {" "}
//         {/* Added w-full here */}
//         {/* Logo */}
//         <img
//           src="/images/game.svg"
//           alt="home logo"
//           className="w-10 sm:w-60 md:w-10 lg:w-12 mx-4"
//         />
//         {/* Search Input */}
//         <div>
//           {/* className="flex-grow mx-4"> Ensure flex-grow is set */}
//           <SearchInput />
//         </div>
//       </div>
//       {/* Theme Toggle */}
//       <Link to="/about">About</Link>
//       <div className="ml-4">
//         {" "}
//         {/* Adjusted margin-left */}
//         <ThemeToggle />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// import SearchInput from "./SearchInput";
// import ThemeToggle from "./toggleSwitch";

// function NavBar() {
//   return (
//     <div className="flex items-center justify-between w-full px-4 py-2">
//       <div className="flex items-center">
//         {/* Logo */}
//         <img
//           src="/images/game.svg"
//           alt="home logo"
//           className="w-5 sm:w-5 md:w-10 lg:w-8 mx-4"
//         />
//         {/* Search Input */}
//         <div className="flex-grow mx-4">
//           <SearchInput />
//         </div>
//       </div>
//       {/* Theme Toggle */}
//       <div className="pr-8">
//         <ThemeToggle />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// import SearchInput from "./SearchInput";
// import ThemeToggle from "./toggleSwitch";

// function NavBar() {
//   // console.log("navbar");
//   return (
//     <div className="flex items-center justify-between">
//       <div className="flex items-center justify-between">
//         <img
//           src="/images/game.svg"
//           alt="home logo"
//           className="w-5 sm:w-5 mx-8 md:w-10 lg: w-8 mx-7"
//         />
//         <SearchInput />
//       </div>
//       <div className="pr-8">
//         <ThemeToggle />
//       </div>
//     </div>
//   );
// }
// export default NavBar;
