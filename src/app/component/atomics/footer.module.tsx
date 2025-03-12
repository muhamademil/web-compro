// components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-bold text-orange-700 mb-3">
              Space Enough
            </h2>
            <p className="text-sm leading-relaxed">
              Delivering the best services and products to grow your business.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-orange-700 text-lg font-semibold mb-2">
              Quick Links
            </h3>
            <a
              href="/about"
              className="hover:text-white transition-colors duration-200 text-sm"
            >
              About Us
            </a>
            <a
              href="/teams"
              className="hover:text-white transition-colors duration-200 text-sm"
            >
              Teams
            </a>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-orange-700 text-lg font-semibold mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <FooterIcon
                href="https://facebook.com"
                icon={<FaFacebookF size={20} />}
              />
              <FooterIcon
                href="https://tiktok.com"
                icon={<FaTiktok size={20} />}
              />
              <FooterIcon
                href="https://linkedin.com"
                icon={<FaLinkedinIn size={20} />}
              />
              <FooterIcon
                href="https://instagram.com"
                icon={<FaInstagram size={20} />}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Space Enough. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

// Komponen untuk social media icon (biar konsisten styling-nya)
const FooterIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {icon}
  </a>
);
