import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  Search,
  MoreVertical,
  ChevronRight,
  Plus,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatCard from "@/components/superadmin/StatCard";

const DoctorsPage = () => {
  const doctors = [
    { name: "Dr. Sarah Mitchell", specialty: "Pediatrics", email: "sarah.m@healthyroo.com", status: "Active", experience: "12 Years" },
    { name: "Dr. James Wilson", specialty: "Mental Health", email: "james.w@healthyroo.com", status: "Active", experience: "8 Years" },
    { name: "Dr. Emily Chen", specialty: "Nutrition", email: "emily.c@healthyroo.com", status: "On Leave", experience: "5 Years" },
    { name: "Dr. Robert Taylor", specialty: "General Practice", email: "robert.t@healthyroo.com", status: "Active", experience: "15 Years" },
    { name: "Dr. Lisa Wong", specialty: "Sports Medicine", email: "lisa.w@healthyroo.com", status: "Active", experience: "10 Years" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Network</h1>
            <p className="text-muted-foreground font-medium">Manage and monitor your clinical healthcare providers.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search doctors..." 
                className="bg-white border border-gray-100 focus:border-primary/20 outline-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium transition-all w-64 shadow-sm"
              />
            </div>
            <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
              <Plus className="w-4 h-4 mr-2" /> Add New Doctor
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Doctors" 
            value="42" 
            icon={Stethoscope} 
            iconColor="text-blue-500 bg-blue-50"
            trend="up"
            trendValue="+3"
          />
          <StatCard 
            title="Active Sessions" 
            value="18" 
            icon={Calendar} 
            iconColor="text-green-500 bg-green-50"
            trend="up"
            trendValue="+5"
          />
          <StatCard 
            title="Avg Rating" 
            value="4.9/5" 
            icon={Users} 
            iconColor="text-orange-500 bg-orange-50"
            trend="up"
            trendValue="+0.1"
          />
        </div>

        {/* Doctors Table */}
        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold">Doctor Registry</CardTitle>
              <p className="text-xs text-muted-foreground font-medium mt-1">Directory of all registered healthcare specialists</p>
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
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Doctor Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Specialty</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Experience</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {doctors.map((doctor, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{doctor.name}</p>
                            <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {doctor.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm font-semibold text-foreground">
                        {doctor.specialty}
                      </td>
                      <td className="px-8 py-5 text-sm text-muted-foreground">
                        {doctor.experience}
                      </td>
                      <td className="px-8 py-5">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          doctor.status === "Active" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                        )}>
                          {doctor.status}
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
      </div>
    </AdminLayout>
  );
};

export default DoctorsPage;
