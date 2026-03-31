import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, GraduationCap, School, MapPin, Sparkles, BarChart2, CalendarDays, Share2 } from "lucide-react";

// Assets
import heroImg from "@/assets/australian-students-impact.png";
import sydneyImg from "@/assets/impact-sydney.png";
import qldImg from "@/assets/impact-qld.png";
import vicImg from "@/assets/impact-vic.png";
import funRunImg from "@/assets/impact-funrun.png";

const ImpactPage = () => {
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

      {/* Structured Impact Hero Section */}
      <section className="relative bg-white">
        
        {/* Top Image + Overlay Text Area */}
        <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh] max-h-[700px] overflow-hidden">
          <img
            src={heroImg}
            alt="Australian Students Impact"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Base gradient fading from red at bottom over the image to add more reds */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#EE1D26] via-[#EE1D26]/80 to-transparent bottom-0 h-full lg:h-[70%] top-auto" />
          
          {/* Headlines bounded to bottom portion */}
          <div className="absolute bottom-4 lg:bottom-12 left-0 w-full z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
              <span className="text-white font-bold text-xs sm:text-sm tracking-[0.2em] lg:tracking-[0.2em] mb-2 block uppercase drop-shadow-md opacity-90">
                Our Evolution of Impact
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] drop-shadow-xl">
                Transforming
                <br />
                Education
              </h1>
            </div>
          </div>
        </div>

        {/* Mid Content Area */}
        <div className="bg-white pb-10 pt-4 md:py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
            {/* Descriptive Text block */}
            <div className="max-w-[800px] mb-12">
              <h2 className="text-[#2B3544] font-bold text-xl md:text-2xl lg:text-3xl leading-snug lg:leading-normal mb-8 tracking-tight">
                From a single classroom to a nationwide movement, our commitment to transforming education remains unwavering.
              </h2>
              <div className="pl-6 border-l-[3px] border-[#EE1D26]">
                <p className="text-[#555] text-sm md:text-[17px] leading-relaxed font-medium">
                  We started with a simple belief: every child deserves a path to success. Today, we're not just reaching students; we're empowering entire communities through data-driven innovation and human-centric design.
                </p>
              </div>
            </div>

            {/* Balanced 2x2 Stats Grid Block */}
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              
              {/* Card 1: Lives Impacted */}
              <div className="bg-[#F9F9F9] border-l-[6px] border-[#EE1D26] p-8 md:p-10 flex flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:bg-white transition-all">
                <div className="flex flex-col">
                  <span className="text-[#111] text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2">500,000+</span>
                  <span className="text-[#EE1D26] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Lives Impacted Regionally</span>
                </div>
                <Users className="w-8 h-8 md:w-12 md:h-12 text-black/10 group-hover:text-black/20 transition-colors" />
              </div>
              
              {/* Card 2: Trained Teachers */}
              <div className="bg-[#F9F9F9] border-l-[6px] border-[#EE1D26] p-8 md:p-10 flex flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:bg-white transition-all">
                <div className="flex flex-col">
                  <span className="text-[#111] text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2">364+</span>
                  <span className="text-[#EE1D26] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Trained Teachers</span>
                </div>
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-black/10 group-hover:text-black/20 transition-colors" />
              </div>
              
              {/* Card 3: Partner Schools */}
              <div className="bg-[#F9F9F9] border-l-[6px] border-[#EE1D26] p-8 md:p-10 flex flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:bg-white transition-all">
                <div className="flex flex-col">
                  <span className="text-[#111] text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2">125+</span>
                  <span className="text-[#EE1D26] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Partner Schools</span>
                </div>
                <School className="w-8 h-8 md:w-12 md:h-12 text-black/10 group-hover:text-black/20 transition-colors" />
              </div>
              
              {/* Card 4: Cities Reached */}
              <div className="bg-[#F9F9F9] border-l-[6px] border-[#EE1D26] p-8 md:p-10 flex flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:bg-white transition-all">
                <div className="flex flex-col">
                  <span className="text-[#111] text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2">42+</span>
                  <span className="text-[#EE1D26] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Cities Reached</span>
                </div>
                <MapPin className="w-8 h-8 md:w-12 md:h-12 text-black/10 group-hover:text-black/20 transition-colors" />
              </div>
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
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
