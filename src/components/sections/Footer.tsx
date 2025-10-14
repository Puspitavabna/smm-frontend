import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="py-10 bg-[#0f0f1f]  text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white/8 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 relative ">
                    {/* UHQ SMM Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-purple-500 mb-4">UHQ <span className="text-white">SMM</span></h2>
                        <p className="text-gray-300 text-sm">Build Digital Growth</p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Important Policies Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">Important Policies</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Connect With Us Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {/* WhatsApp */}
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-purple-400 hover:text-white hover:bg-purple-600 transition duration-200"
                            >
                                <FaWhatsapp />
                            </a>

                            {/* Telegram */}
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-purple-400 hover:text-white hover:bg-purple-600 transition duration-200"
                            >
                                <FaTelegramPlane />
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-purple-400 hover:text-white hover:bg-purple-600 transition duration-200"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6 text-gray-400 text-xs">
                    © 2025 UHQ SMM - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;