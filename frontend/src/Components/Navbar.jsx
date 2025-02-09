import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-background2 fixed w-full top-0 shadow-md z-10">
      {/* Left - Logo */}
      <div className="text-white font-bold text-xl">StyleScan AI</div>

      {/* Center - Menu */}
      <div className="hidden md:flex space-x-8 font-bold text-black">
        <a href="#home" className="hover:font-cursive hover:text-xl hover:text-white transition">
          Home
        </a>
        <a href="#contact" className="hover:font-cursive hover:text-xl hover:text-white transition">
          Contact
        </a>
        <a href="#support" className="hover:font-cursive hover:text-xl hover:text-white transition">
          Support
        </a>
      </div>

      {/* Right - Social Icons */}
      <div className="flex space-x-4 text-black">
        <a href="https://instagram.com" className="hover:text-white transition">
          <FaInstagram size={20} />
        </a>
        <a href="https://facebook.com" className="hover:text-white transition">
          <FaFacebookF size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
