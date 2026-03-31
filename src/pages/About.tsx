import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Users } from "lucide-react";

// Assets
import logo from "@/assets/logo/healthyroo-logo.svg";
import heroImg from "@/assets/about-hero-highres.png";
import visionImg from "@/assets/hero-boy-yellow.jpg"; 
import teamLeadImg from "@/assets/hero-nurse-blue.jpg"; // Placeholder CEO
import sunImg from "@/assets/sun-graphic.png";
import bulbImg from "@/assets/bulb-icon.png";
import impactGif from "@/assets/Gif_Graph.gif";
import t1 from "@/assets/team-1.png";
import t2 from "@/assets/team-2.png";
import t3 from "@/assets/team-3.png";
import t4 from "@/assets/team-4.png";
import doctorGreen from "@/assets/hero-doctor-green.png";
import schoolNurse from "@/assets/school-nurse-portrait.png";
import workshopNurse from "@/assets/how-it-works-nurse.png";
import careerMan from "@/assets/career-contact-man.png";

const HexTeamMember = ({ 
  color = "bg-muted", 
  active = false, 
  imgSrc, 
  objectPosition = "center",
  scale = "scale-100",
  className = ""
}: { 
  color?: string; 
  active?: boolean; 
  imgSrc?: string;
  objectPosition?: string;
  scale?: string;
  className?: string;
}) => (
  <div className={`w-[130px] h-[150px] md:w-[170px] md:h-[190px] lg:w-[200px] lg:h-[225px] relative transition-all duration-300 hover:scale-110 shrink-0 ${className} ${active ? 'filter drop-shadow-[0_20px_40px_rgba(238,29,38,0.5)]' : 'filter drop-shadow-md'}`}>
     <div className={`w-full h-full ${color} flex items-center justify-center overflow-hidden`} 
          style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>
        {imgSrc ? (
           <img src={imgSrc} className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${scale}`} style={{ objectPosition }} alt="Team Member" />
        ) : active ? (
          <div className="text-white text-center p-2 flex flex-col items-center justify-center h-full">
             <p className="font-black text-[12px] md:text-sm lg:text-lg uppercase leading-tight mb-0.5">Alice Miller</p>
             <p className="text-[10px] md:text-xs lg:text-sm font-bold opacity-90 uppercase tracking-wider">CEO</p>
          </div>
        ) : (
          <Users className="w-8 h-8 md:w-12 md:h-12 text-gray-300 opacity-40" />
        )}
     </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Section 1: Who We Are / Hero - Refined Offsets */}
      <section className="relative h-[650px] md:h-[800px] lg:h-[900px] flex items-center overflow-visible bg-white border-b-8 border-primary">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="HealthyRoo Australian School Engagement"
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          />
        </div>

        {/* Brand Circle Area - Stable Circle Logic */}
        <div className="container relative z-20 mx-auto px-4 lg:px-12 h-full flex items-center justify-center md:justify-end">
            <div className="relative md:absolute md:bottom-0 md:right-0 lg:right-0 w-[300px] h-[300px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] shrink-0 bg-primary rounded-full flex flex-col items-center justify-center text-center text-white p-6 md:p-12 lg:p-16 shadow-[0_60px_150px_rgba(227,62,51,0.3)] md:transform md:translate-y-[25%] lg:translate-y-[30%] mt-20 md:mt-0 z-30">
               
               {/* Sun Graphic */}
               <div className="absolute top-[12%] left-[12%] transform -translate-x-1/2 -translate-y-1/2">
                 <img src={sunImg} alt="Sun" className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg" />
               </div>

               {/* Lightbulb Doodle */}
               <div className="absolute bottom-[8%] right-[10%] transform rotate-[-8deg] z-30">
                 <img 
                   src={bulbImg} 
                   alt="Innovation Seed" 
                   className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain brightness-0 invert opacity-95" 
                 />
               </div>

               <div className="z-10 flex flex-col items-center justify-center pt-4">
                 <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-3 md:mb-5 uppercase whitespace-nowrap">
                   WHO WE ARE
                 </h1>
                 
                 <p className="text-[10px] md:text-sm lg:text-lg font-black uppercase tracking-[0.1em] mb-3 md:mb-6 max-w-[240px] md:max-w-[380px] leading-[1.2] opacity-95">
                   THE SCHOOL HEALTH PARTNER FOR A <br className="hidden md:block" /> HEALTHIER FUTURE
                 </p>

                 {/* Thin white divider */}
                 <div className="w-12 md:w-24 h-[1px] bg-white/30 mb-5 md:mb-8" />

                 <p className="text-[10px] md:text-base lg:text-lg leading-relaxed font-bold opacity-90 max-w-[240px] md:max-w-lg">
                   HealthyRoo is Australia's largest healthcare organization for
                   primary and secondary schools with the mission to nurture the world's 
                   largest network of health promoting schools.
                 </p>
              </div>

               {/* Red Star below circle */}
               <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 hidden lg:block">
                 <Star className="w-14 h-14 text-primary fill-current" />
               </div>
            </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission - Coordinated Vertical Spacing */}
      <section className="pt-40 pb-24 md:pt-64 md:pb-40 lg:pt-80 lg:pb-56 relative bg-white overflow-hidden">
         <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
            <div className="flex flex-col lg:flex-row items-center justify-center relative">
               
               {/* Vision Panel - Overlapping Focal Point */}
               <div className="relative z-20 flex flex-col md:flex-row items-center lg:translate-x-[-40px]">
                  {/* Overlapping Image of Child */}
                  <div className="relative -mb-12 md:-mb-0 md:-mr-16 z-30 transform hover:scale-105 transition-transform duration-500">
                     <div className="w-[180px] h-[240px] md:w-[280px] md:h-[350px] lg:w-[320px] lg:h-[400px]">
                        <img 
                          src={visionImg} 
                          alt="Healthy Student - Australia" 
                          className="w-full h-full object-cover shadow-[40px_0_80px_rgba(0,0,0,0.1)]" 
                        />
                     </div>
                  </div>

                  {/* Red Star ornaments */}
                  <Star className="absolute -top-16 left-[5%] text-primary w-10 h-10 fill-current opacity-90 hidden md:block" />

                  {/* Yellow Box - Geometric Precision */}
                  <div className="bg-secondary p-8 md:p-12 w-full md:w-[500px] lg:w-[600px] h-[300px] md:h-[340px] flex flex-col justify-center items-end text-right shadow-2xl z-20">
                     <div className="max-w-[320px]">
                        <span className="text-primary font-black text-lg lg:text-2xl tracking-widest mb-4 block">
                           VISION
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#111] leading-[0.9] uppercase tracking-tighter">
                           EVERY<br />CHILD<br />HEALTHY
                        </h2>
                     </div>
                  </div>

                  <Star className="absolute -bottom-20 right-[15%] text-primary w-12 h-12 fill-current opacity-90" />
               </div>

               {/* Mission Panel - Horizontal Staggering */}
               <div className="relative z-10 w-full lg:w-[700px] bg-muted p-10 md:p-16 lg:p-24 pt-32 lg:pt-16 lg:pl-40 -mt-16 lg:-mt-0 lg:-ml-32 min-h-[420px] flex flex-col justify-center items-start shadow-inner">
                  {/* Mission Text Content */}
                  <div className="mb-12">
                     <span className="text-primary font-black text-lg lg:text-2xl tracking-widest mb-4 block">
                        MISSION
                     </span>
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-[1.1] uppercase tracking-tighter">
                        1 Million Students<br />Impacted By<br />2030
                     </h2>
                  </div>
                  
                  {/* Animated Graph Overlay */}
                  <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-[180px] md:w-[240px] lg:w-[320px] transform hover:scale-[1.03] transition-transform duration-500">
                     <img 
                       src={impactGif} 
                       alt="HealthyRoo Australian Growth Projection" 
                       className="w-full h-auto"
                     />
                  </div>

                  <Star className="absolute -top-12 right-[25%] text-primary w-8 h-8 fill-current opacity-80" />
               </div>

            </div>
         </div>
      </section>

      {/* Section 3: Sustainable Healthcare */}
      <section className="bg-primary py-16 lg:py-24 text-white overflow-hidden">
         <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                  Sustainable<br />Healthcare
               </h2>
               <p className="text-lg lg:text-xl leading-relaxed mb-12 opacity-90 font-medium">
                  HealthyRoo supports the UN Sustainable Development Goals (SDGs) through its 
                  various health initiatives for public and private schools across Australia.
               </p>
               {/* SDG Logo Placeholder Block */}
               <div className="bg-white rounded-lg p-5 inline-flex items-center gap-6 shadow-md">
                 <img src={logo} alt="HealthyRoo" className="h-10 opacity-80" />
                 <div className="w-px h-10 bg-gray-200" />
                 <span className="text-[#1A73E8] font-black text-xl tracking-tight">
                   SUSTAINABLE<br className="sm:hidden" /> DEVELOPMENT <span className="text-[#34A853]">GOALS</span>
                 </span>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
               {/* SDG Icons (mock) */}
               {[
                 { id: 3, color: "#4C9F38", label: "GOOD HEALTH\nAND WELL-BEING" },
                 { id: 4, color: "#C5192D", label: "QUALITY\nEDUCATION" },
                 { id: 6, color: "#26BDE2", label: "CLEAN WATER\nAND SANITATION" },
                 { id: 10, color: "#DD1367", label: "REDUCED\nINEQUALITIES" },
                 { id: 12, color: "#BF8B2E", label: "RESPONSIBLE\nCONSUMPTION" },
                 { id: 17, color: "#19486A", label: "PARTNERSHIPS\nFOR THE GOALS" }
               ].map(sdg => (
                 <div key={sdg.id} style={{backgroundColor: sdg.color}} className="aspect-square p-2 md:p-3 flex flex-col justify-between rounded-sm shadow-inner transform transition-transform hover:scale-[1.03]">
                    <span className="text-xl md:text-2xl font-black">{sdg.id}</span>
                    <span className="text-[8px] md:text-[10px] font-bold leading-none uppercase whitespace-pre-wrap">{sdg.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Section 4: Awards & Media */}
      <section className="py-20 bg-background overflow-hidden">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col gap-12">
               
               {/* Awards Bar */}
               <div className="flex flex-col lg:flex-row items-stretch gap-6">
                  <div className="bg-accent-color text-white py-8 px-10 flex items-center justify-center shrink-0 rounded-xl">
                     <span className="text-2xl font-black uppercase tracking-widest leading-none">
                        OUR<br />AWARDS
                     </span>
                  </div>
                  <div className="flex-1 flex flex-wrap items-center justify-around gap-10 px-6 grayscale transition-all hover:grayscale-0">
                     <span className="font-bold text-2xl text-gray-400">FORBES 30U30</span>
                     <span className="font-bold text-2xl text-gray-400">IDA DESIGN</span>
                     <span className="font-bold text-2xl text-gray-400">HEALTH TECH '26</span>
                     <span className="font-bold text-2xl text-gray-400">AUSSTARTUP</span>
                  </div>
               </div>

               {/* Featured In Bar */}
               <div className="flex flex-col lg:flex-row-reverse items-stretch gap-6">
                  <div className="bg-[#EE1D26] text-white py-8 px-10 flex items-center justify-center shrink-0 rounded-xl">
                     <span className="text-2xl font-black uppercase tracking-widest text-right leading-none">
                        WE ARE<br />FEATURED IN
                     </span>
                  </div>
                  <div className="flex-1 flex flex-wrap items-center justify-around gap-10 px-6 grayscale transition-all hover:grayscale-0">
                     <span className="font-bold text-xl text-gray-500 italic">Financial Review</span>
                     <span className="font-bold text-xl text-gray-500">The Sydney Morning Herald</span>
                     <span className="font-bold text-xl text-gray-400">ABC NEWS</span>
                     <span className="font-bold text-xl text-gray-500">Herald Sun</span>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Section 5: Team - Re-engineered for Vanguard Structure */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
            {/* Leadership Header */}
            <div className="text-center mb-24 uppercase">
              <span className="text-primary font-black text-sm tracking-[0.3em] mb-4 block">OUR LEADERSHIP</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#111] leading-[0.9] tracking-tighter">
                THE MINDS<br />BEHIND THE<br />MOTION.
              </h2>
            </div>
            
            {/* CEO Spotlight Section */}
            <div className="max-w-[800px] mx-auto flex flex-col items-center mb-32">
               <div className="relative mb-12">
                  {/* Decorative Overlapping Hexagon (Light Pink as specified in structure) */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 md:w-32 md:h-32 bg-[#FDE8E9] -z-10" 
                       style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}} />
                  
                  {/* Main CEO Hexagon */}
                  <div className="relative w-[280px] h-[310px] md:w-[360px] md:h-[400px] overflow-hidden bg-[#111] group shadow-2xl" 
                       style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>
                     <img src={teamLeadImg} alt="Alice Miller" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     
                     {/* Red CEO Badge */}
                     <div className="absolute bottom-10 right-4 bg-primary text-white py-2 px-6 font-black text-sm uppercase skew-x-[-15deg] shadow-lg">
                        <span className="skew-x-[15deg] block">CEO</span>
                     </div>
                  </div>
               </div>

               <div className="text-center max-w-2xl">
                  <h3 className="text-4xl md:text-5xl font-black text-[#111] leading-none mb-6 uppercase tracking-tighter">Alice Miller</h3>
                  <p className="text-[#666] leading-relaxed text-sm md:text-base font-medium mb-10">
                     A visionary architect of healthy ecosystems, Alice leads HealthyRoo with a relentless priority 
                     on precision and student-centric innovation. With over a decade in strategic health leadership, 
                     she harmonizes the complex standards of medical practice with the fluid needs of 
                     modern education systems across Australia.
                  </p>
                  <button className="bg-primary text-white font-black px-12 py-4 rounded-sm uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl hover:-translate-y-1">
                    Read Manifesto
                  </button>
               </div>
            </div>

            {/* The Collective - Diamond Grid */}
            <div className="relative pt-12 pb-24 h-auto">
               <div className="flex items-center justify-center mb-16 relative">
                  <div className="absolute left-0 right-0 h-px bg-muted -z-10" />
                  <span className="bg-white px-8 text-primary font-black text-sm tracking-[0.4em] uppercase">THE COLLECTIVE</span>
               </div>

               <div className="flex flex-col items-center relative gap-4">
                  {/* Role Detail Typography - Centered under hexagons */}
                  
                  {/* Top Layer: M. THORNE (CTO) */}
                  <div className="flex flex-col items-center mb-4">
                    <HexTeamMember imgSrc={t2} className="hover:grayscale-0 grayscale" />
                    <div className="text-center mt-4 uppercase">
                      <p className="font-black text-lg text-[#111]">M. THORNE</p>
                      <p className="text-primary font-black text-[10px] tracking-widest mt-0.5">CTO</p>
                    </div>
                  </div>

                  {/* Middle Layer: J. BLACK & E. VANCE */}
                  <div className="flex flex-row items-center gap-4 lg:gap-20 md:-mt-10 lg:-mt-12">
                    <div className="flex flex-col items-center">
                      <HexTeamMember imgSrc={t1} className="hover:grayscale-0 grayscale" />
                      <div className="text-center mt-4 uppercase">
                        <p className="font-black text-lg text-[#111]">J. BLACK</p>
                        <p className="text-primary font-black text-[10px] tracking-widest mt-0.5">Design Lead</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <HexTeamMember imgSrc={t3} className="hover:grayscale-0 grayscale" />
                      <div className="text-center mt-4 uppercase">
                        <p className="font-black text-lg text-[#111]">E. VANCE</p>
                        <p className="text-primary font-black text-[10px] tracking-widest mt-0.5">Strategy</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Layer: S. REED (Operations) */}
                  <div className="flex flex-col items-center md:-mt-10 lg:-mt-12">
                    <HexTeamMember imgSrc={t4} className="hover:grayscale-0 grayscale" />
                    <div className="text-center mt-4 uppercase">
                      <p className="font-black text-lg text-[#111]">S. REED</p>
                      <p className="text-primary font-black text-[10px] tracking-widest mt-0.5">Operations</p>
                    </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* Section 6: Careers/Join Our Mission */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="relative min-h-[500px] flex flex-col lg:flex-row items-center justify-center lg:justify-start">
               
               {/* Large Yellow Circle Content */}
               <div className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-secondary rounded-full flex flex-col items-center justify-center p-8 md:p-14 lg:p-20 text-center lg:text-left shadow-lg">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-[#111] leading-tight mb-8">
                     FROM FRESHERS TO EXPERIENCED INDIVIDUALS, ALL HAVE A CHANCE TO EVOLVE AT HEALTHYROO. 
                     HERE'S WHAT IT LOOKS LIKE WORKING AT HEALTHYROO.
                  </h3>
                  <a href="#" className="flex items-center gap-4 text-[#111] font-black text-sm md:text-lg uppercase tracking-widest hover:translate-x-2 transition-transform">
                     JOIN OUR MISSION
                     <div className="w-12 h-[2px] bg-[#111]" />
                  </a>

                  {/* Decorative Elements inside circle logic area */}
                  <Star className="absolute top-[10%] -left-4 text-[#FFC53D] fill-current w-12 h-12 opacity-80" />
                  <Star className="absolute bottom-[20%] -left-8 text-[#FFC53D] fill-current w-8 h-8 opacity-60" />
                  
                  {/* Zigzag Doodle at bottom left */}
                  <div className="absolute -bottom-10 left-10 md:left-20">
                     <svg width="60" height="120" viewBox="0 0 60 120" className="opacity-80">
                        <path d="M10,10 L50,30 L10,50 L50,70 L10,90 L50,110" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
               </div>

               {/* Video/Image Block (Overlapping Right) */}
               <div className="relative z-20 w-full lg:w-[650px] aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl mt-12 lg:mt-0 lg:-ml-32 transform hover:scale-[1.02] transition-transform duration-500 group">
                  <img src={heroImg} alt="Working at HealthyRoo" className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                     <div className="w-20 h-20 md:w-28 md:h-28 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#EE1D26] border-b-[15px] border-b-transparent ml-2" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     Life at HealthyRoo
                  </div>
               </div>

               {/* Floating Star Right */}
               <Star className="hidden lg:block absolute top-[20%] right-[15%] text-[#FFC53D] fill-current w-10 h-10 opacity-70" />

            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
