import React from "react";
import aboutImg from "@/assets/health-assessment-bg.jpg"; // Placeholder mapped to visual

const LeafGraphic = () => (
  <svg 
    className="w-24 h-32 md:w-28 md:h-40 rotate-[15deg] drop-shadow-sm" 
    viewBox="0 0 100 150" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Leaf body */}
    <path 
      d="M48 135 C60 110 88 85 88 45 C88 15 50 10 50 10 C50 10 12 15 12 45 C12 85 36 110 48 135Z" 
      fill="#EEB7A2" 
    />
    {/* Stem & Veins */}
    <path 
      d="M50 10 C 50 10 45 75 58 145" 
      stroke="#642B10" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path d="M48 95 L 75 70" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 65 L 80 40" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 35 L 70 15" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 85 L 25 60" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 55 L 20 30" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 28 L 30 15" stroke="#642B10" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7F6] py-16 lg:py-24 min-h-[500px] flex items-center justify-center">
      
      {/* Massive elliptical white background simulating the convex curves on top and bottom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] lg:w-[130%] h-[120%] lg:h-[130%] bg-white rounded-[50%] z-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.01)]" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Left Floating Image Card */}
        <div className="hidden lg:block absolute left-[5%] xl:left-[10%] top-1/2 -translate-y-[55%] -rotate-[15deg] w-[220px] h-[220px] xl:w-[260px] xl:h-[260px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
          <img 
            src={aboutImg} 
            alt="Working at HealthyRoo" 
            className="w-full h-full object-cover scale-110 rotate-[5deg]" 
          />
        </div>

        {/* Right Floating Leaf Graphic */}
        <div className="hidden lg:block absolute right-[5%] xl:right-[15%] top-1/2 -translate-y-[45%]">
          <LeafGraphic />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-[650px] mx-auto px-4 py-8">
          <span className="text-primary font-bold text-base mb-5 tracking-wide">
            Call-to-action
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-[1.3] mb-8 tracking-tight">
            From freshers to experienced<br className="hidden md:block" />
            individuals, all have a chance to evolve<br className="hidden md:block" />
            at HealthyRoo. Here's what it looks like<br className="hidden md:block" />
            working at HealthuRoo.
          </h2>
          
          <button className="bg-primary text-primary-foreground font-semibold px-9 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm cursor-pointer border-none text-base">
            Get Started Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
