import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DoctorLayout from "@/components/doctor/DoctorLayout";
import {
  ChevronRight, Eye, Ear, Smile, HeartPulse, Activity,
  Scale, ClipboardEdit, Fingerprint, CheckCircle2,
  Clock, User, Phone, CalendarDays, Mail, School,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TestInlinePanel } from "@/components/doctor/TestModals";

// --- Types & Mock Data ---

type TestStatus = 'completed' | 'pending';

interface StudentTests {
  biometric: TestStatus;
  eyes: TestStatus;
  dental: TestStatus;
  ent: TestStatus;
  cardiovascular: TestStatus;
  general: TestStatus;
  finalNotes: TestStatus;
}

interface StudentDetail {
  id: string;
  name: string;
  uniqueId: string;
  gender: string;
  class: string;
  division: string;
  dob: string;
  parentMobile: string;
  email: string;
  schoolName: string;
  scanningDate: string;
  updateDate: string;
  tests: StudentTests;
}

const TEST_CATEGORIES = [
  { id: 'biometric', label: 'Biometric', icon: Fingerprint },
  { id: 'eyes', label: 'Eyes', icon: Eye },
  { id: 'dental', label: 'Dental', icon: Smile },
  { id: 'ent', label: 'ENT', icon: Ear },
  { id: 'cardiovascular', label: 'Cardiovascular', icon: HeartPulse },
  { id: 'general', label: 'General', icon: Activity },
  { id: 'finalNotes', label: 'Final Notes', icon: ClipboardEdit },
] as const;

// Mock student details keyed by ID
const mockStudentDetails: Record<string, StudentDetail> = {
  STU001: { id: "STU001", name: "Ethan Hunt", uniqueId: "SGTYUHJ-001", gender: "Male", class: "10", division: "A", dob: "12-05-2008", parentMobile: "9876543210", email: "ethan.hunt@school.com", schoolName: "Springfield Academy", scanningDate: "Jan 27, 2026, 09:51 PM", updateDate: "Apr 22, 2026, 08:09 PM", tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'pending', cardiovascular: 'completed', general: 'completed', finalNotes: 'pending' } },
  STU002: { id: "STU002", name: "Selina Kyle", uniqueId: "SGTYUHJ-002", gender: "Female", class: "10", division: "A", dob: "24-08-2008", parentMobile: "9876543211", email: "selina.kyle@school.com", schoolName: "Springfield Academy", scanningDate: "Jan 27, 2026, 10:15 AM", updateDate: "Apr 20, 2026, 03:30 PM", tests: { biometric: 'completed', eyes: 'pending', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', finalNotes: 'pending' } },
  STU003: { id: "STU003", name: "Bruce Wayne", uniqueId: "SGTYUHJ-003", gender: "Male", class: "10", division: "B", dob: "05-11-2007", parentMobile: "9876543212", email: "bruce.wayne@school.com", schoolName: "Springfield Academy", scanningDate: "Jan 28, 2026, 11:00 AM", updateDate: "Apr 23, 2026, 10:00 AM", tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', finalNotes: 'completed' } },
  STU004: { id: "STU004", name: "Clark Kent", uniqueId: "SGTYUHJ-004", gender: "Male", class: "9", division: "A", dob: "18-02-2009", parentMobile: "9876543213", email: "clark.kent@school.com", schoolName: "Springfield Academy", scanningDate: "Jan 29, 2026, 09:00 AM", updateDate: "Apr 21, 2026, 05:45 PM", tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'pending', general: 'pending', finalNotes: 'pending' } },
  STU005: { id: "STU005", name: "Diana Prince", uniqueId: "SGTYUHJ-005", gender: "Female", class: "9", division: "C", dob: "30-03-2009", parentMobile: "9876543214", email: "diana.prince@school.com", schoolName: "Springfield Academy", scanningDate: "Jan 30, 2026, 02:30 PM", updateDate: "Apr 22, 2026, 11:20 AM", tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', finalNotes: 'pending' } },
  STU006: { id: "STU006", name: "Barry Allen", uniqueId: "SGTYUHJ-006", gender: "Male", class: "11", division: "Sci", dob: "14-01-2007", parentMobile: "9876543215", email: "barry.allen@school.com", schoolName: "Springfield Academy", scanningDate: "Feb 01, 2026, 08:45 AM", updateDate: "Apr 19, 2026, 06:00 PM", tests: { biometric: 'completed', eyes: 'completed', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', finalNotes: 'pending' } },
  STU007: { id: "STU007", name: "Arthur Curry", uniqueId: "SGTYUHJ-007", gender: "Male", class: "11", division: "Sci", dob: "22-12-2006", parentMobile: "9876543216", email: "arthur.curry@school.com", schoolName: "Springfield Academy", scanningDate: "Feb 02, 2026, 10:30 AM", updateDate: "—", tests: { biometric: 'pending', eyes: 'pending', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', finalNotes: 'pending' } },
  STU008: { id: "STU008", name: "Victor Stone", uniqueId: "SGTYUHJ-008", gender: "Male", class: "10", division: "B", dob: "09-09-2008", parentMobile: "9876543217", email: "victor.stone@school.com", schoolName: "Springfield Academy", scanningDate: "Feb 03, 2026, 01:15 PM", updateDate: "Apr 23, 2026, 09:30 AM", tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', finalNotes: 'pending' } },
};

// --- Donut Chart Component ---
const DonutChart = ({ value, total, label, color }: { value: number; total: number; label: string; color: string }) => {
  const percentage = total === 0 ? 0 : Math.round((value / total) * 100);
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-slate-900">
            {label === "Test" ? `${value}/${total}` : `${percentage}%`}
          </span>
        </div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</span>
    </div>
  );
};

// --- Toggle Switch Component ---
const ToggleSwitch = ({ enabled, label }: { enabled: boolean; label: string }) => {
  const [isOn, setIsOn] = useState(enabled);
  return (
    <div className="flex items-center justify-between gap-4 bg-white border border-slate-200/60 rounded-xl px-5 py-4">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-200",
          isOn ? "bg-green-500" : "bg-slate-200"
        )}
      >
        <div className={cn(
          "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200",
          isOn && "translate-x-5"
        )} />
      </button>
    </div>
  );
};

// --- Main Component ---
const StudentTestDetails = () => {
  const { schoolId, testId, studentId } = useParams();
  const navigate = useNavigate();

  const student = mockStudentDetails[studentId || "STU001"];
  const [activeTestModal, setActiveTestModal] = useState<string | null>('biometric');

  if (!student) {
    return (
      <DoctorLayout>
        <div className="bg-[#F7F9FC] min-h-[calc(100vh-72px)] -m-6 lg:-m-8 p-5 lg:p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Student not found</h2>
            <p className="text-sm text-slate-500 mb-4">The student record you're looking for doesn't exist.</p>
            <Button onClick={() => navigate(-1)} className="bg-slate-900 text-white">Go Back</Button>
          </div>
        </div>
      </DoctorLayout>
    );
  }

  const completedTests = Object.values(student.tests).filter(t => t === 'completed').length;
  const totalTests = Object.keys(student.tests).length;
  const completionPercentage = Math.round((completedTests / totalTests) * 100);

  return (
    <DoctorLayout>
      <div className="bg-[#F7F9FC] min-h-[calc(100vh-72px)] -m-6 lg:-m-8 p-5 lg:p-8 font-sans">
        <div className="w-full animate-in fade-in duration-500">

          {/* Breadcrumb + Back */}
          <div className="mb-6 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="hover:text-slate-700 cursor-pointer transition-colors" onClick={() => navigate('/doctor/dashboard')}>School List</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="hover:text-slate-700 cursor-pointer transition-colors" onClick={() => navigate(-1)}>Student List</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-red-600">Medical Test</span>
            </nav>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="h-9 px-4 text-xs font-semibold bg-white border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back
            </Button>
          </div>

          {/* Student Profile + Stats Card */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 lg:p-8 mb-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">

              {/* Student Info */}
              <div className="flex items-center gap-5 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200/60">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-slate-900">{student.name}</h1>
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Unique Id: {student.uniqueId}</p>
                  <p className="text-xs text-slate-500 mt-1">Gender: <span className="font-medium text-slate-700">{student.gender}</span></p>
                </div>
              </div>

              {/* School Info */}
              <div className="flex items-center gap-5 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200/60">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">{student.schoolName}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Class: <span className="font-medium text-slate-700">{student.class}-{student.division}</span></p>
                  <p className="text-xs text-slate-500 mt-0.5 truncate max-w-[200px]">{student.email}</p>
                </div>
              </div>

              {/* Donut Charts */}
              <div className="flex items-center gap-8">
                <DonutChart value={completedTests} total={totalTests} label="Test" color="#3b82f6" />
                <DonutChart value={completionPercentage} total={100} label="Test Status" color={completionPercentage === 100 ? "#22c55e" : "#f59e0b"} />
              </div>
            </div>

            {/* Detail Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">Parent Mobile</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">{student.parentMobile}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  <CalendarDays className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">Date of Birth</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">{student.dob}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">Scanning Date</p>
                  <p className="text-xs font-semibold text-[#bb0015] mt-0.5">{student.scanningDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">Update Date</p>
                  <p className="text-xs font-semibold text-[#bb0015] mt-0.5">{student.updateDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Test Categories Status */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {TEST_CATEGORIES.map(cat => {
                const isCompleted = student.tests[cat.id as keyof StudentTests] === 'completed';
                const Icon = cat.icon;
                const percentage = isCompleted ? 100 : 0;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setActiveTestModal(cat.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md hover:scale-[1.03]",
                      isCompleted
                        ? "bg-green-50/50 border-green-200/60"
                        : "bg-slate-50/50 border-slate-100"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      isCompleted ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={cn(
                      "text-xs font-semibold text-center",
                      isCompleted ? "text-green-700" : "text-slate-600"
                    )}>
                      {cat.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className={cn(
                        "text-[10px] font-bold",
                        isCompleted ? "text-green-600" : "text-slate-400"
                      )}>
                        {percentage}%
                      </span>
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>



          {/* Inline Test Detail Panel */}
          {activeTestModal && (
            <TestInlinePanel 
              testId={activeTestModal} 
              isCompleted={student.tests[activeTestModal as keyof StudentTests] === 'completed'}
              onClose={() => setActiveTestModal(null)} 
            />
          )}

        </div>
      </div>
    </DoctorLayout>
  );
};

export default StudentTestDetails;
