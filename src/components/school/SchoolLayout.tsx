import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ClipboardList
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import healthyrooLogo from "@/assets/logo/healthyroo-logo.svg";
import healthyrooFavicon from "@/assets/healthy_roo_favicon.png";
import { toast } from "sonner";

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
        : "text-muted-foreground hover:bg-white/50 hover:text-foreground"
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

const SchoolLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/school/dashboard" },
    { icon: Users, label: "Students", href: "/school/students" },
    { icon: ClipboardList, label: "Assessments", href: "/school/assessments" },
    { icon: FileText, label: "Reports", href: "/school/reports" },
    { icon: Settings, label: "Settings", href: "/school/settings" },
  ];

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/school-login");
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "hidden lg:flex flex-col fixed inset-y-0 bg-[#0F172A] border-r border-slate-800 z-50 transition-all duration-300 ease-in-out shadow-2xl",
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
              className={cn("transition-all duration-300 brightness-0 invert", isCollapsed ? "h-10 w-10" : "h-10 w-auto")} 
            />
          </Link>
          {!isCollapsed && (
            <button 
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
        </div>

        {isCollapsed && (
          <div className="flex justify-center mb-4">
             <button 
                onClick={() => setIsCollapsed(false)}
                className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
          </div>
        )}

        <nav className="flex-grow px-4 space-y-2 pt-4 overflow-hidden">
          {!isCollapsed && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-4 mb-4">
              School Portal
            </div>
          )}
          {menuItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl transition-all duration-200 group relative",
                  isCollapsed ? "px-0 justify-center h-12 w-12 mx-auto" : "px-4 py-3",
                  active 
                    ? "bg-primary text-white shadow-lg shadow-red-500/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5 min-w-[1.25rem]", active ? "text-white" : "group-hover:text-primary")} />
                {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.label}</span>}
                {isCollapsed && (
                  <div className="absolute left-16 bg-slate-900 text-white px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[60] whitespace-nowrap shadow-xl border border-slate-800">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className={cn("p-4 border-t border-slate-800", isCollapsed && "flex justify-center")}>
          <button 
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-3 w-full text-slate-400 hover:bg-red-500/10 hover:text-primary rounded-xl transition-all group",
              isCollapsed ? "p-3 justify-center" : "px-4 py-3"
            )}
          >
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-50 shadow-sm">
        <img src={healthyrooLogo} alt="HealthyRoo" className="h-8 w-auto brightness-0 invert" />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900 z-40 pt-20 px-6 animate-in fade-in slide-in-from-top-4">
          <nav className="space-y-4">
            {menuItems.map((item) => {
               const active = location.pathname === item.href;
               return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                    active 
                      ? "bg-primary text-white" 
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", active ? "text-white" : "group-hover:text-primary")} />
                  <span className="font-medium">{item.label}</span>
                </Link>
               );
            })}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className={cn(
        "flex-grow pt-20 lg:pt-0 min-h-screen flex flex-col transition-all duration-300",
        isMobileMenuOpen && "opacity-20",
        isCollapsed ? "lg:ml-20" : "lg:ml-72"
      )}>
        {/* Top Header - Fixed */}
        <header className={cn(
          "hidden lg:flex items-center justify-between h-[72px] px-8 bg-[#F1F5F9] border-b border-slate-200 fixed top-0 right-0 z-40 transition-all duration-300",
          isCollapsed ? "left-20" : "left-72"
        )}>
          <div id="school-header-filter-container" className="flex-grow mr-4 lg:mr-8 flex items-center">
            {/* Search replaced by Portal */}
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">Springfield Academy</p>
                <p className="text-[10px] font-bold text-primary uppercase">School Portal</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-8 flex-grow mt-[72px]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SchoolLayout;
