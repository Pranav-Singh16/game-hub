import ThemeToggle from "./toggleSwitch";

function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          src="/images/game.svg"
          alt="home logo"
          className="w-5 sm:w-5 md:w-10 lg: w-8" // Adjust size as needed
        />
      </div>
      <div className="pr-8">
        <ThemeToggle />
      </div>
    </div>
  );
}
export default NavBar;
