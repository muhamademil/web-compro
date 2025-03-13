"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // ✅ Import Link dari next/link

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <Link
            href="/"
            className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300"
          >
            Space Enough
          </Link>
        </div>

        {/* Mobile menu button */}
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
          <Link
            href="/"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Product
          </Link>
          <Link
            href="/teams"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            Teams
          </Link>
          <Link
            href="/about"
            className="py-2 px-4 hover:bg-slate-400 rounded transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
