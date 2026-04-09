import { motion, useScroll } from "framer-motion";
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

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: { delay: number }) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1]
    } as any
  })
};

const ScrollSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    custom={{ delay }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background pt-[72px] md:pt-[88px]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[110]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <StatsTicker />
      
      <HeroSection />
      
      <ScrollSection>
        <ImpactStatsSection />
      </ScrollSection>
      
      <ScrollSection>
        <WhyHealthSection />
      </ScrollSection>
      
      <ScrollSection>
        <WhyChooseSection />
      </ScrollSection>
      
      <ScrollSection>
        <OurServicesSection />
      </ScrollSection>
      
      <ScrollSection>
        <HowItWorksSection />
      </ScrollSection>
      
      <ScrollSection>
        <SchoolStatsSection />
      </ScrollSection>
      
      <ScrollSection>
        <SchoolPartnerSection />
      </ScrollSection>
      
      <ScrollSection>
        <ParentAppSection />
      </ScrollSection>
      
      <ScrollSection>
        <TestimonialsSection />
      </ScrollSection>
      
      <ScrollSection>
        <CTASection />
      </ScrollSection>
      
      <ScrollSection>
        <BlogSection />
      </ScrollSection>
      
      <Footer />
    </div>
  );
};

export default Index;

