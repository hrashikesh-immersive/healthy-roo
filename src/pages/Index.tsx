import Navbar from "@/components/Navbar";
import StatsTicker from "@/components/StatsTicker";
import HeroSection from "@/components/HeroSection";
import ImpactStatsSection from "@/components/ImpactStatsSection";
import WhyHealthSection from "@/components/WhyHealthSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import OurServicesSection from "@/components/OurServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SchoolStatsSection from "@/components/SchoolStatsSection";
import SchoolPartnerSection from "@/components/SchoolPartnerSection";
import ParentAppSection from "@/components/ParentAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StatsTicker />
      <HeroSection />
      <ImpactStatsSection />
      <WhyHealthSection />
      <WhyChooseSection />
      <OurServicesSection />
      <HowItWorksSection />
      <SchoolStatsSection />
      <SchoolPartnerSection />
      <ParentAppSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
