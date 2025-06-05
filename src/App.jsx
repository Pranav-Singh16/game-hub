import Navbar from "./components/navbar-mobile-laptop";

function App() {
  return (
    <div>
      <div className="hidden lg:block">
        <nav className="bg-red-400">Nav</nav>
        <span className="flex">
          <div className="bg-yellow-400 w-1/2">Aside</div>
          <div className="bg-blue-400 w-1/2">Main</div>
        </span>
      </div>

      <div className="lg:hidden">
        <nav className="bg-red-400">Nav</nav>
        <div className="bg-blue-400">Main</div>
      </div>
    </div>
  );
}

export default App;
