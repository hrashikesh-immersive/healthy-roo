import { GraduationCap, Gauge, Dumbbell, Brain, Scale } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

const ImpactStatsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 pb-12 lg:pb-16 pt-4 lg:pt-0">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="flex-1 w-full bg-muted rounded-2xl p-4 md:p-4 flex items-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white relative">
            <GraduationCap className="w-6 h-6 md:w-7 md:h-7 absolute top-2 pb-1" />
            <Gauge className="w-5 h-5 md:w-6 md:h-6 absolute bottom-2 pt-1" />
          </div>
          <p className="text-foreground font-semibold text-sm md:text-base leading-tight flex-1">
            Obesity & School<br />Performance
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="flex-1 w-full bg-background border border-border rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-background border border-primary/20 flex items-center justify-center shrink-0 text-primary relative">
            <Dumbbell className="w-6 h-6 mx-0.5" />
            <div className="w-[1px] h-6 bg-primary/30 mx-0.5"></div>
            <Brain className="w-6 h-6 mx-0.5" />
          </div>
          <p className="text-foreground font-semibold text-base md:text-lg leading-tight flex-1">
            Health & Working<br />Memory
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="flex-1 w-full bg-muted rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white relative">
            <Scale className="w-6 h-6 absolute left-2" />
            <span className="text-white font-[500] text-lg absolute right-3">=</span>
            <span className="text-white font-[500] text-sm absolute right-2 top-2">A+</span>
          </div>
          <p className="text-foreground font-semibold text-base md:text-lg leading-tight flex-1">
            Marks & Weight
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImpactStatsSection;
