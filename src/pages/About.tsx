import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote, ChevronRight, Activity, Cpu, Shield, Users, Download, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useContactPopup } from "@/context/ContactPopupContext";

// Assets
import founderImg from "@/assets/founder.png";
import founderImg2 from "@/assets/founder2.png";
import founderImg3 from "@/assets/founder3.png";
import founderProfileImg from "@/founder_img.jpg";
import logo from "@/assets/logo/healthyroo-logo.svg";

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
      transition: { duration: 0.8, ease: "easeOut" },
   },
};

const AboutPage = () => {
   const { openPopup } = useContactPopup();

   return (
      <div className="min-h-screen bg-white font-sans pt-[72px] md:pt-[88px] selection:bg-[#EE1D26] selection:text-white">
         <Navbar />

         {/* New Top Hero Section */}
         <section className="relative w-full overflow-hidden bg-white py-16 lg:py-32">
            <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

               {/* Left Image Container */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative flex justify-center lg:justify-start mb-12 lg:mb-0"
               >
                  <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] ml-0 lg:ml-8">
                     {/* The Background Shapes */}
                     <div className="absolute inset-0 border-[25px] md:border-[40px] border-[#EE1D26] rounded-full shadow-[0_0_60px_rgba(238,29,38,0.2)]"></div>
                     <div className="absolute inset-[25px] md:inset-[40px] rounded-full overflow-hidden z-0">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E1EBF7]"></div>
                     </div>

                     <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible rounded-full">
                        <img
                           src={founderProfileImg}
                           alt="Smit Tanksale"
                           className="w-[90%] h-[90%] object-cover rounded-full"
                        />
                     </div>

                     {/* Social Floating Box */}
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-5 md:px-8 py-3 md:py-4 rounded shadow-2xl flex items-center gap-4 md:gap-6 z-20 border border-gray-100 whitespace-nowrap">
                        <span className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wide">Follow Me On :</span>
                        <a href="#" className="text-gray-900 hover:text-[#EE1D26] transition-colors"><Linkedin className="w-4 h-4 md:w-5 md:h-5 fill-current" /></a>
                        <a href="#" className="text-gray-900 hover:text-[#EE1D26] transition-colors"><Facebook className="w-4 h-4 md:w-5 md:h-5 fill-current" /></a>
                        <a href="#" className="text-gray-900 hover:text-[#EE1D26] transition-colors"><Instagram className="w-4 h-4 md:w-5 md:h-5" /></a>
                        <a href="#" className="text-gray-900 hover:text-[#EE1D26] transition-colors"><Twitter className="w-4 h-4 md:w-5 md:h-5 fill-current" /></a>
                     </div>
                  </div>
               </motion.div>

               {/* Right Content */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
               >
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-gray-500 font-medium text-lg">Hello I'm</span>
                  </div>
                  <h2 className="text-[#EE1D26] font-bold text-2xl mb-4">Smit Tanksale</h2>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                     Founder & CEO<br />
                     HealthyRoo
                  </h1>

                  <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
                     A Melbourne-based engineer and developer bridging the gap between AI and proactive healthcare. Driven by meticulous care for team dynamics and a passion for mentoring the next generation of innovators.
                  </p>
                  {/* 
                  <div className="flex flex-wrap gap-4 items-center">
                     <button onClick={openPopup} className="bg-[#EE1D26] text-white px-8 py-3.5 rounded font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center gap-2">
                        Contact Me <ChevronRight className="w-4 h-4" />
                     </button>
                  </div> */}
               </motion.div>

            </div>
         </section>

         {/* Section 1: The Visionary Engineer (Clean & Simple Redesign) */}

         {/* Section 2: Technical Impact (Clean Minimal) */}
         <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 lg:px-12">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto text-center mb-20"
               >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Architecting a Healthier Future</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                     Through HealthyRoo, Smit has built a unified digital infrastructure that screens over 70 parameters, providing schools with the data they need to act before issues arise.
                  </p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-red-50 text-[#EE1D26] rounded-xl flex items-center justify-center mb-6">
                        <Cpu className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Architecture</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        Technical background in R&D, focusing on precision care through advanced system architectures.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-white p-10 rounded-2xl shadow-md border border-red-100 relative md:-translate-y-4"
                  >
                     <div className="w-12 h-12 bg-[#EE1D26] text-white rounded-xl flex items-center justify-center mb-6">
                        <Star className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Curiosity Engines</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        Specializes in building complex logic flows that power proactive and predictive health insights.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-red-50 text-[#EE1D26] rounded-xl flex items-center justify-center mb-6">
                        <Shield className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">Systems Thinking</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        Combines engineering expertise with leadership to drive scalable, data-driven health solutions.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Section 3: Athletics & Leadership */}
         <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  {/* Decorative Image Grid reflecting Athletics */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative group shadow-md">
                           <img src={founderImg2} alt="Athletics" className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                           <div className="absolute inset-0 bg-[#EE1D26]/10 mix-blend-multiply"></div>
                        </div>
                        <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative group shadow-md">
                           <img src={founderImg3} alt="Athletics" className="w-full h-full object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                     </div>
                     <div className="space-y-4 pt-12">
                        <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative group shadow-md">
                           <img src={founderImg} alt="Athletics" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="aspect-square bg-[#EE1D26] rounded-3xl p-6 text-white flex flex-col justify-end shadow-lg">
                           <Users className="w-8 h-8 mb-4 opacity-80" />
                           <p className="font-bold text-xl uppercase leading-tight">Mentoring<br />Youth</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <div className="pl-0 lg:pl-10">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                        Disciplined Leadership, <br />
                        <span className="text-[#EE1D26] italic">On & Off the Pitch.</span>
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                        Whether commanding the pitch in cricket, football, or futsal, Smit embodies the passion, discipline and strategic foresight of a seasoned athlete.
                     </p>
                     <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        He loves training and mentoring younger sportsmen. This physical and mental conditioning directly translates into his approach to business—combining high-pressure leadership with the stamina needed to drive scalable health innovations.
                     </p>

                     <div className="flex flex-wrap gap-4">
                        {['Cricket', 'Football', 'Futsal', 'Mentorship'].map((sport) => (
                           <span key={sport} className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold uppercase tracking-wider">
                              {sport}
                           </span>
                        ))}
                     </div>
                  </div>
               </motion.div>

            </div>
         </section>

         {/* Section 4: The Quote Block (Redesigned Editorial Style) */}
         <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-gray-100">
            {/* Background Architectural Lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gray-100"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-50"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-6xl mx-auto"
               >
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                     {/* Left Column: Huge Pull Quote & Icon */}
                     <div className="w-full lg:w-5/12 relative">
                        <Quote className="absolute -top-10 -left-6 md:-left-10 w-24 h-24 md:w-32 md:h-32 text-gray-50 rotate-180 z-0" />
                        <div className="relative z-10">
                           <div className="w-16 h-1 bg-[#EE1D26] mb-8"></div>
                           <h3 className="text-xl font-bold text-[#EE1D26] uppercase tracking-[0.2em] mb-4">Smit about himself</h3>
                           <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                              "My life as an athlete is the blueprint for how I build companies and mentor the next generation."
                           </h3>
                           <div className="mt-12 flex items-center gap-6">
                              <div className="w-16 h-16 rounded-full overflow-hidden grayscale border-2 border-gray-100 shadow-md">
                                 <img src={founderImg} alt="Smit Tanksale" className="w-full h-full object-cover object-top" />
                              </div>
                              <div>
                                 <p className="font-bold text-gray-900 uppercase tracking-widest text-sm">Smit Tanksale</p>
                                 <p className="text-[#EE1D26] font-semibold text-sm">Founder & CEO</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right Column: Detailed Narrative */}
                     <div className="w-full lg:w-7/12">
                        <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 relative shadow-xl">
                           {/* Decorative Corner */}
                           <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-bl-[2rem] border-b border-l border-gray-100"></div>
                           <div className="absolute top-4 right-4 w-3 h-3 bg-[#EE1D26] rounded-full shadow-sm shadow-red-500/50"></div>

                           <div className="space-y-6 text-lg text-gray-600 leading-relaxed relative z-10">
                              <p>
                                 I take pride in cultivating the sport, bringing the <span className="text-[#EE1D26] font-bold">unwavering discipline</span> of a wicket-keeper to the resilience needed in a startup.
                              </p>
                              <p>
                                 Whether maintaining a panoramic view on the pitch or driving coordination on the futsal court, my approach is rooted in <span className="text-gray-900 font-bold italic">meticulous care</span> for team dynamics. I am fuelled by an <span className="text-[#EE1D26] font-bold">infectious enthusiasm</span> for high-pressure situations, believing the field is the ultimate training ground for leadership.
                              </p>
                              <p className="font-semibold text-gray-800 text-xl border-l-4 border-[#EE1D26] pl-4 mt-8 italic">
                                 By honing my own reflexes and supporting younger players, I ensure the spirit of the game thrives. This synergy between athletic rigor and entrepreneurial grit defines my journey.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default AboutPage;
