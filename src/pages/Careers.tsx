import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Users, Heart, Rocket, ShieldCheck, Briefcase, 
  MapPin, Clock, ArrowRight, ChevronRight, Star,
  GraduationCap, Stethoscope, Laptop, TrendingUp,
  Sparkles, Coffee, Globe, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import careerHeroImg from "@/assets/career-contact-man.png";
import lifeAtRooImg from "@/assets/how-it-works-nurse.png";
import cultureImg from "@/assets/about-hero-highres.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openRoles = [
    {
      title: "School Health Nurse",
      category: "MEDICAL OPERATIONS",
      location: "Melbourne, VIC",
      type: "Full-time",
      image: lifeAtRooImg,
      description: "Join our frontline medical team providing expert health screening and care to primary students across Victoria. You'll be the face of HealthyRoo in partner schools, ensuring the highest standards of clinical excellence."
    },
    {
      title: "Regional Operations Manager",
      category: "STRATEGY & GROWTH",
      location: "Sydney, NSW",
      type: "Full-time",
      image: cultureImg,
      description: "Drive our mission forward by managing school partnerships and operational teams across New South Wales. We're looking for a leader who can scale our impact while maintaining our human-centric approach to healthcare."
    },
    {
      title: "Health Education Specialist",
      category: "EDUCATION & CONTENT",
      location: "Brisbane, QLD",
      type: "Part-time",
      image: lifeAtRooImg, // Placeholder asset
      description: "Design and deliver engaging health workshops that inspire students to take charge of their wellbeing. You'll translate complex medical data into fun, actionable learning experiences for the next generation."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[72px] md:pt-[88px]">
      <Navbar />

      {/* Hero Section - Impact Style */}
      <section className="relative bg-white">
        <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[65vh] max-h-[750px] overflow-hidden">
          <img
            src={cultureImg}
            alt="Life at HealthyRoo"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2]"
          />
          {/* Base red gradient matching Impact page */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#EE1D26] via-[#EE1D26]/60 to-transparent bottom-0 h-full lg:h-[75%] top-auto opacity-90" />
          
          <div className="absolute bottom-6 lg:bottom-16 left-0 w-full z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" } as any}
              className="container mx-auto px-6 md:px-12 max-w-[1300px]"
            >
              <span className="text-white font-bold text-xs sm:text-sm tracking-[0.3em] mb-3 block uppercase drop-shadow-md opacity-90">
                Work With Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                JOIN THE
                <br />
                TRIBE
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Mid Intro Area - Impact Style */}
        <div className="bg-white pb-12 pt-6 md:py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
            <div className="max-w-[850px] mb-16">
              <h2 className="text-[#2B3544] font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-8 tracking-tighter uppercase">
                We're looking for makers, thinkers, and explorers to shape the future of school health.
              </h2>
              <div className="pl-6 border-l-[4px] border-[#EE1D26]">
                <p className="text-[#555] text-base md:text-xl leading-relaxed font-semibold opacity-80">
                  At HealthyRoo, your work directly contributes to nurturing a healthier generation. We value empathy, innovation, and an unwavering commitment to excellence in pediatric healthcare.
                </p>
              </div>
            </div>

            {/* 2x2 Stats/Perks Grid - Impact Style */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16"
            >
              {[
                { label: "Health & Wellbeing", val: "100%", sub: "Premium health coverage", icon: Heart },
                { label: "Flexibility", val: "Remote+", sub: "Flexible work arrangements", icon: Globe },
                { label: "Growth", val: "Unlimited", sub: "Annual learning stipends", icon: Zap },
                { label: "Impact", val: "1M+", sub: "Student lives to touch", icon: Sparkles },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants} className="bg-[#F9F9F9] border-l-[8px] border-[#EE1D26] p-6 sm:p-10 flex flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:bg-white transition-all">
                  <div className="flex flex-col">
                    <span className="text-[#111] text-3xl sm:text-5xl font-black tracking-tighter leading-none mb-2 uppercase">{stat.val}</span>
                    <span className="text-[#EE1D26] text-xs font-black uppercase tracking-[0.2em]">{stat.label}</span>
                  </div>
                  <stat.icon className="w-10 h-10 md:w-14 md:h-14 text-black/10 group-hover:text-black/20 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Roles Section - Impact style asymmetrical design */}
      <section className="py-24 lg:py-40 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
          <div className="mb-24 flex flex-col items-center lg:items-start text-center lg:text-left">
             <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.9]">
               OPEN POSITIONS<br />FOR BRIGHT MINDS
             </h2>
             <div className="w-24 h-2 bg-primary mt-8" />
             <p className="mt-8 text-muted-foreground text-lg md:text-xl font-semibold max-w-xl opacity-80">
               Join our mission-driven team across Australia. Check out our currently featured opportunities below.
             </p>
          </div>

          <div className="space-y-36 lg:space-y-56">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" } as any}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image with Organic/Asymmetrical Mask - Impact Style */}
                <div className="flex-1 w-full relative">
                  <div className={`relative z-10 overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.03] ${
                    i % 2 === 0 
                      ? "rounded-[60px_10px_60px_10px] md:rounded-[120px_20px_120px_20px]" 
                      : "rounded-[10px_60px_10px_60px] md:rounded-[20px_120px_20px_120px]"
                  }`}>
                    <img 
                      src={role.image} 
                      alt={role.title} 
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  {/* Decorative backdrop shape */}
                  <div className={`absolute -inset-4 md:-inset-8 ${i % 2 === 0 ? "bg-accent/10" : "bg-primary/10"} -z-0 ${
                    i % 2 === 0 
                      ? "rounded-[10px_60px_10px_60px] md:rounded-[20px_120px_20px_120px]" 
                      : "rounded-[60px_10px_60px_10px] md:rounded-[120px_20px_120px_20px]"
                  }`} />
                </div>

                {/* Role Content */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-2">
                    <span className="text-primary font-black text-xs tracking-[0.3em] uppercase">{role.category}</span>
                    <h3 className="text-3xl lg:text-5xl font-black text-foreground leading-[1] uppercase tracking-tighter">
                      {role.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-foreground/70">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </div>
                    <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-foreground/70">
                      <Clock className="w-3.5 h-3.5" />
                      {role.type}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-semibold opacity-90">
                    {role.description}
                  </p>

                  <button className="bg-black text-white font-black px-10 py-5 rounded-full uppercase tracking-widest text-sm hover:bg-primary transition-all flex items-center gap-4 group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Impact inspired */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9] border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
          >
             <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-8 leading-none">
               DON'T SEE YOUR<br />IDEAL ROLE?
             </h2>
             <p className="text-muted-foreground text-lg md:text-xl font-semibold mb-12 opacity-80">
               We're always looking for talents who share our passion. Drop us your portfolio or CV and let's have a chat about how you can contribute.
             </p>
             <Link 
               to="/contact" 
               className="inline-flex items-center gap-4 bg-primary text-white font-black px-12 py-6 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-red-500/20"
             >
               CONNECT WITH OUR HR <ArrowRight className="w-4 h-4" />
             </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
