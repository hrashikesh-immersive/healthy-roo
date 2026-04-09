import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, FileText, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-[500] text-white er leading-[1.1] mb-6 uppercase">
              Terms & <span className="text-primary italic">Conditions</span>
            </h1>
            <p className="text-[#BBBBBB] text-lg font-medium max-w-2xl leading-relaxed">
              Last updated: October 24, 2024. Please read these terms carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Table of Contents / Sidebar */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 p-8 bg-[#F9F9F9] rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Legal Docs</span>
                </div>
                
                <nav className="space-y-4">
                  {['Overview', 'User Accounts', 'Services', 'Intellectual Property', 'Limitation of Liability', 'Termination'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm font-semibold text-neutral-600 hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-neutral lg:prose-lg max-w-none text-muted-foreground"
              >
                <div id="overview" className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">1. Acceptance of Terms</h2>
                  <p className="mb-6 leading-loose">
                    By accessing or using HealthyRoo (the "Platform"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Platform. HealthyRoo provides school health screening services and administrative tools for educational institutions across Australia.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                    <p className="text-sm font-semibold text-neutral-800 italic">
                      "Usage of our clinical assessment tools requires explicit consent from guardians as per Australian healthcare regulations."
                    </p>
                  </div>
                </div>

                <div id="user-accounts" className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">2. User Accounts & Security</h2>
                  <p className="mb-6 leading-loose">
                    Schools and administrators are responsible for maintaining the confidentiality of their login credentials. You agree to notify HealthyRoo immediately of any unauthorized use of your account.
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "Accounts are non-transferable between institutions.",
                      "Password complexity must meet our minimum security standards.",
                      "Multi-factor authentication is recommended for all administrative logins."
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span className="text-sm font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="services" className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">3. Professional Services</h2>
                  <p className="leading-loose">
                    Our platform facilitates clinical health screenings conducted by qualified medical professionals. While we strive for absolute accuracy in data processing, clinical diagnosis remains the responsibility of the attending medical practitioners.
                  </p>
                </div>

                <div id="intellectual-property" className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">4. Intellectual Property Rights</h2>
                  <p className="leading-loose">
                    All content, including text, graphics, logos, and software, is the property of HealthyRoo or its content suppliers and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works without explicit written permission.
                  </p>
                </div>

                <div id="limitation-of-liability" className="mb-12">
                  <h2 className="text-2xl font-[500] text-neutral-900 uppercase tracking-tight mb-6">5. Limitation of Liability</h2>
                  <p className="leading-loose">
                    To the maximum extent permitted by law, HealthyRoo shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the platform. Our total liability is limited to the fees paid by the user for the service in the preceding 12 months.
                  </p>
                </div>

                <div className="mt-20 p-10 bg-neutral-900 rounded-[2.5rem] text-center">
                  <h3 className="text-white text-xl font-[500] mb-4 uppercase">Have questions about our terms?</h3>
                  <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
                    Our legal team is here to help you understand your rights and responsibilities.
                  </p>
                  <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Contact Legal Support
                  </Link>
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

export default TermsAndConditions;
