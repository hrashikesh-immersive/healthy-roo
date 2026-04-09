import { motion } from "framer-motion";
import howItWorksNurse from "@/assets/how-it-works-nurse.png";

const WavyDashedLine = () => (
  <div 
    className="absolute top-0 left-0 w-full h-[15px] pointer-events-none opacity-50" 
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 7.5 10 15 5 T 30 5' fill='none' stroke='%239CA3AF' stroke-width='1' stroke-dasharray='0'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat-x'
    }}
  />
);

const steps = [
  { num: "01", text: "Child's Complete Assessment" },
  { num: "02", text: "Prompt & Easy Accessible Medical Report" },
  { num: "03", text: "Review & Improvement by Senior Doctors" },
  { num: "04", text: "Awareness & Education Delivered by Top Doctors from Across Australia" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative Wavy Line at the top spanning full width */}
      <WavyDashedLine />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Content - Stepper */}
          <motion.div 
            className="flex-1 lg:max-w-[450px] z-10 w-full pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[54px] font-black text-foreground mb-4 leading-[1.1]">
              How it works
            </motion.h2>
            <motion.p variants={itemVariants} className="text-foreground/70 text-base leading-relaxed mb-12 max-w-[400px]">
              HealthyRoo's structured approach ensures every student receives a comprehensive screening with minimal disruption. We deliver immediate results, empowering schools and parents with actionable data.
            </motion.p>

            <motion.div variants={containerVariants} className="relative space-y-10">
              {/* Dotted vertical line behind the circles */}
              <div className="absolute top-10 bottom-10 left-[19px] border-l border-dashed border-foreground/30 -z-10" />

              {steps.map((item) => (
                <motion.div key={item.num} variants={itemVariants} className="flex items-start gap-8 group">
                  <div className="w-10 h-10 rounded-full border border-dashed border-foreground/40 flex items-center justify-center shrink-0 bg-background z-10 shadow-sm transition-all group-hover:border-[#ee1e25] group-hover:scale-110">
                    <span className="text-sm font-black text-foreground">
                      {item.num}
                    </span>
                  </div>
                  <p className="text-foreground font-black text-lg leading-tight pt-1">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> 

          {/* Right Content - Image and Overlays */}
          <div className="flex-1 relative w-full lg:mt-0 z-10">
            {/* The Main Image Rectangle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[540px] shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.01]"
            >
              <img 
                src={howItWorksNurse} 
                alt="Nurse taking student's temperature" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Left White Cutout with Appointment Button */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-1 -left-1 w-[260px] h-[110px] bg-white rounded-tr-[3.5rem] rounded-bl-[2.5rem] z-20 flex items-center justify-center pr-6 pt-6"
            >
              <button className="bg-[#ee1e25] text-white font-black px-12 py-4 text-base rounded-full hover:brightness-110 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 uppercase tracking-wider">
                Appointment
              </button>
            </motion.div>

            {/* Bottom Right Blue Stats Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#2B569A] rounded-2xl text-white py-8 px-10 flex items-center gap-10 shadow-2xl z-30 min-w-[340px] transform transition-transform hover:scale-105"
            >
              <div className="text-left">
                <div className="text-[44px] font-black leading-none tracking-tight">180+</div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest mt-2">Specialists</div>
              </div>
              
              <div className="w-[1.5px] h-14 bg-white/20" />
              
              <div className="text-left">
                <div className="text-[44px] font-black leading-none tracking-tight">45K</div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest mt-2">Happy Patients</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
