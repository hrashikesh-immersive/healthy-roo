import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  School,
  Users,
  ClipboardCheck,
  TrendingUp,
  MoreVertical,
  ChevronRight,
  Plus,
  Stethoscope,
  Calendar,
  GraduationCap,
  FileText,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import StatCard from "@/components/superadmin/StatCard";

const SuperadminDashboard = () => {
  const statsSummary = [
    { title: "Total Schools / Corporate", value: "92", icon: School, color: "bg-blue-50 text-blue-500" },
    { title: "Total Students / Employee", value: "43,616", icon: Users, color: "bg-green-50 text-green-500" },
    { title: "Total Doctors", value: "29", icon: Stethoscope, color: "bg-purple-50 text-purple-500" },
    { title: "Total Reports Viewed By Parents", value: "5,112", icon: FileText, color: "bg-orange-50 text-orange-500" },
  ];

  const recentlyAddedSchools = [
    { name: "Springfield Academy", email: "contact@springfield.edu", students: 420 },
    { name: "Horizon High School", email: "info@horizonhigh.org", students: 850 },
    { name: "Oakwood Global School", email: "admin@oakwoodglobal.com", students: 1200 },
    { name: "Riverside International", email: "hello@riverside.edu", students: 640 },
    { name: "Maple Leaf Institute", email: "registrar@mapleleaf.org", students: 310 },
  ];

  const renewalSchools = [
    { name: "Springfield Academy", schoolName: "Springfield Academy", year: 2026 },
    { name: "Horizon High School", schoolName: "Horizon High School", year: 2026 },
    { name: "Oakwood Global School", schoolName: "Oakwood Global School", year: 2026 },
    { name: "Riverside International", schoolName: "Riverside International", year: 2026 },
    { name: "Maple Leaf Institute", schoolName: "Maple Leaf Institute", year: 2026 },
  ];

  const monthlyHistory = [
    { month: "April 2026", view: 24, download: 6 },
    { month: "March 2026", view: 32, download: 19 },
    { month: "February 2026", view: 44, download: 14 },
    { month: "January 2026", view: 46, download: 26 },
    { month: "December 2025", view: 60, download: 18 },
    { month: "November 2025", view: 90, download: 32 },
    { month: "October 2025", view: 87, download: 56 },
    { month: "September 2025", view: 332, download: 177 },
    { month: "August 2025", view: 2083, download: 2030 },
    { month: "July 2025", view: 269, download: 5412 },
  ];

  const yearlyReport = [
    { year: 2026, completed: 10563, incomplete: 33 },
    { year: 2025, completed: 15927, incomplete: 3 },
    { year: 2024, completed: 6905, incomplete: 4 },
    { year: 2023, completed: 9102, incomplete: 6 },
    { year: 2022, completed: 3861, incomplete: 1 },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">Dashboard</h1>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Platform Overview & Metrics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search dashboard metrics..." 
                className="pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm w-72 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 h-11 font-bold shadow-sm transition-all active:scale-95">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsSummary.map((stat, i) => (
            <StatCard
              key={i}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconColor={stat.color}
              trend={i % 2 === 0 ? "up" : "down"}
              trendValue={i % 2 === 0 ? "+12%" : "-2%"}
            />
          ))}
        </div>

        {/* Progress Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm bg-white p-6 rounded-2xl group hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Students</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Active Students</span>
                  <span className="text-foreground">39,563</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-1000" style={{ width: "90%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Inactive Students</span>
                  <span className="text-foreground">4,053</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full transition-all duration-1000" style={{ width: "10%" }} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-sm bg-white p-6 rounded-2xl group hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Schools</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Active Schools</span>
                  <span className="text-foreground">92</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Inactive Schools</span>
                  <span className="text-foreground">0</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full transition-all duration-1000" style={{ width: "0%" }} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-sm bg-white p-6 rounded-2xl group hover:shadow-md transition-shadow">
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Test Completion Status</h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Test Completed</span>
                  <span className="text-foreground">47,284</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-1000" style={{ width: "95%" }} />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Test Incomplete</span>
                  <span className="text-foreground">48</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "2%" }} />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Test Not Attempted</span>
                  <span className="text-foreground">-3,716</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full transition-all duration-1000" style={{ width: "0%" }} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Table Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm bg-white overflow-hidden rounded-2xl group hover:shadow-md transition-all">
            <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xs font-bold uppercase tracking-widest">Recently Added Schools</CardTitle>
              <Button size="sm" className="bg-white text-primary hover:bg-gray-100 h-7 text-[9px] uppercase font-bold px-3 rounded-lg border-none transition-colors shadow-sm">
                View More
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">School Name</th>
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Email</th>
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Students</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentlyAddedSchools.map((school, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors group/row">
                        <td className="px-6 py-4 font-bold text-foreground max-w-[200px] truncate">{school.name}</td>
                        <td className="px-6 py-4 text-primary font-medium">{school.email}</td>
                        <td className="px-6 py-4 font-bold text-foreground">{school.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white overflow-hidden rounded-2xl group hover:shadow-md transition-all">
            <CardHeader className="bg-primary p-4">
              <CardTitle className="text-white text-xs font-bold uppercase tracking-widest">Renewal School</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Name</th>
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">School Name</th>
                      <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {renewalSchools.map((school, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-foreground">{school.name}</td>
                        <td className="px-6 py-4 text-muted-foreground font-medium">{school.schoolName}</td>
                        <td className="px-6 py-4 font-bold text-foreground">{school.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white overflow-hidden rounded-2xl group hover:shadow-md transition-all min-h-[320px]">
            <CardHeader className="bg-primary p-4">
              <CardTitle className="text-white text-xs font-bold uppercase tracking-widest">Recent WhatsApp Logs</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col items-center justify-center bg-gray-50/20">
              <div className="flex flex-col items-center opacity-40 p-10">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-4 border border-gray-100">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">System awaiting activity logs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white overflow-hidden rounded-2xl group hover:shadow-md transition-all">
            <CardHeader className="bg-primary p-4">
              <CardTitle className="text-white text-xs font-bold uppercase tracking-widest">Monthly History</CardTitle>
            </CardHeader>
            <CardContent className="p-0 max-h-[320px] overflow-y-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="sticky top-0 bg-gray-50 border-b border-gray-100 z-10 shadow-sm">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Month</th>
                    <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Views</th>
                    <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-tighter">Downloads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {monthlyHistory.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">{item.month}</td>
                      <td className="px-6 py-4 text-primary font-bold">{item.view}</td>
                      <td className="px-6 py-4 text-foreground font-bold">{item.download}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white overflow-hidden rounded-2xl lg:col-span-2 group hover:shadow-md transition-all">
            <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xs font-bold uppercase tracking-widest">Student Yearly Report</CardTitle>
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                <TrendingUp className="w-3 h-3" />
                Growth
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-8 py-4 font-bold text-gray-400 uppercase tracking-tighter">Years</th>
                      <th className="px-8 py-4 font-bold text-gray-400 uppercase tracking-tighter text-center">Test Completed</th>
                      <th className="px-8 py-4 font-bold text-gray-400 uppercase tracking-tighter text-center">Test Incomplete</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {yearlyReport.map((report, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-4 font-bold text-foreground">{report.year}</td>
                        <td className="px-8 py-4 text-center font-bold text-green-600">{report.completed.toLocaleString()}</td>
                        <td className="px-8 py-4 text-center font-bold text-primary">{report.incomplete.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SuperadminDashboard;

