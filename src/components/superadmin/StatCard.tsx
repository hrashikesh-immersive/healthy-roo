import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: "up" | "down";
  trendValue?: string;
  iconColor?: string;
}

const StatCard = ({ title, value, icon: Icon, trend, trendValue, iconColor }: StatCardProps) => {
  return (
    <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn(
            "p-3 rounded-2xl transition-all duration-300",
            iconColor || "bg-gray-50 group-hover:bg-primary/10"
          )}>
            <Icon className={cn("w-6 h-6", iconColor ? "text-current" : "text-gray-400 group-hover:text-primary")} />
          </div>
          {trendValue && (
            <div className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors",
              trend === "up" 
                ? "bg-green-50 text-green-600 border border-green-100" 
                : "bg-red-50 text-red-600 border border-red-100"
            )}>
              {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {trendValue}
            </div>
          )}
        </div>
        <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.1em] mb-1">{title}</h3>
        <p className="text-2xl font-bold text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
