import { CheckCircle, Star } from "lucide-react";
import heroDoctorGreenImg from "@/assets/hero-doctor-green.png";
import heroBoyBlueImg from "@/assets/hero-boy-blue.png";
import heroNurseYellowImg from "@/assets/hero-nurse-yellow.png";
import engagedStudentsImg from "@/assets/engaged-students.png";

const features = [
  "High-End Screening Tools",
  "Data Management & Analytics",
  "Leading Consultants & Experts",
];

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 text-foreground">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          {/* Rating - Precision Match */}
          <div className="flex items-center gap-4 mb-6">
            <div className="shrink-0">
              <img 
                src={engagedStudentsImg} 
                alt="Engaged HealthyRoo Students - Australia" 
                className="w-[93px] h-[27px] object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 leading-none">
                <span className="text-xl font-black">4.9</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-bold text-muted-foreground mt-1 tracking-tight">Engaged Students</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Better Education Through{" "}
            <span className="text-primary">"Health"</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            HealthyRoo empowers Australian schools with comprehensive health screening programmes, 
            helping students thrive through early detection and expert-led wellness initiatives 
            tailored to the unique needs of young Australians.
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Empower Your School
          </a>
        </div>

        {/* Right Images */}
        <div className="flex-1 flex gap-3 md:gap-4 justify-center items-center w-full max-w-3xl overflow-hidden px-2">
          {/* Green Card - Male Dr */}
          <div className="w-[45%] sm:w-[200px] md:w-[220px] h-[300px] sm:h-[380px] md:h-[480px] rounded-[32px] overflow-hidden shadow-lg shrink-0 bg-[#27A870] flex items-end">
            <img
              src={heroDoctorGreenImg}
              alt="Healthcare Professional - HealthyRoo Australia"
              className="w-full h-full object-cover object-top [backface-visibility:hidden] [transform:translateZ(0)]"
            />
          </div>
          {/* Blue Card - Student focal point */}
          <div className="w-[40%] sm:w-[180px] md:w-[200px] h-[260px] sm:h-[320px] md:h-[400px] rounded-[32px] overflow-hidden shadow-lg shrink-0 bg-[#244E9B] flex items-end mt-16 md:mt-24">
            <img
              src={heroBoyBlueImg}
              alt="Healthy Student - Australia"
              className="w-full h-full object-cover object-top [backface-visibility:hidden] [transform:translateZ(0)]"
            />
          </div>
          {/* Yellow Card - Female Dr - visible only on sm+ */}
          <div className="hidden sm:flex w-[180px] md:w-[200px] h-[320px] md:h-[460px] rounded-[32px] overflow-hidden shadow-lg shrink-0 bg-[#FFD641] items-center self-start mt-6">
            <img
              src={heroNurseYellowImg}
              alt="Medical Support Team - HealthyRoo Australia"
              className="w-full h-full object-cover object-[72%_center] scale-110 [backface-visibility:hidden] [transform:translateZ(0)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
