import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Mail, Phone, MapPin, Send, Upload, FileText, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any,
   },
};

// Assets
import contactImg from "@/assets/impact-funrun.png"; // Placeholder active image
import parentsBeachImg from "@/assets/parents-contact-beach.png";
import careerManImg from "@/assets/career-contact-man.png";
import medicalCuffImg from "@/assets/medical-contact-cuff.png";

const ContactPage = () => {
   const [activeTab, setActiveTab] = useState("FOR SCHOOL");

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const tabs = ["FOR SCHOOL", "FOR PARENTS", "FOR CAREER", "FOR MEDICAL PARTNERS"];

   const features = [
      {
         title: "Establish a benchmark of Health",
         desc: "Our world-class medical assessments are conducted annually and cover guidelines and checks as per International and Australian standards."
      },
      {
         title: "Instil Inculcate Healthy Habits",
         desc: "Our Health Program follows a monthly chain of health activities that are delivered as CARE Boxes in schools across Australia."
      },
      {
         title: "Insure students, teachers and parents",
         desc: "HealthyRoo facilitates accidental coverage for children and exciting medical offers for teachers and parents in partnership with leading providers."
      },
      {
         title: "Equip Health Safety and Infrastructure",
         desc: "We provide end-to-end health infrastructure to schools including a trained nurse and a fully-equipped infirmary module."
      }
   ];

   return (
      <div className="min-h-screen bg-background font-sans text-foreground pt-[72px] md:pt-[58px]">
         <Navbar />

         {/* Hero Section */}
         <section className="bg-accent-color py-24 relative overflow-hidden">
            {/* Decorative Paper Planes */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <div className="absolute top-[20%] left-[10%] rotate-[-15deg] opacity-60">
                  <div className="relative">
                     <div className="absolute top-1/2 left-[-100px] w-[150px] h-[1px] border-t-2 border-dashed border-white/40 -translate-y-1/2 rotate-[-5deg]" />
                     <Send className="w-16 h-16 text-white transform -rotate-45" />
                  </div>
               </div>
               <div className="absolute top-[15%] right-[20%] rotate-[10deg] opacity-70 scale-110">
                  <div className="relative">
                     <div className="absolute top-1/2 right-[-80px] w-[120px] h-[1px] border-t-2 border-dashed border-white/40 -translate-y-1/2 rotate-[15deg]" />
                     <Send className="w-18 h-18 text-primary fill-current transform -rotate-12" />
                  </div>
               </div>
               <div className="absolute bottom-[10%] right-[30%] rotate-[-10deg] opacity-80 scale-125">
                  <div className="relative">
                     <div className="absolute top-1/2 left-[-120px] w-[180px] h-[1px] border-t-2 border-dashed border-white/40 -translate-y-1/2 rotate-[-10deg]" />
                     <Send className="w-20 h-20 text-secondary fill-current transform -rotate-45" />
                  </div>
               </div>
            </div>

            <div className="container mx-auto px-4 text-center text-white relative z-10">
               <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" } as any}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 uppercase leading-none"
               >
                  GET IN TOUCH WITH US
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" } as any}
                  className="text-lg sm:text-xl md:text-3xl font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] opacity-95"
               >
                  WE'D LOVE TO RESOLVE YOUR QUERIES
               </motion.p>
            </div>
         </section>

         <section className="bg-white border-b border-gray-100/50 w-full overflow-hidden">
            <div className="container mx-auto">
               <div className="w-full overflow-x-auto no-scrollbar pb-1">
                  <div className="flex items-center justify-start sm:justify-center gap-x-6 md:gap-x-12 pt-10 px-6 min-w-max sm:min-w-0">
                     {tabs.map((tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`pb-4 text-xs sm:text-sm md:text-base font-semibold tracking-wide transition-all relative whitespace-nowrap ${activeTab === tab
                                 ? "text-primary border-b-[3px] border-primary"
                                 : "text-[#444] hover:text-foreground"
                              }`}
                        >
                           {tab}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Dynamic Tab Content Section */}
         <section className="bg-white">
            <div className="container mx-auto px-4 py-20 lg:px-12">

               <AnimatePresence mode="wait">
                  {activeTab === "FOR SCHOOL" && (
                     <motion.div
                        key="school"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="text-center max-w-5xl mx-auto mb-16">
                           <p className="text-base md:text-xl leading-relaxed font-black opacity-80 uppercase tracking-wide px-4">
                              You are an integral part of the HealthyRoo Family! Do you have anything we can help you with?<br className="hidden md:block" />
                              Feel free to connect with us for any queries, technical issues or card related questions.
                           </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-0 rounded-[40px] overflow-hidden shadow-[0_25px_100px_-20px_rgba(0,0,0,0.15)] border-4 border-white/50">
                           <div className="w-full lg:w-1/2 h-[450px] lg:h-auto overflow-hidden relative group">
                              <img src={contactImg} alt="Healthy lifestyle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                           </div>

                           <div className="w-full lg:w-1/2 bg-muted p-8 md:p-14 lg:p-20">
                              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-foreground">CONTACT US</h2>
                              <form className="space-y-10">
                                 <div className="border-b-2 border-black/20 focus-within:border-[#26C797] transition-colors pb-3">
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-black/50">Your Name *</label>
                                    <input type="text" className="w-full bg-transparent outline-none py-1 font-bold text-lg" required />
                                 </div>
                                 <div className="border-b-2 border-black/20 focus-within:border-[#26C797] transition-colors pb-3">
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-black/50">Your Email *</label>
                                    <input type="email" className="w-full bg-transparent outline-none py-1 font-bold text-lg" required />
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="border-b-2 border-black/20 focus-within:border-[#26C797] transition-colors pb-3">
                                       <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-black/50">Phone *</label>
                                       <input type="text" className="w-full bg-transparent outline-none py-1 font-bold text-lg" required />
                                    </div>
                                    <div className="border-b-2 border-black/20 focus-within:border-[#26C797] transition-colors pb-3">
                                       <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-black/50">School Name *</label>
                                       <input type="text" className="w-full bg-transparent outline-none py-1 font-bold text-lg" required />
                                    </div>
                                 </div>
                                 <div className="border-b-2 border-black/20 focus-within:border-[#26C797] transition-colors pb-3">
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-black/50">Your Message *</label>
                                    <textarea className="w-full bg-transparent outline-none py-1 font-bold h-32 ring-0 resize-none" required></textarea>
                                 </div>
                                 <div className="pt-6">
                                    <button type="submit" className="bg-[#EE1D26] text-white px-16 py-5 font-black tracking-[0.25em] hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-xl uppercase text-sm">
                                       SUBMIT
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {activeTab === "FOR PARENTS" && (
                     <motion.div
                        key="parents"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="text-center max-w-5xl mx-auto mb-16 px-4">
                           <p className="text-lg md:text-xl leading-relaxed font-bold text-foreground">
                              We believe that schools can nurture the next generation of health leaders by empowering students to inculcate health from an early stage while providing a high value program that connects directly to the parents at home. Join the movement of building a healthier tomorrow at your school.
                           </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
                           <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
                              <img src={parentsBeachImg} alt="Parent and child on beach" className="w-full h-full object-cover" />
                           </div>
                           <div className="w-full lg:w-1/2 bg-[#F2F2F2] p-8 md:p-16">
                              <h2 className="text-4xl font-black mb-10 tracking-tight uppercase">CONTACT US</h2>
                              <form className="space-y-12">
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Name *</label>
                                    <input type="text" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Email *</label>
                                    <input type="email" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Phone *</label>
                                    <input type="text" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Message *</label>
                                    <textarea className="w-full bg-transparent outline-none py-2 font-semibold h-24 resize-none" required></textarea>
                                 </div>
                                 <button type="submit" className="bg-[#EE1D26] text-white px-14 py-4 font-black tracking-widest hover:bg-black hover:text-white transition-all shadow-md uppercase text-sm">
                                    SUBMIT
                                 </button>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {activeTab === "FOR CAREER" && (
                     <motion.div
                        key="career"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="text-center max-w-5xl mx-auto mb-16 px-4">
                           <p className="text-base md:text-lg leading-relaxed font-bold text-foreground">
                              Would you like to shape a healthy nation while being part of a dynamic team and work environment?<br />
                              Then HealthSetGo is the place for you. We are looking to explore fresh minds with an entrepreneurial bent.<br />
                              Drop in your CVs at <a href="mailto:hr@healthsetgoeducation.com" className="text-primary font-black hover:underline transition-all">hr@healthsetgoeducation.com</a> and tell us your motivation. We'll get back to you!
                           </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
                           <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
                              <img src={careerManImg} alt="Career at HealthyRoo" className="w-full h-full object-cover" />
                           </div>
                           <div className="w-full lg:w-1/2 bg-[#F2F2F2] p-8 md:p-16">
                              <h2 className="text-4xl font-black mb-10 tracking-tight uppercase">CONTACT US</h2>
                              <form className="space-y-12">
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Name *</label>
                                    <input type="text" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Email *</label>
                                    <input type="email" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40 relative pb-3 cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                       <FileText className="w-6 h-6 text-black" />
                                       <span className="text-lg font-bold text-foreground">Upload CV</span>
                                       <Upload className="ml-auto w-5 h-5 group-hover:text-primary transition-colors" />
                                    </div>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Message *</label>
                                    <textarea className="w-full bg-transparent outline-none py-2 font-semibold h-24 resize-none" required></textarea>
                                 </div>
                                 <button type="submit" className="bg-[#EE1D26] text-white px-14 py-4 font-black tracking-widest hover:bg-black hover:text-white transition-all shadow-md uppercase text-sm">
                                    SUBMIT
                                 </button>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {activeTab === "FOR MEDICAL PARTNERS" && (
                     <motion.div
                        key="medical"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="text-center max-w-5xl mx-auto mb-16 px-4">
                           <p className="text-base md:text-lg font-bold text-foreground">
                              We partner with the best hospitals and doctors from across the country for our health assessments and sessions.
                           </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
                           <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
                              <img src={medicalCuffImg} alt="Medical Partnerships" className="w-full h-full object-cover" />
                           </div>
                           <div className="w-full lg:w-1/2 bg-[#F2F2F2] p-8 md:p-14">
                              <h2 className="text-4xl font-black mb-10 tracking-tight uppercase">CONTACT US</h2>
                              <form className="space-y-10">
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Name *</label>
                                    <input type="text" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="border-b border-black/40">
                                    <label className="block text-base font-bold text-foreground mb-3">Your Email *</label>
                                    <input type="email" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="border-b border-black/40 relative">
                                       <label className="block text-base font-bold text-foreground mb-3">State</label>
                                       <select className="w-full bg-transparent outline-none py-1 font-semibold appearance-none cursor-pointer">
                                          <option disabled selected>Select State</option>
                                          <option>NSW</option><option>VIC</option><option>QLD</option><option>WA</option>
                                       </select>
                                       <ChevronDown className="absolute bottom-2 right-0 w-4 h-4 pointer-events-none" />
                                    </div>
                                    <div className="border-b border-black/40">
                                       <label className="block text-base font-bold text-foreground mb-3">City *</label>
                                       <input type="text" className="w-full bg-transparent outline-none py-1 font-semibold" required />
                                    </div>
                                 </div>
                                 <button type="submit" className="bg-[#EE1D26] text-white px-14 py-4 font-black tracking-widest hover:bg-black hover:text-white transition-all shadow-md uppercase text-sm">
                                    SUBMIT
                                 </button>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </section>

         {/* Features Grid */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-12">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16"
               >
                  {features.map((f, i) => (
                     <motion.div key={i} variants={itemVariants} className="flex gap-8 group">
                        <div className="shrink-0">
                           <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EE1D26] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                              <ChevronRight className="w-8 h-8 text-white stroke-[4]" />
                           </div>
                        </div>
                        <div>
                           <h4 className="text-xl md:text-2xl font-black mb-4 text-[#111] leading-tight uppercase tracking-tight">{f.title}</h4>
                           <p className="text-sm md:text-lg leading-relaxed text-[#555] font-semibold opacity-90">{f.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Info & Map Section */}
         <section className="bg-background flex flex-col lg:flex-row min-h-[650px] border-t-8 border-secondary">
            <div className="w-full lg:w-1/2 bg-accent p-8 md:p-16 lg:p-24 text-white flex flex-col justify-center relative overflow-hidden">
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 leading-[0.9] uppercase tracking-tighter relative z-10">
                  WE ARE<br />ALWAYS<br />HERE TO<br />HELP.
               </h2>
               <div className="space-y-8 text-base md:text-lg font-black relative z-10 tracking-wide">
                  <div className="flex flex-col space-y-2">
                     <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Direct Support</span>
                     <a href="mailto:support@healthyroo.com.au" className="text-xl md:text-2xl hover:text-black transition-colors">support@healthyroo.com.au</a>
                     <a href="mailto:hello@healthyroo.com.au" className="text-xl md:text-2xl hover:text-black transition-colors">hello@healthyroo.com.au</a>
                  </div>
                  <div className="flex flex-col space-y-2">
                     <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Hotline</span>
                     <span className="text-2xl md:text-3xl">+61 401 477 772</span>
                  </div>
                  <div className="pt-10 mt-10 border-t-2 border-white/20">
                     <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/60 mb-6">HQ LOCATION</h4>
                     <p className="text-lg md:text-xl leading-relaxed font-bold">
                        HealthyRoo Australia HQ<br />
                        1710/687 La trobe street,<br />
                        Docklands, Victoria 3008
                     </p>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 min-h-[500px] relative group overflow-hidden bg-muted">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7915234151247!2d151.2065!3d-33.8398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aec0f30500c5%3A0x6b430e7943cc979!2s100%20Mount%20St%2C%20North%20Sydney%20NSW%202060%2C%20Australia!5e0!3m2!1sen!2sau!4v1711880000000!5m2!1sen!2sau"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[0.3] opacity-90 group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HealthyRoo HQ Location"
               ></iframe>
               <div className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative">
                     <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(238,29,38,0.5)] border-4 border-white transform transition-transform group-hover:scale-110">
                        <MapPin className="text-primary-foreground w-6 h-6 fill-current" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default ContactPage;
