import React from "react";
import { FaUserPlus, FaBullseye, FaChartLine } from "react-icons/fa";
import { Button } from "../atoms/Button";



const Benefits = () => {
    return (
       <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Button className="px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">Why Choose us</Button>
        <h2 className="text-2xl md:text-2xl font-extrabold mb-12 py-3">
          The Benefits of Choosing <br /> Our Advanced SMM Panel Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quality Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <div className="text-4xl mb-4 text-purple-400">💎</div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-300 text-sm">
              Experience excellence with our high-quality SMM services. As SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.
            </p>
          </div>

          {/* Affordability Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <div className="text-4xl mb-4 text-purple-400">💡</div>
            <h3 className="text-xl font-semibold mb-2">Affordability</h3>
            <p className="text-gray-300 text-sm">
              Affordability with our high-quality SMM services. As SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.
            </p>
          </div>

          {/* Speed Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <div className="text-4xl mb-4 text-purple-400">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Speed</h3>
            <p className="text-gray-300 text-sm">
              Speed excellence with our high-quality SMM services. As SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.
            </p>
          </div>

          {/* Usability Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <div className="text-4xl mb-4 text-purple-400">👆</div>
            <h3 className="text-xl font-semibold mb-2">Usability</h3>
            <p className="text-gray-300 text-sm">
              Usability excellence with our high-quality SMM services. As SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.
            </p>
          </div>
        </div>
     
      </div>
    </section>


    );
};

export default Benefits;
