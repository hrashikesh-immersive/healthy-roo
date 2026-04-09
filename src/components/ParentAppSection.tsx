import { motion } from "framer-motion";
import parentAppInteraction from "@/assets/parent-app-interaction.png";
import { useContactPopup } from "@/context/ContactPopupContext";

const YellowArrowGraphic = () => (
  <svg className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 text-secondary" viewBox="0 0 100 100" fill="currentColor">
    {/* Pointing top-right */}
    <path d="M100,20 L0,40 L60,60 L80,100 Z" />
  </svg>
);

const ParentAppSection = () => {
  const { openPopup } = useContactPopup();

  return (
    <section className="py-16 lg:py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full z-10 lg:pr-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-[500] text-foreground mb-6">
              Our Digital Ecosystem
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-5 lg:max-w-lg">
              Access complete health reports within 24 hours through your application. Our unified platform empowers parents with clarity, control, and continuous health visibility.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                "Track key metrics like BMI, growth & health scores",
                "Compare past and current reports with ease",
                "Color-coded insights for quick understanding",
                "Real-time updates, alerts & expert recommendations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-[500] text-sm">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={openPopup}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-[14px] rounded-full transition-all shadow-sm cursor-pointer border-none text-base hover:scale-105 active:scale-95"
            >
              Learn More
            </button>
          </motion.div>

          {/* Right side: Graphics & Image */}
          <div className="flex-1 w-full relative z-10 flex justify-center py-8 lg:py-12">
            {/* Light Teal Background Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" } as any}
              className="absolute top-1/2 right-[45%] lg:right-[45%] translate-x-1/2 -translate-y-[45%] w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] bg-accent/10 rounded-full -z-10"
            />

            {/* Yellow Arrow over circle but behind/beside image */}
            <motion.div
              initial={{ opacity: 0, rotate: -45, x: 20, y: -20 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 } as any}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-8 lg:-top-10 lg:-right-12 z-20"
            >
              <YellowArrowGraphic />
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
                src={parentAppInteraction}
                alt="Parent and child using the HealthyRoo app"
                className="w-full h-[300px] lg:h-[380px] object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParentAppSection;
