"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-800 text-white shadow-md sticky top-0">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">MyCompany</h1>
        </div>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 items-center`}
        >
          <a href="/" className="py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </a>
          <a href="/product" className="py-2 px-4 hover:bg-gray-700 rounded">
            Product
          </a>
          <a href="/teams" className="py-2 px-4 hover:bg-gray-700 rounded">
            Teams
          </a>
          <a href="/about" className="py-2 px-4 hover:bg-gray-700 rounded">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
