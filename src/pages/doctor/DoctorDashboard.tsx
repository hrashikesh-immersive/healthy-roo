import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import DoctorLayout from "@/components/doctor/DoctorLayout";
import SchoolCard from "@/components/doctor/SchoolCard";
import { 
  Search, RotateCcw, Filter, ChevronDown, Building2, 
  ClipboardCheck, History, ChevronRight, MoreHorizontal, 
  Mail, Users2, MapPin, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

const mockSchools = [
  {
    name: "Springfield Academy",
    email: "admin@springfield.edu",
    location: "Melbourne, VIC",
    spocName: "Sarah Jenkins",
    spocPhone: "+61 412 345 678"
  },
  {
    name: "Oakridge International",
    email: "contact@oakridge.edu",
    location: "Sydney, NSW",
    spocName: "David Chen",
    spocPhone: "+61 498 765 432"
  },
  {
    name: "St. Xavier's High School",
    email: "info@stxaviers.edu",
    location: "Brisbane, QLD",
    spocName: "Maria Rodriguez",
    spocPhone: "+61 433 221 100"
  },
  {
    name: "Greenwood Valley School",
    email: "hello@greenwood.edu",
    location: "Perth, WA",
    spocName: "James Wilson",
    spocPhone: "+61 455 667 788"
  },
  {
    name: "Delhi Public School",
    email: "admin@dps.edu",
    location: "Adelaide, SA",
    spocName: "Priya Sharma",
    spocPhone: "+61 422 998 877"
  },
  {
    name: "Global Indian International",
    email: "contact@giis.edu",
    location: "Gold Coast, QLD",
    spocName: "Raj Patel",
    spocPhone: "+61 411 222 333"
  }
];

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [sortBy, setSortBy] = useState("Newest First");
  const [filteredSchools, setFilteredSchools] = useState(mockSchools);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearch = () => {
    let results = [...mockSchools];

    if (searchName) {
      results = results.filter(school =>
        school.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchEmail) {
      results = results.filter(school =>
        school.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }

    if (searchLocation) {
      results = results.filter(school =>
        school.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (sortBy === "A-Z") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Oldest First") {
      results = results.reverse();
    }

    setFilteredSchools(results);
  };

  const handleRefresh = () => {
    setSearchName("");
    setSearchEmail("");
    setSearchLocation("");
    setSortBy("Newest First");
    setFilteredSchools(mockSchools);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <DoctorLayout>
      <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1600px] mx-auto">

        {/* Styled Filter & Search (Portaled to Header) */}
        {document.getElementById('header-filter-container') && ReactDOM.createPortal(
          <div className="flex items-center gap-3 w-full animate-in fade-in duration-300">
            <div className="relative flex-1 min-w-[150px] max-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input 
                type="text" 
                placeholder="School Name" 
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 shadow-sm transition-all"
              />
            </div>
            <div className="relative flex-1 min-w-[150px] max-w-[200px] hidden sm:block">
              <input 
                type="text" 
                placeholder="Email" 
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 shadow-sm transition-all"
              />
            </div>
            <div className="relative flex-1 min-w-[120px] max-w-[180px] hidden md:block">
              <input 
                type="text" 
                placeholder="Location" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 shadow-sm transition-all"
              />
            </div>
            <div className="relative flex-1 min-w-[140px] max-w-[160px] hidden lg:block">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-slate-700 font-medium shadow-sm transition-all"
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <div className="flex gap-2 ml-auto flex-shrink-0">
              <Button onClick={handleSearch} className="bg-primary hover:bg-primary/90 text-white rounded-xl px-5 py-2 h-[38px] font-medium shadow-sm text-sm transition-colors flex items-center">
                Search
              </Button>
              <Button onClick={handleRefresh} className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl w-[38px] h-[38px] p-0 shadow-sm flex-shrink-0 transition-colors flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>,
          document.getElementById('header-filter-container')!
        )}

        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                Assigned Schools
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  {filteredSchools.length} found
                </span>
              </h2>
              <p className="text-sm text-slate-500 mt-1">Schools and institutions assigned to your account.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => setViewMode('grid')}
                variant="outline" 
                className={cn(
                  "flex items-center gap-2 h-10 px-4 rounded-lg transition-all",
                  viewMode === 'grid' 
                    ? "bg-primary/5 border-primary/20 text-primary hover:bg-primary/10" 
                    : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                )}
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className={cn("w-1.5 h-1.5 rounded-sm", viewMode === 'grid' ? "bg-primary" : "bg-slate-400")}></div>
                  <div className={cn("w-1.5 h-1.5 rounded-sm", viewMode === 'grid' ? "bg-primary" : "bg-slate-400")}></div>
                  <div className={cn("w-1.5 h-1.5 rounded-sm", viewMode === 'grid' ? "bg-primary" : "bg-slate-400")}></div>
                  <div className={cn("w-1.5 h-1.5 rounded-sm", viewMode === 'grid' ? "bg-primary" : "bg-slate-400")}></div>
                </div>
                <span className={cn("text-sm", viewMode === 'grid' ? "font-semibold" : "font-medium")}>Grid</span>
              </Button>
              <Button 
                onClick={() => setViewMode('list')}
                variant="ghost" 
                className={cn(
                  "flex items-center gap-2 h-10 px-4 rounded-lg transition-all",
                  viewMode === 'list' 
                    ? "bg-primary/5 border-primary/20 text-primary hover:bg-primary/10" 
                    : "text-slate-500 hover:bg-slate-100"
                )}
              >
                <div className="flex flex-col gap-1">
                  <div className={cn("w-4 h-0.5 rounded-full", viewMode === 'list' ? "bg-primary" : "bg-slate-400")}></div>
                  <div className={cn("w-4 h-0.5 rounded-full", viewMode === 'list' ? "bg-primary" : "bg-slate-400")}></div>
                  <div className={cn("w-4 h-0.5 rounded-full", viewMode === 'list' ? "bg-primary" : "bg-slate-400")}></div>
                </div>
                <span className={cn("text-sm", viewMode === 'list' ? "font-semibold" : "font-medium")}>List</span>
              </Button>
            </div>
          </div>

          {filteredSchools.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {filteredSchools.map((school, i) => (
                  <SchoolCard key={i} {...school} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-wider font-bold border-b border-slate-100">
                        <th className="px-6 py-4">School / Institution</th>
                        <th className="px-6 py-4">Contact</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4 text-right pr-12">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredSchools.map((school, i) => (
                        <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <Building2 className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-slate-900 truncate">{school.name}</p>
                                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                                  <Mail className="w-3 h-3" />
                                  {school.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <Users2 className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-700">{school.spocName}</p>
                                <p className="text-xs text-slate-400">{school.spocPhone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <MapPin className="w-4 h-4 text-slate-400" />
                              {school.location}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <SchoolCardDetailDialog 
                              school={school} 
                              trigger={
                                <button className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-primary/10 transition-colors">
                                  SPOC
                                </button>
                              } 
                            />
                          </td>
                          <td className="px-6 py-5 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 h-9 px-4 rounded-lg text-sm font-semibold flex items-center gap-2 group">
                                    View Tests
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 bg-white border border-slate-100 shadow-xl rounded-xl p-1.5 z-50">
                                  <DropdownMenuItem 
                                    onClick={() => navigate(`/doctor/students/${school.name}/Test1`)}
                                    className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 hover:text-primary focus:text-primary text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
                                  >
                                    Test1
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    onClick={() => navigate(`/doctor/students/${school.name}/Test2`)}
                                    className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
                                  >
                                    Test2
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    onClick={() => navigate(`/doctor/students/${school.name}/Test3`)}
                                    className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 mb-1 text-sm font-medium transition-colors"
                                  >
                                    Test 3
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    onClick={() => navigate(`/doctor/students/${school.name}/Test4`)}
                                    className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 text-slate-700 rounded-lg py-2.5 px-3 text-sm font-medium transition-colors"
                                  >
                                    Test 4
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 text-slate-500 shadow-sm">
              <p className="text-lg">No schools found matching your search criteria.</p>
              <Button onClick={handleRefresh} variant="link" className="text-primary mt-2">
                Clear all filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredSchools.length > 0 && (
            <div className="flex flex-col items-center gap-4 pt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-slate-200 text-slate-400 hover:bg-slate-50">
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </Button>
                <Button className="w-10 h-10 p-0 rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                  1
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 rounded-lg border-slate-200 text-slate-400 hover:bg-slate-50">
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </Button>
              </div>
              <p className="text-sm text-slate-400">Showing 1 to {filteredSchools.length} of {filteredSchools.length} schools</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="text-center py-10 opacity-30">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © 2026 Vigour360 • Developed by Immersive Infotech
          </p>
        </div>
      </div>
    </DoctorLayout>
  );
};

const SchoolCardDetailDialog = ({ school, trigger }: { school: any; trigger?: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 h-9 px-4 rounded-lg text-sm font-semibold flex items-center gap-2 group">
            View Details
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden border-none shadow-2xl rounded-2xl">
        <DialogHeader className="p-6 border-b border-slate-100 bg-slate-50/50">
          <DialogTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            SPOC - {school.name}
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
                  <td className="p-4 text-sm text-slate-600">{school.spocName}</td>
                  <td className="p-4 text-sm text-slate-600">{school.spocPhone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoctorDashboard;
