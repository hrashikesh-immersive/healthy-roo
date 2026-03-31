import React from "react";
import { Mail, Lock, Power } from "lucide-react";
import healthyrooLogo from "@/assets/logo/healthyroo-logo.svg";

const SchoolLoginPage = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Soft brand glow effects */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-[480px] bg-background rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-border p-8 md:p-12 relative z-10 flex flex-col items-center">
        {/* Brand Logo Inside Card */}
        <div className="mb-10 transition-transform hover:scale-105">
           <img 
              src={healthyrooLogo} 
              alt="HealthyRoo Education Login" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
           />
        </div>

        <h2 className="text-muted-foreground text-xl md:text-2xl font-medium mb-10 text-center w-full">
           Login to your account
        </h2>

        <form className="space-y-6">
          {/* Username Field */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors">
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-md py-3.5 pl-12 pr-4 text-gray-700 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-gray-400 font-medium whitespace-nowrap"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors">
              <Lock className="w-5 h-5 stroke-[1.5]" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-md py-3.5 pl-12 pr-4 text-gray-700 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-gray-400 font-medium whitespace-nowrap"
            />
          </div>

          {/* Card Footer Actions */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3 cursor-pointer group">
               <input 
                type="checkbox" 
                id="remember" 
                className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent" 
              />
              <label htmlFor="remember" className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors cursor-pointer">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center gap-3 bg-accent hover:opacity-90 text-white font-bold px-8 py-3 rounded-md shadow-[0_5px_15px_rgba(54,179,162,0.3)] transition-all active:scale-95 group"
            >
              <Power className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="uppercase tracking-widest text-xs">LOGIN</span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer / Copyright Optional Link */}
      <div className="mt-12 text-muted-foreground text-xs font-medium tracking-wide uppercase">
        © 2024 HealthyRoo Education. All Rights Reserved.
      </div>
    </div>
  );
};

export default SchoolLoginPage;
