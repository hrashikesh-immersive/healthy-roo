import { motion } from "framer-motion";
import schoolPlatformDashboard from "@/assets/school-platform-dashboard.png";
import { useContactPopup } from "@/context/ContactPopupContext";

const RedArrowGraphic = () => (
  <svg className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 text-primary" viewBox="0 0 100 100" fill="currentColor">
    {/* Pointing top-left */}
    <path d="M0,20 L100,40 L40,60 L20,100 Z" />
  </svg>
);

const SchoolPartnerSection = () => {
  const { openPopup } = useContactPopup();

  return (
    <section className="py-16 lg:py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left side: Graphics & Image */}
          <div className="flex-1 w-full relative z-10 flex justify-center py-8 lg:py-12">
            {/* Pink Background Circle mapped to primary-light */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" } as any}
              className="absolute top-1/2 left-[45%] lg:left-[45%] -translate-x-1/2 -translate-y-[45%] w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] bg-primary/5 rounded-full -z-10"
            />

            {/* Red Arrow over circle but behind/beside image */}
            <motion.div
              initial={{ opacity: 0, rotate: 45, x: -20, y: -20 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 } as any}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-8 lg:-top-10 lg:-left-12 z-20"
            >
              <RedArrowGraphic />
            </motion.div>

            {/* The Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
              className="relative rounded-[20px] overflow-hidden w-[95%] lg:w-[100%] max-w-[540px] shadow-md transition-transform hover:scale-[1.01]"
            >
              <img
                src={schoolPlatformDashboard}
                alt="School Platform Analytical Dashboard"
                className="w-full h-[300px] lg:h-[380px] object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
              />
            </motion.div>
          </div>

          {/* Right side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" } as any}
            className="flex-1 w-full z-10 lg:pl-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-[500] text-foreground mb-6">
              School Platform
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-5 lg:max-w-lg">
              Our dedicated School Platform provides administrators with a centralized dashboard to manage student health data across the campus. Track screening progress and developmental insights in real-time.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-9 lg:max-w-lg">
              Empower your faculty and medical staff with data-driven reports that help improve student outcomes and well-being through informed decision-making.
            </p>
            <button 
              onClick={openPopup}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-[14px] rounded-full transition-all shadow-sm cursor-pointer border-none text-base hover:scale-105 active:scale-95"
            >
              Learn More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SchoolPartnerSection;
