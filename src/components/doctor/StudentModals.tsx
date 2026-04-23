import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { X, Upload, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// --- Types ---
export type TestStatus = 'completed' | 'pending';

export interface StudentTests {
  biometric: TestStatus;
  eyes: TestStatus;
  dental: TestStatus;
  ent: TestStatus;
  cardiovascular: TestStatus;
  general: TestStatus;
  bca: TestStatus;
  finalNotes: TestStatus;
}

export interface Student {
  id: string;
  name: string;
  class: string;
  division: string;
  dob: string;
  rollNo?: string;
  gender?: string;
  parentMobile?: string;
  parentEmail?: string;
  race?: string;
  tests: StudentTests;
  createdAt: number;
}

// --- Add Student Modal ---
interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (student: Student) => void;
}

export const AddStudentModal = ({ isOpen, onClose, onAdd }: AddStudentModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    class: "",
    division: "",
    rollNo: "",
    gender: "male" as "male" | "female",
    parentMobile: "",
    parentEmail: "",
    birthYear: "2015",
    birthMonth: "January",
    birthDay: "1"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Please enter student name");
      return;
    }

    const newStudent: Student = {
      id: formData.studentId || `STU${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      class: formData.class,
      division: formData.division,
      dob: `${formData.birthDay} ${formData.birthMonth} ${formData.birthYear}`,
      rollNo: formData.rollNo,
      gender: formData.gender,
      parentMobile: formData.parentMobile,
      parentEmail: formData.parentEmail,
      createdAt: Date.now(),
      tests: {
        biometric: 'pending',
        eyes: 'pending',
        dental: 'pending',
        ent: 'pending',
        cardiovascular: 'pending',
        general: 'pending',
        bca: 'pending',
        finalNotes: 'pending'
      }
    };

    onAdd(newStudent);
    toast.success("Student added successfully");
    onClose();
  };

  const years = Array.from({ length: 20 }, (_, i) => (2025 - i).toString());
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-3xl">
        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Add Student</h2>
            <DialogClose className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </DialogClose>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input 
                  placeholder="Shweta Test2" 
                  value={formData.studentId}
                  onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  placeholder="Enter student name*" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Select value={formData.class} onValueChange={(val) => setFormData({...formData, class: val})}>
                  <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-100 text-slate-500">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">Class 9</SelectItem>
                    <SelectItem value="10">Class 10</SelectItem>
                    <SelectItem value="11">Class 11</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1">
                <Input 
                  placeholder="Enter Division" 
                  value={formData.division}
                  onChange={(e) => setFormData({...formData, division: e.target.value})}
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
              <div className="col-span-1">
                <Input 
                  placeholder="Enter Roll No" 
                  value={formData.rollNo}
                  onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-0 border border-slate-100 rounded-xl overflow-hidden h-12 bg-slate-50">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, gender: 'male'})}
                  className={cn(
                    "flex-1 font-semibold text-sm transition-all",
                    formData.gender === 'male' ? "bg-white text-slate-800 shadow-sm" : "text-slate-400"
                  )}
                >
                  Male
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, gender: 'female'})}
                  className={cn(
                    "flex-1 font-semibold text-sm transition-all",
                    formData.gender === 'female' ? "bg-white text-slate-800 shadow-sm" : "text-slate-400"
                  )}
                >
                  Female
                </button>
              </div>
              <div>
                <Input 
                  placeholder="Parent mobile number*" 
                  value={formData.parentMobile}
                  onChange={(e) => setFormData({...formData, parentMobile: e.target.value})}
                  required
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-3 gap-2">
                <Select value={formData.birthYear} onValueChange={(val) => setFormData({...formData, birthYear: val})}>
                  <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={formData.birthMonth} onValueChange={(val) => setFormData({...formData, birthMonth: val})}>
                  <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-100 px-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={formData.birthDay} onValueChange={(val) => setFormData({...formData, birthDay: val})}>
                  <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input 
                  placeholder="Parent email*" 
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                  required
                  className="h-12 rounded-xl bg-slate-50 border-slate-100"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#ff9a44] to-[#ff7e5f] text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Add Student
              </Button>
              <Button 
                type="button" 
                onClick={onClose}
                className="flex-1 h-14 rounded-2xl bg-slate-700 text-white font-bold text-lg hover:bg-slate-800 transition-colors"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// --- Import Student Modal ---
interface ImportStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (students: Student[]) => void;
}

export const ImportStudentModal = ({ isOpen, onClose, onImport }: ImportStudentModalProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = () => {
    if (!file) {
      toast.error("Please choose a file first");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      
      const newStudents: Student[] = lines.slice(1)
        .filter(line => line.trim() !== '')
        .map((line, index) => {
          const values = line.split(',').map(v => v.trim());
          const studentData: any = {};
          headers.forEach((header, i) => {
            studentData[header] = values[i];
          });

          return {
            id: `STU${Math.floor(1000 + Math.random() * 9000 + index)}`,
            name: studentData['name'] || "Unknown Student",
            class: studentData['class'] || "N/A",
            division: studentData['division'] || "N/A",
            dob: studentData['date of birth'] || "N/A",
            parentMobile: studentData['parent mobile'],
            gender: studentData['gender'],
            rollNo: studentData['roll no'],
            race: studentData['race'],
            createdAt: Date.now() - index, // offset to keep order
            tests: {
              biometric: 'pending',
              eyes: 'pending',
              dental: 'pending',
              ent: 'pending',
              cardiovascular: 'pending',
              general: 'pending',
              bca: 'pending',
              finalNotes: 'pending'
            }
          };
        });

      onImport(newStudents);
      toast.success(`Successfully imported ${newStudents.length} students`);
      onClose();
      setFile(null);
    };
    reader.readAsText(file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border-none rounded-3xl">
        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Upload Student Information</h2>
            <DialogClose className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </DialogClose>
          </div>

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors mb-6 group"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".csv" 
              className="hidden" 
            />
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-slate-600" />
            </div>
            <p className="text-xl font-bold text-slate-800">{file ? file.name : "Choose File"}</p>
          </div>

          <p className="text-center text-sm text-slate-500 mb-8">
            To view the format of CSV File <a href="/src/components/doctor/import_students_demo.csv" download className="text-blue-500 font-bold hover:underline">Click here</a>
          </p>

          <div className="flex gap-4">
            <Button 
              onClick={handleImport}
              className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#ff9a44] to-[#ff7e5f] text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Import
            </Button>
            <Button 
              onClick={onClose}
              className="flex-1 h-14 rounded-2xl bg-slate-700 text-white font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
