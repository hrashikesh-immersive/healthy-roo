import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/healthyroo-logo.svg"; // Using existing logo file
import { useContactPopup } from "@/context/ContactPopupContext";

const Footer = () => {
  const { openPopup } = useContactPopup();

  return (
    <footer className="bg-neutral-800 font-sans">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 overflow-hidden relative">
                <img
                  src={logo}
                  alt="HealthyRoo"
                  className="h-full w-auto max-w-none ml-0"
                  style={{ objectPosition: 'left center', objectFit: 'contain' }}
                />
              </div>
              <span className="text-white font-[500] text-2xl er">HealthyRoo</span>
            </div>

            <p className="text-[#BBBBBB] text-sm leading-loose mb-8">
              HealthyRoo is Australia's leading provider of comprehensive school health screening programmes, empowering students to thrive through early detection and expert-led wellness initiatives.
            </p>

            <div className="flex items-center gap-3">
              <Link to="#" className="w-9 h-9 rounded-full bg-neutral-700 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Facebook className="w-[15px] h-[15px] fill-current" />
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-neutral-700 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Twitter className="w-[15px] h-[15px] fill-current" />
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-neutral-700 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Instagram className="w-[15px] h-[15px]" />
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-neutral-700 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Linkedin className="w-[15px] h-[15px] fill-current" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-white font-[500] text-lg mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Careers', href: '/careers' },
                { name: 'Blog', href: '/blog' },
                { name: 'School Login', href: '/school-login' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-3 text-[#BBBBBB] hover:text-white transition-colors text-sm">
                    <ArrowRight className="w-4 h-4 text-[#666]" strokeWidth={2} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-3 lg:pr-6">
            <h3 className="text-white font-[500] text-lg mb-8">Newsletter</h3>
            <p className="text-[#BBBBBB] text-sm leading-relaxed mb-6">
              Subscribe to stay updated with the latest school health insights and programme updates.
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full bg-neutral-700 border border-neutral-600 rounded px-4 py-3.5 text-white text-sm outline-none focus:border-primary transition-colors placeholder:text-[#A0A0A0]"
              />
              <button
                onClick={openPopup}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-full transition-colors text-base shadow-sm"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-[500] text-lg mb-8 lg:px-2">Address</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-[#BBBBBB]">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5 fill-white/10" strokeWidth={1.5} />
                <span className="text-sm leading-[1.6]">
                  1710/687 La trobe street,<br />
                  Docklands, Victoria <span className="text-white font-semibold">3008</span>
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#BBBBBB]">
                <Mail className="w-5 h-5 text-white flex-shrink-0 fill-white/10" strokeWidth={1.5} />
                <span className="text-sm">info@healthyroo.ai</span>
              </div>
              <div className="flex items-center gap-4 text-[#BBBBBB]">
                <Phone className="w-5 h-5 text-white flex-shrink-0 fill-white/10" strokeWidth={1.5} />
                <span className="text-sm">+61 401 477 772</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700 bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-xs ">
            © 2026 healthyroo | Made by www.immersiveinfotech.com
          </p>
          <div className="flex items-center gap-6 text-[#A3A3A3] text-[10px] uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
