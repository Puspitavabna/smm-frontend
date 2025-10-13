import React from "react";

const StatsSection = () => {
    const stats = [
        { value: "89.2K+", label: "Influencers" },
        { value: "700+", label: "Quality Leads" },
        { value: "30.1K+", label: "Trusted Customers" },
    ];

    return (
        <section className="bg-gradient-to-b from-purple-900 via-black to-purple-900 py-16 text-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className="py-6 md:py-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-500">
                            {stat.value}
                        </h2>
                        <p className="text-gray-400 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default StatsSection;
