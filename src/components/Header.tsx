import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, ArrowRight, Lock } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'Suítes', href: '#suites' },
    { num: '02', name: 'Experiências', href: '#experiencias' },
    { num: '03', name: 'Gastronomia', href: '#gastronomia' },
    { num: '04', name: 'Galeria', href: '#galeria' },
    { num: '05', name: 'Localização', href: '#localizacao' },
    { num: '06', name: 'Dúvidas', href: '#faq' },
  ];

  const scrollToTarget = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setTimeout(() => {
      scrollToTarget(targetId);
    }, 40);
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      onOpenBooking();
    }, 40);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070102]/95 backdrop-blur-xl border-b border-red-950/60 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#070102]/90 via-[#070102]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="group flex items-center focus:outline-none py-1 cursor-pointer"
        >
          <img
            src="https://res.cloudinary.com/lvl0nq3r/image/upload/v1788733969/master_motel_logo_leve_hgbj24.webp"
            alt="Master Motel Logo"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-14 sm:h-18 md:h-22'
            }`}
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/80 hover:text-[#FF4D58] transition-colors py-1 relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#E50914] after:to-[#FF2B37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleBookingClick}
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#E50914] via-[#FF2B37] to-[#B80710] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer border border-[#FF6B75]/40 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-2" />
            Reservar Agora
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden w-10 h-10 rounded-xl bg-[#140306]/90 border border-red-950/70 text-white flex items-center justify-center hover:border-[#E50914]/60 hover:text-[#FF4D58] transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF4D58]" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Seductive & Minimalist Motel Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#090204]/98 backdrop-blur-2xl border-b border-red-950/80 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden relative"
          >
            {/* Ambient Ruby Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none" />
            {/* Top Laser Line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FF2B37]/80 to-transparent" />

            <div className="px-6 py-6 sm:py-8 relative z-10">
              {/* Minimalist Navigation Links List */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between py-3 px-2 border-b border-red-950/30 text-left transition-all duration-300 hover:bg-white/[0.02] rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#FF4D58]/70 font-semibold">
                        {link.num}
                      </span>
                      <span className="font-serif text-base sm:text-lg text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        {link.name}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#FF4D58] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Minimalist Action Box */}
              <div className="pt-6 mt-2">
                <button
                  onClick={handleBookingClick}
                  className="w-full py-3.5 px-6 text-xs uppercase font-bold tracking-widest text-white bg-gradient-to-r from-[#E50914] via-[#FF2B37] to-[#B80710] rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(229,9,20,0.5)] border border-[#FF6B75]/40 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Consultar & Reservar</span>
                </button>

                {/* Discretion badge */}
                <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 font-mono tracking-wider pt-3">
                  <Lock className="w-3 h-3 text-[#FF2B37]" />
                  <span>Atendimento 24h • Total Sigilo & Discrição</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
