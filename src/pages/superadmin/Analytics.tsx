import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity,
  Calendar,
  Filter,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatCard from "@/components/superadmin/StatCard";

const AnalyticsPage = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Platform Analytics</h1>
            <p className="text-muted-foreground font-medium">In-depth data visualization of platform health and growth metrics.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-xl font-bold uppercase tracking-wider text-[10px]"><Calendar className="w-4 h-4 mr-2" /> Last 30 Days</Button>
            <Button className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-red-500/20">
              <Download className="w-4 h-4 mr-2" /> Export Data
            </Button>
          </div>
        </div>

        {/* Analytics Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Active Engagement" 
            value="88%" 
            icon={Activity} 
            iconColor="text-green-500 bg-green-50"
            trend="up"
            trendValue="+12%"
          />
          <StatCard 
            title="New Users" 
            value="+1,240" 
            icon={Users} 
            iconColor="text-blue-500 bg-blue-50"
            trend="up"
            trendValue="+8%"
          />
          <StatCard 
            title="Growth Rate" 
            value="+24.8%" 
            icon={TrendingUp} 
            iconColor="text-red-500 bg-red-50"
            trend="up"
            trendValue="+2.4%"
          />
          <StatCard 
            title="Reports Generated" 
            value="156" 
            icon={BarChart3} 
            iconColor="text-orange-500 bg-orange-50"
            trend="up"
            trendValue="+12%"
          />
        </div>

        {/* Placeholder for Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-none shadow-sm bg-white h-96 flex flex-col">
            <CardHeader className="p-8 border-b border-gray-50">
              <CardTitle className="text-lg font-bold">User Acquisition Trends</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-8 bg-gray-50/30 m-8 rounded-3xl border border-dashed border-gray-200">
               <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Interactive Chart Data</p>
                  <p className="text-xs text-gray-400 mt-2">Dynamic visualization will render here</p>
               </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white h-96 flex flex-col">
            <CardHeader className="p-8 border-b border-gray-50">
              <CardTitle className="text-lg font-bold">Health Metric Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-8 bg-gray-50/30 m-8 rounded-3xl border border-dashed border-gray-200">
               <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Growth Distribution Map</p>
                  <p className="text-xs text-gray-400 mt-2">Dynamic visualization will render here</p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AnalyticsPage;
