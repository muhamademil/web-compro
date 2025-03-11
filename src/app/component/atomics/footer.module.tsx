// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-orange-500">YourBrand</h2>
            <p className="mt-2 text-sm text-gray-400">
              Delivering the best services and products to grow your business.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
            <a href="/about" className="text-sm text-gray-400 hover:text-white">
              About Us
            </a>
            <a
              href="#services"
              className="text-sm text-gray-400 hover:text-white"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-400 hover:text-white"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="text-sm text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>&copy; 2025 YourBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
