import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Activity,
  Search,
  MoreVertical,
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatCard from "@/components/superadmin/StatCard";

const StudentsPage = () => {
  const students = [
    { name: "John Doe", school: "Sydney Grammar", grade: "Year 9", healthScore: "92/100", lastAssessment: "12 Apr 2026" },
    { name: "Jane Smith", school: "Melbourne High", grade: "Year 11", healthScore: "85/100", lastAssessment: "15 Apr 2026" },
    { name: "Alex Johnson", school: "Sydney Grammar", grade: "Year 8", healthScore: "78/100", lastAssessment: "10 Apr 2026" },
    { name: "Sarah Williams", school: "Brisbane State High", grade: "Year 10", healthScore: "95/100", lastAssessment: "18 Apr 2026" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Directory</h1>
            <p className="text-muted-foreground font-medium">Monitor health trends and assessment data for all students.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="bg-white border border-gray-100 focus:border-primary/20 outline-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium transition-all w-64 shadow-sm"
              />
            </div>
            <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
              <Plus className="w-4 h-4 mr-2" /> Register Student
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Students" 
            value="45,210" 
            icon={Users} 
            iconColor="text-blue-500 bg-blue-50"
            trend="up"
            trendValue="+8%"
          />
          <StatCard 
            title="Avg Health Score" 
            value="82%" 
            icon={Heart} 
            iconColor="text-red-500 bg-red-50"
            trend="up"
            trendValue="+1.2%"
          />
          <StatCard 
            title="Pending Assessments" 
            value="1,240" 
            icon={Activity} 
            iconColor="text-orange-500 bg-orange-50"
            trend="down"
            trendValue="-45"
          />
        </div>

        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Recent Assessments</CardTitle>
            <Button variant="ghost" size="icon" className="text-gray-400"><MoreVertical className="w-5 h-5" /></Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Student Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">School & Grade</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Health Score</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Assessment</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {students.map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5 font-bold text-sm text-foreground">{student.name}</td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-semibold text-foreground">{student.school}</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{student.grade}</p>
                      </td>
                      <td className="px-8 py-5 text-sm font-bold text-primary">{student.healthScore}</td>
                      <td className="px-8 py-5 text-sm text-muted-foreground">{student.lastAssessment}</td>
                      <td className="px-8 py-5 text-right">
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight className="w-4 h-4 text-primary" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default StudentsPage;
