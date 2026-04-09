import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Lock, Eye, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-[500] text-white er leading-[1.1] mb-6 uppercase">
              Privacy <span className="text-accent italic">Policy</span>
            </h1>
            <p className="text-[#BBBBBB] text-lg font-medium max-w-2xl leading-relaxed">
              Your data security is our highest priority. Learn how we protect and manage student and school information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 text-muted-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Principles Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="p-8 bg-neutral-900 rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative">
                   <ShieldCheck className="w-16 h-16 text-accent mb-6 opacity-20 absolute -right-4 -top-4" />
                   <h3 className="text-xl font-[500] mb-4 uppercase tracking-tighter">Our Commitment</h3>
                   <p className="text-white/70 text-sm leading-loose mb-6">
                      At HealthyRoo, we strictly adhere to the Australian Privacy Principles (APPs) and the Privacy Act 1988. We never sell your data to third parties.
                   </p>
                   <ul className="space-y-4">
                      {[
                        { icon: Lock, label: "AES-256 Encryption" },
                        { icon: Eye, label: "Strict Access Controls" },
                        { icon: Database, label: "Local AUS Servers" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <item.icon className="w-4 h-4 text-accent" />
                           <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                
                <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-[#F9F9F9]">
                   <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-widest mb-4">Contact Privacy Officer</h4>
                   <p className="text-sm mb-4">Questions regarding data handling?</p>
                   <a href="mailto:privacy@healthyroo.com" className="text-primary font-bold hover:underline">privacy@healthyroo.com</a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-2/3 max-w-2xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-neutral lg:prose-lg max-w-none"
              >
                <div className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">Information We Collect</h2>
                  <p className="leading-loose mb-6">
                    HealthyRoo collects information necessary to provide health screening services. This includes:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                    {[
                      "Student demographic data",
                      "Clinical screening results",
                      "School administrative contact info",
                      "Guardian consent records",
                      "Platform usage analytics",
                      "Medical history (where relevant)"
                    ].map((text, i) => (
                      <li key={i} className="bg-white border border-gray-100 p-4 rounded-xl text-sm font-semibold flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                         {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">How We Use Your Data</h2>
                  <p className="leading-loose mb-4">
                    The data collected is used exclusively for:
                  </p>
                  <p className="leading-loose mb-6">
                    Generating comprehensive health reports for schools and parents, identifying students who may require further clinical investigation, and improving the efficiency of our screening algorithms.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">Data Storage & Retention</h2>
                  <p className="leading-loose">
                    All sensitive medical data is stored on encrypted, Tier-IV data centers located within Australia. We retain health records for as long as required by Australian State and Territory health records legislation (typically 7 years for adults and until a minor turns 25).
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">Your Rights</h2>
                  <p className="leading-loose mb-6">
                    As an individual or school, you have the right to request access to the personal information we hold about you, request corrections, or withdraw consent for data processing (bearing in mind this may affect service delivery).
                  </p>
                </div>

                <div className="mt-20 border-t border-gray-100 pt-10">
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
                      HealthyRoo Educational Services Pty Ltd <br />
                      ABN: [Insert ABN] <br />
                      Last Revised: October 2024
                   </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
