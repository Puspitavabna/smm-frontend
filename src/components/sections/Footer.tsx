import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 relative clip-path-polygon">
          {/* UHQ SMM Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">UHQ SMM</h3>
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
              <a href="#" className="text-purple-400 hover:text-white">WhatsApp</a>
              <a href="#" className="text-purple-400 hover:text-white">Telegram</a>
              <a href="#" className="text-purple-400 hover:text-white">Instagram</a>
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