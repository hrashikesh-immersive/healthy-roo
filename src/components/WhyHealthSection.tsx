import whyHealthDoctorLemon from "@/assets/why-health-doctor-lemon.png";
import whyHealthSmilingGirl from "@/assets/smiling-girl.png";
import customClipboard from "@/assets/custom-clipboard.png";

const WhyHealthSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Collage Section */}
          <div className="flex-1 relative order-2 lg:order-1 select-none">
            {/* Collage Container */}
            <div className="relative h-[450px] md:h-[600px] w-full max-w-[600px] mx-auto lg:mx-0 mt-8">

              {/* Layer 1: Doctor with Lemon - Top Left */}
              <div className="absolute top-0 left-0 w-[65%] h-[55%] z-20 group">
                <div
                  className="absolute inset-0 shadow-lg"
                  style={{
                    clipPath: "url(#brush-mask-1)",
                    WebkitClipPath: "url(#brush-mask-1)"
                  }}
                >
                  <img
                    src={whyHealthDoctorLemon}
                    alt="Doctor with lemon"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Layer 2: Background Male Doctor - Middle Center */}
              {/* <div className="absolute top-[20%] left-[25%] w-[60%] h-[50%] z-10 opacity-80 group">
                <div 
                  className="absolute inset-0 grayscale-[0.2]"
                  style={{
                    clipPath: "url(#brush-mask-2)",
                    WebkitClipPath: "url(#brush-mask-2)"
                  }}
                >
                  <img 
                    src={whyHealthSmilingGirl} 
                    alt="Healthcare background" 
                    className="absolute w-[150%] h-[150%] max-w-none left-[-40%] top-[-10%] object-cover"
                  />
                </div>
              </div> */}

              {/* Layer 3: Smiling Girl - Bottom Right */}
              <div className="absolute bottom-[5%] right-0 w-[65%] h-[60%] z-30 group">
                <div
                  className="absolute inset-0 shadow-2xl"
                  style={{
                    clipPath: "url(#brush-mask-3)",
                    WebkitClipPath: "url(#brush-mask-3)"
                  }}
                >
                  <img
                    src={whyHealthSmilingGirl}
                    alt="Smiling girl"
                    className="absolute w-[180%] h-[180%] max-w-none left-[-55%] top-[-30%] object-scale-down transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Decorative Doodles - Top Right (Green Circle) */}
              <div className="absolute top-[-40px] right-[10%] z-40">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-[#EBF7F2] opacity-80 blur-[2px]" />
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-[-15deg]">
                    <path d="M70,30 Q90,30 90,50 T70,70 T50,50 T70,30 Z" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" className="opacity-20" />
                    <path d="M50,15 C80,15 80,85 50,85 C20,85 20,15 50,15 Z" fill="none" stroke="#4F46E5" strokeWidth="1.5" className="opacity-30" />
                  </svg>
                </div>
              </div>

              {/* Decorative Doodles - Bottom Left (Orange Dashes) */}
              <div className="absolute bottom-4 left-[-20px] z-40 transform rotate-[-5deg]">
                <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-1.5 bg-[#FF9D41] rounded-full opacity-70 transform rotate-[25deg]" />
                  ))}
                </div>
              </div>

            </div>

            {/* Re-defined Rugged Brush Masks */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="brush-mask-1" clipPathUnits="objectBoundingBox">
                  <path d="M0,0.15 C0.05,0.05 0.15,0.08 0.25,0.02 C0.35,0.05 0.45,0 0.55,0.05 C0.65,0.02 0.75,0.08 0.85,0.03 C0.95,0.05 1,0.15 1,0.3 C0.98,0.45 1,0.6 0.95,0.75 C0.9,0.85 0.95,0.95 0.8,1 C0.65,0.98 0.5,1 0.35,0.95 C0.2,0.98 0.05,1 0,0.9 C0.02,0.75 0,0.6 0.05,0.45 C0,0.3 0.05,0.15 0,0.15 Z" />
                </clipPath>
                <clipPath id="brush-mask-2" clipPathUnits="objectBoundingBox">
                  <path d="M0.1,0.05 C0.25,0 0.4,0.08 0.5,0.02 C0.65,0.05 0.8,0.01 0.95,0.1 C1,0.3 0.98,0.5 1,0.7 C0.95,0.85 1,0.98 0.85,1 C0.7,0.95 0.55,1 0.4,0.98 C0.25,1 0.1,0.95 0,0.9 C0.05,0.75 0,0.55 0.02,0.35 C0,0.2 0.05,0.1 0.1,0.05 Z" />
                </clipPath>
                <clipPath id="brush-mask-3" clipPathUnits="objectBoundingBox">
                  <path d="M0.1,0.1 C0.2,0.02 0.4,0.05 0.6,0.01 C0.8,0.05 0.9,0.02 1,0.15 C0.98,0.35 1,0.55 0.95,0.75 C0.9,0.85 0.95,0.98 0.8,1 C0.6,0.95 0.4,1 0.2,0.98 C0.05,1 0,0.85 0.02,0.65 C0,0.45 0.05,0.25 0.1,0.1 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Right Text Content Section */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-4">
              Why Health, Why now
            </h2>
            <p className="text-primary font-bold text-xl mb-8">
              This is the lifestyle our children lead today
            </p>

            <div className="space-y-6 mb-12">
              <p className="text-foreground text-base leading-relaxed max-w-[550px]">
                Australia is one of the youngest countries in the world but it is also facing a healthcare epidemic
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-[550px]">
                Our youth represent the foundation of Australia's future, yet many face underlying health challenges that go undetected during critical development years. We are here to provide the insights parents and schools need to ensure every student can reach their full potential.
              </p>
            </div>

            {/* Final side-by-side layout: Text and User-Provided Infographic */}
            <div className="mt-20 grid xl:grid-cols-[280px_1fr] gap-12 xl:gap-20 items-center">

              {/* Left Column: Fixed Header Text */}
              <div className="w-full max-w-[280px]">
                <h3 className="text-3xl font-black text-[#111] mb-5 leading-tight">
                  The consequences <br className="hidden xl:block" /> are
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Modern lifestyle challenges have profound impacts on physical and mental development.
                </p>
              </div>

              {/* Right Column: High-Res Infographic Image */}
              <div className="w-full flex justify-center xl:justify-end">
                <div className="relative group max-w-[650px] w-full transform transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={customClipboard}
                    alt="Health infographic clipboard analysis"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyHealthSection;

