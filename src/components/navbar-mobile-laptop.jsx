import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6">
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu (2 items + hamburger) */}
      <div className="lg:hidden flex items-center space-x-4">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Dropdown Mobile Menu (other 4 links) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white px-4 py-2 flex flex-col space-y-2 shadow-lg lg:hidden">
          <a href="#" className="hover:text-blue-500">
            Services
          </a>
          <a href="#" className="hover:text-blue-500">
            Portfolio
          </a>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
