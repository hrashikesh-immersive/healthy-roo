import React from "react";
import AdminLayout from "@/components/superadmin/AdminLayout";
import { 
  Plus,
  ArrowLeft,
  ChevronDown,
  Filter,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  RefreshCw
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
  SheetTrigger,
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

const ClassesPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState<any>(null);
  const [filterValues, setFilterValues] = React.useState({
    name: "",
    type: "All",
    status: "All"
  });

  const [classes, setClasses] = React.useState([
    { id: 1, name: "Greater", type: "School", order: 0, status: "Active" },
    { id: 2, name: "PLAYGROUP", type: "School", order: 1, status: "Active" },
    { id: 3, name: "NURSERY", type: "School", order: 2, status: "Active" },
    { id: 4, name: "LKG", type: "School", order: 3, status: "Active" },
    { id: 5, name: "UKG", type: "School", order: 4, status: "Active" },
    { id: 6, name: "1st", type: "School", order: 5, status: "Active" },
    { id: 7, name: "2nd", type: "School", order: 6, status: "Active" },
    { id: 8, name: "3rd", type: "School", order: 7, status: "Active" },
    { id: 9, name: "4th", type: "School", order: 8, status: "Active" },
    { id: 10, name: "5th", type: "Preschool", order: 9, status: "Active" },
    { id: 11, name: "6th", type: "Preschool", order: 10, status: "Active" },
    { id: 12, name: "7th", type: "Preschool", order: 11, status: "Active" },
    { id: 13, name: "8th", type: "Preschool", order: 12, status: "Active" },
    { id: 14, name: "9th", type: "School", order: 13, status: "Active" },
    { id: 15, name: "10th", type: "School", order: 14, status: "Active" },
  ]);

  const toggleStatus = (id: number) => {
    setClasses(classes.map(cls => 
      cls.id === id 
        ? { ...cls, status: cls.status === "Active" ? "Deactive" : "Active" } 
        : cls
    ));
  };

  const filteredClasses = classes.filter(cls => {
    const matchesName = cls.name.toLowerCase().includes(filterValues.name.toLowerCase());
    const matchesType = filterValues.type === "All" || cls.type === filterValues.type;
    const matchesStatus = filterValues.status === "All" || cls.status === filterValues.status;
    return matchesName && matchesType && matchesStatus;
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
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Classes List</h1>
          </div>
          
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 h-auto text-[13px] font-bold shadow-none border-none transition-colors">
                Add New Class
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md p-0 overflow-hidden border-none rounded-2xl shadow-2xl">
              <div className="bg-white p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-lg font-bold text-gray-800">Add New Class</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Class Name</Label>
                    <Input placeholder="Enter class name" className="h-12 bg-white border-gray-200 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Class Type</Label>
                    <Select>
                      <SelectTrigger className="h-12 bg-white border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="School">School</SelectItem>
                        <SelectItem value="Preschool">Preschool</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700"><span className="text-red-500 mr-1">*</span>Order By</Label>
                    <Input type="number" placeholder="Enter order number" className="h-12 bg-white border-gray-200 rounded-xl" />
                  </div>
                </div>

                <div className="pt-8 mt-4 flex justify-end gap-3">
                   <Button 
                    variant="outline" 
                    className="h-12 px-8 rounded-xl font-bold border-gray-200"
                    onClick={() => setIsAddModalOpen(false)}
                   >
                     Cancel
                   </Button>
                   <Button className="h-12 px-10 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                     Submit
                   </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[240px]">
            <input 
              type="text" 
              placeholder="Class Name" 
              value={filterValues.name}
              onChange={(e) => setFilterValues({...filterValues, name: e.target.value})}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-600 transition-all shadow-sm"
            />
          </div>
          <div className="w-48">
            <Select 
              value={filterValues.type} 
              onValueChange={(val) => setFilterValues({...filterValues, type: val})}
            >
              <SelectTrigger className="h-10 bg-white border-gray-200 rounded-lg text-sm shadow-sm">
                <SelectValue placeholder="Class Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="School">School</SelectItem>
                <SelectItem value="Preschool">Preschool</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-40">
            <Select 
              value={filterValues.status} 
              onValueChange={(val) => setFilterValues({...filterValues, status: val})}
            >
              <SelectTrigger className="h-10 bg-white border-gray-200 rounded-lg text-sm shadow-sm">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Deactive">Deactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            variant="default" 
            size="icon" 
            onClick={() => setFilterValues({ name: "", type: "All", status: "All" })}
            className="bg-primary hover:bg-primary/90 text-white border-none rounded-lg w-10 h-10 flex-shrink-0 shadow-sm transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>

        {/* Classes Table Container */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f3f4f6] border-b border-gray-200">
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight w-24">S.No</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Class Name</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Class Type</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Order By</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">Status</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight text-center w-32">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredClasses.map((cls, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-600">{cls.id}</td>
                    <td className="px-6 py-4 text-[13.5px] font-bold text-gray-800 uppercase">{cls.name}</td>
                    <td className="px-6 py-4 text-[13.5px] font-medium text-gray-600">{cls.type}</td>
                    <td className="px-6 py-4 text-[13.5px] font-medium text-gray-600">{cls.order}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div 
                          onClick={() => toggleStatus(cls.id)}
                          className={cn(
                            "w-[95px] h-7 px-1 rounded-full flex items-center shadow-sm cursor-pointer transition-all duration-300",
                            cls.status === "Active" 
                              ? "bg-[#1a56db] text-white flex-row" 
                              : "bg-gray-200 text-gray-500 flex-row-reverse"
                          )}
                        >
                          <span className="flex-1 text-[10px] font-bold uppercase tracking-wider text-center">
                            {cls.status}
                          </span>
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                             <div className={cn(
                               "w-3 h-3 rounded-full transition-colors duration-300",
                               cls.status === "Active" ? "bg-[#1a56db]" : "bg-gray-400"
                             )} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all outline-none">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 p-1.5 rounded-xl border-gray-100 shadow-xl">
                          <DropdownMenuItem 
                            onClick={() => {
                              setSelectedClass(cls);
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
          <SheetContent side="right" className="w-[400px] p-0 border-none shadow-2xl">
            <div className="h-full bg-white flex flex-col">
              <SheetHeader className="p-6 border-b border-gray-100 flex-row items-center justify-between space-y-0">
                <SheetTitle className="text-lg font-bold text-gray-800">Classes</SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 p-8 space-y-8 animate-in slide-in-from-right duration-500">
                <div className="grid grid-cols-[120px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold">Class Name</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold uppercase">{selectedClass?.name}</span>
                </div>

                <div className="grid grid-cols-[120px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold">Class Type</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedClass?.type}</span>
                </div>

                <div className="grid grid-cols-[120px_20px_1fr] items-center text-sm">
                  <span className="text-gray-500 font-bold">Order By</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-gray-900 font-bold">{selectedClass?.order}</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </AdminLayout>
  );
};

export default ClassesPage;
