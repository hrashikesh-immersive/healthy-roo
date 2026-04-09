import { ArrowUp } from "lucide-react";

const statsData = [
  {
    value: "60",
    text: "Reduced Nutrition\nDeficiency",
    bg: "bg-[#EBE2FF]"
  },
  {
    value: "78",
    text: "Of Academic Focus &\nPerformance",
    bg: "bg-[#FFD6D2]"
  },
  {
    value: "92",
    text: "Reduced\nAbsenteeism",
    bg: "bg-[#FFECC2]"
  },
  {
    value: "40",
    text: "of Increased Physicals\nActivity",
    bg: "bg-[#CAE5DF]"
  }
];

const SchoolStatsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-[500] text-[#111] leading-tight ">
            Our School & College Clients<br />
            Have Witnessed
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={`${stat.bg} rounded-[20px] p-6 lg:p-7 flex flex-col justify-between min-h-[160px] md:min-h-[190px] shadow-sm transform transition-transform hover:scale-[1.02]`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-5xl md:text-6xl font-[500] text-[#111] leading-none ">
                    {stat.value}
                  </span>
                  <span className="text-xl font-[500] text-[#111] leading-none">%</span>
                </div>

                <div className="w-[42px] h-[42px] rounded-full bg-[#32A021] flex items-center justify-center shrink-0 shadow-sm">
                  <ArrowUp className="w-[22px] h-[22px] text-white stroke-[2.5]" />
                </div>
              </div>

              <p className="text-[#1A1A1A] font-medium text-base leading-snug">
                {stat.text.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SchoolStatsSection;
