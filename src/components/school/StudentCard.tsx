import React from "react";
import { User, Phone, Calendar, Clock, CheckCircle2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface StudentCardProps {
  name: string;
  id: string;
  className: string;
  mobile: string;
  dob: string;
  testProgress: number;
  scanningDate: string;
  updateDate: string;
  bgColor?: string;
}

const StudentCard = ({ 
  name, 
  id, 
  className, 
  mobile, 
  dob, 
  testProgress, 
  scanningDate, 
  updateDate
}: StudentCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col lg:flex-row items-center gap-6 transition-all hover:shadow-md border border-slate-100 group">
      {/* Avatar Section */}
      <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors">
        <User className="w-8 h-8 text-slate-300 group-hover:text-primary transition-colors" />
      </div>

      {/* Main Info */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-slate-900 capitalize group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded">ID: {id}</span>
            <span className="text-[10px] font-medium text-primary uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded">{className}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1.5 md:border-l md:pl-6 border-slate-100">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <Phone className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400 uppercase tracking-tighter mr-1">Mobile:</span>
            <span className="text-slate-900 font-medium">{mobile}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400 uppercase tracking-tighter mr-1">DOB:</span>
            <span className="text-slate-900 font-medium">{dob}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1.5 md:border-l md:pl-6 border-slate-100">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <Clock className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400 uppercase tracking-tighter mr-1">Scanned:</span>
            <span className="text-slate-900 font-medium">{scanningDate}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <div className={cn(
              "w-2 h-2 rounded-full",
              testProgress === 100 ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-slate-300"
            )} />
            <span className="text-slate-400 uppercase tracking-tighter mr-1">Status:</span>
            <span className={cn(
              "font-semibold",
              testProgress === 100 ? "text-green-600" : "text-slate-400"
            )}>
              {testProgress === 100 ? "Completed" : "Pending"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-center pl-4 lg:border-l border-slate-100">
        <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-xl text-slate-400 hover:text-primary hover:bg-red-50">
           <Eye className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default StudentCard;
