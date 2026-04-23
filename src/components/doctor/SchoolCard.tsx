import React from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Mail, MapPin, Users2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SchoolCardProps {
  name: string;
  email: string;
  location: string;
  spocName?: string;
  spocPhone?: string;
}

const SchoolCard = ({ name, email, location, spocName = "N/A", spocPhone = "N/A" }: SchoolCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      <Dialog>
        <div className="p-6 flex-grow relative">
          {/* Top Section: Icon & SPOC Badge */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Building2 className="w-7 h-7" />
            </div>
            <DialogTrigger asChild>
              <button className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-primary/10 transition-colors">
                SPOC
              </button>
            </DialogTrigger>
          </div>

          {/* Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">{name}</h3>
            
            <div className="space-y-2.5">
              <p className="text-[15px] text-slate-500 flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="truncate">{email}</span>
              </p>
              <p className="text-[15px] text-slate-500 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="truncate">{location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-50 mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full py-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50/50 transition-all group">
                View Tests
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border border-slate-100 shadow-xl rounded-xl p-1.5 z-50">
              <DropdownMenuItem 
                onClick={() => navigate(`/doctor/students/${name}/Test1`)}
                className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 hover:text-primary focus:text-primary text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
              >
                Test1
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate(`/doctor/students/${name}/Test2`)}
                className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
              >
                Test2
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate(`/doctor/students/${name}/Test3`)}
                className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
              >
                Test 3
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate(`/doctor/students/${name}/Test4`)}
                className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 text-sm font-medium transition-colors"
              >
                Test 4
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
            <DialogHeader className="p-6 border-b border-slate-100 bg-slate-50/50">
              <DialogTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                SPOC - {name}
              </DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 border-b border-slate-100">
                      <th className="p-4 font-bold text-xs uppercase tracking-wider w-20">S.no</th>
                      <th className="p-4 font-bold text-xs uppercase tracking-wider">Name</th>
                      <th className="p-4 font-bold text-xs uppercase tracking-wider">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 text-sm font-medium text-slate-900">1</td>
                      <td className="p-4 text-sm text-slate-600">{spocName}</td>
                      <td className="p-4 text-sm text-slate-600">{spocPhone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default SchoolCard;
