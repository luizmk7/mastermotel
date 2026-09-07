import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { KeyRound, Flame, Wine, ShieldCheck, Sparkles, Lock, UtensilsCrossed, BellRing } from 'lucide-react';

export const Differentials: React.FC = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkActiveCard = () => {
      // Apply focal detection on mobile viewport (< 768px)
      if (window.innerWidth >= 768) {
        setActiveMobileIdx(-1);
        return;
      }

      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.bottom < 120 || sectionRect.top > window.innerHeight - 120) {
        setActiveMobileIdx(-1);
        return;
      }

      const focalPoint = window.innerHeight * 0.5;
      let closestIdx = -1;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(focalPoint - cardCenter);

        if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        }
      });

      setActiveMobileIdx(closestIdx);
    };

    window.addEventListener('scroll', checkActiveCard, { passive: true });
    window.addEventListener('resize', checkActiveCard);
    checkActiveCard();

    return () => {
      window.removeEventListener('scroll', checkActiveCard);
      window.removeEventListener('resize', checkActiveCard);
    };
  }, []);

  const cards = [
    {
      icon: KeyRound,
      badge: 'TOTAL SIGILO',
      badgeIcon: Lock,
      title: 'Privacidade Absoluta',
      descDesktop: 'Entrada independente com acesso direto à garagem privativa fechada e portão automático. Checkout discreto sem filas e total sigilo operacional garantido.',
      descMobile: 'Garagem privativa fechada com portão automático, acesso direto e total sigilo garantido.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      tags: ['Garagem Automática', 'Zero Contato', 'Sem Filas']
    },
    {
      icon: Flame,
      badge: 'SPA & SEDUÇÃO',
      badgeIcon: Sparkles,
      title: 'Suítes Exclusivas',
      descDesktop: 'Arquitetura sensorial pensada para envolver. Hidromassagens duplas com ozônio, piscina privativa aquecida, iluminação cênica regulável e som surround Bluetooth.',
      descMobile: 'Hidromassagens duplas com ozônio, piscina aquecida e iluminação cênica regulável.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      tags: ['Hidro com Ozônio', 'Piscina Aquecida', 'Cromoterapia']
    },
    {
      icon: Wine,
      badge: 'MENU AFRODISÍACO',
      badgeIcon: UtensilsCrossed,
      title: 'Gastronomia 24h',
      descDesktop: 'Cozinha internacional servida 24 horas no conforto da suíte. Cartas de champagne Moët & Chandon, fondue, vinhos refinados e café da manhã especial.',
      descMobile: 'Menu internacional 24h servido com discrição na suíte e cartas de champagne Moët.',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      tags: ['Room Service 24h', 'Champagne Moët', 'Passa-Pratos Blindado']
    },
    {
      icon: BellRing,
      badge: 'DISCRIÇÃO TOTAL',
      badgeIcon: ShieldCheck,
      title: 'Atendimento Silencioso',
      descDesktop: 'Equipe altamente treinada e pontual. Atendimento 100% discreto via passa-pratos acústico isolado, sem necessidade de contato interpessoal direto.',
      descMobile: 'Atendimento 100% discreto via passa-pratos acústico, sem necessidade de contato direto.',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80',
      tags: ['Passa-Pratos Acústico', 'Higienização Rigorosa', 'Prontidão 24h']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-18">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E50914]" /> Padrão Master Motel
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-normal mt-2 leading-tight">
          Tudo pensado para a sua intimidade
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 sm:mt-3 max-w-lg mx-auto">
          Diferenciais concebidos para proporcionar momentos inesquecíveis com máximo sigilo, requinte e atmosfera envolvente.
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#E50914] to-transparent mx-auto mt-4 sm:mt-5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const BadgeIcon = card.badgeIcon;
          const isMobileActive = activeMobileIdx === idx;

          return (
            <motion.div
              key={card.title}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`relative rounded-2xl border transition-all duration-500 flex flex-col justify-between group overflow-hidden shadow-2xl ${
                isMobileActive
                  ? 'border-[#E50914] shadow-[0_0_35px_rgba(229,9,20,0.4)] scale-[1.01] -translate-y-0.5'
                  : 'border-red-950/60 bg-[#0B0204] md:hover:border-[#E50914] md:hover:shadow-[0_0_35px_rgba(229,9,20,0.35)] md:hover:-translate-y-2'
              }`}
            >
              {/* Atmospheric Background Photo Overlay with Dark Ruby Veil */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    isMobileActive
                      ? 'opacity-40 scale-110'
                      : 'opacity-25 group-hover:opacity-40 group-hover:scale-110'
                  }`}
                  referrerPolicy="no-referrer"
                />
                {/* Deep dark ruby gradient mask for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080203] via-[#0E0305]/95 to-[#160407]/90" />
                
                {/* Seductive ambient red light pod in the top-right corner */}
                <div
                  className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl transition-all duration-500 ${
                    isMobileActive
                      ? 'bg-[#E50914]/35'
                      : 'bg-[#E50914]/15 group-hover:bg-[#E50914]/35'
                  }`}
                />
              </div>

              {/* Luminous laser line accent along top edge */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 z-20 ${
                  isMobileActive
                    ? 'opacity-100 bg-gradient-to-r from-transparent via-[#FF2B37] to-transparent shadow-[0_0_8px_#E50914]'
                    : 'opacity-0 md:group-hover:opacity-100 bg-gradient-to-r from-transparent via-[#E50914] to-transparent'
                }`}
              />

              {/* Card Content: Streamlined padding & hierarchy on mobile */}
              <div className="relative z-10 p-5 sm:p-7 flex flex-col h-full justify-between">
                <div>
                  {/* Header Row: Title on the left side of the icon */}
                  <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      {/* Title: placed on the left side of the icon */}
                      <h3
                        className={`text-base sm:text-xl font-serif font-medium transition-colors duration-300 leading-snug ${
                          isMobileActive
                            ? 'text-[#FF4D58]'
                            : 'text-white md:group-hover:text-[#FF4D58]'
                        }`}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Glowing Ruby Icon Pod on the right */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 shadow-md shrink-0 ${
                        isMobileActive
                          ? 'bg-gradient-to-br from-[#E50914] to-[#7F0E1E] text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] scale-105 sm:scale-110'
                          : 'bg-gradient-to-br from-[#E50914]/20 to-[#7F0E1E]/20 text-[#FF4D58] border border-[#E50914]/40 md:group-hover:bg-gradient-to-br md:group-hover:from-[#E50914] md:group-hover:to-[#7F0E1E] md:group-hover:text-white md:group-hover:shadow-[0_0_22px_rgba(229,9,20,0.7)] md:group-hover:scale-110'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Description: Desktop only */}
                  <p className="hidden sm:block text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-5">
                    {card.descDesktop}
                  </p>
                </div>

                {/* Seductive Feature Badges at Bottom: Compact & non-crowded */}
                <div className="pt-3 sm:pt-4 border-t border-red-950/40 flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                  {card.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] text-zinc-300/90 bg-white/[0.04] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-white/5 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                  {card.tags[2] && (
                    <span className="hidden sm:inline-block text-[10px] text-zinc-300/90 bg-white/[0.04] px-2.5 py-1 rounded border border-white/5 whitespace-nowrap">
                      {card.tags[2]}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
