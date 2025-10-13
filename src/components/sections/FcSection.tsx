import React from 'react';
import { Button } from '../ui/button';

const FcSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 relative">

      {/* Centered Button */}
      <div className="col-span-full flex justify-center mb-6">
        <Button className="px-6 py-3 bg-gray-900/60 border border-purple-600 rounded-lg text-white font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
          How It Works
        </Button>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-12 col-span-full text-center">
        Answers to the Most <br /> Common Questions from Our Users
      </h2>

      {/* FAQ 1 */}
      <div className="mx-auto max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">01. How fast will I receive my account after purchase?</h3>
          <p className="text-gray-300 text-sm">
            Instant! Once payment is confirmed, account details are instantly sent to your registered email. Verify payment details to ensure a smooth and quick delivery process.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="mx-auto max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">02. Are all accounts verified and clean?</h3>
          <p className="text-gray-300 text-sm">
            Yes! All accounts are premium, fully verified, and clean. We ensure high-quality accounts, followers, likes, comments, etc., delivered from authentic and reliable social media providers with no issues.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="mx-auto max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">03. What payment methods are accepted?</h3>
          <p className="text-gray-300 text-sm">
            We accept secure payments via Crypto, Credit Cards, and other trusted methods. Ensure payment details are accurate for a seamless and secure transaction process.
          </p>
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="mx-auto max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">04. What happens if an account has an issue after delivery?</h3>
          <p className="text-gray-300 text-sm">
            We offer a 48-hour replacement guarantee for any issues. If an account has any problems, contact our support team for a swift resolution and assistance.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


    );
};

export default FcSection;