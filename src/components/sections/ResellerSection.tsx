import React from "react";




const ResellerSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative">
                    {/* Left Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-3xl font-bold mb-4 leading-tight">
                            Empowering Resellers with the Fastest and Most Reliable SMM Panel
                        </h1>
                        <p className="text-gray-300 mb-8 text-lg">
                           {` Discover unparalleled convenience and excellence in social media marketing with SMM VIP. The industry's foremost SMM panel for resellers. Our platform offers a seamless experience, providing access to premium services and tools tailored to elevate your SMM ventures.`}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30 w-full sm:w-auto">
                                Create Account
                            </button>
                            <button className="bg-gray-800/70 px-8 py-3 rounded-lg text-lg font-medium border border-purple-600 hover:bg-gray-700 transition-all w-full sm:w-auto">
                                Get Discounts
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="text-center md:text-left">
                        <ul className="space-y-4">
                            <li className="flex items-center text-white">
                                <span className="w-3 h-3 bg-purple-500 mr-2 inline-block "></span>
                                Premium Services
                                <span className="ml-auto text-gray-300">→</span>
                            </li>
                            <li className="flex items-center text-white">
                                <span className="w-3 h-3 bg-purple-500 mr-2 inline-block "></span>
                                Seamless Integration
                                <span className="ml-auto text-gray-300">→</span>
                            </li>
                            <li className="flex items-center text-white">
                                <span className="w-3 h-3 bg-purple-500 mr-2 inline-block "></span>
                                Real-Time Analytics
                                <span className="ml-auto text-gray-300">→</span>
                            </li>
                            <li className="flex items-center text-white">
                                <span className="w-3 h-3 bg-purple-500 mr-2 inline-block "></span>
                                24/7 Support
                                <span className="ml-auto text-gray-300">→</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>


    );
};

export default ResellerSection;
