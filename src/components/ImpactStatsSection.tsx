import { GraduationCap, Gauge, Dumbbell, Brain, Scale, FileSpreadsheet, Weight } from "lucide-react";

const ImpactStatsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 pb-12 lg:pb-16 pt-4 lg:pt-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
        {/* Card 1 */}
        <div className="flex-1 w-full bg-muted rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white relative">
             <GraduationCap className="w-8 h-8 absolute top-2 pb-1" />
             <Gauge className="w-6 h-6 absolute bottom-2 pt-1" />
          </div>
          <p className="text-foreground font-semibold text-base md:text-lg leading-tight flex-1">
            Obesity & School<br />Performance
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 w-full bg-background border border-border rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-background border border-primary/20 flex items-center justify-center shrink-0 text-primary relative">
             <Dumbbell className="w-6 h-6 mx-0.5" />
             <div className="w-[1px] h-6 bg-primary/30 mx-0.5"></div>
             <Brain className="w-6 h-6 mx-0.5" />
          </div>
          <p className="text-foreground font-semibold text-base md:text-lg leading-tight flex-1">
            Health & Working<br />Memory
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 w-full bg-muted rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white relative">
            <Scale className="w-6 h-6 absolute left-2" />
            <span className="text-white font-bold text-lg absolute right-3">=</span>
            <span className="text-white font-bold text-sm absolute right-2 top-2">A+</span>
          </div>
          <p className="text-foreground font-semibold text-base md:text-lg leading-tight flex-1">
            Marks & Weight
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
