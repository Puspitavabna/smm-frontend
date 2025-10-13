import React from "react";
import Image from "next/image";
import Navbar from "../../components/sections/Navbar";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/sections/Footer";
import ToolsSection from "@/components/sections/ToolSection";
import ToolSection from "@/components/sections/ToolSection";
const Services = () => {
    return (
        <>
            <section className="text-white py-10 bg-gradient-to-b from-purple-900 via-black to-purple-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Navbar */}
                    <Navbar />


                    {/* Shared Background for Content */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg pl-10 pr-10 pt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-5">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
                                Full Suite of Digital  <br />Account Services
                            </h1>
                            <p className="text-gray-200 mb-8 text-lg">
                                Take your social media to the next level with proven growth tools, authentic engagement, and a powerful online presence that sets you apart from the competition and drives real results.
                            </p>
                            {/* Buttons */}

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
            <section className="text-white py-10 bg-gradient-to-b from-purple-900 via-black to-purple-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Navbar */}


                    {/* Shared Background for Content */}
                    <div className="pl-10 pr-10 pt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-5">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
                                Inside UHQ Accounts
                            </h1>
                            <p className="text-gray-200 mb-8 text-lg justify-around text-gray-400">
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
                            <p className="text-gray-200 mb-8 text-lg mt-3 text-gray-400">
                                Take your social media to the next level with proven growth tools, authentic engagement, and a powerful online presence that sets you apart from the competition and drives real results.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end">
                            <Image
                                src="/about.png" // Update this path to your monitor image
                                alt="SMM Dashboard"
                                width={500}
                                height={400}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-b from-purple-900 to-black text-white p-10">
                <h1 className="text-4xl font-bold text-center mb-4">Premium Social Media Accounts for Every Need</h1>
                <p className="text-center mb-8 text-gray-300 ">
                    Explore a curated selection of high-quality, aged, <br/>and verified social media accounts tailored for businesses, agencies, and individual creators.<br/> Whether you're scaling ad campaigns, automating growth, or building brand presence.
                </p>
                <div className="px-4 py-10 ">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {[
                            {
                                title: "Secure your digital identity",
                                desc: "Verified accounts with clean history, goal for business registrations, outreach, and backups.",
                            },
                            {
                                title: "TikTok Creator Accounts",
                                desc: "Launch your next hit with active, high-performance TikTok accounts built for creators.",
                            },
                            {
                                title: "YouTube Monetized Channels",
                                desc: "Access channels eligible for monetization — perfect for content creators and ad revenue.",
                            },
                            {
                                title: "Grow your influence instantly",
                                desc: "Aged and verified Twitter accounts, perfect for networking, marketing, and building influence.",
                            },
                            {
                                title: "Growth-Ready",
                                desc: "Clean and aged accounts ideal for marketers, e-commerce brands, and influencers.",
                            },
                            {
                                title: "Pages with Fans",
                                desc: "Buy Facebook pages with established fanbases for branding, marketing, and outreach.",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 w-full max-w-xs p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow"
                            >
                                <h2 className="text-lg font-semibold mb-2 text-white">{card.title}</h2>
                                <p className="text-gray-400 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <ToolSection/>
            <Footer />
        </>

    );
};

export default Services;
