import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
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
  const recentSchools = [
    { name: "Sydney Grammar School", location: "Sydney, NSW", assessments: 1240, status: "Active" },
    { name: "Melbourne High School", location: "Melbourne, VIC", assessments: 850, status: "Active" },
    { name: "Brisbane State High", location: "Brisbane, QLD", assessments: 620, status: "Pending" },
    { name: "Adelaide High School", location: "Adelaide, SA", assessments: 430, status: "Active" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Platform Overview</h1>
            <p className="text-muted-foreground font-medium">Monitoring HealthyRoo ecosystem metrics in real-time.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-xl font-bold uppercase tracking-wider text-[10px]">Export Report</Button>
            <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
              <Plus className="w-4 h-4 mr-2" /> Add New School
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Schools"
            value="156"
            icon={School}
            trend="up"
            trendValue="+12%"
            iconColor="bg-blue-50 text-blue-500"
          />
          <StatCard
            title="Active Doctors"
            value="42"
            icon={Stethoscope}
            trend="up"
            trendValue="+5%"
            iconColor="bg-green-50 text-green-500"
          />
          <StatCard
            title="Visits Today"
            value="8"
            icon={Calendar}
            trend="up"
            trendValue="+2"
            iconColor="bg-purple-50 text-purple-500"
          />
          <StatCard
            title="Students Screened Today"
            value="1,240"
            icon={GraduationCap}
            trend="up"
            trendValue="+15%"
            iconColor="bg-orange-50 text-orange-500"
          />
          <StatCard
            title="Reports Generated Today"
            value="56"
            icon={FileText}
            trend="up"
            trendValue="+8%"
            iconColor="bg-teal-50 text-teal-500"
          />
          <StatCard
            title="Critical Cases"
            value="3"
            icon={AlertCircle}
            trend="down"
            trendValue="-2"
            iconColor="bg-red-50 text-red-500"
          />
        </div>

        {/* Today's Operations Section */}
        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold">Today's Operations</CardTitle>
              <p className="text-xs text-muted-foreground font-medium mt-1">Real-time clinical visit activity</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Live Updates</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">School Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Doctor Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Services</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">Screened</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { school: "Sydney Grammar", doctor: "Dr. Sarah Mitchell", services: ["ENT", "Vision"], screened: 45, status: "In Progress" },
                    { school: "Melbourne High", doctor: "Dr. James Wilson", services: ["Dental", "General"], screened: 82, status: "Completed" },
                    { school: "Brisbane State", doctor: "Dr. Emily Chen", services: ["ENT", "Dental"], screened: 0, status: "Not Started" },
                    { school: "Adelaide High", doctor: "Dr. Robert Taylor", services: ["Vision"], screened: 24, status: "In Progress" },
                  ].map((op, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5 font-bold text-sm text-foreground">{op.school}</td>
                      <td className="px-8 py-5 text-sm text-muted-foreground font-medium">{op.doctor}</td>
                      <td className="px-8 py-5">
                        <div className="flex gap-1 flex-wrap">
                          {op.services.map(s => (
                            <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] font-bold uppercase">{s}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center text-sm font-bold text-foreground">
                        {op.screened}
                      </td>
                      <td className="px-8 py-5">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          op.status === "Completed" ? "bg-green-100 text-green-600" :
                          op.status === "In Progress" ? "bg-yellow-100 text-yellow-600" :
                          "bg-red-100 text-red-600"
                        )}>{op.status}</span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <Button variant="outline" size="sm" className="rounded-xl font-bold text-[9px] uppercase tracking-widest px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Recent Schools Table */}
          <Card className="lg:col-span-2 border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Recent Registered Schools</CardTitle>
                <p className="text-xs text-muted-foreground font-medium mt-1">Verification queue and active status</p>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">School Name</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Assessments</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentSchools.map((school, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-5">
                          <p className="font-bold text-foreground text-sm">{school.name}</p>
                          <p className="text-xs text-muted-foreground font-medium">{school.location}</p>
                        </td>
                        <td className="px-8 py-5 text-sm font-bold text-foreground">
                          {school.assessments}
                        </td>
                        <td className="px-8 py-5">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            school.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                          )}>
                            {school.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* School Health Ranking */}
          <Card className="border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">School Health Ranking</CardTitle>
                <p className="text-xs text-muted-foreground font-medium mt-1">Global performance benchmarking</p>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[
                { name: "Sydney Grammar", score: 94, status: "Good", color: "bg-green-500" },
                { name: "Melbourne High", score: 88, status: "Good", color: "bg-green-500" },
                { name: "Brisbane State", score: 72, status: "Average", color: "bg-yellow-500" },
                { name: "Adelaide High", score: 65, status: "Average", color: "bg-yellow-500" },
                { name: "Perth Modern", score: 42, status: "Critical", color: "bg-red-500" },
              ].map((school, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">{school.name}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                      school.status === "Good" ? "bg-green-100 text-green-600" :
                      school.status === "Average" ? "bg-yellow-100 text-yellow-600" :
                      "bg-red-100 text-red-600"
                    )}>{school.status}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full transition-all duration-1000", school.color)} 
                        style={{ width: `${school.score}%` }} 
                      />
                    </div>
                    <span className="text-xs font-bold text-foreground min-w-[32px]">{school.score}%</span>
                  </div>
                </div>
              ))}
              <div className="pt-6 mt-6 border-t border-gray-50">
                <Button className="w-full rounded-xl bg-gray-50 text-foreground hover:bg-gray-100 border-none font-bold text-[10px] tracking-widest">
                  VIEW ALL RANKINGS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SuperadminDashboard;
