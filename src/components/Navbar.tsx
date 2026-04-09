import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/healthyroo-logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Impact", path: "/impact" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${isScrolled
        ? "top-4 w-[95%] max-w-7xl bg-white/75 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 rounded-3xl"
        : "top-0 w-full bg-white border-transparent"
      }`}>
      <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-3"} px-4 lg:px-8`}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HealthyRoo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition-colors font-semibold text-xs lg:text-sm whitespace-nowrap ${isActive(link.path) ? "text-primary underline underline-offset-8 decoration-2" : "text-foreground hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-3">
          <Link to="/school-login" className="px-4 lg:px-6 py-2.5 rounded-full border border-primary text-primary font-medium text-xs lg:text-sm hover:bg-primary/5 transition-colors whitespace-nowrap">
            School Login
          </Link>
          <Link to="/school-signup" className="px-4 lg:px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs lg:text-sm hover:bg-primary/90 transition-colors whitespace-nowrap shadow-lg shadow-primary/10">
            Register School
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-[500] transition-colors ${isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Link to="/school-login" onClick={() => setMobileOpen(false)} className="text-center px-6 py-2.5 rounded-full border border-primary text-primary font-medium text-sm">
              School Login
            </Link>
            <Link to="/school-signup" onClick={() => setMobileOpen(false)} className="text-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm">
              Register School
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
