import React, { useState } from "react";
import ReactDOM from "react-dom";
import SchoolLayout from "@/components/school/SchoolLayout";
import StudentCard from "@/components/school/StudentCard";
import {
  Search,
  RotateCcw,
  Download,
  History,
  Eye,
  Stethoscope,
  Filter,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SchoolDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      name: "rahul test",
      id: "SGTYUHJ-018",
      className: "1st (A)",
      mobile: "9691823389",
      dob: "02-01-2026",
      testProgress: 100,
      scanningDate: "17-02-2026, 17:55:42",
      updateDate: "17-02-2026, 20:03:35",
      bgColor: "bg-white"
    },
    {
      name: "Naina",
      id: "SGTYUHJ-017",
      className: "2nd (paanch)",
      mobile: "8446844645",
      dob: "05-06-2017",
      testProgress: 100,
      scanningDate: "20-02-2026, 23:10:29",
      updateDate: "20-02-2026, 23:16:12",
      bgColor: "bg-white"
    },
    {
      name: "Vivek",
      id: "SGTYUHJ-14",
      className: "3rd (B)",
      mobile: "7738554876",
      dob: "11-12-2018",
      testProgress: 0,
      scanningDate: "N/A",
      updateDate: "N/A",
      bgColor: "bg-white"
    },
    {
      name: "Ananya Sharma",
      id: "SGTYUHJ-022",
      className: "4th (C)",
      mobile: "9876543210",
      dob: "15-08-2016",
      testProgress: 100,
      scanningDate: "21-02-2026, 10:20:15",
      updateDate: "21-02-2026, 11:45:30",
      bgColor: "bg-white"
    },
    {
      name: "Arjun Mehta",
      id: "SGTYUHJ-025",
      className: "1st (A)",
      mobile: "9123456789",
      dob: "10-05-2025",
      testProgress: 100,
      scanningDate: "22-02-2026, 09:15:00",
      updateDate: "22-02-2026, 10:00:00",
      bgColor: "bg-white"
    },
    {
      name: "Ishita Gupta",
      id: "SGTYUHJ-030",
      className: "2nd (B)",
      mobile: "8234567890",
      dob: "22-03-2017",
      testProgress: 0,
      scanningDate: "N/A",
      updateDate: "N/A",
      bgColor: "bg-white"
    },
    {
      name: "Kabir Singh",
      id: "SGTYUHJ-045",
      className: "3rd (C)",
      mobile: "7345678901",
      dob: "14-02-2018",
      testProgress: 100,
      scanningDate: "23-02-2026, 14:30:00",
      updateDate: "23-02-2026, 15:00:00",
      bgColor: "bg-white"
    },
    {
      name: "Zara Khan",
      id: "SGTYUHJ-050",
      className: "4th (A)",
      mobile: "6456789012",
      dob: "30-11-2016",
      testProgress: 100,
      scanningDate: "24-02-2026, 11:00:00",
      updateDate: "24-02-2026, 12:00:00",
      bgColor: "bg-white"
    }
  ];

  return (
    <SchoolLayout>
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* <div>
            <div className="flex items-center gap-3 mb-1">
               <h1 className="text-3xl font-semibold text-slate-900">School Dashboard</h1>
               <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-semibold uppercase tracking-widest rounded-md">Live</span>
            </div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Springfield Academy Assessment Portal</p>
          </div>
           */}
          {/* <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl h-11 border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold px-6">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl h-11 px-8 font-semibold shadow-lg shadow-red-500/20">
              <Download className="w-4 h-4 mr-2" />
              Download All Reports
            </Button>
          </div> */}
        </div>

        {/* Quick Stats Overview */}

        {/* Styled Filter & Search (Portaled to Header) */}
        {document.getElementById('school-header-filter-container') && ReactDOM.createPortal(
          <div className="flex items-center gap-2 lg:gap-3 w-full animate-in fade-in duration-300">
            
            {/* Student Name or ID Input */}
            <div className="relative flex-1 min-w-[140px] max-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search Name or ID" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 shadow-sm transition-all"
              />
            </div>

            {/* Select Class */}
            <div className="relative flex-1 min-w-[120px] max-w-[180px] hidden sm:block">
              <select className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-slate-700 font-medium shadow-sm transition-all">
                <option>All Classes</option>
                <option>1st (A)</option>
                <option>2nd (B)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            
            {/* Test Period */}
            <div className="relative flex-1 min-w-[130px] max-w-[180px] hidden md:block">
              <select className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-slate-700 font-medium shadow-sm transition-all">
                <option>New Test-2026</option>
                <option>Past Test-2025</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Sort Select */}
            <div className="relative flex-1 min-w-[130px] max-w-[160px] hidden lg:block">
              <select className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-slate-700 font-medium shadow-sm transition-all">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 ml-auto flex-shrink-0">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-5 py-2 h-[38px] font-medium shadow-sm text-sm transition-colors flex items-center">
                Search
              </Button>
              <Button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl w-[38px] h-[38px] p-0 shadow-sm flex-shrink-0 transition-colors flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>,
          document.getElementById('school-header-filter-container')!
        )}

        {/* Student List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Students List
              <span className="text-sm font-medium text-slate-400">({students.length} found)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {students.map((student, i) => (
              <StudentCard key={i} {...student} />
            ))}
          </div>
        </div>
        {/* Footer info */}
        <div className="text-center py-10 opacity-30">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © 2026 Vigour360 • Developed by Immersive Infotech
          </p>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default SchoolDashboard;
