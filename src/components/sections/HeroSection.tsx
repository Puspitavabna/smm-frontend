import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from '../../app/assets/heroImage.png'
import Instagram2 from '../../app/assets/ist.png'
import Snap2 from '../../app/assets/Snap2.png'
import Linkedin2 from '../../app/assets/linkedin2.png'
import Navbar from "./Navbar";
// import Snap from '../../app/assets/snap.png'
import Logo from '../../app/assets/UHQ SMM.png';
// import Layer from '../../app/assets/Layer_1.png'
import './HeroSection.css'
import '../../app/globals.css'

import Boxes1 from '../../app/assets/Boxes1.png'
import Ellipse25 from '../../app/assets/Ellipse25.png'
const HeroSection = () => {
    return (
        <>
            <section className="relative text-white py-10 overflow-hidden bg-gradient-to-r from-[#1c0c3f] to-[#0f0f2f]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Navbar */}
                    <Navbar />

                    {/* Hero Content with hero shape */}
                    <div className="bg-hero border border-white/10 shadow-lg pl-10 pr-10 pt-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-5 backdrop-blur-sm relative">

                        {/* Logo at top-left */}
                        <div className="absolute top-6 left-6 text-2xl font-bold text-purple-500 z-10">
                            UHQ <span className="text-white">SMM</span>
                        </div>

                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Boost Your <span className="text-purple-500">Social Media</span> Presence
                            </h1>
                            <p className="text-gray-200 mb-8 text-lg">
                                Take your social media to the next level with proven growth tools,
                                authentic engagement, and a powerful online presence that sets you apart
                                from the competition and drives real results.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                                <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30 w-full sm:w-auto">
                                    Get Started
                                </button>
                                <button className="bg-gray-800/70 px-8 py-3 rounded-lg text-lg font-medium border border-purple-600 hover:bg-gray-700 transition-all w-full sm:w-auto">
                                    View Services
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end">
                            <Image
                                src="/monitor.png"
                                alt="SMM Dashboard"
                                width={500}
                                height={400}
                                className="rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </section>




        </>
    );
};

export default HeroSection;
