import React from 'react';
import { Button } from '../ui/button';

const ToolsSection = () => {
    return (
        // <section className="py-20 bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white relative overflow-hidden">
        //   <div className="max-w-7xl mx-auto px-6">
        //     <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative clip-path-polygon">
        //       {/* Left Content - Platforms */}
        //       <div className="text-center md:text-left">
        //         <h3 className="text-lg font-semibold text-gray-300 mb-6">Our Platforms</h3>
        //         <div className="grid grid-cols-3 gap-4">
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="Instagram">📸</span>
        //           </div>
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="Snapchat">👻</span>
        //           </div>
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="Facebook">👍</span>
        //           </div>
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="YouTube">🎥</span>
        //           </div>
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="LinkedIn">💼</span>
        //           </div>
        //           <div className="bg-purple-600/50 rounded-lg p-4 hover:bg-purple-700 transition-all">
        //             <span role="img" aria-label="Twitter">🐦</span>
        //           </div>
        //         </div>
        //       </div>

        //       {/* Right Content - Title, Description, Button */}
        //       <div className="text-center md:text-left">
        //         <a href="#" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">Our Services</a>
        //         <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        //           Explore Our Most Popular SMM Tools
        //         </h2>
        //         <p className="text-gray-300 mb-8 text-lg">
        //           At SMM VIP, we pride ourselves on delivering top-tier Social Media Marketing (SMM) services designed to elevate your online presence and drive unparalleled engagement. With our comprehensive suite of solutions, we empower businesses of all sizes to harness the full potential of social media platforms.
        //         </p>
        //         <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30">
        //           See All Our Services
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        <section className="bg-[#0f0f1f] py-16">
            <div className="p-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">

                {/* Left Side - Image */}
                <div className="flex-1 relative">
                    {/* White low-opacity background */}
                    <div className="absolute inset-0 bg-white/20 rounded-lg"></div>

                    {/* Image */}
                    <img
                        src="/icons.png" // replace with your uploaded image path
                        alt="SMM Panel"
                        className="w-full h-auto rounded-lg relative z-10"
                    />
                </div>


                {/* Right Side - Text */}
                <div className="flex-1 text-center md:text-left">
                    <Button className="px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">How It Works</Button>
                    <h2 className="text-2xl md:text-2xl font-bold text-white mb-4 py-2">
                        Explore Our Most<br />Popular SMM Tools
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Our SMM panel is a powerful tool designed to help you increase
                        your social media presence and reach. With features such as
                        automated post scheduling, real-time analytics, and targeted
                        audience engagement
                    </p>
                    <Button className="px-4 py-2 mt-3 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">See all our services</Button>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;