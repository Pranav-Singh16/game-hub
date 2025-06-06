function NavBar() {
  return (
    <div className="flex items-center">
      <div>
        <img
          src="/images/game.svg"
          alt="home logo"
          className="w-5 sm:w-5 md:w-10" // Adjust size as needed
        />
      </div>

      <div>Nav</div>
    </div>
  );
}
export default NavBar;

{
  /* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <img
          src="/images/game.svg"
          alt="home logo"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-md"
        />
      </div> */
}
