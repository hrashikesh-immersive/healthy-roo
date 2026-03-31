import heroNurseBlue from "@/assets/hero-nurse-blue.jpg";
import aboutImg from "@/assets/about-school-screening.jpg";

const PartnerDeliverySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Partnered Healthcare */}
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="h-[220px] overflow-hidden">
              <img
                src={heroNurseBlue}
                alt="Partnered healthcare professionals"
                className="w-full h-full object-cover"
                loading="lazy"
                width={512}
                height={700}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Partnered Healthcare</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We partner with AHPRA-registered health professionals across Australia to deliver
                trusted, clinical-grade assessments in school settings.
              </p>
            </div>
          </div>

          {/* Delivered To School */}
          <div className="bg-background rounded-2xl overflow-hidden border border-border">
            <div className="h-[220px] overflow-hidden">
              <img
                src={aboutImg}
                alt="Health screening delivered to schools"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={700}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Delivered To School</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No need for parents to take time off work. Our team comes to the school, making
                health screening accessible and convenient for every family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerDeliverySection;
