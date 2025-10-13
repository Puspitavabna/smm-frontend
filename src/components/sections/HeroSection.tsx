import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
const HeroSection = () => {
    return (
        // <section className="text-white py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        //     <div className="max-w-7xl mx-auto px-6">

        //         {/* Shared White Background for Both Columns */}
        //         <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        //             {/* Left Content */}
        //             <div className="text-center md:text-left">
        //                 <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        //                     Boost Your <span className="text-purple-500">Social Media</span> Presence
        //                 </h1>

        //                 <p className="text-gray-200 mb-8 text-lg">
        //                     Get more followers, engagement, and visibility with our advanced SMM solutions.
        //                 </p>

        //                 {/* Buttons */}
        //                 <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        //                     <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30 w-full sm:w-auto">
        //                         View Services
        //                     </button>

        //                     <button className="bg-gray-800/70 px-8 py-3 rounded-lg text-lg font-medium border border-purple-600 hover:bg-gray-700 transition-all w-full sm:w-auto">
        //                         Get Started
        //                     </button>
        //                 </div>
        //             </div>

        //             {/* Right Image */}
        //             <div className="flex justify-center md:justify-end">
        //                 <Image
        //                     src="/monitor.png"
        //                     alt="SMM Dashboard"
        //                     width={500}
        //                     height={400}
        //                     className="rounded-xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform duration-500"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="text-white py-10 bg-gradient-to-b from-purple-900 via-black to-purple-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Navbar */}
               <Navbar />


                {/* Shared Background for Content */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg pl-10 pr-10 pt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-5">
                    {/* Left Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
                            Boost Your <span className="text-purple-500">Social Media</span> Presence
                        </h1>
                        <p className="text-gray-200 mb-8 text-lg">
                            Take your social media to the next level with proven growth tools, authentic engagement, and a powerful online presence that sets you apart from the competition and drives real results.
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
                            src="/monitor.png" // Update this path to your monitor image
                            alt="SMM Dashboard"
                            width={500}
                            height={400}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
