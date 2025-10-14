"use client";
import React from "react";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { logout } = useAuth();
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
                {!user && (
                    <Link href="/signup" passHref>
                        <button className="hidden md:block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
                            Register
                        </button>
                    </Link>
                )}

                {/* If user is logged in, show profile image with dropdown */}
                {user && (
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 focus:outline-none"
                        >
                            <Image
                                src="/monitor.png" // Update this path to your monitor image
                                alt="SMM Dashboard"
                                width={30}
                                height={30}
                                className="rounded-xl"
                            />
                            <FaChevronDown className="text-white" />
                        </button>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10 overflow-hidden">
                                {/* Profile Link */}
                                <Link
                                    href={user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
                                    className="block px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
                                >
                                    Dashboard
                                </Link>

                                {/* Settings Link */}
                                {/* <Link
                                    href="/settings"
                                    className="block px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
                                >
                                    Settings
                                </Link> */}

                                {/* Divider */}
                                <div className="border-t border-gray-700"></div>

                                {/* Logout Button */}
                                <button
                                   onClick={logout}
                                    className="w-full text-left px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>

                        )}
                    </div>
                )}
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
