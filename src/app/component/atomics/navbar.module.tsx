"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change navbar style when scrolling down
      } else {
        setIsScrolled(false); // Revert back to original style when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-blue-900 shadow-lg"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300"
          >
            Space Enough
          </a>
        </div>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 items-center`}
        >
          <a
            href="/"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/product"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Product
          </a>
          <a
            href="/teams"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Teams
          </a>
          <a
            href="/about"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
