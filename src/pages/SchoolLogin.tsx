import React, { useEffect, useState } from "react";
import { Mail, Lock, Power, ArrowLeft, ShieldCheck, Github, Chrome, Twitter, CheckCircle2, RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import healthyrooLogo from "@/assets/logo/healthyroo-logo.svg";
import loginBg from "@/assets/health-assessment-doctor.png";
import s1 from "@/assets/schools/school-1.png";
import s2 from "@/assets/schools/school-2.png";
import s3 from "@/assets/schools/school-3.png";
import s4 from "@/assets/schools/school-4.png";
import { toast } from "sonner";


const SchoolLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === "admin@school.edu.au" && password === "password") {
        toast.success("Welcome back, Springfield Academy!");
        navigate("/school/dashboard");
      } else if (email && password) {
        // For demo purposes, any non-empty credentials will work
        toast.success("Login successful!");
        navigate("/school/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      {/* Left Column: Visual & Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#111] items-center justify-center p-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={loginBg}
            alt="Healthcare professionals"
            className="w-full h-full object-cover opacity-30 grayscale scale-110 hover:scale-100 transition-transform duration-[10s] ease-linear"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EE1D26]/60 via-black/80 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-lg text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-2xl">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-[500] uppercase er leading-[0.9] mb-6">
                Safeguarding <br />
                <span className="text-primary italic">Student</span> Health.
              </h1>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-8">
                Access your school's health dashboard, track clinical metrics, and manage student wellness programs with our unified platform.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[s1, s2, s3, s4].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white overflow-hidden flex items-center justify-center">
                      <img src={src} alt={`School ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-[500] uppercase st opacity-60">Trusted by 125+ Schools</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] -z-0" />
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white relative">
        {/* Top Header Mobile */}
        <div className="p-6 md:p-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-[500] text-xs uppercase st">
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
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-[500] text-foreground uppercase er mb-4">
                Welcome <span className="text-primary">Back.</span>
              </h2>
              <p className="text-muted-foreground font-medium">Logged in to manage your school's portal.</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-[500] uppercase  mb-3 text-muted-foreground">School Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    placeholder="admin@school.edu.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none rounded-2xl py-5 pl-14 pr-6 font-semibold text-foreground transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-[500] uppercase  mb-3 text-muted-foreground text-right flex justify-between">
                  <span>Password</span>
                  <Link to="#" className="text-primary hover:underline lowercase ">Forgot?</Link>
                </label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#F9F9F9] border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none rounded-2xl py-5 pl-14 pr-6 font-semibold text-foreground transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-primary/20 transition-all checked:bg-primary"
                  />
                  <CheckCircle2 className="absolute left-0 top-0 h-5 w-5 text-white opacity-0 transition-opacity peer-checked:opacity-100 p-0.5" />
                </div>
                <label htmlFor="remember" className="text-sm font-[500] text-muted-foreground cursor-pointer select-none">Remember this device</label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white font-[500] py-5 rounded-2xl shadow-xl shadow-red-500/10 hover:shadow-red-500/30 hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    SIGNING IN <RotateCcw className="w-5 h-5 animate-spin" />
                  </span>
                ) : (
                  <>
                    SIGN IN <Power className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Alternate Logins */}
            <div className="mt-12">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                <span className="relative bg-white px-4 text-[10px] font-[500] uppercase text-gray-400">Or continue with</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Google", icon: Chrome },
                  { name: "Github", icon: Github },
                  { name: "X", icon: Twitter }
                ].map(brand => (
                  <button key={brand.name} className="flex items-center justify-center py-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors group">
                    <brand.icon className="w-5 h-5 text-gray-400 group-hover:text-foreground transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-12 text-center text-sm font-[500] text-muted-foreground">
              New to HealthyRoo? <Link to="/school-signup" className="text-primary hover:underline">Register your school</Link>
            </p>
          </motion.div>
        </div>


        {/* Bottom Footer */}
        <div className="p-10 text-center lg:text-left mt-auto">
           <p className="text-[10px] font-[500] text-gray-300 uppercase tracking-widest leading-loose">
              © 2026 healthyroo • <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link> • <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link> <br className="lg:hidden" />
              • Powered by immersive Infotech
           </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolLoginPage;
