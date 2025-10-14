"use client";
import React from "react";
import { Menu, X } from 'lucide-react';
import { useState,useEffect } from 'react';
import Link from "next/link";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <nav className=" text-white px-6  relative">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-purple-500">UHQ <span className="text-white">SMM</span></div>

        {/* Center - Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Right - Register Button (Desktop) */}
        <Link href="/signup" passHref>
          <button className="hidden md:block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
            Register
          </button>
        </Link>

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
          <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>

          <Link href="/signup" passHref>
            <button className="w-full bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
              Register
            </button>
          </Link>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
