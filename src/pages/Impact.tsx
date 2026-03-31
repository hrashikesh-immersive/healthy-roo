import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, GraduationCap, School, MapPin } from "lucide-react";

// Assets
import heroImg from "@/assets/impact-hero-highres.png";
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

      {/* Hero Section - Elite Desktop Responsiveness */}
      <section className="relative min-h-[700px] lg:h-[90vh] lg:max-h-[850px] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Impact Hero - Official High-Res"
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
        </div>
        
        {/* Hero Headline - Single line, left aligned */}
        <div className="flex-grow flex items-center relative z-10 w-full pt-24 lg:pt-0">
          <div className="container mx-auto px-4 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.85] drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] max-w-4xl">
              OUR JOURNEY OF IMPACT
            </h1>
          </div>
        </div>
      </section>

      {/* Signature Red Metrics Banner - Separate section to allow full hero image visibility */}
      <section className="w-full bg-primary py-10 lg:py-16 relative z-20">
           <div className="container mx-auto px-4 max-w-[1400px]">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-4 lg:gap-12">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center text-white relative">
                      <div className="mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-300">
                         {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white stroke-[1.5]" })}
                      </div>
                      <div className="text-2xl md:text-3xl lg:text-6xl font-black mb-2 leading-none tracking-tight">{stat.value}</div>
                      <div className="text-[10px] lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.25em] font-black opacity-95 max-w-[160px] lg:max-w-[200px] leading-relaxed">
                        {stat.label}
                      </div>

                      {/* Vertical dividers for desktop */}
                      {i < 3 && <div className="hidden md:block absolute -right-[15%] lg:-right-[10%] top-1/2 -translate-y-1/2 w-[1px] h-24 bg-white/20" />}
                    </div>
                  ))}
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
