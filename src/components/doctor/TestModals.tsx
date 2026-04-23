import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Pass/Refer Button Pair ---
const PassReferPair = ({ label, subtitle, defaultValue }: { label: string; subtitle: string; defaultValue?: 'P' | 'AB' | null }) => {
  const [selected, setSelected] = useState<'P' | 'AB' | null>(defaultValue || null);
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-semibold text-slate-800">{label}</p>
        <p className="text-[11px] text-slate-400 italic">{subtitle}</p>
      </div>
      <div className="flex gap-1.5">
        <button onClick={() => setSelected('P')} className={cn("w-9 h-8 rounded text-xs font-bold border transition-colors", selected === 'P' ? "bg-red-500 text-white border-red-500" : "bg-white text-slate-500 border-slate-200 hover:border-red-300")}>P</button>
        <button onClick={() => setSelected('AB')} className={cn("w-9 h-8 rounded text-xs font-bold border transition-colors", selected === 'AB' ? "bg-green-500 text-white border-green-500" : "bg-white text-slate-500 border-slate-200 hover:border-green-300")}>AB</button>
      </div>
    </div>
  );
};

// --- Form Field ---
const FormField = ({ label, unit, type = "text", defaultValue }: { label: string; unit?: string; type?: string; defaultValue?: string }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">{label}</label>
    <div className="flex items-center gap-2">
      <input 
        type={type} 
        defaultValue={defaultValue}
        placeholder="0" 
        className="w-full h-9 px-3 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 transition-colors" 
      />
      {unit && <span className="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap">{unit}</span>}
    </div>
  </div>
);

// --- Select Field ---
const SelectField = ({ label, options, defaultValue }: { label: string; options: string[]; defaultValue?: string }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600 mb-1.5 block">{label}</label>
    <select 
      defaultValue={defaultValue}
      className="w-full h-9 px-3 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 transition-colors appearance-none"
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

// --- Notes + Submit ---
const NotesAndSubmit = ({ defaultValue }: { defaultValue?: string }) => (
  <>
    <div className="mt-6">
      <label className="text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">📝 Notes</label>
      <textarea 
        rows={3} 
        defaultValue={defaultValue}
        placeholder="Add notes here..." 
        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 resize-none transition-colors" 
      />
    </div>
    <div className="flex justify-center mt-6">
      <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 h-10 rounded-lg text-xs font-semibold uppercase tracking-wider">Submit</Button>
    </div>
  </>
);

// --- Section Header ---
const SectionHeader = ({ title, color = "bg-pink-100" }: { title: string; color?: string }) => (
  <div className={cn("px-4 py-2 rounded-lg mb-4 mt-6", color)}>
    <h4 className="text-sm font-bold text-slate-800">{title}</h4>
  </div>
);

// --- Toggle in modal ---
const ModalToggle = ({ label, enabled = false }: { label: string; enabled?: boolean }) => {
  const [on, setOn] = useState(enabled);
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <button onClick={() => setOn(!on)} className={cn("relative w-10 h-5 rounded-full transition-colors", on ? "bg-green-500" : "bg-slate-200")}>
        <div className={cn("absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform", on && "translate-x-5")} />
      </button>
    </div>
  );
};

// ==========================================
// BIOMETRIC FORM
// ==========================================
export const BiometricForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="Biometric Screening" enabled={isCompleted} />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <FormField label="Weight / KGS" unit="KGS" defaultValue={isCompleted ? "65" : ""} />
      <FormField label="Height / CMS" unit="CMS" defaultValue={isCompleted ? "172" : ""} />
      <FormField label="BMI" defaultValue={isCompleted ? "21.9" : ""} />
      <SelectField label="BMI Percentile Status" options={["Select status", "Underweight", "Normal", "Overweight", "Obese"]} defaultValue={isCompleted ? "Normal" : "Select status"} />
    </div>
    <NotesAndSubmit defaultValue={isCompleted ? "Student is healthy and within normal range." : ""} />
  </div>
);

// ==========================================
// EYES FORM
// ==========================================
const EyeSection = ({ side, isCompleted }: { side: string; isCompleted?: boolean }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4">
    <div className="bg-pink-100 px-3 py-1.5 rounded-lg mb-4">
      <h5 className="text-xs font-bold text-slate-800">👁 {side}</h5>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <SelectField label="Sphere" options={["0.00", "-0.25", "-0.50", "-0.75", "-1.00", "+0.25", "+0.50"]} defaultValue={isCompleted ? "0.00" : "0.00"} />
      <SelectField label="Cylindrical" options={["0.00", "-0.25", "-0.50", "-0.75", "-1.00"]} defaultValue={isCompleted ? "0.00" : "0.00"} />
    </div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <FormField label="Axis IN" unit="DEC" defaultValue={isCompleted ? "180" : ""} />
      <FormField label="Pupil Size" unit="MM" defaultValue={isCompleted ? "3.5" : ""} />
    </div>
    <SelectField label="Spherical equivalent" options={["0.00", "-0.25", "-0.50", "-0.75"]} defaultValue={isCompleted ? "0.00" : "0.00"} />
  </div>
);

export const EyesForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="Eye Screening" enabled={isCompleted} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <EyeSection side="Left Eye" isCompleted={isCompleted} />
      <EyeSection side="Right Eye" isCompleted={isCompleted} />
    </div>
    <SectionHeader title="Pass / Refer Criteria" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Myopia (Near Sightedness)" subtitle="Difficult In Seeing Faraway Object" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Anisometropia" subtitle="Unequal Refractive Power In Both Eyes" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Hyperopia (Far Sightedness)" subtitle="Difficult In Seeing Near Object" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Strabismus" subtitle="Eye Misalignment" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Astigmatism (Blurred Vision)" subtitle="Due To Irregularly Shaped Cornea" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Anisocoria" subtitle="Unequal Pupil Size" defaultValue={isCompleted ? "P" : null} />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <SelectField label="Screening Result" options={["Normal Vision", "Myopia", "Hyperopia", "Astigmatism"]} defaultValue={isCompleted ? "Normal Vision" : "Normal Vision"} />
      <SelectField label="Prescription" options={["None", "Glasses", "Contact Lens", "Surgery"]} defaultValue={isCompleted ? "None" : "None"} />
    </div>
    <NotesAndSubmit defaultValue={isCompleted ? "Vision is clear in both eyes." : ""} />
  </div>
);

// ==========================================
// DENTAL FORM
// ==========================================
const ToothIcon = ({ filled, className }: { filled?: boolean; className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill={filled ? "currentColor" : "white"} 
    stroke="currentColor" 
    strokeWidth={filled ? "0" : "4"} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M25,20 C35,15 65,15 75,20 C85,25 80,45 75,55 C70,65 75,85 65,90 C55,95 50,80 50,70 C50,80 45,95 35,90 C25,85 30,65 25,55 C20,45 15,25 25,20 Z" />
    {!filled && <path d="M35,25 Q50,30 65,25" fill="none" />}
  </svg>
);

const Tooth = ({ number, inverted, initialSelected = false }: { number: number; inverted?: boolean; initialSelected?: boolean }) => {
  const [selected, setSelected] = useState(initialSelected);
  return (
    <div 
      className="flex flex-col items-center gap-1.5 cursor-pointer group"
      onClick={() => setSelected(!selected)}
    >
      {inverted && <span className="text-xs font-bold text-slate-800">{number}</span>}
      <ToothIcon 
        filled={selected} 
        className={cn(
          "w-8 h-10 transition-colors drop-shadow-sm", 
          selected ? "text-[#E6192B]" : "text-slate-800 hover:text-slate-500",
          inverted && "rotate-180"
        )} 
      />
      {!inverted && <span className="text-xs font-bold text-slate-800">{number}</span>}
    </div>
  );
};

export const DentalForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="Dental Screening" enabled={isCompleted} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mb-4">
      <PassReferPair label="Gum Inflammation" subtitle="Redness/swelling of gums" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Calculus" subtitle="Hardened dental plaque" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Bleeding" subtitle="Gum bleeding on probing" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Filling in Teeth" subtitle="Existing dental fillings" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Alignment of Teeth" subtitle="Teeth alignment check" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Stains" subtitle="Teeth discoloration" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Plaque" subtitle="Soft deposits on teeth" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Caries" subtitle="Tooth decay/cavities" defaultValue={isCompleted ? "P" : null} />
    </div>

    <SectionHeader title="Milk Teeth" color="bg-green-100" />
    <div className="flex justify-center gap-6 md:gap-12 mb-2">
      <div className="flex gap-2">
        {[55,54,53,52,51].map(n => <Tooth key={n} number={n} initialSelected={isCompleted && n === 54} />)}
      </div>
      <div className="flex gap-2">
        {[61,62,63,64,65].map(n => <Tooth key={n} number={n} />)}
      </div>
    </div>
    <div className="flex justify-center gap-6 md:gap-12 mb-8">
      <div className="flex gap-2">
        {[85,84,83,82,81].map(n => <Tooth key={n} number={n} inverted />)}
      </div>
      <div className="flex gap-2">
        {[71,72,73,74,75].map(n => <Tooth key={n} number={n} inverted />)}
      </div>
    </div>

    <SectionHeader title="Permanent Teeth" color="bg-green-100" />
    <div className="flex justify-center gap-6 md:gap-8 mb-2">
      <div className="flex gap-1.5 md:gap-2">
        {[18,17,16,15,14,13,12,11].map(n => <Tooth key={n} number={n} />)}
      </div>
      <div className="flex gap-1.5 md:gap-2">
        {[21,22,23,24,25,26,27,28].map(n => <Tooth key={n} number={n} />)}
      </div>
    </div>
    <div className="flex justify-center gap-6 md:gap-8 mb-6">
      <div className="flex gap-1.5 md:gap-2">
        {[48,47,46,45,44,43,42,41].map(n => <Tooth key={n} number={n} inverted />)}
      </div>
      <div className="flex gap-1.5 md:gap-2">
        {[31,32,33,34,35,36,37,38].map(n => <Tooth key={n} number={n} inverted />)}
      </div>
    </div>

    <NotesAndSubmit defaultValue={isCompleted ? "One cavity found in tooth 54. Otherwise good." : ""} />
  </div>
);

// ==========================================
// ENT FORM
// ==========================================
export const ENTForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="ENT Screening" enabled={isCompleted} />
    <SectionHeader title="Ear Examination" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Ear Discharge" subtitle="Fluid from ear canal" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Hearing Loss" subtitle="Reduced hearing ability" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Ear Wax" subtitle="Excessive cerumen" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Tinnitus" subtitle="Ringing in ears" defaultValue={isCompleted ? "P" : null} />
    </div>
    <SectionHeader title="Nose Examination" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Nasal Blockage" subtitle="Obstruction in nasal passage" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Deviated Septum" subtitle="Crooked nasal septum" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Sinusitis" subtitle="Sinus inflammation" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Epistaxis" subtitle="Nose bleeding" defaultValue={isCompleted ? "P" : null} />
    </div>
    <SectionHeader title="Throat Examination" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Tonsillitis" subtitle="Inflamed tonsils" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Pharyngitis" subtitle="Sore throat" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Adenoid Hypertrophy" subtitle="Enlarged adenoids" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Voice Hoarseness" subtitle="Change in voice" defaultValue={isCompleted ? "P" : null} />
    </div>
    <NotesAndSubmit defaultValue={isCompleted ? "Ear, Nose, and Throat are clear." : ""} />
  </div>
);

// ==========================================
// CARDIOVASCULAR FORM
// ==========================================
export const CardiovascularForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="Cardiovascular Screening" enabled={isCompleted} />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <FormField label="Blood Pressure (Systolic)" unit="mmHg" defaultValue={isCompleted ? "110" : ""} />
      <FormField label="Blood Pressure (Diastolic)" unit="mmHg" defaultValue={isCompleted ? "70" : ""} />
      <FormField label="Heart Rate" unit="BPM" defaultValue={isCompleted ? "75" : ""} />
      <FormField label="SpO2" unit="%" defaultValue={isCompleted ? "99" : ""} />
    </div>
    <SectionHeader title="Pass / Refer Criteria" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Heart Murmur" subtitle="Abnormal heart sounds" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Irregular Rhythm" subtitle="Arrhythmia detected" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Hypertension" subtitle="High blood pressure" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Cyanosis" subtitle="Bluish skin discoloration" defaultValue={isCompleted ? "P" : null} />
    </div>
    <NotesAndSubmit defaultValue={isCompleted ? "Vitals are perfect." : ""} />
  </div>
);

// ==========================================
// GENERAL FORM
// ==========================================
export const GeneralForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    <ModalToggle label="General Screening" enabled={isCompleted} />
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <SelectField label="Skin Condition" options={["Normal", "Eczema", "Rash", "Fungal Infection", "Other"]} defaultValue={isCompleted ? "Normal" : "Normal"} />
      <SelectField label="Hair Condition" options={["Normal", "Lice", "Dandruff", "Alopecia", "Other"]} defaultValue={isCompleted ? "Normal" : "Normal"} />
      <SelectField label="Nail Condition" options={["Normal", "Brittle", "Fungal", "Clubbing", "Other"]} defaultValue={isCompleted ? "Normal" : "Normal"} />
      <SelectField label="Posture" options={["Normal", "Kyphosis", "Lordosis", "Scoliosis"]} defaultValue={isCompleted ? "Normal" : "Normal"} />
      <SelectField label="Hygiene" options={["Good", "Average", "Poor"]} defaultValue={isCompleted ? "Good" : "Good"} />
      <SelectField label="Nutritional Status" options={["Normal", "Underweight", "Overweight", "Malnourished"]} defaultValue={isCompleted ? "Normal" : "Normal"} />
    </div>
    <SectionHeader title="Pass / Refer Criteria" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <PassReferPair label="Lymphadenopathy" subtitle="Enlarged lymph nodes" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Pallor" subtitle="Pale appearance" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Jaundice" subtitle="Yellowing of skin/eyes" defaultValue={isCompleted ? "P" : null} />
      <PassReferPair label="Edema" subtitle="Swelling in body parts" defaultValue={isCompleted ? "P" : null} />
    </div>
    <NotesAndSubmit defaultValue={isCompleted ? "Student maintains good hygiene." : ""} />
  </div>
);

// ==========================================
// FINAL NOTES FORM
// ==========================================
export const FinalNotesForm = ({ isCompleted }: { isCompleted?: boolean }) => (
  <div>
    {isCompleted && <ModalToggle label="Final Report Status" enabled={isCompleted} />}
    <div className="mb-6">
      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Overall Health Summary</label>
      <textarea rows={4} defaultValue={isCompleted ? "The student is in excellent health. All vital signs are normal and within expected ranges for their age. No significant issues were found across any screening modules." : ""} placeholder="Provide overall health assessment summary..." className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 resize-none" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <SelectField label="Overall Health Status" options={["Fit", "Needs Attention", "Requires Follow-up", "Critical"]} defaultValue={isCompleted ? "Fit" : "Fit"} />
      <SelectField label="Priority" options={["Low", "Medium", "High", "Urgent"]} defaultValue={isCompleted ? "Low" : "Low"} />
    </div>
    <div className="mb-6">
      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Recommendations</label>
      <textarea rows={3} defaultValue={isCompleted ? "Continue balanced diet and regular exercise. Annual follow-up recommended." : ""} placeholder="Add recommendations for the student..." className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 resize-none" />
    </div>
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Referral Notes</label>
      <textarea rows={3} defaultValue={isCompleted ? "No referrals needed at this time." : ""} placeholder="Add referral notes if applicable..." className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-slate-400 resize-none" />
    </div>
    <div className="flex justify-center mt-6">
      <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 h-10 rounded-lg text-xs font-semibold uppercase tracking-wider">Submit Final Report</Button>
    </div>
  </div>
);

// ==========================================
// FORM MAP
// ==========================================
export const FORM_MAP: Record<string, { title: string; component: React.FC<any> }> = {
  biometric: { title: "Biometric Screening", component: BiometricForm },
  eyes: { title: "Eye Screening", component: EyesForm },
  dental: { title: "Dental Screening", component: DentalForm },
  ent: { title: "ENT Screening", component: ENTForm },
  cardiovascular: { title: "Cardiovascular Screening", component: CardiovascularForm },
  general: { title: "General Screening", component: GeneralForm },
  finalNotes: { title: "Final Notes & Report", component: FinalNotesForm },
};

// ==========================================
// INLINE PANEL (renders below test row)
// ==========================================
interface TestInlinePanelProps {
  testId: string | null;
  isCompleted: boolean;
  onClose: () => void;
}

export const TestInlinePanel = ({ testId, isCompleted, onClose }: TestInlinePanelProps) => {
  if (!testId) return null;
  const config = FORM_MAP[testId];
  if (!config) return null;
  const FormComponent = config.component;

  return (
    <div className="mt-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden animate-in slide-in-from-top-2 fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200/60 bg-slate-50">
        <h3 className="text-sm font-semibold text-slate-900">{config.title}</h3>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 flex items-center justify-center transition-colors border border-slate-200"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      {/* Body */}
      <div className="p-6">
        <FormComponent isCompleted={isCompleted} />
      </div>
    </div>
  );
};
