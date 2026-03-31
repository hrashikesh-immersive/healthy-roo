import { CheckCircle2 } from "lucide-react";
import whyChooseLaptop from "@/assets/why-choose-laptop.png";
import whyChooseDoctor from "@/assets/why-choose-doctor.png";

const assessments = [
  "Qualified Medical Professionals",
  "Detailed Digital Health Reports",
  "State-of-The-Art Equipment",
  "Convenient Scheduling",
  "Strict Hygiene Protocols",
  "Early Intervention",
];

const WellnessGraphic = () => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 120 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-primary/40"
  >
    {/* Outer circle */}
    <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="2.5" fill="none" />
    
    {/* Center Meditating Figure (Abstract) */}
    <circle cx="60" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
    {/* Body */}
    <path d="M60 48v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Arms */}
    <path d="M48 55 Q 60 70 72 55" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Legs folded in lotus */}
    <path d="M42 75 Q 60 85 78 75" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M42 75 Q 60 85 78 75" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M45 78 Q 60 78 75 78" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    
    {/* Gear Top Left */}
    <circle cx="25" cy="25" r="18" fill="rgba(238, 30, 37, 0.05)" />
    <circle cx="25" cy="25" r="6" fill="currentColor" />
    <path 
      d="M25 10v5 M25 35v5 M10 25h5 M35 25h5 M15 15l3.5 3.5 M31.5 31.5l3.5 3.5 M35 15l-3.5 3.5 M18.5 31.5l-3.5 3.5" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    
    {/* Lotus Bottom Right */}
    <circle cx="95" cy="95" r="18" fill="rgba(238, 30, 37, 0.05)" />
    <path d="M95 82 C 90 90, 88 95, 88 95 C 88 95, 102 95, 102 95 C 102 95, 100 90, 95 82 Z" fill="currentColor" />
    <path d="M86 95 C 86 95, 90 88, 93 85 C 90 93, 84 96, 84 96 Z" fill="currentColor" />
    <path d="M104 95 C 104 95, 100 88, 97 85 C 100 93, 106 96, 106 96 Z" fill="currentColor" />
  </svg>
);

const WhyChooseSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* Left Content */}
          <div className="flex-1 lg:max-w-md xl:max-w-lg z-20">
            <span className="text-[#EE1D26] font-bold text-sm md:text-base mb-3 block uppercase tracking-wider">
              Australia first program with
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Why Choose Our Assessments?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              HealthyRoo is the first of its kind in Australia, providing professional assessments by specialized medical teams, helping schools and parents work together for better student health outcomes.
            </p>
            <ul className="space-y-4 mb-10">
              {assessments.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 shrink-0 stroke-[1.2]" />
                  <span className="font-medium text-base">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
              Learn more
            </button>
          </div>

          {/* Right Content - Images */}
          <div className="flex-1 relative w-full h-[500px] lg:h-auto min-h-[500px] lg:min-h-[600px] z-10 flex items-center justify-center lg:justify-end">
            
            {/* Background pill image */}
            <div className="absolute top-1/2 left-0 md:left-[5%] lg:left-0 -translate-y-1/2 w-[65%] sm:w-[55%] h-[90%] rounded-[5rem] overflow-hidden shadow-xl z-10">
              <img
                src={whyChooseLaptop}
                alt="Detailed Digital Health Reports Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Foreground squircle image */}
            <div className="absolute top-[55%] right-0 md:right-[5%] lg:right-[2%] -translate-y-[40%] w-[58%] sm:w-[48%] h-[65%] rounded-[3.5rem] overflow-hidden shadow-2xl z-20 bg-background border-[6px] border-white/10">
              <img
                src={whyChooseDoctor}
                alt="Qualified Medical Professional with child"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Graphic Element */}
            <div className="absolute -top-10 -right-6 md:right-[5%] lg:-top-12 lg:right-0 z-30 drop-shadow-xl animate-pulse">
              <WellnessGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
