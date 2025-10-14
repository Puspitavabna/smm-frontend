import React from "react";
import Image from "next/image";
import Navbar from "../../components/sections/Navbar";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/sections/Footer";
const Contact = () => {
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
                                Get in Touch With <br />Our Support Team
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
            <div className="bg-gradient-to-b from-purple-900 to-black text-white p-10 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-4xl">
                    <h1 className="text-4xl font-bold text-center mb-6">Get in Touch With Our Support Team</h1>
                    <p className="text-center mb-8 text-gray-300">
                        Have a question or need help? Our team is available 24/7!<br /> Contact us and get your answers fast. Let's connect!
                    </p>

                    <form className="bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <select
                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select Subject</option>
                            <option value="support">Support</option>
                            <option value="sales">Sales</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded transition duration-200 col-span-1 md:col-span-2 justify-self-center"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>

            <Footer />
        </>

    );
};

export default Contact;
