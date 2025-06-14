import ThemeToggle from "./toggleSwitch";

function NavBar() {
  // console.log("navbar");
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          src="/images/game.svg"
          alt="home logo"
          className="w-5 sm:w-5 mx-8 md:w-10 lg: w-8 mx-7"
        />
      </div>
      <div className="pr-8">
        <ThemeToggle />
      </div>
    </div>
  );
}
export default NavBar;
