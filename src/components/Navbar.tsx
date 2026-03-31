import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo/healthyroo-logo.svg";

const navLinks = ["Home", "Services", "Impact", "About Us", "Contact Us"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="HealthyRoo" className="h-8 md:h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={link === "Home" ? "/" : link === "Services" ? "/#services" : link === "Impact" ? "/impact" : link === "About Us" ? "/about" : link === "Contact Us" ? "/contact" : "#"} 
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/school-login" className="px-6 py-2.5 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
            School Login
          </a>
          <a href="#" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={link === "Home" ? "/" : link === "Services" ? "/#services" : link === "Impact" ? "/impact" : link === "About Us" ? "/about" : link === "Contact Us" ? "/contact" : "#"} 
                  className="text-foreground hover:text-primary font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <a href="/school-login" onClick={() => setMobileOpen(false)} className="text-center px-6 py-2.5 rounded-full border border-primary text-primary font-medium text-sm">
              School Login
            </a>
            <a href="#" className="text-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm">
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
