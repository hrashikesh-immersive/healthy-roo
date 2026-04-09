import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Upload, Send, FileText, CheckCircle2, Star } from "lucide-react";
import cultureImg from "@/assets/about-hero-highres.png";

const CareersPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* Hero / Form Section with Background */}
      <main className="relative flex-grow flex items-center justify-center py-24 px-4 overflow-hidden mt-[72px] md:mt-[88px]">
        
        {/* Full-Page Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cultureImg} 
            alt="Colleagues collaborating" 
            className="w-full h-full object-cover brightness-[0.3] contrast-[1.1] grayscale-[0.5]"
          />
          {/* Red/Teal Gradient Overlays for Brand Feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#EE1D26]/40 via-transparent to-[#26C797]/20" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Decorative Stars from PPT style */}
        <Star className="absolute top-[15%] left-[8%] text-[#FFD641] fill-current w-12 h-12 opacity-60 hidden lg:block" />
        <Star className="absolute bottom-[20%] right-[10%] text-white fill-current w-8 h-8 opacity-40 hidden lg:block" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content - Typography */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 text-white text-center lg:text-left"
            >
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Join the mission</span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-[500] uppercase er leading-[0.9] mb-8 drop-shadow-2xl">
                WORK WITH <br />
                <span className="text-primary italic">HEALTHYROO</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                Shape the future of Australian school health. Drop your resume and we'll be in touch.
              </p>
            </motion.div>

            {/* Right Side - Floating Form Card */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full max-w-[540px] bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-white/10"
            >
              {!isSubmitted ? (
                <>
                  <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-3xl font-[500] uppercase er text-foreground mb-3">Quick Apply</h2>
                    <p className="text-muted-foreground font-medium text-sm">Upload your CV and start your journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <div className="border-b-2 border-black/10 focus-within:border-[#EE1D26] transition-colors pb-2">
                        <label className="block text-[10px] font-bold uppercase text-black/40 mb-2">Full Name *</label>
                        <input type="text" className="w-full bg-transparent outline-none py-1 font-medium text-lg text-foreground" required placeholder="Full Name" />
                      </div>
                      
                      <div className="border-b-2 border-black/10 focus-within:border-[#EE1D26] transition-colors pb-2">
                        <label className="block text-[10px] font-bold uppercase text-black/40 mb-2">Email *</label>
                        <input type="email" className="w-full bg-transparent outline-none py-1 font-medium text-lg text-foreground" required placeholder="email@address.com" />
                      </div>

                      <div className="border-b-2 border-black/10 focus-within:border-[#EE1D26] transition-colors pb-2">
                        <label className="block text-[10px] font-bold uppercase text-black/40 mb-2">Position *</label>
                        <input type="text" className="w-full bg-transparent outline-none py-1 font-medium text-lg text-foreground" required placeholder="Interested Position" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-[10px] font-bold uppercase text-black/40">Resume / CV (PDF) *</label>
                      <label className="relative flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-black/10 rounded-2xl hover:bg-black/5 cursor-pointer transition-all group overflow-hidden">
                        <div className="flex flex-col items-center justify-center px-4">
                          {fileName ? (
                            <div className="flex items-center gap-3">
                              <FileText className="w-8 h-8 text-[#EE1D26]" />
                              <p className="text-sm font-bold text-foreground truncate max-w-[200px]">{fileName}</p>
                            </div>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 text-black/20 group-hover:text-[#EE1D26] transition-colors mb-2" />
                              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-foreground">Click to upload CV</p>
                            </>
                          )}
                        </div>
                        <input type="file" className="hidden" onChange={handleFileChange} required accept=".pdf" />
                      </label>
                    </div>

                    <button type="submit" className="w-full bg-[#EE1D26] text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-red-500/20 flex items-center justify-center gap-3">
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-[#EE1D26] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-[500] uppercase er mb-4">Application Sent</h2>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-10">
                    We've received your resume. Our HR team will reach out to you shortly if there's a match.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#EE1D26] font-bold uppercase text-[10px] tracking-widest hover:underline"
                  >
                    Apply for another role
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
