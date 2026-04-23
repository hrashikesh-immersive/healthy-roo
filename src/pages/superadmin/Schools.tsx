import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { 
  Search,
  MoreHorizontal,
  Plus,
  ArrowLeft,
  ChevronDown,
  Filter,
  Check,
  Eye,
  Pencil,
  Trash2,
  LogIn,
  Upload,
  Users,
  ClipboardList,
  EyeOff,
  Image as ImageIcon,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SchoolsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isTestViewModalOpen, setIsTestViewModalOpen] = React.useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
  const [selectedSchool, setSelectedSchool] = React.useState<any>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    prefix: "",
    doctors: [],
    type: "live",
    email: "",
    password: "",
    location: "",
    contactName: "",
    contactMobile: ""
  });

  const [filterValues, setFilterValues] = React.useState({
    name: "",
    prefix: "",
    email: "",
    status: "All"
  });

  const [schools, setSchools] = React.useState([
    { id: 1, name: "Springfield Academy", prefix: "SA", email: "contact@springfield.edu", status: "Active" },
    { id: 2, name: "Horizon High School", prefix: "HHS", email: "info@horizonhigh.org", status: "Active" },
    { id: 3, name: "Oakwood Global School", prefix: "OGS", email: "admin@oakwoodglobal.com", status: "Active" },
    { id: 4, name: "Riverside International", prefix: "RIS", email: "hello@riverside.edu", status: "Active" },
    { id: 5, name: "Maple Leaf Institute", prefix: "MLI", email: "registrar@mapleleaf.org", status: "Active" },
    { id: 6, name: "Green Valley School", prefix: "GVS", email: "info@greenvalley.edu", status: "Active" },
    { id: 7, name: "Blue Ridge Academy", prefix: "BRA", email: "admin@blueridge.org", status: "Active" },
    { id: 8, name: "Summit International", prefix: "SIS", email: "contact@summit.edu", status: "Active" },
    { id: 9, name: "Cedar Grove School", prefix: "CGS", email: "hello@cedargrove.org", status: "Active" },
  ]);

  const toggleStatus = (id: number) => {
    setSchools(schools.map(school => 
      school.id === id 
        ? { ...school, status: school.status === "Active" ? "Deactive" : "Active" } 
        : school
    ));
  };

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < 8; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setFormData({ ...formData, password: retVal });
  };

  const filteredSchools = schools.filter(school => {
    const matchesName = school.name.toLowerCase().includes(filterValues.name.toLowerCase());
    const matchesPrefix = school.prefix.toLowerCase().includes(filterValues.prefix.toLowerCase());
    const matchesEmail = school.email.toLowerCase().includes(filterValues.email.toLowerCase());
    const matchesStatus = filterValues.status === "All" || school.status === filterValues.status;
    
    return matchesName && matchesPrefix && matchesEmail && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">School List</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 h-auto text-[13px] font-bold shadow-none border-none transition-colors">
              Upgrade Class
            </Button>
            
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 h-auto text-[13px] font-bold shadow-none border-none transition-colors">
                  Add New School
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
                <div className="bg-white p-8 flex flex-col max-h-[90vh]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={() => setIsAddModalOpen(false)}>
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <h2 className="text-lg font-bold text-gray-800">Add School</h2>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
                    {/* Logo Section */}
                    <div className="space-y-3">
                      <Label className="text-[13px] font-bold text-gray-700">School Logo</Label>
                      <div className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group">
                        <Upload className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-primary">Upload</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>School Name</Label>
                        <Input placeholder="Enter school name" className="h-12 bg-white border-gray-200 rounded-xl" />
                      </div>
                      
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>School Prefix</Label>
                        <Input placeholder="Enter school prefix" className="h-12 bg-white border-gray-200 rounded-xl" />
                      </div>

                      <div className="space-y-2 col-span-2">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Assign Doctors</Label>
                        <Select>
                          <SelectTrigger className="h-12 bg-white border-gray-200 rounded-xl">
                            <SelectValue placeholder="Select Doctors" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dr1">Dr. Alexander Pierce</SelectItem>
                            <SelectItem value="dr2">Dr. Elena Rodriguez</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3 col-span-2">
                        <Label className="text-[13px] font-bold text-gray-700">School Type</Label>
                        <RadioGroup defaultValue="live" className="flex items-center gap-8">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="test" id="test" className="border-gray-300 text-primary focus:ring-primary" />
                            <Label htmlFor="test" className="text-sm font-medium text-gray-600 cursor-pointer">Test School</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="live" id="live" className="border-gray-300 text-primary focus:ring-primary" />
                            <Label htmlFor="live" className="text-sm font-medium text-gray-600 cursor-pointer">Live School</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Email</Label>
                        <Input placeholder="Enter email address" className="h-12 bg-white border-gray-200 rounded-xl" />
                      </div>

                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Password</Label>
                        <div className="flex gap-3">
                          <Input type="password" placeholder="Enter password" className="h-12 bg-white border-gray-200 rounded-xl flex-1" />
                          <Button onClick={generatePassword} className="h-12 px-6 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-xl border-none shadow-none">Generate</Button>
                        </div>
                      </div>

                      <div className="space-y-2 col-span-2">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Location</Label>
                        <Input placeholder="Enter location" className="h-12 bg-white border-gray-200 rounded-xl" />
                      </div>

                      <div className="space-y-2 col-span-2">
                        <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Contact Person</Label>
                        <div className="flex gap-3">
                          <Input placeholder="Contact Name" className="h-12 bg-white border-gray-200 rounded-xl flex-1" />
                          <Input placeholder="Contact Mobile" className="h-12 bg-white border-gray-200 rounded-xl flex-1" />
                          <Button className="h-12 w-12 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-none border-none p-0 flex items-center justify-center">
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-2 border-t border-gray-100 flex justify-end">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-12 h-12 font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                      Submit
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isTestViewModalOpen} onOpenChange={setIsTestViewModalOpen}>
              <DialogContent className="max-w-5xl p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
                <div className="bg-white p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={() => setIsTestViewModalOpen(false)}>
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <h2 className="text-lg font-bold text-gray-800">Test List</h2>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 h-10 text-[13px] font-bold shadow-none border-none transition-colors">
                      Add New Test
                    </Button>
                  </div>

                  <div className="flex items-center justify-end gap-3 mb-6">
                    <div className="w-64 relative">
                      <Input placeholder="Test Name" className="h-10 pl-4 pr-10 border-gray-200 rounded-lg text-sm" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-40 h-10 border-gray-200 rounded-lg text-sm">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-32 h-10 border-gray-200 rounded-lg text-sm">
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon" className="h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider w-20">S.No</th>
                          <th className="px-6 py-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Test Name</th>
                          <th className="px-6 py-4 text-[12px] font-bold text-gray-500 uppercase tracking-wider text-center w-32">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-600">1</td>
                          <td className="px-6 py-4 text-sm font-bold text-gray-800">2025-2026</td>
                          <td className="px-6 py-4 text-center">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600 rounded-full">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-gray-200 text-gray-400 hover:text-primary transition-all">
                      <ChevronDown className="w-4 h-4 rotate-90" />
                    </Button>
                    <Button className="h-8 w-8 rounded-lg bg-primary text-white font-bold text-xs shadow-none">1</Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-gray-200 text-gray-400 hover:text-primary transition-all">
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[240px]">
            <input 
              type="text" 
              placeholder="School Name" 
              value={filterValues.name}
              onChange={(e) => setFilterValues({...filterValues, name: e.target.value})}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-600 transition-all shadow-sm"
            />
          </div>
          <div className="w-48">
            <input 
              type="text" 
              placeholder="School Prefix" 
              value={filterValues.prefix}
              onChange={(e) => setFilterValues({...filterValues, prefix: e.target.value})}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-600 transition-all shadow-sm"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input 
              type="text" 
              placeholder="Email" 
              value={filterValues.email}
              onChange={(e) => setFilterValues({...filterValues, email: e.target.value})}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-600 transition-all shadow-sm"
            />
          </div>
          <div className="relative w-40">
            <select 
              value={filterValues.status}
              onChange={(e) => setFilterValues({...filterValues, status: e.target.value})}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 text-gray-600 pr-10 shadow-sm cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Deactive">Deactive</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <Button 
            variant="default" 
            size="icon" 
            onClick={() => setFilterValues({ name: "", prefix: "", email: "", status: "All" })}
            className="bg-primary hover:bg-primary/90 text-white border-none rounded-lg w-10 h-10 flex-shrink-0 shadow-sm transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>

        {/* Schools Table Container */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f3f4f6] border-b border-gray-200">
                  <th className="px-4 py-4 w-12">
                    <div className="flex items-center gap-3">
                       <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary ml-2 cursor-pointer" />
                       <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md px-2.5 py-1 text-[12px] font-medium text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                         All <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                       </div>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">School Name</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">School Prefix</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Email</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Status</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSchools.map((school, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary ml-2 cursor-pointer" />
                        <span className="text-sm font-bold text-gray-600 w-4">{school.id}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-800 leading-relaxed">{school.name}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-800 uppercase tracking-wider">{school.prefix}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-600">{school.email}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div 
                          onClick={() => toggleStatus(school.id)}
                          className={cn(
                            "w-[95px] h-7 px-1 rounded-full flex items-center shadow-sm cursor-pointer transition-all duration-300",
                            school.status === "Active" 
                              ? "bg-[#1a56db] text-white flex-row" 
                              : "bg-gray-200 text-gray-500 flex-row-reverse"
                          )}
                        >
                          <span className="flex-1 text-[10px] font-bold uppercase tracking-wider text-center">
                            {school.status}
                          </span>
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                             <div className={cn(
                               "w-3 h-3 rounded-full transition-colors duration-300",
                               school.status === "Active" ? "bg-[#1a56db]" : "bg-gray-400"
                             )} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all outline-none">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 p-1.5 rounded-xl border-gray-100 shadow-xl">
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <LogIn className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Proxy Login</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedSchool(school);
                              setIsDetailsOpen(true);
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Show</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <Pencil className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors focus:bg-primary/5 focus:text-primary outline-none">
                              <Upload className="w-4 h-4" />
                              <span className="text-[13px] font-medium">Upload</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-56 p-1.5 rounded-xl border-gray-100 shadow-xl ml-1">
                              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                                <Upload className="w-4 h-4" />
                                <span className="text-[13px] font-medium">Bulk Upload Students</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                                <ImageIcon className="w-4 h-4" />
                                <span className="text-[13px] font-medium">Export Report Data</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                                <ImageIcon className="w-4 h-4" />
                                <span className="text-[13px] font-medium">Import Report Data</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                                <ClipboardList className="w-4 h-4" />
                                <span className="text-[13px] font-medium">School Consolidated Report</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                                <Users className="w-4 h-4" />
                                <span className="text-[13px] font-medium">School Student Sticker</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <Users className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Student</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <Plus className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Add Test</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedSchool(school);
                              setIsTestViewModalOpen(true);
                            }}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Test View</span>
                          </DropdownMenuItem>
                          <div className="h-px bg-gray-100 my-1" />
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Details Drawer */}
        <Sheet open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <SheetContent side="right" className="w-[450px] p-0 border-none shadow-2xl">
            <div className="h-full bg-white flex flex-col">
              <SheetHeader className="p-6 border-b border-gray-100 flex-row items-center justify-between space-y-0">
                <SheetTitle className="text-lg font-bold text-gray-800">School Details</SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 p-8 space-y-8 animate-in slide-in-from-right duration-500">
                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">School Name</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedSchool?.name}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Prefix</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold uppercase">{selectedSchool?.prefix}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Email</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium text-primary">{selectedSchool?.email}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Location</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium">{selectedSchool?.location || "Not specified"}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Contact</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium">{selectedSchool?.contactName || "N/A"}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Mobile</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium">{selectedSchool?.contactMobile || "N/A"}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Status</span>
                  <span className="text-gray-400">:</span>
                  <span className={cn(
                    "font-bold uppercase text-[10px] px-3 py-1 rounded-full w-fit shadow-sm",
                    selectedSchool?.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  )}>
                    {selectedSchool?.status}
                  </span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </AdminLayout>
  );
};

export default SchoolsPage;
