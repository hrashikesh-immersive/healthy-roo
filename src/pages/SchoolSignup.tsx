import React, { useEffect } from "react";
import { Mail, Lock, Power, ArrowLeft, ShieldCheck, User, School, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import healthyrooLogo from "@/assets/logo/healthyroo-logo.svg";
import signupBg from "@/assets/health-assessment-teacher.png";

const SchoolSignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      {/* Left Column: Visual & Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#111] items-center justify-center p-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={signupBg} 
            alt="School environment" 
            className="w-full h-full object-cover opacity-30 grayscale scale-110 hover:scale-100 transition-transform duration-[10s] ease-linear" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#26C797]/60 via-black/80 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-lg text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-2xl">
               <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <School className="w-7 h-7 text-white" />
               </div>
               <h1 className="text-4xl md:text-5xl font-[500] uppercase leading-[0.9] mb-6">
                 Empower Your <br />
                 <span className="text-accent italic">School</span> Ecosystem.
               </h1>
               <p className="text-white/70 text-lg font-medium leading-relaxed mb-8">
                 Join 125+ forward-thinking schools in Australia. Start your digital health transformation and provide your students with world-class clinical care.
               </p>
               
               <div className="space-y-4">
                  {[
                    "Unified Student Health Records",
                    "Automated Clinical Assessments",
                    "Dedicated Medical Staff Support",
                    "Real-time Analytical Dashboards"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-accent" />
                       <span className="text-sm font-bold opacity-90 tracking-wide">{benefit}</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-0" />
      </div>

      {/* Right Column: Signup Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white relative overflow-y-auto">
        {/* Top Header */}
        <div className="p-6 md:p-10 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-30">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-[500] text-xs uppercase tracking-widest">
               <ArrowLeft className="w-4 h-4" />
               Back to Home
            </Link>
            <Link to="/">
               <img src={healthyrooLogo} alt="HealthyRoo" className="h-8 md:h-10 w-auto" />
            </Link>
        </div>

        {/* Center Form Container */}
        <div className="flex-grow flex items-center justify-center px-6 md:px-20 lg:px-32 py-12">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="w-full max-w-md"
            >
               <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-[500] text-foreground uppercase tracking-tighter mb-4">
                    Register <span className="text-accent">School.</span>
                  </h2>
                  <p className="text-muted-foreground font-medium">Create an account to start managing wellness.</p>
               </div>

               <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-[500] uppercase tracking-[0.2em] mb-2 text-muted-foreground">Admin Name</label>
                      <div className="relative group">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none rounded-xl py-4 pl-12 pr-4 font-semibold text-foreground transition-all placeholder:text-gray-400"
                           required
                         />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-[500] uppercase tracking-[0.2em] mb-2 text-muted-foreground">Phone</label>
                      <div className="relative group">
                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                         <input 
                           type="tel" 
                           placeholder="+61 400 000"
                           className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none rounded-xl py-4 pl-12 pr-4 font-semibold text-foreground transition-all placeholder:text-gray-400"
                           required
                         />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-[500] uppercase tracking-[0.2em] mb-2 text-muted-foreground">School Name</label>
                    <div className="relative group">
                       <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                       <input 
                         type="text" 
                         placeholder="The Melbourne High School"
                         className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none rounded-xl py-4 pl-12 pr-4 font-semibold text-foreground transition-all placeholder:text-gray-400"
                         required
                       />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-[500] uppercase tracking-[0.2em] mb-2 text-muted-foreground">Official Email</label>
                    <div className="relative group">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                       <input 
                         type="email" 
                         placeholder="admin@school.edu.au"
                         className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none rounded-xl py-4 pl-12 pr-4 font-semibold text-foreground transition-all placeholder:text-gray-400"
                         required
                       />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-[500] uppercase tracking-[0.2em] mb-2 text-muted-foreground">Create Password</label>
                    <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                       <input 
                         type="password" 
                         placeholder="••••••••"
                         className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none rounded-xl py-4 pl-12 pr-4 font-semibold text-foreground transition-all placeholder:text-gray-400"
                         required
                       />
                    </div>
                  </div>

                  <div className="py-2">
                     <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-wider">
                        By registering, you agree to HealthyRoo's <Link to="/terms" className="text-accent underline">Terms of Service</Link> and <Link to="/privacy" className="text-accent underline">Privacy Policy</Link>.
                     </p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-accent text-white font-[500] py-5 rounded-2xl shadow-xl shadow-accent/10 hover:shadow-accent/30 hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-4 group uppercase tracking-widest text-sm"
                  >
                    CREATE ACCOUNT <Power className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </button>
               </form>

               <p className="mt-10 text-center text-sm font-[500] text-muted-foreground">
                 Already have an account? <Link to="/school-login" className="text-accent hover:underline">Sign In instead</Link>
               </p>
            </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="p-10 text-center lg:text-left">
           <p className="text-[10px] font-[500] text-gray-300 uppercase tracking-widest leading-loose">
              © 2024 HealthyRoo Education • Secure Registration <br className="lg:hidden" />
              • Powered by immersive Infotech
           </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolSignupPage;
