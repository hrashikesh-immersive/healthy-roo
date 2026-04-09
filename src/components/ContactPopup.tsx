import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { useContactPopup } from '@/context/ContactPopupContext';

const ContactPopup = () => {
  const { isOpen, closePopup } = useContactPopup();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after a few seconds or let user close it
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[900px] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Left Side - Brand Info (Hidden on small mobile) */}
            <div className="hidden md:flex md:w-[40%] bg-primary p-12 flex-col justify-between text-white">
              <div>
                <CheckCircle2 className="w-12 h-12 text-white/20 mb-8" />
                <h2 className="text-4xl font-[500] uppercase er leading-[0.9] mb-6">
                  Ready to<br />Empower<br />Your School?
                </h2>
                <p className="text-white/80 font-medium leading-relaxed">
                  Join 100+ schools in Australia transforming student health through AI-powered screenings.
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80">Certified Practitioners</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                       <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80">info@healthyroo.ai</span>
                 </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 p-8 md:p-14 lg:p-16 bg-[#F8F9FA]">
              {!isSubmitted ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-[500] uppercase er text-foreground mb-2">Book a Session</h3>
                    <p className="text-muted-foreground text-sm font-medium">Get a tailored proposal for your institution.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="border-b-2 border-black/10 focus-within:border-primary transition-colors pb-1">
                        <label className="block text-[10px] font-bold uppercase text-black/40 mb-1">Name</label>
                        <input type="text" className="w-full bg-transparent outline-none py-1 font-medium text-base" required />
                      </div>
                      <div className="border-b-2 border-black/10 focus-within:border-primary transition-colors pb-1">
                        <label className="block text-[10px] font-bold uppercase text-black/40 mb-1">Email</label>
                        <input type="email" className="w-full bg-transparent outline-none py-1 font-medium text-base" required />
                      </div>
                    </div>

                    <div className="border-b-2 border-black/10 focus-within:border-primary transition-colors pb-1">
                      <label className="block text-[10px] font-bold uppercase text-black/40 mb-1">School Name</label>
                      <input type="text" className="w-full bg-transparent outline-none py-1 font-medium text-base" required />
                    </div>

                    <div className="border-b-2 border-black/10 focus-within:border-primary transition-colors pb-1">
                      <label className="block text-[10px] font-bold uppercase text-black/40 mb-1">Message</label>
                      <textarea className="w-full bg-transparent outline-none py-1 font-medium text-base h-20 resize-none" />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 transition-all"
                      >
                        Submit Request <Send className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-2xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-[500] uppercase er mb-4">You're on the list!</h3>
                  <p className="text-muted-foreground font-medium max-w-xs mx-auto mb-10">
                    A HealthyRoo consultant will contact you within 24 hours to schedule your consultation.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); closePopup(); }}
                    className="text-primary font-bold uppercase text-[10px] tracking-widest hover:underline"
                  >
                    Back to Website
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
