import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, GraduationCap, School, MapPin } from "lucide-react";

// Assets
import heroImg from "@/assets/impact-hero-highres.png";
import impactHeroAus from "@/assets/impact-hero-aus.png";
import sydneyImg from "@/assets/impact-sydney.png";
import qldImg from "@/assets/impact-qld.png";
import vicImg from "@/assets/impact-vic.png";
import funRunImg from "@/assets/impact-funrun.png";

const ImpactPage = () => {
  const stats = [
    { icon: <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white stroke-[1.5]" />, value: "500,000+", label: "STUDENTS AND PARENTS IMPACTED" },
    { icon: <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white stroke-[1.5]" />, value: "364+", label: "TRAINED TEACHERS" },
    { icon: <School className="w-10 h-10 lg:w-12 lg:h-12 text-white stroke-[1.5]" />, value: "125+", label: "SCHOOLS" },
    { icon: <MapPin className="w-10 h-10 lg:w-12 lg:h-12 text-white stroke-[1.5]" />, value: "42+", label: "CITIES" },
  ];

  const projects = [
    {
      title: "GROWTH ASSESSMENT AND HEALTH AWARENESS AT WESTERN SYDNEY SCHOOLS",
      image: sydneyImg,
      description: "HealthyRoo marked its 5th anniversary with a growth assessment and mental awareness initiative in public schools across Western Sydney. We evaluated student health and educated students on nutrition and mental wellbeing. This initiative supports the wellbeing of students while addressing the stigma around youth mental health in school communities.",
    },
    {
      title: "THE SMART E-HEALTH PROGRAM IN QUEENSLAND WITH DEPARTMENT OF EDUCATION",
      image: qldImg,
      description: "HealthyRoo launched the Smart E-Health Program in Queensland, targeting public schools serving regional families. The initiative digitally records student health reports, leads to better tracking, and provides tele-consultations with Australian health professionals. It complements state programs like the Queensland School Health Initiative, offering follow-ups, free treatments, and medication. The project has educated on health and is expanding to more regional hubs.",
    },
    {
      title: "SAFE AND NUTRITIOUS FOOD PROGRAM WITH NUTRITION AUSTRALIA",
      image: vicImg,
      description: "HealthyRoo, appointed as a partner for the Healthy Canteen initiative, organized school-based competitions for over 2,000 students. Over 15,000 entries from 300+ schools were received. Winners were awarded by nutrition experts. A workshop with dietitians was also held for winners. HealthyRoo continues collaborating with local councils to promote healthy eating in Australian schools.",
    },
    {
      title: "THE HEALTHYROO FUN RUN - BRISBANE",
      image: funRunImg,
      description: "The HealthyRoo Fun Run is an annual initiative by HealthyRoo to spread awareness about the importance of family fitness and active lifestyles. Students, parents, and teachers come together to run on the occasion of World Health Day. The HealthyRoo Run takes into focus the Global Theme of the year for the event. Last year's event saw over 1,000 students from schools across Brisbane running for health.",
    },
    {
      title: "MEASURING IMPACT WITH LOCAL HEALTH FOUNDATIONS",
      image: heroImg, // Reusing hero for now
      description: "Collaborating with local Australian health foundations to deliver data-driven insights into student wellbeing. This partnership allows schools to take proactive steps in addressing common health issues like vision impairment, dental hygiene, and childhood obesity through regular screening and evidence-based interventions.",
    },
    {
      title: "YOUTH WELLBEING & RESILIENCE WORKSHOPS",
      image: sydneyImg, // Reusing assets
      description: "HealthyRoo has conducted resilience and emotional safety workshops across primary schools in South Australia. These sessions educate over 5,000 children on personal boundaries, emotional regulation, and seeking help when needed. The program aims to empower the next generation with the tools they need for long-term mental resilience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Structural Hero inspired by the provided reference */}
      <section className="bg-[#FAF9F6]">
        {/* Dark Hero Background with bottom fading to background color */}
        <div className="relative w-full h-[450px] md:h-[600px] lg:h-[70vh]">
          <img 
            src={impactHeroAus}
            alt="Australian Students Impact"
            className="w-full h-full object-cover object-top brightness-[0.8] contrast-[1.1]"
          />
          {/* Subtle dark overlay at the top if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3" />
          {/* Smooth fade to the light background color at the bottom */}
          <div className="absolute bottom-0 w-full h-[60%] lg:h-[75%] bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
          
          {/* Header Text overlay perfectly aligned at the bottom of the image container */}
          <div className="absolute bottom-0 w-full pb-8 md:pb-12">
            <div className="container mx-auto px-6 max-w-[1100px]">
              <span className="text-[#EE1D26] font-bold text-xs md:text-sm tracking-[0.25em] uppercase block mb-3 drop-shadow-sm">
                 OUR EVOLUTION OF IMPACT
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-[75px] font-black text-[#111] leading-[0.9] tracking-tighter uppercase relative z-10 drop-shadow-md">
                 TRANSFORMING<br />EDUCATION
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section below Header */}
        <div className="container mx-auto px-6 max-w-[1100px] py-16 md:py-24 relative z-20">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Left Column Text (Paragraphs) */}
              <div className="flex-1 flex flex-col space-y-8 lg:pr-10">
                 <p className="text-lg md:text-xl lg:text-[22px] font-bold text-[#333] leading-snug">
                    From a single classroom to a nationwide movement, our commitment to transforming education remains unwavering.
                 </p>
                 <div className="border-l-[3px] border-[#EE1D26] pl-6 py-2">
                    <p className="text-[#555] leading-relaxed text-sm lg:text-base font-medium">
                       We started with a simple belief: every child deserves a path to success. Today, we're not just reaching students; we're empowering entire communities through data-driven innovation and human-centric design.
                    </p>
                 </div>
              </div>

              {/* Right Column Grid (Stats) */}
              <div className="flex-1 flex flex-col">
                 <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
                    {/* Stat Card 1: White/Light */}
                    <div className="bg-white p-6 lg:p-10 rounded shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] text-center lg:text-left">
                       <span className="text-[40px] lg:text-[54px] font-black text-[#EE1D26] mb-1 leading-none tracking-tighter">500K+</span>
                       <span className="text-[10px] lg:text-xs font-black text-gray-600 uppercase tracking-widest leading-none">IMPACTED</span>
                    </div>
                    {/* Stat Card 2: Gray */}
                    <div className="bg-[#f2f2f2] p-6 lg:p-10 rounded flex flex-col justify-center transform transition-transform duration-300 hover:-translate-y-1 text-center lg:text-left">
                       <span className="text-[40px] lg:text-[54px] font-black text-[#111] mb-1 leading-none tracking-tighter">364+</span>
                       <span className="text-[10px] lg:text-xs font-black text-gray-600 uppercase tracking-widest leading-none">TEACHERS</span>
                    </div>
                    {/* Stat Card 3: Gray */}
                    <div className="bg-[#f2f2f2] p-6 lg:p-10 rounded flex flex-col justify-center transform transition-transform duration-300 hover:-translate-y-1 text-center lg:text-left">
                       <span className="text-[40px] lg:text-[54px] font-black text-[#111] mb-1 leading-none tracking-tighter">125+</span>
                       <span className="text-[10px] lg:text-xs font-black text-gray-600 uppercase tracking-widest leading-none">SCHOOLS</span>
                    </div>
                    {/* Stat Card 4: Red */}
                    <div className="bg-[#EE1D26] p-6 lg:p-10 rounded shadow-xl flex flex-col justify-center transform transition-transform duration-300 hover:-translate-y-1 text-center lg:text-left">
                       <span className="text-[40px] lg:text-[54px] font-black text-white mb-1 leading-none tracking-tighter">42+</span>
                       <span className="text-[10px] lg:text-xs font-black text-white/95 uppercase tracking-widest leading-none">CITIES</span>
                    </div>
                 </div>
                 
                 {/* Full width button below grid */}
                 <button className="w-full mt-6 bg-[#EE1D26] text-white font-black py-[22px] rounded text-[13px] tracking-[0.15em] uppercase hover:opacity-90 shadow-xl transition-all hover:-translate-y-[2px]">
                    VIEW FULL TIMELINE
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Special Projects Section - Asymmetrical Design */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
          <div className="mb-24 flex flex-col items-center lg:items-start">
             <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
               Special Projects<br />That Sparked Change
             </h2>
             <div className="w-24 h-2 bg-primary mt-6" />
          </div>

          <div className="space-y-32 lg:space-y-48">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image with Organic/Asymmetrical Mask */}
                <div className="flex-1 w-full relative">
                  <div className={`relative z-10 overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.03] ${
                    i % 2 === 0 
                      ? "rounded-[60px_10px_60px_10px] md:rounded-[120px_20px_120px_20px]" 
                      : "rounded-[10px_60px_10px_60px] md:rounded-[20px_120px_20px_120px]"
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  {/* Decorative background shape */}
                  <div className={`absolute -inset-4 md:-inset-8 ${i % 2 === 0 ? "bg-accent/5" : "bg-primary/5"} -z-0 ${
                    i % 2 === 0 
                      ? "rounded-[10px_60px_10px_60px] md:rounded-[20px_120px_20px_120px]" 
                      : "rounded-[60px_10px_60px_10px] md:rounded-[120px_20px_120px_20px]"
                  }`} />
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  <h3 className="text-2xl lg:text-4xl font-black text-foreground leading-[1.1] uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-semibold opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
