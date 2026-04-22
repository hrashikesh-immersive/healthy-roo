import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  FilePieChart, 
  History,
  Search,
  MoreVertical,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatCard from "@/components/superadmin/StatCard";

const ReportsPage = () => {
  const reports = [
    { title: "Quarterly Health Impact Report", date: "Q1 2026", type: "PDF", size: "4.2 MB", status: "Generated" },
    { title: "School Performance Metrics", date: "Apr 2026", type: "XLSX", size: "1.8 MB", status: "Generated" },
    { title: "Annual Clinical Review", date: "2025", type: "PDF", size: "12.5 MB", status: "Archived" },
    { title: "Student Wellness Trends", date: "Mar 2026", type: "PDF", size: "3.1 MB", status: "Generated" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Documentation</h1>
            <p className="text-muted-foreground font-medium">Generate and export platform-wide impact and performance reports.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-xl font-bold uppercase tracking-wider text-[10px]"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
            <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
              <Download className="w-4 h-4 mr-2" /> Generate New Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Reports" 
            value="128" 
            icon={FileText} 
            iconColor="text-blue-500 bg-blue-50"
            trend="up"
            trendValue="+14"
          />
          <StatCard 
            title="Pending Generation" 
            value="2" 
            icon={History} 
            iconColor="text-orange-500 bg-orange-50"
            trend="down"
            trendValue="-1"
          />
          <StatCard 
            title="Analytics Snapshots" 
            value="45" 
            icon={FilePieChart} 
            iconColor="text-green-500 bg-green-50"
            trend="up"
            trendValue="+5"
          />
        </div>

        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Recent Reports</CardTitle>
            <Button variant="ghost" size="icon" className="text-gray-400"><MoreVertical className="w-5 h-5" /></Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Report Title</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date/Period</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Format & Size</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {reports.map((report, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5 font-bold text-sm text-foreground">{report.title}</td>
                      <td className="px-8 py-5 text-sm text-muted-foreground">{report.date}</td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-foreground">{report.type}</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{report.size}</p>
                      </td>
                      <td className="px-8 py-5">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          report.status === "Generated" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                        )}>{report.status}</span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                          <Download className="w-4 h-4" />
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

export default ReportsPage;
