import { ChevronLeft, ChevronRight } from "lucide-react";
import testImg1 from "@/assets/testimonial_principal_woman_1774967591464.png";
import testImg2 from "@/assets/testimonial_teacher_man_1774967611326.png";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F6] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111] mb-5 leading-tight tracking-tight">
            What they think about <span className="text-[#EE1D26]">HealthyRoo</span>
          </h2>
          <p className="text-[#333] font-medium text-base leading-relaxed">
            Happy Parents, happy students and a healthy life style are our core values.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full px-4 lg:px-8">
           
           {/* Left Arrow */}
           <button className="absolute left-0 lg:left-0 top-1/2 md:top-[35%] lg:top-1/2 -translate-y-1/2 w-16 h-16 bg-white hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-30 cursor-pointer border border-[#EBEBEB]">
             <ChevronLeft className="w-7 h-7 text-[#1A1A1A] mr-1 stroke-[2.5]" />
           </button>

           {/* Cards Row */}
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 px-6 lg:px-6">
             
             {/* Testimonial 1 */}
             <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 min-w-0">
                <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] shrink-0 rounded-full overflow-hidden shadow-md">
                   <img src={testImg1} alt="Melbourne High School Testimonial" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-2 sm:pt-6 text-center sm:text-left min-w-0">
                   <h3 className="text-2xl lg:text-3xl font-bold text-[#111] mb-4 tracking-tight">
                     Melbourne High School
                   </h3>
                   <p className="text-[#2B2B2B] text-sm lg:text-base leading-loose font-medium">
                     "Sometimes I feel that children listen more to an external agency than parents. HealthyRoo has been conducting workshops at The Melbourne High School which has really helped us to inculcate best education about health in students."
                   </p>
                </div>
             </div>

             {/* Testimonial 2 */}
             <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 min-w-0">
                <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] shrink-0 rounded-full overflow-hidden shadow-md">
                   <img src={testImg2} alt="Baulkham Hills High School Testimonial" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-2 sm:pt-6 text-center sm:text-left min-w-0">
                   <h3 className="text-2xl lg:text-3xl font-bold text-[#111] mb-4 tracking-tight">
                     Baulkham Hills High School
                   </h3>
                   <p className="text-[#2B2B2B] text-sm lg:text-base leading-loose font-medium">
                     "Sometimes I feel that children listen more to an external agency than parents. HealthyRoo has been conducting workshops at The Baulkham Hills High School which has really helped us to inculcate best education about health in students."
                   </p>
                </div>
             </div>

           </div>

           {/* Right Arrow */}
           <button className="absolute right-0 lg:right-0 top-1/2 md:top-[35%] lg:top-1/2 -translate-y-1/2 w-16 h-16 bg-white hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-30 cursor-pointer border border-[#EBEBEB]">
             <ChevronRight className="w-7 h-7 text-[#1A1A1A] ml-1 stroke-[2.5]" />
           </button>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
