import React from "react";
import Image from "next/image";
const FeaturesSection = () => {
    return (
        <section className="bg-[#0f0f1f] py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">

                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        src="/about.png" // Update this path to your monitor image
                        alt="SMM Dashboard"
                        width={500}
                        height={400}
                        className="rounded-xl"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Advanced SMM Panel for All Your Needs
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Our SMM panel is a powerful tool designed to help you increase
                        your social media presence and reach. With features such as
                        automated post scheduling, real-time analytics, and targeted
                        audience engagement, you can easily manage and grow your social
                        media accounts. Whether you are an individual looking to expand
                        your reach or a small team seeking to grow your full strategy, our
                        panel has the tools you need to succeed.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default FeaturesSection;
