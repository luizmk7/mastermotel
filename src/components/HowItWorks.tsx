import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { BedDouble, CalendarDays, MessageCircle, KeyRound, Sparkles } from 'lucide-react';
import { AnimatedRedBackground } from './AnimatedRedBackground';

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  // Track scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 65%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic progress transforms for lines and traveling particles
  const verticalLineScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const horizontalLineScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const particleTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const particleLeft = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      num: '01',
      title: 'Escolha sua Suíte',
      desc: 'Selecione entre opções com hidromassagem, teto solar elétrico, sauna ou piscina aquecida privativa conforme sua preferência.',
      icon: BedDouble,
      tag: 'Seleção'
    },
    {
      num: '02',
      title: 'Informe Data e Período',
      desc: 'Defina o horário estimado de entrada (2h, 4h, pernoite de 12h ou diária completa VIP) e número de hóspedes.',
      icon: CalendarDays,
      tag: 'Agendamento'
    },
    {
      num: '03',
      title: 'Confirme pelo WhatsApp',
      desc: 'Com um clique, sua solicitação estruturada é enviada diretamente para nossa recepção discreta para confirmação prévia.',
      icon: MessageCircle,
      tag: 'Sem Burocracia'
    },
    {
      num: '04',
      title: 'Aproveite sua Estadia',
      desc: 'Chegue diretamente pelo portão privativo sem burocracias. Sua suíte estará climatizada, perfumada e preparada.',
      icon: KeyRound,
      tag: 'Check-in VIP'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative border-y border-red-950/40 overflow-hidden bg-gradient-to-b from-[#140204] via-[#220408] to-[#120204]"
    >
      {/* Continuous animated ambient gradients & shooting star flashes */}
      <AnimatedRedBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914] inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" /> Praticidade & Discrição
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2"
          >
            Reserve em Poucos Passos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-zinc-400 mt-3 font-light"
          >
            Experiência fluida e descomplicada desde a escolha até a sua chegada à suíte.
          </motion.p>
        </div>

        {/* Desktop View: Architectural Horizontal Process Stream with Dynamic Scroll Line */}
        <div className="hidden lg:block relative">
          {/* Base Inactive Track */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-white/10 z-0 rounded-full" />

          {/* Active Scroll-Driven Animated Golden Line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[2px] z-0 overflow-hidden pointer-events-none">
            <motion.div
              style={{ scaleX: horizontalLineScale, originX: 0 }}
              className="w-full h-full bg-gradient-to-r from-[#E50914] via-[#FF2B37] to-[#E50914] shadow-[0_0_12px_rgba(229,9,20,0.8)]"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex flex-col items-center text-center px-3"
                >
                  {/* Step Node with Hover and Entrance Flare */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-20 h-20 rounded-full bg-[#070707] border border-[#E50914]/40 group-hover:border-[#E50914] flex items-center justify-center transition-colors duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(229,9,20,0.35)] relative"
                    >
                      <Icon className="w-8 h-8 text-[#E50914] group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#070707] text-[#E50914] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#E50914]/50 shadow-md">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E50914]/80 font-bold mb-1">
                    {step.tag}
                  </span>
                  <h4 className="text-lg font-serif text-white font-medium group-hover:text-[#E50914] transition-colors">
                    {step.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet View: Refined Vertical Continuous Timeline with Dynamic Scroll Laser Line */}
        <div ref={mobileTimelineRef} className="lg:hidden relative pl-6 sm:pl-10">
          {/* Base Inactive Track Line */}
          <div className="absolute top-5 bottom-5 left-[23px] sm:left-[39px] w-[2px] bg-white/10 rounded-full" />

          {/* Active Animated Red Line that draws downwards automatically with scroll */}
          <div className="absolute top-5 bottom-5 left-[23px] sm:left-[39px] w-[2px] overflow-hidden pointer-events-none rounded-full z-0">
            <motion.div
              style={{ scaleY: verticalLineScale, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#E50914] via-[#FF2B37] to-[#E50914] shadow-[0_0_12px_rgba(229,9,20,0.9)]"
            />
          </div>

          {/* Traveling Luminous Sparkle Pulse down the timeline */}
          <motion.div
            style={{ top: particleTop }}
            className="absolute left-[20px] sm:left-[36px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#E50914,0_0_20px_#E50914] z-10 pointer-events-none -translate-y-1/2"
          />

          <div className="space-y-10 sm:space-y-14 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex items-start gap-5 sm:gap-6 group"
                >
                  {/* Timeline Marker Node with Automatic Pop & Pulse */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.12,
                      type: 'spring',
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="relative -ml-[23px] sm:-ml-[39px] shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#070707] border-2 border-[#E50914] flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.4)] relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-shadow">
                      {/* Subtle circular ambient glow */}
                      <div className="absolute inset-0 bg-[#E50914]/10 rounded-full" />
                      <Icon className="w-5 h-5 text-[#E50914] relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                  </motion.div>

                  {/* Step Content */}
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-[#E50914]">
                        {step.num}.
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#E50914]/90 font-semibold bg-[#E50914]/10 px-2 py-0.5 rounded border border-[#E50914]/20">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-serif text-white font-medium group-hover:text-[#E50914] transition-colors">
                      {step.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
