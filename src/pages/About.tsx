import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useContactPopup } from "@/context/ContactPopupContext";

const containerVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
};

const itemVariants: Variants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as any,
   },
};


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

// SDG Icons
import sdg3 from "@/assets/sdg-3.png";
import sdg4 from "@/assets/sdg-4.png";
import sdg6 from "@/assets/sdg-6.png";
import sdg10 from "@/assets/sdg-10.png";
import sdg12 from "@/assets/sdg-12.png";


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
         style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
         {imgSrc ? (
            <img src={imgSrc} className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${scale}`} style={{ objectPosition }} alt="Team Member" />
         ) : active ? (
            <div className="text-white text-center p-2 flex flex-col items-center justify-center h-full">
               <p className="font-[500] text-[12px] md:text-sm lg:text-lg uppercase leading-tight mb-0.5">Smit Tanksale</p>
               <p className="text-[10px] md:text-xs lg:text-sm font-[500] opacity-90 uppercase r">CEO</p>
            </div>
         ) : (
            <Users className="w-8 h-8 md:w-12 md:h-12 text-gray-300 opacity-40" />
         )}
      </div>
   </div>
);

const AboutPage = () => {
   const { openPopup } = useContactPopup();
   return (
      <div className="min-h-screen bg-white font-sans pt-[72px] md:pt-[88px]">
         <Navbar />

         {/* Section 1: Who We Are / Hero - Precision Layout Match */}
         <section className="relative w-full overflow-visible bg-white">

            {/* Image Backdrop bounded above lower area */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]"
            >
               <img
                  src={heroImg}
                  alt="HealthyRoo Australian School Engagement"
                  className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
               />
            </motion.div>

            {/* Container strictly bound to the image height to ensure accurate overlapping placement */}
            <div className="absolute top-0 left-0 w-full h-[300px] md:h-[500px] lg:h-[600px] z-20 pointer-events-none flex items-end">
               <div className="container mx-auto px-4 lg:px-12 flex justify-center md:justify-end">
                  {/* High-Impact Red Circle positioned identically to screenshot - Proportions Scaled Down for Visibility */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8, x: 50 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     transition={{ duration: 1, delay: 0.5, ease: "easeOut" } as any}
                     className="pointer-events-auto relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] bg-[#EE1D26] rounded-full flex flex-col items-center justify-center text-center text-white p-4 md:p-8 lg:p-10 translate-y-[25%] shadow-xl shadow-red-500/10"
                  >

                     {/* Sun Doodle Graphic */}
                     <div className="absolute top-[8%] left-[2%] md:top-[10%] md:left-[3%] w-6 md:w-12 lg:w-16">
                        <img src={sunImg} alt="Sun highlight" className="w-full h-full object-contain" />
                     </div>

                     {/* Lightbulb Doodle Graphic */}
                     <div className="absolute bottom-[10%] lg:bottom-[15%] right-[10%] lg:right-[12%] w-5 md:w-10 lg:w-12 rotate-[-12deg]">
                        <img
                           src={bulbImg}
                           alt="Innovation Lightbulb"
                           className="w-full h-full object-contain brightness-0 invert opacity-90"
                        />
                     </div>

                     {/* Inner Typography Layout */}
                     <h1 className="text-3xl md:text-4xl lg:text-[48px] font-[500] uppercase  mb-2 md:mb-4 drop-shadow-sm leading-none pt-2 lg:pt-3 whitespace-nowrap">
                        WHO WE ARE
                     </h1>

                     <h2 className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-[500] uppercase mb-3 md:mb-5 leading-[1.8] lg:leading-[2] opacity-95">
                        THE SCHOOL HEALTH PARTNER FOR<br />A<br />HEALTHIER FUTURE
                     </h2>

                     <div className="w-8 md:w-16 lg:w-24 h-[1px] bg-white/40 mb-3 md:mb-5" />

                     <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-relaxed lg:leading-[1.6] font-semibold opacity-100 max-w-[200px] md:max-w-none">
                        HealthyRoo is Australia's leading AI‑powered school health <br className="hidden md:block" />
                        ecosystem, transforming educational institutions into proactive <br className="hidden md:block" />
                        hubs of well‑being and lifelong student success.
                     </p>
                  </motion.div>
               </div>
            </div>

         </section>

         {/* Section 2: Vision & Mission */}
         <section className="py-20 lg:py-32 relative bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
               {/* Vision & Mission Flex Area */}
               <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-0 relative mb-32">
                  {/* Vision Panel */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative z-20 flex flex-col md:flex-row items-center flex-1"
                  >
                     <div className="relative z-30 shrink-0 transform hover:scale-105 transition-transform duration-500 mb-6 md:mb-0 md:-mr-16">
                        <div className="w-[200px] h-[260px] md:w-[280px] md:h-[360px] lg:w-[340px] lg:h-[440px]">
                           <img
                              src={visionImg}
                              alt="Vision for Student Health"
                              className="w-full h-full object-cover shadow-2xl rounded-2xl md:rounded-none"
                           />
                        </div>
                     </div>

                     <div className="bg-secondary p-8 md:p-14 md:pl-24 w-full flex flex-col justify-center shadow-xl">
                        <span className="text-primary font-bold text-lg lg:text-xl uppercase tracking-widest mb-4 block">
                           VISION
                        </span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] text-foreground leading-tight uppercase er max-w-sm">
                           To transform educational institutions into proactive health ecosystems that nurture healthy bodies, resilient minds, and lifelong success.
                        </h2>
                     </div>
                     
                     {/* Ornaments */}
                     <Star className="absolute -top-10 left-10 text-primary w-8 h-8 fill-current opacity-40 hidden lg:block" />
                  </motion.div>

                  {/* Mission Panel */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="relative z-10 flex-1 flex flex-col lg:flex-row items-stretch lg:-ml-12 lg:mt-24"
                  >
                     <div className="bg-neutral-50 p-8 md:p-14 lg:p-16 lg:pl-24 w-full flex flex-col justify-center shadow-lg relative border border-neutral-100">
                        <div className="max-w-md relative z-10">
                           <span className="text-primary font-bold text-lg lg:text-xl uppercase tracking-widest mb-4 block">
                              MISSION
                           </span>
                           <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] text-foreground leading-tight uppercase er mb-12">
                              To integrate health, well‑being, and education through AI‑enabled tools, preventive practices, and collaborative partnerships.
                           </h2>
                        </div>

                        {/* Animated Graph Overlay */}
                        <div className="absolute bottom-6 right-6 w-[140px] md:w-[200px] lg:w-[260px] opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity">
                           <img
                              src={impactGif}
                              alt="Growth Projection"
                              className="w-full h-auto"
                           />
                        </div>
                        
                        <Star className="absolute -bottom-10 right-10 text-primary w-10 h-10 fill-current opacity-20 hidden lg:block" />
                     </div>
                  </motion.div>
               </div>

               {/* Our Goals Section */}
               <div className="mt-12">
                  <div className="text-center mb-16">
                     <span className="text-primary font-[500] text-sm uppercase tracking-widest mb-3 block">Strategy</span>
                     <h2 className="text-4xl md:text-5xl font-[500] uppercase er">OUR <span className="text-primary italic">GOALS</span></h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { title: "Clinical Integration", desc: "Integrate routine health checkups into the school system to eliminate the need for parents to organize them." },
                        { title: "Early Detection", desc: "Detect all health conditions regardless of a family's schedule or the school's resources." },
                        { title: "Health Awareness", desc: "Foster health awareness among children, encouraging informed decisions and lifelong healthy habits." },
                        { title: "Empowered Schools", desc: "Equip schools to act as health promoting entities with proper resources and trained personnel." }
                     ].map((goal, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-neutral-50 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        >
                           <h3 className="text-lg font-[500] text-foreground mb-4 uppercase group-hover:text-primary transition-colors">{goal.title}</h3>
                           <p className="text-muted-foreground text-sm leading-relaxed">{goal.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Section 3: Sustainable Healthcare */}
         <section className="bg-primary py-12 lg:py-16 text-white overflow-hidden">

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={containerVariants}
               className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
               <motion.div variants={itemVariants} className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-[500] leading-tight mb-8">
                     Sustainable<br />Healthcare
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed mb-12 opacity-90 font-medium">
                     HealthyRoo supports the UN Sustainable Development Goals (SDGs) through its
                     various health initiatives for public and private schools across Australia.
                  </p>
                  {/* SDG Logo Placeholder Block */}
                  <div className="bg-white rounded-lg p-3 sm:p-5 flex sm:inline-flex items-center gap-3 sm:gap-6 shadow-md w-full sm:w-auto max-w-[380px] sm:max-w-none">
                     <img src={logo} alt="HealthyRoo" className="h-6 sm:h-10 opacity-80" />
                     <div className="w-px h-6 sm:h-10 bg-gray-200" />
                     <span className="text-[#1A73E8] font-[500] text-xs sm:text-lg md:text-xl  leading-tight uppercase">
                        SUSTAINABLE DEVELOPMENT <br className="sm:hidden" /> <span className="text-[#34A853]">GOALS</span>
                     </span>
                  </div>
               </motion.div>

               <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                  {/* SDG Icons (Official Visual Replica - Local Assets) */}
                  {[
                     { id: 3, src: sdg3 },
                     { id: 4, src: sdg4 },
                     { id: 6, src: sdg6 },
                     { id: 10, src: sdg10 },
                     { id: 12, src: sdg12 },
                     { id: 17, src: "https://en.wikipedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_17.svg" }
                  ].map(sdg => (
                     <motion.div
                        key={sdg.id}
                        variants={itemVariants}
                        className="aspect-square bg-white flex items-center justify-center transform transition-transform hover:scale-[1.03] shadow-md border-[4px] md:border-[8px] border-white"
                     >
                        <img
                           src={sdg.src}
                           alt={`Sustainable Development Goal ${sdg.id}`}
                           className="w-full h-full object-cover bg-white"
                           loading="lazy"
                        />
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </section>

         {/* Section 4: Awards & Media */}
         <section className="py-12 bg-background overflow-hidden">

            <div className="container mx-auto px-4 lg:px-8">
               <div className="flex flex-col gap-12">

                  {/* Awards Bar */}
                  <div className="flex flex-col lg:flex-row items-stretch gap-6">
                     <div className="bg-accent-color text-white py-8 px-10 flex items-center justify-center shrink-0 rounded-xl">
                        <span className="text-2xl font-[500] uppercase st leading-none">
                           OUR<br />AWARDS
                        </span>
                     </div>
                     <div className="flex-1 flex flex-wrap items-center justify-around gap-10 px-6 grayscale transition-all hover:grayscale-0">
                        <span className="font-[500] text-2xl text-gray-400">FORBES 30U30</span>
                        <span className="font-[500] text-2xl text-gray-400">IDA DESIGN</span>
                        <span className="font-[500] text-2xl text-gray-400">HEALTH TECH '26</span>
                        <span className="font-[500] text-2xl text-gray-400">AUSSTARTUP</span>
                     </div>
                  </div>

                  {/* Featured In Bar */}
                  <div className="flex flex-col lg:flex-row-reverse items-stretch gap-6">
                     <div className="bg-[#EE1D26] text-white py-8 px-10 flex items-center justify-center shrink-0 rounded-xl">
                        <span className="text-2xl font-[500] uppercase st text-right leading-none">
                           WE ARE<br />FEATURED IN
                        </span>
                     </div>
                     <div className="flex-1 flex flex-wrap items-center justify-around gap-10 px-6 grayscale transition-all hover:grayscale-0">
                        <span className="font-[500] text-xl text-gray-500 italic">Financial Review</span>
                        <span className="font-[500] text-xl text-gray-500">The Sydney Morning Herald</span>
                        <span className="font-[500] text-xl text-gray-400">ABC NEWS</span>
                        <span className="font-[500] text-xl text-gray-500">Herald Sun</span>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Section 5: The Vanguard (The Minds Behind the Motion) - Consolidated Uniform Square Grid */}
         <section className="py-12 bg-[#F5F5F7] overflow-visible relative border-y border-gray-100">

            {/* Top Branding Header */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[1240px] mb-12">
               <div className="border-l-[6px] border-primary pl-8 md:pl-12 py-3">
                  <span className="text-[#999] font-[500] text-[10px] md:text-xs mb-3 block uppercase">OUR VANGUARD</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-[500] text-[#111] leading-[1] er uppercase mb-6 transition-all">
                     THE MINDS<br />BEHIND THE<br /><span className="text-primary">MOTION.</span>
                  </h2>
                  <p className="text-[#333] text-base md:text-lg font-medium leading-relaxed max-w-[500px] opacity-80">
                     A collective of visionaries, strategists, and health architects bound by a pursuit of excellence.
                  </p>
               </div>
            </div>

            {/* Consolidated Proper Square Grid - Guaranteed Uniformity */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[1240px] mb-16 relative">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 transition-all duration-500"
               >

                  {/* Smit Tanksale */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={teamLeadImg} alt="Smit Tanksale" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Smit Tanksale</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">CEO</p>
                     </div>
                  </motion.div>

                  {/* Marcus Thorne */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={t2} alt="Marcus Thorne" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Marcus Thorne</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Creative Director</p>
                     </div>
                  </motion.div>

                  {/* Sarah Chen */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={doctorGreen} alt="Sarah Chen" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Sarah Chen</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Editorial Chief</p>
                     </div>
                  </motion.div>

                  {/* David Rossi */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={careerMan} alt="David Rossi" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">David Rossi</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Director of Ops</p>
                     </div>
                  </motion.div>

                  {/* Elena Vance */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={schoolNurse} alt="Elena Vance" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Elena Vance</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Head of Strategy</p>
                     </div>
                  </motion.div>

                  {/* Maya Kalu */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={workshopNurse} alt="Maya Kalu" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Maya Kalu</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Design Lead</p>
                     </div>
                  </motion.div>

                  {/* Julian Black */}
                  <motion.div variants={itemVariants} className="flex flex-col items-start group">
                     <div className="relative w-full aspect-square bg-white overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={t1} alt="Julian Black" className="w-full h-full object-cover transition-all duration-700" />
                     </div>
                     <div className="mt-5 pl-1">
                        <h3 className="text-base lg:text-lg font-[500] text-[#111] uppercase er">Julian Black</h3>
                        <p className="text-primary font-[500] text-[9px]  uppercase mt-1 whitespace-nowrap">Technology Principal</p>
                     </div>
                  </motion.div>

               </motion.div>
            </div>

            {/* Selection: Philosophy */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[900px] text-center pb-12">
               <div className="flex flex-col items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FDE8E9" className="mb-8">
                     <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464718 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H8.017C9.67385 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33075 21 5.017 21H3.017Z" />
                  </svg>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-[#111] leading-tight mb-12 max-w-[700px] ">
                     "We believe that the future of school health is not found in algorithms, but in the intersection of <span className="text-primary italic">human narrative</span> and architectural precision."
                  </h4>
                  <div className="flex items-center gap-4 w-full max-w-xs">
                     <div className="h-[1px] bg-[#EEE] flex-1" />
                     <span className="text-[#999] font-[500] text-[9px] uppercase">THE HEALTHYROO PHILOSOPHY</span>
                     <div className="h-[1px] bg-[#EEE] flex-1" />
                  </div>
               </div>
            </div>
         </section>

         {/* Section 6: Careers/Join Our Mission - Visual Replica from Screenshot */}
         <section className="pt-0 pb-32 bg-white overflow-visible">
            <div className="container mx-auto px-4 lg:px-8">
               <div className="relative min-h-[500px] md:min-h-[600px] flex flex-col lg:flex-row items-center justify-center lg:justify-start">

                  {/* Large RED Circle Content */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut" } as any}
                     className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-primary rounded-full flex flex-col items-center justify-center p-8 md:p-14 lg:p-20 text-center shadow-lg text-white"
                  >
                     <h3 className="text-lg md:text-2xl lg:text-3xl font-[500] leading-tight mb-8 max-w-[400px] uppercase">
                        FROM FRESHERS TO EXPERIENCED INDIVIDUALS, ALL HAVE A CHANCE TO EVOLVE AT HEALTHYROO.
                        HERE'S WHAT IT LOOKS LIKE WORKING AT HEALTHYROO.
                     </h3>

                     {/* JOIN OUR MISSION Pill Button */}
                     <motion.button
                        onClick={openPopup}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary font-[500] px-10 py-3.5 rounded-full uppercase st text-sm shadow-xl hover:bg-gray-100 transition-colors"
                     >
                        JOIN OUR MISSION
                     </motion.button>

                     {/* Decorative Elements inside circle logic area (White for visibility on Red) */}
                     <Star className="absolute top-[10%] -left-4 text-white fill-current w-12 h-12 opacity-80" />
                     <Star className="absolute bottom-[20%] -left-8 text-white fill-current w-8 h-8 opacity-60" />

                     {/* Zigzag Doodle at bottom left */}
                     <div className="absolute -bottom-10 left-10 md:left-20">
                        <svg width="60" height="120" viewBox="0 0 60 120" className="opacity-80">
                           <path d="M10,10 L50,30 L10,50 L50,70 L10,90 L50,110" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </div>
                  </motion.div>

                  {/* Video Window with Black Frame and Caption - Positioned Lower and Offset */}
                  <motion.div
                     initial={{ opacity: 0, y: 50, x: 50 }}
                     whileInView={{ opacity: 1, y: 0, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut", delay: 0.3 } as any}
                     className="relative z-20 flex flex-col items-center mt-12 lg:-mt-0 lg:-ml-28 transform lg:translate-y-48"
                  >
                     <div className="w-full lg:w-[500px] aspect-video bg-gray-200 border-[3px] border-black rounded-[4px] shadow-2xl relative group overflow-hidden">
                        <img src={heroImg} alt="Working at HealthyRoo" className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                           <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#EE1D26] border-b-[10px] border-b-transparent ml-1.5" />
                           </div>
                        </div>
                        {/* Top Right Video Badge from screenshot */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
                           <span className="text-white text-[10px] font-[500] uppercase  opacity-80">Working at HealthyRoo</span>
                        </div>
                     </div>

                     {/* Caption directly below the frame like in screenshot */}
                     <span className="mt-4 font-[500] text-black text-xs md:text-sm uppercase st bg-white lg:bg-transparent px-2">
                        Life at HealthyRoo
                     </span>
                  </motion.div>

                  {/* External Stars like in screenshot */}
                  <Star className="hidden lg:block absolute top-[15%] left-[2%] text-[#FFD641] fill-current w-10 h-10" />
                  <Star className="hidden lg:block absolute bottom-[10%] left-[8%] text-[#FFD641] fill-current w-8 h-8" />
                  <Star className="hidden lg:block absolute top-[40%] right-[30%] text-[#FFD641] fill-current w-10 h-10" />

               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default AboutPage;
