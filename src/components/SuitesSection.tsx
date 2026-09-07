import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Eye, CalendarCheck, Flame, Waves, Crown, KeyRound } from 'lucide-react';
import { SUITES_DATA } from '../data/suites';
import { Suite } from '../types';
import { AnimatedRedBackground } from './AnimatedRedBackground';

interface SuitesSectionProps {
  onOpenModal: (suiteId: string) => void;
  onDirectReserve: (suiteTitle: string) => void;
}

export const SuitesSection: React.FC<SuitesSectionProps> = ({ onOpenModal, onDirectReserve }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredSuites = activeCategory === 'todos'
    ? SUITES_DATA
    : SUITES_DATA.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todas as Suítes', sub: 'Coleção Completa', icon: Sparkles },
    { id: 'imperial', label: 'Imperial', sub: 'Teto Solar & Hidro', icon: Flame },
    { id: 'master', label: 'Master Royal', sub: 'Piscina Privativa', icon: Waves },
    { id: 'premium', label: 'Premium Gold', sub: 'Hidro Dupla c/ Ozônio', icon: Crown },
    { id: 'boutique', label: 'Boutique Privé', sub: 'Design & Intimidade', icon: KeyRound },
  ];

  return (
    <section
      id="suites"
      className="py-24 relative border-y border-red-950/40 overflow-hidden bg-gradient-to-b from-[#140204] via-[#220408] to-[#120204]"
    >
      {/* Subtle minimalist animated ambient gradients & shooting star flashes */}
      <AnimatedRedBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
              Acomodações de Alto Padrão
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2">
              Conheça Nossas Suítes
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light">
            Ambientes sensoriais construídos com mármores nobres, iluminação cênica regulável e isolamento acústico de padrão internacional.
          </p>
        </div>

        {/* Category Filters: Seductive Motel Capsule Rail */}
        <div className="relative mb-10 sm:mb-14 p-1.5 sm:p-2 rounded-2xl bg-[#090203]/90 border border-red-950/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 overflow-x-auto sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredSuites.map((suite: Suite, idx: number) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0D0D0D] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E50914] transition-all duration-500 group flex flex-col justify-between shadow-2xl"
            >
              {/* Image & Badge Header */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={suite.mainImg}
                  alt={suite.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                
                <span className={`absolute top-4 left-4 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#E50914]/40 backdrop-blur-md ${suite.badgeColor || 'bg-[#E50914]'}`}>
                  {suite.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-[11px] text-zinc-300 uppercase tracking-widest">A partir de</span>
                  <span className="text-xl font-serif text-white font-bold">
                    R$ {suite.startingPrice}{' '}
                    <span className="text-xs font-sans text-zinc-400 font-normal">/ 2h</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#E50914] transition-colors">
                    {suite.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mb-6 leading-relaxed">
                    {suite.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-200 mb-8">
                    {suite.highlights.map((h, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <Check className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                        <span className="truncate">{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenModal(suite.id)}
                    className="w-full py-3 text-xs uppercase tracking-wider text-white border border-white/20 hover:border-[#E50914] hover:text-[#E50914] rounded-xl transition-all font-medium text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>
                  <button
                    onClick={() => onDirectReserve(suite.title)}
                    className="w-full py-3 text-xs uppercase tracking-wider text-white bg-[#E50914] hover:bg-[#FF2B37] rounded-xl font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-[#E50914]/20 cursor-pointer"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Reservar</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
