import React from "react";
import { 
  LayoutDashboard, 
  School, 
  ClipboardCheck, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Calendar,
  GraduationCap,
  FileText,
  BarChart3
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import healthyrooLogo from "@/assets/logo/healthyroo-logo.svg";
import healthyrooFavicon from "@/assets/healthy_roo_favicon.png";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
}

const NavItem = ({ icon: Icon, label, href, active, collapsed }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-xl transition-all duration-200 group relative",
      collapsed ? "px-0 justify-center h-12 w-12 mx-auto" : "px-4 py-3",
      active 
        ? "bg-primary text-white shadow-lg shadow-red-500/20" 
        : "text-muted-foreground hover:bg-gray-100 hover:text-foreground"
    )}
  >
    <Icon className={cn("w-5 h-5 min-w-[1.25rem]", active ? "text-white" : "group-hover:text-primary")} />
    {!collapsed && <span className="font-medium whitespace-nowrap">{label}</span>}
    {collapsed && (
      <div className="absolute left-16 bg-foreground text-white px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[60] whitespace-nowrap shadow-xl">
        {label}
      </div>
    )}
  </Link>
);

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/superadmin" },
    { icon: School, label: "Schools", href: "/superadmin/schools" },
    { icon: Stethoscope, label: "Doctors", href: "/superadmin/doctors" },
    { icon: Calendar, label: "Visits", href: "/superadmin/visits" },
    { icon: GraduationCap, label: "Students", href: "/superadmin/students" },
    { icon: FileText, label: "Reports", href: "/superadmin/reports" },
    { icon: BarChart3, label: "Analytics", href: "/superadmin/analytics" },
    { icon: Settings, label: "Settings", href: "/superadmin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "hidden lg:flex flex-col fixed inset-y-0 bg-white border-r border-gray-100 z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-72"
      )}>
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isCollapsed ? "p-4 justify-center" : "p-8"
        )}>
          <Link to="/" className="flex items-center justify-center">
            <img 
              src={isCollapsed ? healthyrooFavicon : healthyrooLogo} 
              alt="HealthyRoo" 
              className={cn("transition-all duration-300", isCollapsed ? "h-10 w-10" : "h-10 w-auto")} 
            />
          </Link>
          {!isCollapsed && (
            <button 
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
        </div>

        {isCollapsed && (
          <div className="flex justify-center mb-4">
             <button 
                onClick={() => setIsCollapsed(false)}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
          </div>
        )}

        <nav className="flex-grow px-4 space-y-2 pt-4 overflow-hidden">
          {!isCollapsed && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 mb-4">
              Main Menu
            </div>
          )}
          {menuItems.map((item) => (
            <NavItem 
              key={item.href} 
              {...item} 
              active={location.pathname === item.href} 
              collapsed={isCollapsed}
            />
          ))}
        </nav>

        <div className={cn("p-4 border-t border-gray-100", isCollapsed && "flex justify-center")}>
          <button className={cn(
            "flex items-center gap-3 w-full text-muted-foreground hover:bg-red-50 hover:text-primary rounded-xl transition-all group",
            isCollapsed ? "p-3 justify-center" : "px-4 py-3"
          )}>
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-50">
        <img src={healthyrooLogo} alt="HealthyRoo" className="h-8 w-auto" />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <NavItem 
                key={item.href} 
                {...item} 
                active={location.pathname === item.href} 
              />
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className={cn(
        "flex-grow pt-20 lg:pt-0 min-h-screen flex flex-col transition-all duration-300",
        isMobileMenuOpen && "opacity-20",
        isCollapsed ? "lg:ml-20" : "lg:ml-72"
      )}>
        {/* Top Header */}
        <header className="hidden lg:flex items-center justify-between h-24 px-10 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search platform..." 
              className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-3 pl-12 pr-4 text-sm font-medium transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">Admin User</p>
                <p className="text-[10px] font-bold text-primary uppercase">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10 flex-grow">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
