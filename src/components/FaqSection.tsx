import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  CreditCard,
  Flame,
  MessageCircle,
  Lock,
  ArrowRight
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCat, setSelectedCat] = useState<string>('Todas');

  const categories = [
    { id: 'Todas', label: 'Todas as Dúvidas', sub: 'Guia Completo', icon: Sparkles },
    { id: 'Reserva', label: 'Reservas VIP', sub: 'Chegada & Agendamento', icon: CalendarCheck },
    { id: 'Privacidade', label: 'Privacidade & Sigilo', sub: 'Garagem & Discrição', icon: ShieldCheck },
    { id: 'Pagamento', label: 'Pagamento Discreto', sub: 'Pix, Cartão & Fatura Neutra', icon: CreditCard },
    { id: 'Estrutura', label: 'Estrutura & Higiene', sub: 'Hidros & Sanitização', icon: Flame },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    return selectedCat === 'Todas' || item.category === selectedCat;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-[#070102] border-t border-red-950/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914] flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#E50914]" /> Atendimento & Sigilo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal mt-2 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light max-w-md mx-auto">
            Esclareça qualquer dúvida com total transparência, descrição e rapidez.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#E50914] to-transparent mx-auto mt-4 sm:mt-5" />
        </div>

        {/* Category Filter: Seductive Motel Capsule Rail */}
        <div className="relative mb-10 sm:mb-14 p-1.5 sm:p-2 rounded-2xl bg-[#090203]/90 border border-red-950/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.8)] flex items-center justify-start sm:justify-center gap-2 overflow-x-auto sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCat === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`group relative shrink-0 flex items-center gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E50914] via-[#FF2B37] to-[#B80710] text-white font-bold shadow-[0_0_25px_rgba(229,9,20,0.55)] border border-[#FF6B75]/50 scale-[1.02]'
                    : 'bg-[#120306]/70 text-zinc-300 border border-red-950/40 hover:border-[#E50914]/60 hover:text-white hover:bg-[#1C0509]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse" />
                )}
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-[#FF4D58]'
                  }`}
                />
                <span className="font-semibold text-[11px] sm:text-xs leading-tight">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-sm text-zinc-400 bg-[#0B0204]/80 rounded-2xl border border-red-950/40">
              Nenhuma pergunta encontrada para esta categoria.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? 'border-[#E50914]/80 bg-[#120306]/95 shadow-[0_0_30px_rgba(229,9,20,0.22)]'
                      : 'border-red-950/50 bg-gradient-to-r from-[#0C0204]/90 via-[#070102]/95 to-[#090203]/90 hover:border-[#E50914]/50'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center text-sm sm:text-base font-medium text-white transition-colors cursor-pointer group"
                  >
                    <span className="flex items-center gap-3 pr-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.6)]'
                            : 'bg-[#E50914]/15 border border-[#E50914]/30 text-[#FF4D58] group-hover:bg-[#E50914]/25'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="group-hover:text-[#FF4D58] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-[#E50914]/20 text-[#FF4D58] rotate-180' : 'text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-zinc-300/90 font-light leading-relaxed border-t border-red-950/40 pt-3.5 pl-14 sm:pl-16"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Seductive Motel VIP Concierge Card */}
        <div className="relative mt-12 sm:mt-16 rounded-3xl border border-red-950/70 overflow-hidden shadow-2xl group bg-gradient-to-br from-[#150307]/95 via-[#0A0204]/98 to-[#100305]/95">
          {/* Seductive atmospheric photo with dark ruby veil */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=80"
              alt="Concierge Master Motel"
              className="w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080102] via-[#0E0305]/95 to-[#080102]/90" />
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#E50914]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E50914]/30 transition-all duration-700" />
          </div>

          {/* Glowing laser top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2B37] to-transparent shadow-[0_0_10px_#E50914] z-10" />

          {/* Card Content */}
          <div className="relative z-10 p-6 sm:p-9 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              {/* Glowing Ruby Concierge Pod */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#E50914] to-[#7F0E1E] text-white flex items-center justify-center shadow-[0_0_25px_rgba(229,9,20,0.6)] shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(229,9,20,0.8)] transition-all duration-500">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-serif text-white font-medium leading-tight">
                  Deseja um pedido especial ou atendimento discreto?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 max-w-xl leading-relaxed">
                  Decoração romântica com pétalas e champagne, reservas VIP antecipadas ou esclarecimento com sigilo 100% garantido.
                </p>

                {/* Trust mini-badges */}
                <div className="hidden sm:flex items-center gap-3 mt-3.5 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF2B37]" /> Sigilo Operacional Absoluto
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF2B37]" /> Resposta em poucos minutos
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 w-full sm:w-auto flex flex-col items-center sm:items-end">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Master%20Motel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#E50914] via-[#FF2B37] to-[#B80710] text-white text-xs sm:text-sm uppercase font-bold tracking-wider hover:shadow-[0_0_35px_rgba(229,9,20,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(229,9,20,0.4)] border border-[#FF6B75]/40"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Consultar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
