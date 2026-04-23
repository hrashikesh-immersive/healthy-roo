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
  RefreshCw,
  Key
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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

const DoctorsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = React.useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState<any>(null);
  const [selectedSchools, setSelectedSchools] = React.useState<string[]>(["Springfield Academy", "Horizon High School"]);
  
  const [formData, setFormData] = React.useState({
    name: "",
    code: "",
    specialist: "",
    email: "",
    phone: "",
    location: "",
    password: ""
  });

  const [filterValues, setFilterValues] = React.useState({
    name: "",
    code: "",
    email: "",
    location: "",
    status: "All"
  });

  const [doctors, setDoctors] = React.useState([
    { id: 1, name: "Dr. Alexander Pierce", specialist: "Cardiologist", code: "DOC101", email: "a.pierce@medical.com", location: "New York", phone: "555-0101", status: "Active" },
    { id: 2, name: "Dr. Elena Rodriguez", specialist: "Pediatrician", code: "DOC102", email: "e.rodriguez@medical.com", location: "Miami", phone: "555-0102", status: "Active" },
    { id: 3, name: "Dr. Michael Chen", specialist: "Dermatologist", code: "DOC103", email: "m.chen@medical.com", location: "San Francisco", phone: "555-0103", status: "Active" },
    { id: 4, name: "Dr. Sarah Johnson", specialist: "Neurologist", code: "DOC104", email: "s.johnson@medical.com", location: "Chicago", phone: "555-0104", status: "Active" },
    { id: 5, name: "Dr. David Kim", specialist: "Orthopedic", code: "DOC105", email: "d.kim@medical.com", location: "Seattle", phone: "555-0105", status: "Active" },
    { id: 6, name: "Dr. Lisa White", specialist: "General Physician", code: "DOC106", email: "l.white@medical.com", location: "Boston", phone: "555-0106", status: "Active" },
    { id: 7, name: "Dr. Robert Miller", specialist: "Psychiatrist", code: "DOC107", email: "r.miller@medical.com", location: "Austin", phone: "555-0107", status: "Active" },
    { id: 8, name: "Dr. Emily Taylor", specialist: "Ophthalmologist", code: "DOC108", email: "e.taylor@medical.com", location: "Denver", phone: "555-0108", status: "Active" },
    { id: 9, name: "Dr. James Wilson", specialist: "Oncologist", code: "DOC109", email: "j.wilson@medical.com", location: "Philadelphia", phone: "555-0109", status: "Active" },
  ]);

  const toggleStatus = (id: number) => {
    setDoctors(doctors.map(doc => 
      doc.id === id 
        ? { ...doc, status: doc.status === "Active" ? "Deactive" : "Active" } 
        : doc
    ));
  };

  const removeSchool = (school: string) => {
    setSelectedSchools(selectedSchools.filter(s => s !== school));
  };

  const generateCode = () => {
    const newCode = "DOC" + Math.floor(100 + Math.random() * 900);
    setFormData({ ...formData, code: newCode });
  };

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < 8; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setFormData({ ...formData, password: retVal });
  };

  const filteredDoctors = doctors.filter(doc => {
    const matchesName = doc.name.toLowerCase().includes(filterValues.name.toLowerCase());
    const matchesCode = doc.code.toLowerCase().includes(filterValues.code.toLowerCase());
    const matchesEmail = doc.email.toLowerCase().includes(filterValues.email.toLowerCase());
    const matchesLocation = doc.location.toLowerCase().includes(filterValues.location.toLowerCase());
    const matchesStatus = filterValues.status === "All" || doc.status === filterValues.status;
    
    return matchesName && matchesCode && matchesEmail && matchesLocation && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Doctor List</h1>
          </div>
          
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 h-auto text-[13px] font-bold shadow-none border-none transition-colors">
                Add New Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
              <div className="bg-white p-8 flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={() => setIsAddModalOpen(false)}>
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <h2 className="text-lg font-bold text-gray-800">Add Doctor</h2>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {/* Doctor Name */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Doctor Name
                      </Label>
                      <Input 
                        placeholder="Enter doctor name" 
                        className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    {/* Doctor Code */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Doctor Code
                      </Label>
                      <div className="flex gap-3">
                        <Input 
                          placeholder="Doctor code" 
                          className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          value={formData.code}
                          onChange={(e) => setFormData({...formData, code: e.target.value})}
                        />
                        <Button 
                          onClick={generateCode}
                          className="h-12 px-6 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-xl border-none shadow-none"
                        >
                          Code
                        </Button>
                      </div>
                    </div>

                    {/* Specialist */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Specialist
                      </Label>
                      <Select onValueChange={(val) => setFormData({...formData, specialist: val})}>
                        <SelectTrigger className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                          <SelectValue placeholder="Select Specialist" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiologist">Cardiologist</SelectItem>
                          <SelectItem value="pediatrician">Pediatrician</SelectItem>
                          <SelectItem value="dermatologist">Dermatologist</SelectItem>
                          <SelectItem value="neurologist">Neurologist</SelectItem>
                          <SelectItem value="orthopedic">Orthopedic</SelectItem>
                          <SelectItem value="general">General Physician</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Email
                      </Label>
                      <Input 
                        placeholder="Enter email address" 
                        className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Phone
                      </Label>
                      <Input 
                        placeholder="Enter phone number" 
                        className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Location
                      </Label>
                      <Input 
                        placeholder="Enter location" 
                        className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>

                    {/* Password */}
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <Label className="text-[13px] font-bold text-gray-700">
                        <span className="text-red-500 mr-1">*</span>Password
                      </Label>
                      <div className="flex gap-3">
                        <Input 
                          type="password"
                          placeholder="Enter password" 
                          className="h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                        <Button 
                          onClick={generatePassword}
                          className="h-12 px-6 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-xl border-none shadow-none"
                        >
                          Generate
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

          {/* Assign Schools Modal */}
          <Dialog open={isAssignModalOpen} onOpenChange={setIsAssignModalOpen}>
            <DialogContent className="max-w-xl p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
              <div className="bg-white p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-bold text-gray-800">Assign Schools to {selectedDoctor?.name}</h2>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-bold text-gray-700">School:</Label>
                  <div className="min-h-[120px] p-4 bg-gray-50/50 border border-gray-100 rounded-xl flex flex-wrap gap-2 items-start content-start">
                    {selectedSchools.map((school) => (
                      <div 
                        key={school} 
                        className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 shadow-sm animate-in fade-in zoom-in duration-200"
                      >
                        {school}
                        <button 
                          onClick={() => removeSchool(school)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 rotate-45" />
                        </button>
                      </div>
                    ))}
                    <div className="flex-1 min-w-[120px]">
                      <input 
                        type="text" 
                        placeholder="Add school..." 
                        className="w-full bg-transparent border-none outline-none text-sm py-1.5 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-10">
                  <Button 
                    variant="outline" 
                    className="px-8 h-12 border-primary text-primary hover:bg-primary/5 rounded-xl font-bold"
                    onClick={() => setIsAssignModalOpen(false)}
                  >
                    CLOSE
                  </Button>
                  <Button className="px-8 h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 uppercase tracking-wide">
                    ASSIGN SCHOOL
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[200px]">
            <input 
              type="text" 
              placeholder="Doctor Name" 
              value={filterValues.name}
              onChange={(e) => setFilterValues({...filterValues, name: e.target.value})}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-600 transition-all shadow-sm"
            />
          </div>
          <div className="w-32">
            <input 
              type="text" 
              placeholder="Code" 
              value={filterValues.code}
              onChange={(e) => setFilterValues({...filterValues, code: e.target.value})}
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
          <div className="w-48">
            <input 
              type="text" 
              placeholder="Location" 
              value={filterValues.location}
              onChange={(e) => setFilterValues({...filterValues, location: e.target.value})}
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
            onClick={() => setFilterValues({ name: "", code: "", email: "", location: "", status: "All" })}
            className="bg-primary hover:bg-primary/90 text-white border-none rounded-lg w-10 h-10 flex-shrink-0 shadow-sm transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>

        {/* Doctors Table Container */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f3f4f6] border-b border-gray-200">
                  <th className="px-4 py-4 w-12">
                    <div className="flex items-center gap-3">
                       <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                       <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md px-2.5 py-1 text-[12px] font-medium text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                         All <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                       </div>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Doctor Name</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Specialist</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Doctor Code</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Email</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Location</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Phone</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Status</th>
                  <th className="px-4 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDoctors.map((doctor, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <span className="text-sm font-bold text-gray-600 w-4">{doctor.id}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-800">{doctor.name}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-800">{doctor.specialist}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-800">{doctor.code}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-600">{doctor.email}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-600">{doctor.location}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-gray-600">{doctor.phone}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div 
                          onClick={() => toggleStatus(doctor.id)}
                          className={cn(
                            "w-[95px] h-7 px-1 rounded-full flex items-center shadow-sm cursor-pointer transition-all duration-300",
                            doctor.status === "Active" 
                              ? "bg-[#1a56db] text-white flex-row" 
                              : "bg-gray-200 text-gray-500 flex-row-reverse"
                          )}
                        >
                          <span className="flex-1 text-[10px] font-bold uppercase tracking-wider text-center">
                            {doctor.status}
                          </span>
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                             <div className={cn(
                               "w-3 h-3 rounded-full transition-colors duration-300",
                               doctor.status === "Active" ? "bg-[#1a56db]" : "bg-gray-400"
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
                        <DropdownMenuContent align="end" className="w-48 p-1.5 rounded-xl border-gray-100 shadow-xl">
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <LogIn className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Proxy Login</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedDoctor(doctor);
                              setIsAssignModalOpen(true);
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Assign</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedDoctor(doctor);
                              setIsDetailsOpen(true);
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Show</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors">
                            <Pencil className="w-4 h-4" />
                            <span className="text-[13px] font-medium">Edit</span>
                          </DropdownMenuItem>
                          <div className="h-px bg-gray-100 my-1" />
                          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 transition-colors">
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
                <SheetTitle className="text-lg font-bold text-gray-800">Doctor Details</SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 p-8 space-y-8 animate-in slide-in-from-right duration-500">
                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Doctor Name</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedDoctor?.name}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Specialist</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedDoctor?.specialist}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Doctor Code</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedDoctor?.code}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Email</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium text-primary">{selectedDoctor?.email}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Location</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium">{selectedDoctor?.location}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Phone</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-medium">{selectedDoctor?.phone}</span>
                </div>

                <div className="grid grid-cols-[140px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-tight">Status</span>
                  <span className="text-gray-400">:</span>
                  <span className={cn(
                    "font-bold uppercase text-[10px] px-3 py-1 rounded-full w-fit shadow-sm",
                    selectedDoctor?.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  )}>
                    {selectedDoctor?.status}
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

export default DoctorsPage;

