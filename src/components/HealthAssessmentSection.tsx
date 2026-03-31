import healthAssessmentBg from "@/assets/health-assessment-bg.jpg";

const HealthAssessmentSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={healthAssessmentBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          width={1200}
          height={600}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Health Assessment for Australian Schools
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Our comprehensive assessment platform covers vision, hearing, dental, physical fitness,
              nutrition, and mental wellbeing — delivering actionable insights for every student.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 rounded-full bg-background text-primary font-semibold text-sm hover:bg-background/90 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Right Stats */}
          <div className="flex-1 flex gap-8 justify-center">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary-foreground">80+</div>
              <p className="text-primary-foreground/70 text-sm mt-2">Health Metrics Tracked</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary-foreground">45K+</div>
              <p className="text-primary-foreground/70 text-sm mt-2">Assessments Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAssessmentSection;
