import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { BRAND, PLAY_STORE_URL } from '../../lib/constants';

interface NavbarProps {
  mode: 'customer' | 'cook';
  onModeChange: (newMode: 'customer' | 'cook') => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCook = mode === 'cook';

  const customerNavLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#features' },
    { label: 'Trust & Safety', href: '#trust' },
  ];

  const cookNavLinks = [
    { label: 'Partner Benefits', href: '#cook-benefits' },
    { label: 'Earnings Calculator', href: '#cook-earnings' },
    { label: 'Apply Now', href: '#cook-apply' },
  ];

  const activeLinks = isCook ? cookNavLinks : customerNavLinks;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-2xl border-b border-white/50 shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group z-50">
            <div className={`relative w-10 h-10 rounded-xl p-[1.5px] shadow-sm ${isCook ? 'bg-gradient-to-tr from-[#10B981] to-[#047857] shadow-emerald-500/20' : 'bg-gradient-to-tr from-[#FF4747] to-[#FF8A00] shadow-[#FF4747]/20'}`}>
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1.5">
                <img
                  src="assets/logo.png"
                  alt="Cook Dialer Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-[#FF4747] transition-colors">
                {BRAND.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 -mt-1">
                {isCook ? 'Cook Partner Portal' : 'Customer Website'}
              </span>
            </div>
          </a>



          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {activeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant={isCook ? 'secondary' : 'primary'} size="sm" href={isCook ? '#cook-apply' : PLAY_STORE_URL} target={isCook ? '_self' : '_blank'}>
              {isCook ? 'Apply as Cook' : '📱 Download App'}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden z-50 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-center px-8 pt-20 pb-12"
          >


            <nav className="flex flex-col gap-6 text-center">
              {activeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-800 hover:text-[#FF4747] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
