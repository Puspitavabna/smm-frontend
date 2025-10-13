import React from "react";
import { FaUserPlus, FaBullseye, FaChartLine } from "react-icons/fa";
import { Button } from "../atoms/Button";

const steps = [
    {
        icon: <FaUserPlus size={30} />,
        title: "Create An Account & Add Balance",
        description:
            "Begin your journey with an engaging and easy onboarding experience. Once registered, you can add your account by logging in. Deposit instantly, deposit funds.",
    },
    {
        icon: <FaBullseye size={30} />,
        title: "Select Your Targeted Service",
        description:
            "Select the services you need from within the platform. Choose the one that suits your requirements and get started quickly.",
    },
    {
        icon: <FaChartLine size={30} />,
        title: "Provide Link, Quantity & Watch Results!",
        description:
            "Providing the correct link and quantity is fast and easy. Watch the results in real-time and track how much you gain with each step.",
    },
];

const WorkflowSection = () => {
    return (
        <section className="bg-gradient-to-br from-black to-gray-900 py-16 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <Button className="px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">How It Works</Button>
    <h2 className="text-3xl md:text-4xl font-bold mb-12 pt-4">
      Understanding How Our Powerful <br /> SMM System Works for You
    </h2>
    <div className="grid gap-10 md:grid-cols-3 text-center">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-purple-500 mb-4">{step.icon}</div>
          <h3 className="text-lg font-semibold mb-2 overflow-hidden text-ellipsis line-clamp-2 break-words">
            {step.title}
          </h3>
          <p className="text-gray-400 text-sm text-justify max-w-xs">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


    );
};

export default WorkflowSection;
