"use client";
import React from "react";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" text-white px-6  relative">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-purple-400">UHQ SMM</div>

        {/* Center - Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
        </div>

        {/* Right - Register Button (Desktop) */}
        <button className="hidden md:block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
          Register
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
          <button className="w-full bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
            Register
          </button>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
