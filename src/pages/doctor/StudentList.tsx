import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import DoctorLayout from "@/components/doctor/DoctorLayout";
import { 
  Search, ChevronDown, UserPlus, Upload, QrCode, 
  LayoutGrid, List, MoreVertical, Activity, Eye, 
  Smile, Ear, HeartPulse, Scale, ClipboardEdit, 
  CheckCircle2, Circle, RotateCcw, ChevronRight,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { 
  AddStudentModal, 
  ImportStudentModal, 
  Student, 
  StudentTests, 
  TestStatus 
} from "@/components/doctor/StudentModals";

// --- Mock Data & Definitions ---

const TEST_CATEGORIES = [
  { id: 'biometric', label: 'Biometric', icon: Fingerprint, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'eyes', label: 'Eyes', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'dental', label: 'Dental', icon: Smile, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { id: 'ent', label: 'ENT', icon: Ear, color: 'text-teal-500', bg: 'bg-teal-50' },
  { id: 'cardiovascular', label: 'Cardio', icon: HeartPulse, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 'general', label: 'General', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'bca', label: 'BCA', icon: Scale, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'finalNotes', label: 'Final Notes', icon: ClipboardEdit, color: 'text-slate-600', bg: 'bg-slate-100' },
] as const;

const initialMockStudents: Student[] = [
  { id: "STU001", name: "Ethan Hunt", class: "10", division: "A", dob: "12 May 2008", createdAt: Date.now() - 7000, tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'pending', cardiovascular: 'completed', general: 'completed', bca: 'pending', finalNotes: 'pending' } },
  { id: "STU002", name: "Selina Kyle", class: "10", division: "A", dob: "24 Aug 2008", createdAt: Date.now() - 6000, tests: { biometric: 'completed', eyes: 'pending', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', bca: 'pending', finalNotes: 'pending' } },
  { id: "STU003", name: "Bruce Wayne", class: "10", division: "B", dob: "05 Nov 2007", createdAt: Date.now() - 5000, tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', bca: 'completed', finalNotes: 'completed' } },
  { id: "STU004", name: "Clark Kent", class: "9", division: "A", dob: "18 Feb 2009", createdAt: Date.now() - 4000, tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'pending', general: 'pending', bca: 'pending', finalNotes: 'pending' } },
  { id: "STU005", name: "Diana Prince", class: "9", division: "C", dob: "30 Mar 2009", createdAt: Date.now() - 3000, tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', bca: 'completed', finalNotes: 'pending' } },
  { id: "STU006", name: "Barry Allen", class: "11", division: "Sci", dob: "14 Jan 2007", createdAt: Date.now() - 2000, tests: { biometric: 'completed', eyes: 'completed', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', bca: 'pending', finalNotes: 'pending' } },
  { id: "STU007", name: "Arthur Curry", class: "11", division: "Sci", dob: "22 Dec 2006", createdAt: Date.now() - 1000, tests: { biometric: 'pending', eyes: 'pending', dental: 'pending', ent: 'pending', cardiovascular: 'pending', general: 'pending', bca: 'pending', finalNotes: 'pending' } },
  { id: "STU008", name: "Victor Stone", class: "10", division: "B", dob: "09 Sep 2008", createdAt: Date.now(), tests: { biometric: 'completed', eyes: 'completed', dental: 'completed', ent: 'completed', cardiovascular: 'completed', general: 'completed', bca: 'pending', finalNotes: 'pending' } },
];

const StudentList = () => {
  const { schoolId, testId } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [headerContainer, setHeaderContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHeaderContainer(document.getElementById('header-filter-container'));
  }, []);
  
  // Data State
  const [students, setStudents] = useState<Student[]>(initialMockStudents);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const filteredStudents = useMemo(() => {
    return students
      .filter(student => 
        (student.name.toLowerCase().includes(searchQuery.toLowerCase()) || student.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedClass === "All" || student.class === selectedClass) &&
        (selectedDivision === "All" || student.division === selectedDivision)
      )
      .sort((a, b) => {
        if (sortOrder === "newest") return b.createdAt - a.createdAt;
        return a.createdAt - b.createdAt;
      });
  }, [students, searchQuery, selectedClass, selectedDivision, sortOrder]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedClass("All");
    setSelectedDivision("All");
    setSortOrder("newest");
  };

  const handleAddStudent = (newStudent: Student) => {
    setStudents(prev => [newStudent, ...prev]);
  };

  const handleImportStudents = (newStudents: Student[]) => {
    setStudents(prev => [...newStudents, ...prev]);
  };

  const filterContent = (
    <div className="flex items-center gap-3 w-full max-w-4xl animate-in fade-in slide-in-from-top-2">
      <div className="relative flex-1 max-w-[280px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search students..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
        />
      </div>
      
      <div className="relative w-28">
        <select 
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full pl-3 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium shadow-sm"
        >
          <option value="All">Class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>

      <div className="relative w-28">
        <select 
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(e.target.value)}
          className="w-full pl-3 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium shadow-sm"
        >
          <option value="All">Div</option>
          <option value="A">Div A</option>
          <option value="B">Div B</option>
          <option value="C">Div C</option>
          <option value="Sci">Div Sci</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>

      <div className="relative w-36">
        <select 
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
          className="w-full pl-3 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium shadow-sm"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>

      <Button 
        variant="ghost" 
        onClick={resetFilters}
        className="text-slate-500 hover:text-slate-800 hover:bg-white h-9 w-9 p-0 rounded-lg border border-transparent hover:border-slate-200 shadow-sm bg-white transition-all ml-1"
        title="Reset Filters"
      >
        <RotateCcw className="w-4 h-4" />
      </Button>
    </div>
  );

  return (
    <DoctorLayout>
      {headerContainer && ReactDOM.createPortal(filterContent, headerContainer)}
      <div className="bg-[#F7F9FC] min-h-[calc(100vh-72px)] -m-6 lg:-m-8 p-5 lg:p-8 font-sans">
        <div className="w-full animate-in fade-in duration-500">
          
          {/* Page Header & Actions */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="hover:text-slate-700 cursor-pointer transition-colors" onClick={() => navigate('/doctor/dashboard')}>Dashboard</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="hover:text-slate-700 cursor-pointer transition-colors">Session 2023-24</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-red-600">Student List</span>
              </nav>
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                {schoolId ? schoolId.charAt(0).toUpperCase() + schoolId.slice(1) + " Academy" : "Springfield Academy"}
                <span className="block text-xs font-medium text-slate-500 mt-1">Medical Inspection Session #402</span>
              </h1>
            </div>
            
            <div className="flex w-full md:w-auto gap-3">
              <Button 
                onClick={() => setIsImportModalOpen(true)}
                variant="outline" 
                className="flex-1 md:flex-none bg-white border-slate-200 text-slate-700 h-10 px-5 rounded-lg text-[11px] font-semibold uppercase tracking-wider hover:bg-slate-50 shadow-sm"
              >
                <Upload className="w-4 h-4 mr-2" /> Import
              </Button>
              <Button 
                onClick={() => setIsAddModalOpen(true)}
                className="flex-1 md:flex-none bg-gradient-to-br from-[#bb0015] to-[#e71522] text-white h-10 px-5 rounded-lg text-[11px] font-semibold uppercase tracking-wider hover:from-[#a00012] hover:to-[#cc121e] shadow-lg shadow-red-500/20 border-none"
              >
                <UserPlus className="w-4 h-4 mr-2" /> Add Student
              </Button>
            </div>
          </div>

          {/* Test Progress Summary */}
          <section className="mb-10">
            <div className="mb-5 flex justify-between items-end">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Test Progress Summary</h2>
              <span className="text-[10px] font-bold text-[#bb0015]">8 Modules</span>
            </div>
            
            <div className="grid grid-cols-4 xl:grid-cols-8 gap-3">
              {TEST_CATEGORIES.map(category => {
                const completedCount = filteredStudents.filter(s => s.tests[category.id as keyof StudentTests] === 'completed').length;
                const totalCount = filteredStudents.length;
                const Icon = category.icon;
                
                return (
                  <div key={category.id} className="bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-3 text-slate-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-sm text-slate-900">{category.label}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-medium">{completedCount} / {totalCount}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Student List */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-slate-900">Student Roster</h2>
              <div className="text-xs font-bold text-slate-500 bg-slate-200/50 px-3 py-1.5 rounded-lg">{filteredStudents.length} Students</div>
            </div>
            
            {filteredStudents.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200/60 p-16 text-center shadow-sm">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No students found</h3>
                <p className="text-sm text-slate-500">Try adjusting your filters in the top bar.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredStudents.map((student, idx) => {
                  // Count completed tests for urgency styling
                  const completedTests = Object.values(student.tests).filter(t => t === 'completed').length;
                  const totalTests = Object.keys(student.tests).length;
                  const isUrgent = completedTests < totalTests / 2;
                  
                  return (
                    <div key={student.id} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/60 relative overflow-hidden group transition-all">
                      {/* Left accent bar */}
                      <div className={cn(
                        "absolute left-0 top-0 bottom-0 w-1.5 transition-colors", 
                        isUrgent ? "bg-[#bb0015]" : "bg-slate-200 group-hover:bg-slate-300"
                      )}></div>
                      
                      <div className="flex justify-between items-start mb-4 pl-1">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-sm text-slate-900 group-hover:text-[#bb0015] transition-colors">{student.name}</h3>
                          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1">ID: {student.id}</p>
                        </div>
                        {isUrgent ? (
                          <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-red-100">Pending</span>
                        ) : completedTests === totalTests ? (
                          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-100">Complete</span>
                        ) : (
                          <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-200">Active</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 pl-1">
                        <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">Class</p>
                        <span className="font-semibold text-xs text-slate-900 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">Grade {student.class}-{student.division}</span>
                        <span className="text-[11px] text-slate-400">•</span>
                        <span className="text-[11px] text-slate-500">{student.dob}</span>
                        <span className="text-[11px] text-slate-400">•</span>
                        <span className="text-[11px] font-medium text-green-600">{completedTests}/{totalTests} done</span>
                      </div>

                      <div className="pl-1 mb-5">
                        <div className="flex gap-1.5 flex-wrap">
                          {TEST_CATEGORIES.map(c => {
                            const completed = student.tests[c.id as keyof StudentTests] === 'completed';
                            const Icon = c.icon;
                            return (
                              <div 
                                key={c.id}
                                className={cn(
                                  "flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-colors border",
                                  completed 
                                    ? "bg-green-50 text-green-700 border-green-200" 
                                    : "bg-slate-50 text-slate-400 border-slate-100"
                                )}
                              >
                                {completed 
                                  ? <CheckCircle2 className="w-3 h-3 text-green-500" />
                                  : <Icon className="w-3 h-3" />
                                }
                                <span>{c.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pl-1">
                        <Button 
                          onClick={() => navigate(`/doctor/students/${schoolId}/${testId}/${student.id}`)}
                          className="w-full bg-slate-50 text-slate-700 hover:bg-[#bb0015] hover:text-white border border-slate-200 hover:border-[#bb0015] h-10 rounded-lg text-[10px] font-semibold uppercase tracking-widest transition-all duration-300"
                        >
                          View Test Records
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
          
        </div>
      </div>

      {/* Modals */}
      <AddStudentModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddStudent} 
      />
      <ImportStudentModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
        onImport={handleImportStudents} 
      />
    </DoctorLayout>
  );
};

export default StudentList;
