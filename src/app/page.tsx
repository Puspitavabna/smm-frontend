//import { DashboardLayout } from '@/components/templates/DashboardLayout';
"use client";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import Benefits from "@/components/sections/Benefits";
import ResellerSection from "@/components/sections/ResellerSection";
import ToolSection from "@/components/sections/ToolSection";
import FcSection from "@/components/sections/FcSection";
import CornerImage from './images/Ellipse 22.svg';
import Footer from "@/components/sections/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import './css/style.css'
import Navbar from "@/components/sections/Navbar";
import Image from "next/image";
export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isVendorRoute = pathname.startsWith('/vendor');
  const isAdminRoute = pathname.startsWith('/admin');
  const is404Route = pathname === '/404';
  const showCornerImage = isVendorRoute || isAdminRoute;



  return (
    <div className={!isVendorRoute && !isAdminRoute ? 'frontend-body' : ''}>
      {showCornerImage && (
        <Image
          src={CornerImage}
          alt="Corner Decoration"
          style={{
            position: 'fixed',
            top: '65px',
            right: '0px',
            width: '500px',
            height: '600px',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}

      {!showCornerImage && !is404Route && <Navbar />}
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkflowSection />
      <Benefits />
      <ResellerSection />
      <ToolSection />
      <FcSection />
      <Footer />
    </div>
  );
}

// export default function Home() {
//   // return <DashboardLayout />;
// }
