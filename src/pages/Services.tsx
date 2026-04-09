import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2, Stethoscope, HeartPulse, ShieldCheck, Smartphone,
  ChevronRight, ArrowRight, ClipboardCheck, Users, Target, Heart,
  Sparkles, Shield, BarChart3, Activity, Brain, Apple, Droplets
} from "lucide-react";

// Assets
import healthAssessmentImg from "@/assets/health-assessment-doctor.png";
import healthCenterImg from "../assets/health-center-infirmary.png";
import changemakersImg from "../assets/changemakers-girl.png";
import nursePortrait from "../assets/school-nurse-portrait.png";
import { Link } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as any,
  },
};

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Health Assessments",
      tag: "CLINICAL EXCELLENCE",
      desc: "Our gold-standard screening process covers over 70 parameters across vision, dental, ENT, and physical health, ensuring comprehensive screening as per international standards.",
      icon: Stethoscope,
      bg: "bg-primary/5",
      iconColor: "text-primary"
    },
    {
      title: "Digital Health Reports",
      tag: "REAL-TIME INSIGHTS",
      desc: "Seamless tracking via our proprietary platform. Instant parent notifications and comprehensive dashboards for school administrators.",
      icon: Smartphone,
      bg: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      title: "Wellness Programs",
      tag: "ENGAGEMENT",
      desc: "Student-led 'Changemakers' clubs focus on nutrition, mental health, and physical activity through engaging monthly interactive modules.",
      icon: HeartPulse,
      bg: "bg-accent-color/5",
      iconColor: "text-accent-color"
    },
    {
      title: "On-Campus Care",
      tag: "INFRASTRUCTURE",
      desc: "Fully equipped health hubs staffed by qualified professionals and supported by continuous backup systems and insurance protection.",
      icon: ShieldCheck,
      bg: "bg-green-500/5",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-[72px] md:pt-[88px]">
      <Navbar />

      {/* Inner Page Hero - Clean and centered like Contact Page */}
      <section className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight mb-6">
              SCHOOL HEALTH <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              Comprehensive healthcare solutions designed to build a benchmark of health and safety in educational institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid - Clean Inner Page Style */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="flex flex-col p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all h-full bg-white group"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`${service.iconColor} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed flex-grow">
                  {service.desc}
                </p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section 1: Clinical Assessments (Alternating) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={healthAssessmentImg} alt="Health Assessments" className="w-full h-auto" />
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight uppercase tracking-tight">
                Establish a benchmark of <span className="text-primary italic">Clinical Health</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                Our assessments are conducted annually by certified professionals. We evaluate over 70 clinical parameters to ensure every student's health is monitored against global benchmarks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Vision Screening", "Dental Hygiene", "ENT Assessments", "Growth Metrics"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-wide text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Health Hubs (Alternating) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={healthCenterImg} alt="Health Infrastructure" className="w-full h-auto" />
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight uppercase tracking-tight">
                World-Class <span className="text-secondary italic">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                We provide end-to-end health infrastructure to schools, including trained medical staff and a fully-equipped infirmary module that meets Australian safety standards.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-[#F9F9F9] rounded-2xl border-l-4 border-secondary">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Qualified Medical Staff</p>
                  <p className="text-xs text-muted-foreground font-medium">Certified nurses and doctors deployed on campus for continuous support.</p>
                </div>
                <div className="p-6 bg-[#F9F9F9] rounded-2xl border-l-4 border-secondary">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Insurance & Safety</p>
                  <p className="text-xs text-muted-foreground font-medium">Comprehensive accidental coverage and emergency evacuation plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Workflow - Cleaned up */}
      <section className="py-20 bg-accent-color text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 underline underline-offset-[12px] decoration-white/20">
            The Wellness <span className="text-primary">Journey</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Onboarding", icon: Users, desc: "Seamless integration with school management." },
              { title: "Screening", icon: ClipboardCheck, desc: "Comprehensive clinical health assessments." },
              { title: "Engagement", icon: HeartPulse, desc: "Monthly wellness interactive activities." },
              { title: "Ready", icon: Shield, desc: "24/7 emergency preparedness on campus." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-accent-color transition-all">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                <p className="text-sm font-medium opacity-80 max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Inner Page Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 lg:p-16 bg-[#F9F9F9] rounded-[3rem] text-center border border-gray-100 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight mb-6">
              Transform Health at Your School
            </h2>
            <p className="text-muted-foreground text-lg font-medium mb-12 max-w-xl mx-auto">
              Discover how HealthyRoo can help you establish a gold standard in student health and safety.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-white font-bold px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-black transition-all shadow-lg">
                Book a Consultation
              </Link>
              <Link to="/about" className="bg-white border border-gray-200 text-foreground font-bold px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-50 transition-all">
                About US
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
