import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Car, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreSuites: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSuites, onOpenBooking }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-20">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/lvl0nq3r/video/upload/v1788573448/motel-hero-video-compactado_cxmqic.mp4"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#450A0A]/25 to-[#050505]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center mt-3 sm:mt-8">
        {/* Boutique Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full border border-[#E50914]/40 bg-[#050505]/80 backdrop-blur-md mb-5 sm:mb-8 shadow-lg shadow-[#E50914]/10"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E50914] animate-ping" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-white font-medium">
            Boutique & Sensorial Hotel
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-[32px] sm:text-5xl md:text-7xl font-serif font-normal text-white tracking-tight leading-[1.14] sm:leading-[1.12] mb-3.5 sm:mb-6"
        >
          Momentos únicos <br />
          <span className="italic font-light red-gradient-text">começam aqui.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-xs sm:max-w-2xl mx-auto text-xs sm:text-base md:text-xl text-zinc-300 font-light leading-relaxed mb-7 sm:mb-10"
        >
          Suítes exclusivas com hidromassagem aquecida, cromoterapia, atmosfera envolvente e privacidade absoluta pensada em cada detalhe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 mb-8 sm:mb-14 max-w-[280px] sm:max-w-none mx-auto w-full"
        >
          <button
            onClick={onExploreSuites}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 rounded-full bg-[#E50914] hover:bg-[#FF2B37] text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-all transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#E50914]/40 cursor-pointer"
          >
            Conhecer Suítes
          </button>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 rounded-full bg-black/60 hover:bg-white/10 text-white border border-white/20 hover:border-[#E50914] hover:text-[#FF2B37] font-medium text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-all backdrop-blur-md cursor-pointer"
          >
            Fazer Reserva
          </button>
        </motion.div>

        {/* Security and Discretion Badges - Desktop Version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden md:flex items-center justify-center gap-8 text-sm text-zinc-300 font-light"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E50914]" />
            <span>Aberto 24 Horas</span>
          </div>
          <span className="text-[#E50914]/40">•</span>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-[#E50914]" />
            <span>Garagem Privativa Automática</span>
          </div>
          <span className="text-[#E50914]/40">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E50914]" />
            <span>Total Discrição & Sigilo</span>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <motion.a
        href="#reserva-rapida"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#E50914]/70 hover:text-[#E50914] transition-colors p-2 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};
