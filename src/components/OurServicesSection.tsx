import { useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesDoctor from "@/assets/services-doctor.png";
import servicesNurse from "@/assets/services-nurse.png";
import healthAssessmentTeacher from "@/assets/health-assessment-teacher.png";
import healthAssessmentDoctor from "@/assets/health-assessment-doctor.png";
import healthCenterImg from "../assets/health-center-infirmary.png";
import nursePortraitImg from "../assets/school-nurse-portrait.png";
import insuranceImg from "../assets/insurance-medical-graphic.png";
import changemakersImg from "../assets/changemakers-girl.png";
import workshopImg from "../assets/workshop-presentation.png";
import vaccinationImg from "../assets/vaccination-program.png";
import diagnosticImg from "../assets/diagnostic-services.png";
import { 
  CheckCircle2, Stethoscope, Star, Shield, HeartPulse, 
  Pill, MoreHorizontal, Apple, Brain, Droplets, 
  Activity, Plus, Minus, Lightbulb 
} from "lucide-react";

const HealthAssessmentTab = ({ onContact }: { onContact: () => void }) => (
  <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 animate-in fade-in duration-700 max-w-[1200px] mx-auto px-4 lg:px-0">
    {/* Left Collage */}
    <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto h-[500px] md:h-[600px]">
      {/* Top Image (Masked student/teacher) */}
      <div className="absolute top-0 left-0 w-[55%] h-[75%] rounded-[3rem] overflow-hidden shadow-2xl z-20 transition-transform hover:scale-[1.02]">
        <img src={healthAssessmentTeacher} alt="Teacher-Student Assessment" className="w-full h-full object-cover" />
      </div>
      
      {/* Teal Triangles (Top Right) */}
      <div className="absolute top-8 left-[60%] z-10 hidden sm:block">
        <div className="grid grid-cols-2 gap-1 w-24 h-24 lg:w-32 lg:h-32 opacity-80">
          <div className="bg-[#B5D8D0]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
          <div className="bg-[#94C7BD]" style={{ clipPath: 'polygon(0 0%, 100% 0%, 0% 100%)' }} />
          <div className="bg-[#B5D8D0]" style={{ clipPath: 'polygon(0 0%, 100% 100%, 0% 100%)' }} />
          <div className="bg-[#94C7BD]" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 0%)' }} />
        </div>
      </div>

      {/* Red Double D (Bottom Left) */}
      <div className="absolute bottom-10 left-[15%] z-30 transition-transform hover:scale-110">
        <div className="flex gap-2">
          <div className="w-10 h-20 bg-[#EE1D26] rounded-l-full shadow-lg" />
          <div className="w-10 h-20 bg-[#EE1D26] rounded-l-full shadow-lg" />
        </div>
      </div>

      {/* Bottom Image (Doctor Consultation) */}
      <div className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-[4rem] overflow-hidden shadow-2xl z-20 bg-white transition-transform hover:scale-[1.02]">
        <img src={healthAssessmentDoctor} alt="Doctor Assessment" className="w-full h-full object-cover" />
      </div>
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-muted/5 rounded-full blur-3xl -z-10" />
    </div>

    {/* Right Content */}
    <div className="flex-1 lg:max-w-xl">
      <div className="relative inline-block mb-1 group">
        <h3 className="text-4xl lg:text-5xl font-black text-foreground leading-none tracking-tight">Health Assessments</h3>
        <svg className="absolute -right-16 -top-4 w-12 h-12 text-black opacity-30 transform transition-transform group-hover:rotate-12 group-hover:scale-110" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M10 40 Q 25 10 40 40" strokeLinecap="round" />
        </svg>
      </div>
      <p className="text-[#EE1D26] font-black text-lg mb-6 leading-none uppercase tracking-wide">Ensuring Well-Being for Your School</p>
      
      <div className="space-y-6 text-foreground/70 text-base leading-relaxed mb-10">
        <p>At HealthyRoo Education, we offer comprehensive health assessments, setting the benchmark for student health within educational institutions across Australia</p>
        <p>Our assessments cover 70+ globally recommended health parameters across 5 areas:</p>
      </div>

      <ul className="grid grid-cols-1 gap-5 mb-10">
        {[
          "Physical Assessment", "ENT Assessment", 
          "Dental Assessment", "EYE Assessment", 
          "Anthropometric Assessment"
        ].map((item) => (
          <li key={item} className="flex items-center gap-4 text-foreground font-black text-sm uppercase tracking-wide group cursor-default">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#EE1D26] transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
            {item}
          </li>
        ))}
      </ul>

      <button 
        onClick={onContact}
        className="bg-[#EE1D26] text-white font-black px-12 py-5 rounded-full uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
      >
        Book Demo
      </button>
    </div>
  </div>
);

const HealthSafetyTab = ({ onContact }: { onContact: () => void }) => (
  <div className="space-y-32 py-10 animate-in slide-in-from-bottom-4 duration-700">
    {/* 1. Health Center */}
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* ... (rest of HealthSafetyTab remains same until the end) ... */}
      <div className="flex-1 relative group">
        <div className="relative z-10 rounded-[20px] overflow-hidden border-4 border-black/5 shadow-2xl">
          <img src={healthCenterImg} alt="Health Center" className="w-full h-[300px] md:h-[400px] object-cover" />
          <div className="absolute top-[20%] left-[-20px] w-24 h-24 rounded-full bg-secondary/10 -z-10" />
        </div>
        {/* Decorative elements from screenshot */}
        <div className="absolute bottom-[-30px] right-[-20px] w-32 h-12 bg-black text-white flex items-center justify-center font-bold text-sm rounded shadow-lg z-20">
          Health Hubs
        </div>
        <div className="absolute top-[-20px] right-[10%] z-20 transform rotate-12">
            <MoreHorizontal className="text-secondary w-12 h-12 stroke-[4]" />
        </div>
        <Stethoscope className="absolute bottom-[-40px] left-[30%] text-primary w-16 h-16 opacity-80 -rotate-12" />
        <Star className="absolute right-[5%] bottom-[10%] text-secondary w-8 h-8 fill-current" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Health Center</h2>
        <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-none">Giving Health a Home</h3>
        <p className="text-muted-foreground leading-relaxed mb-8 text-base">Whether you're looking to transform an existing infirmary or establish a brand new health center, we can help you design, equip, and automate a state-of-the-art health center that meets the highest standards.</p>
        <div className="space-y-4">
          <h4 className="text-primary font-black text-lg uppercase">We Offer</h4>
          <ul className="space-y-3">
            {["Branding and Interiors Renovation", "Medical Equipment and Consumables", "Ambulance Services", "Tech Platform For Health Record Maintenence"].map(item => (
              <li key={item} className="flex items-center gap-3 text-foreground font-black text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* 2. Medical Staff */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
      <div className="flex-1 relative flex justify-center">
         {/* Red Pentagon Graphic from screenshot */}
         <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px]">
            <div className="absolute inset-0 bg-primary shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
            <div className="absolute inset-2 bg-white overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
               <img src={nursePortraitImg} alt="Nurse" className="w-full h-full object-cover object-top scale-110 translate-y-10 md:translate-y-12" />
            </div>
            <div className="absolute top-[-20px] left-[15%] text-primary"><Star className="w-12 h-12 fill-current" /></div>
            <div className="absolute bottom-[-10px] right-[-5%] text-primary"><Star className="w-10 h-10 fill-current" /></div>
         </div>
         {/* Background soft circle */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-muted/30 rounded-full -z-10" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Medical Staff</h2>
        <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-none">School Nurse and Doctor</h3>
        <p className="text-muted-foreground leading-relaxed mb-10 text-base">On an average a health center gets 15-30 cases per day. Having a qualified health practitioner in your school is a must.</p>
        
        <div className="space-y-12">
            <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                    <Stethoscope className="text-white w-7 h-7" />
                </div>
                <div>
                   <h4 className="font-black text-foreground mb-2 text-lg uppercase leading-tight">Qualified and Experienced Nurse or Doctor</h4>
                   <p className="text-muted-foreground text-sm">We deploy medical staff based on your requirements to keep your health center running smoothly every day.</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                    <HeartPulse className="text-white w-7 h-7" />
                </div>
                <div>
                   <h4 className="font-black text-foreground mb-2 text-lg uppercase leading-tight">Backup</h4>
                   <p className="text-muted-foreground text-sm">If the staff is absent, we have a replacement ready to step in immediately, ensuring continuous healthcare services.</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    {/* 3. Insurance */}
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      <div className="flex-1 relative flex justify-center">
         <div className="relative group p-4 border-2 border-dashed border-black/10 rounded-full shrink-0">
            <div className="relative z-10 w-[260px] h-[260px] md:w-[450px] md:h-[450px] bg-white rounded-full p-4 md:p-12 shadow-inner flex items-center justify-center">
               <img src={insuranceImg} alt="Insurance" className="w-4/5 h-4/5 object-contain" />
            </div>
            <Pill className="absolute top-0 right-[15%] w-14 h-14 text-[#26C797] -rotate-12" />
            <Shield className="absolute bottom-[10%] left-[-20px] w-16 h-16 text-primary shadow-xl rounded-full bg-white p-2" />
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-muted/20 rounded-full -z-10" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Insurance</h2>
        <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-none">Ensure Year Round Protection</h3>
        <p className="text-muted-foreground leading-relaxed mb-10 text-base">Accidents can occur anytime, anywhere in a school environment where children are actively engaged. With an Insurance plan, you can ensure that they are safeguarded against accidental emergencies on campus.</p>
        
        <div className="space-y-4">
           <h4 className="text-primary font-black text-lg uppercase">Key Inclusion</h4>
           <ul className="space-y-3">
            {[
                "Accidental Coverage up to Rs. 1 Lakh",
                "Hospitalisation Coverage up to Rs.50,000",
                "Separate plans for students, teachers, and staff",
                "Health insurance options available"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-foreground font-black text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="flex justify-center pt-8">
        <button 
          onClick={onContact}
          className="bg-primary text-white font-black px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-primary/80 transition-all shadow-2xl"
        >
          Connect With Us
        </button>
    </div>
  </div>
);

const HealthEducationTab = ({ onContact }: { onContact: () => void }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("FOR STUDENTS");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="space-y-32 py-10 animate-in slide-in-from-bottom-4 duration-700">
      {/* 1. Changemakers Program */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* ... (rest of the program content) ... */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Health Education</h2>
          <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-none">THE HEALTHSETGO CHANGEMAKERS PROGRAM</h3>
          
          <div className="space-y-6 mb-10 text-base text-muted-foreground leading-relaxed">
            <p>The Changemakers Program is a health activity based program for students that transforms health into an engaging learning experience.</p>
            <p>Under the program, we create a student-led Wellness Club at your School, so they can become advocates for healthy living, both within their school and beyond.</p>
            <p>These clubs serve as hubs for promoting holistic wellbeing among students through engaging activities and projects.</p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Students receive one theme per quarter with modules & activities.",
              "Interactive activities and contests focused on building healthy habits will be run through the year.",
              "Certificates and prizes will be given for each student in the Changemakers Club."
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-foreground font-black text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" /> {item}
              </li>
            ))}
          </ul>

          <div className="mb-12">
            <h4 className="text-primary font-black text-lg uppercase mb-8">THE CLUBS WILL FOCUS ON 4 THEMES</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "NUTRITION", icon: Apple },
                { name: "MENTAL HEALTH", icon: Brain },
                { name: "HYGIENE", icon: Droplets },
                { name: "PHYSICAL WELLNESS", icon: Activity }
              ].map(theme => (
                <div key={theme.name} className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                    <theme.icon className="text-white w-9 h-9" />
                  </div>
                  <span className="text-xs font-black text-foreground text-center leading-tight tracking-wider">{theme.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-black text-white font-black px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-800 transition-all shadow-xl">Explore the Program</button>
        </div>

        <div className="flex-1 relative flex justify-center">
          <div className="relative w-full max-w-[500px] h-[550px] lg:h-[650px]">
             {/* Vibrant Green Shape Backdrop from screenshot */}
             <div className="absolute inset-0 bg-[#26C797] -z-10" style={{ clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 90%)' }} />
             <div className="absolute inset-0 flex items-center justify-center grayscale-0">
                <img src={changemakersImg} alt="Changemakers Student" className="w-full h-full object-contain relative z-10" />
             </div>
             
             {/* Decorative floating icons */}
             <div className="absolute top-[10%] left-[5%] text-[#26C797] animate-pulse">
                <Star className="w-12 h-12 fill-current" />
             </div>
             <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center -z-10 backdrop-blur-sm">
                <Lightbulb className="text-foreground w-10 h-10 opacity-60" />
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] bg-muted/10 rounded-full -z-20 blur-3xl opacity-50" />
        </div>
      </div>

      {/* 2. Workshops Section */}
      <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 pt-20 border-t border-muted/20">
         <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10 p-2 bg-white shadow-[-20px_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-black inline-block overflow-hidden rounded-sm">
                <img src={workshopImg} alt="Workshop" className="w-full max-w-[500px] h-auto object-cover" />
                <div className="absolute top-0 left-0 w-full h-[5px] bg-black" />
            </div>
            {/* Design circle backdrops */}
            <div className="absolute top-[-40px] left-[-40px] w-48 h-48 bg-secondary rounded-full -z-10 opacity-40" />
            <div className="absolute bottom-[-60px] right-[10%] w-64 h-64 bg-muted/10 rounded-full -z-10" />
         </div>

         <div className="flex-1 w-full order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Workshops</h2>
            <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-none">EMPOWERING HOLISTIC WELLNESS</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
              We offer a variety of events and sessions tailored to the needs of parents, students, and school staff. These sessions cover a range of topics including nutrition, mental health, physical activity, and more. Our goal is to provide valuable information and resources to support the overall wellbeing of the school community.
            </p>
            <button className="bg-black text-white font-black px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-800 transition-all mb-16 shadow-lg">Schedule a Workshop</button>

            {/* Specialized Workshop Accordions */}
            <div className="space-y-4 pt-10">
               {/* ... (Accordion content) ... */}
               {[
                 { 
                   id: "FOR STUDENTS", 
                   items: [
                     "Good touch and bad touch for the young ones (Primary school)",
                     "Preparing for exams - role of study skills",
                     "Effective time management",
                     "Managing anger - Special Session",
                     "On being assertive – coping with peer pressure",
                     "Building effective communication skills",
                     "Life skills training for adolescents",
                     "Sex education for adolescents (Middle school) - Special Session",
                     "Effective stress management",
                     "Media literacy",
                     "Relationships and attraction (Senior school) - Special Session",
                     "Risky behavior in adolescents",
                     "Emotions and you - Special Session",
                     "Bullying and it’s prevention - Special Session",
                     "Body image and the self",
                     "Preventing substance use and abuse - Special Session",
                     "Practices to improve creative thinking",
                     "Personality development",
                     "Building self-esteem",
                     "Tech Addiction - Special Session"
                   ] 
                 },
                 { id: "FOR TEACHERS", items: ["Stress Management for Educators", "Emotional Intelligence in Classrooms", "Identifying Behavioral Issues", "Techniques for Effective Teaching", "Teacher Wellness Practices"] },
                 { id: "FOR PARENTS", items: ["Positive Parenting Strategies", "Nutritional Guidance for Growing Kids", "Screen Time & Digital Wellness", "Communicating with Adolescents"] }
               ].map(group => (
                 <div key={group.id} className="border-b border-muted/10 last:border-0 overflow-hidden">
                    <button 
                      onClick={() => toggleAccordion(group.id)}
                      className="w-full flex items-center justify-between py-5 text-primary font-black text-sm uppercase tracking-widest text-left transition-colors hover:text-black"
                    >
                      <span>{group.id}</span>
                      {openAccordion === group.id ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-black" />}
                    </button>
                    {openAccordion === group.id && (
                      <div className="pb-10 pt-2 animate-in slide-in-from-top-2 duration-300">
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {group.items.map(item => (
                              <li key={item} className="flex items-start gap-2 text-foreground/70 text-sm leading-relaxed group">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5 group-hover:bg-primary transition-colors" />
                                <span className="group-hover:text-foreground transition-colors">{item}</span>
                              </li>
                            ))}
                         </ul>
                      </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onContact}
          className="bg-primary text-white font-black px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-primary/80 transition-all shadow-2xl"
        >
          Connect With Us
        </button>
    </div>
    </div>
  );
};


const CommunityWellnessTab = ({ onContact }: { onContact: () => void }) => (
  <div className="space-y-32 py-10 animate-in slide-in-from-bottom-4 duration-700">
    {/* 1. Vaccination Program */}
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">In-School Vaccination Program</h2>
        <h3 className="text-lg md:text-xl font-black text-foreground/80 mb-6 md:mb-8 uppercase tracking-widest leading-tight">CONVENIENCE, COMFORT, AND CARE – ALL UNDER ONE ROOF!</h3>
        
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          We offer vaccination services for students and their family members, making it convenient for parents to ensure that their loved ones are protected against preventable diseases.
        </p>

        <div className="space-y-6">
          <h4 className="text-primary font-black text-lg uppercase">HOW IT WORKS</h4>
          <ul className="space-y-6">
            {[
              { title: "Schedule", desc: "Schools can schedule vaccination sessions with our team at their preferred dates and times." },
              { title: "Awareness", desc: "We provide detailed information, educational resources, and prompt assistance to ensure that schools and families have a thorough understanding of the vaccination." },
              { title: "On-Site Vaccination", desc: "Our team sets up a vaccination booth at the school, equipped with all necessary supplies and qualified healthcare staff." },
              { title: "Consent Process", desc: "We handle the consent process efficiently, ensuring that all necessary permissions are obtained from parents or guardians." },
              { title: "Vaccination Day", desc: "On the scheduled day, students receive their vaccinations in a comfortable and organized manner, with minimal disruption to their academic schedule." }
            ].map(item => (
              <li key={item.title} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5" />
                <p className="text-sm leading-relaxed">
                  <span className="font-black text-foreground">{item.title}:</span> <span className="text-muted-foreground">{item.desc}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center">
        <div className="relative w-full max-w-[500px] h-[550px] lg:h-[650px]">
           {/* Vibrant Green Polygon Shape Backdrop */}
           <div className="absolute inset-0 bg-[#26C797] -z-10" style={{ clipPath: 'polygon(15% 10%, 100% 0%, 90% 100%, 0% 85%)' }} />
           <div className="absolute inset-0 flex items-center justify-center">
              <img src={vaccinationImg} alt="Vaccination Family" className="w-full h-full object-contain relative z-10" />
           </div>
           
           {/* Floating brand symbols */}
           <div className="absolute bottom-[20%] left-[-20px] text-[#26C797] animate-pulse">
              <Star className="w-10 h-10 fill-current" />
           </div>
           <div className="absolute top-[10%] right-[5%] text-[#26C797]">
              <Star className="w-8 h-8 fill-current" />
           </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-muted/10 rounded-full -z-20 blur-3xl opacity-40" />
      </div>
    </div>

    {/* 2. Diagnostic Services */}
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-20 border-t border-muted/20">
       <div className="flex-1 relative">
          <div className="relative z-10 p-2 bg-white shadow-2xl border-[8px] border-black inline-block rounded-sm overflow-hidden group">
              <img src={diagnosticImg} alt="Diagnostic Services" className="w-full max-w-[500px] h-auto object-cover transform transition-transform group-hover:scale-105 duration-700" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary -z-10 opacity-20" />
          </div>
          {/* Yellow Design Circle */}
          <div className="absolute top-[-30px] left-[-30px] w-48 h-48 bg-secondary rounded-full -z-10 opacity-60" />
       </div>

       <div className="flex-1">
          <h2 className="text-5xl font-black leading-none mb-2 text-foreground tracking-tighter uppercase">Diagnostic Services</h2>
          <h3 className="text-xl font-black text-foreground/80 mb-8 uppercase tracking-widest leading-none">PRIORITIZE THE HEALTH AND WELL-BEING OF YOUR SCHOOL STAFF</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
            Partnering with the best diagnostic facilities, we offer affordable, accurate, and timely examinations, including pathology, radiology, and cancer screening. Our collaboration ensures convenience and accessibility, empowering your staff to prioritize their health proactively.
          </p>
       </div>
    </div>

        <div className="flex justify-center pt-20">
        <button 
          onClick={onContact}
          className="bg-primary text-white font-black px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-primary/80 transition-all shadow-2xl border-4 border-transparent hover:border-primary/20"
        >
          Connect With Us
        </button>
    </div>
  </div>
);

const OurServicesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Health Assessment"); // Default back to Health Assessment as per screenshot

  const tabs = ["Health Assessment", "Health Safety", "Health Education", "Community Wellness"];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground leading-relaxed text-base">We provide a comprehensive offering of health services for school. Pick from our packages or combine services from our catalogue.</p>
        </div>

        {/* Updated Tab Navigation - Scrollable on Mobile */}
        <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-x-8 md:gap-x-12 mb-20 border-b border-gray-100/50 overflow-x-auto pb-4 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm md:text-base font-semibold tracking-wide transition-all relative whitespace-nowrap shrink-0 ${
                activeTab === tab 
                  ? "text-primary border-b-[3px] border-primary" 
                  : "text-[#444] hover:text-foreground"
               }`}
             >
               {tab}
             </button>
           ))}
         </div>

        {/* Dynamic Content */}
        <div className="min-h-[600px]">
          {activeTab === "Health Assessment" && <HealthAssessmentTab onContact={() => navigate("/contact")} />}
          {activeTab === "Health Safety" && <HealthSafetyTab onContact={() => navigate("/contact")} />}
          {activeTab === "Health Education" && <HealthEducationTab onContact={() => navigate("/contact")} />}
          {activeTab === "Community Wellness" && <CommunityWellnessTab onContact={() => navigate("/contact")} />}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
