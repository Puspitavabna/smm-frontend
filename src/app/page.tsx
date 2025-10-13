//import { DashboardLayout } from '@/components/templates/DashboardLayout';
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import Benefits from "@/components/sections/Benefits";
import ResellerSection from "@/components/sections/ResellerSection";
import ToolSection from "@/components/sections/ToolSection";
import FcSection from "@/components/sections/FcSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkflowSection />
      <Benefits />
      <ResellerSection />
      <ToolSection />
      <FcSection />
      <Footer/>
    </main>
  );
}

// export default function Home() {
//   // return <DashboardLayout />;
// }
