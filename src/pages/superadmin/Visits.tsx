import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Search,
  MoreVertical,
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatCard from "@/components/superadmin/StatCard";

const VisitsPage = () => {
  const visits = [
    { school: "Sydney Grammar", doctor: "Dr. Sarah Mitchell", date: "22 May 2026", time: "09:00 AM", status: "Completed" },
    { school: "Melbourne High", doctor: "Dr. James Wilson", date: "23 May 2026", time: "10:30 AM", status: "Scheduled" },
    { school: "Brisbane State High", doctor: "Dr. Emily Chen", date: "23 May 2026", time: "01:00 PM", status: "Scheduled" },
    { school: "Adelaide High School", doctor: "Dr. Robert Taylor", date: "24 May 2026", time: "11:00 AM", status: "Pending" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">School Visits</h1>
            <p className="text-muted-foreground font-medium">Schedule and track clinical visits across the network.</p>
          </div>
          <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
            <Plus className="w-4 h-4 mr-2" /> Schedule Visit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Today's Visits" 
            value="8" 
            icon={Clock} 
            iconColor="text-blue-500 bg-blue-50"
            trend="up"
            trendValue="+2"
          />
          <StatCard 
            title="Completed" 
            value="142" 
            icon={CheckCircle2} 
            iconColor="text-green-500 bg-green-50"
            trend="up"
            trendValue="+12%"
          />
          <StatCard 
            title="Pending Approval" 
            value="3" 
            icon={AlertCircle} 
            iconColor="text-orange-500 bg-orange-50"
            trend="down"
            trendValue="-1"
          />
        </div>

        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Upcoming Visits</CardTitle>
            <Button variant="ghost" size="icon" className="text-gray-400"><MoreVertical className="w-5 h-5" /></Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">School</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Doctor</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date & Time</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {visits.map((visit, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5 font-bold text-sm text-foreground">{visit.school}</td>
                      <td className="px-8 py-5 text-sm text-muted-foreground">{visit.doctor}</td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-foreground">{visit.date}</p>
                        <p className="text-[10px] text-muted-foreground font-medium">{visit.time}</p>
                      </td>
                      <td className="px-8 py-5">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          visit.status === "Completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                        )}>{visit.status}</span>
                      </td>
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

export default VisitsPage;
