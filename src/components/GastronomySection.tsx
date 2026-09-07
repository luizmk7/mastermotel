import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Clock, Sparkles, ConciergeBell, Wine, ChevronDown, UtensilsCrossed, Flame, Heart, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types';
import { AnimatedRedBackground } from './AnimatedRedBackground';

export const GastronomySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  const categories = [
    { id: 'todos', label: 'Todos os Destaques', sub: 'Cardápio Completo', icon: Sparkles },
    { id: 'Bebidas', label: 'Espumantes & Vinhos', sub: 'Moët & Drinks', icon: Wine },
    { id: 'Pratos Principais', label: 'Pratos Principais', sub: 'Cozinha Quente', icon: UtensilsCrossed },
    { id: 'Petiscos', label: 'Fondues & Petiscos', sub: 'Porções a Dois', icon: Flame },
    { id: 'Sobremesas', label: 'Sobremesas', sub: 'Doces Afrodisíacos', icon: Heart },
    { id: 'Café da Manhã', label: 'Café da Manhã', sub: 'Servido no Quarto', icon: Coffee },
  ];

  const filteredItems = activeCategory === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const mobileVisibleItems = showAllMobile ? filteredItems : filteredItems.slice(0, 4);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setShowAllMobile(false);
  };

  const renderMobileCard = (item: MenuItem, idx: number) => (
    <motion.div
      key={`mob-${item.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
      className="bg-[#070707] rounded-xl overflow-hidden border border-white/10 hover:border-[#E50914]/60 transition-all duration-300 flex flex-col justify-between shadow-lg group"
    >
      <div className="h-28 xs:h-32 overflow-hidden relative shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xs xs:text-sm font-serif text-white font-medium line-clamp-1 mb-1 group-hover:text-[#E50914] transition-colors">
            {item.title}
          </h4>
          <span className="text-white font-bold text-xs xs:text-sm font-serif block">
            R$ {item.price}
          </span>
        </div>

        <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
          <span className="flex items-center gap-1 text-white font-medium">
            <Clock className="w-3 h-3 text-white" />
            <span>24h</span>
          </span>
          <span className="text-[10px] text-zinc-400">
            No quarto
          </span>
        </div>
      </div>
    </motion.div>
  );

  const renderDesktopCard = (item: MenuItem, idx: number) => (
    <motion.div
      key={`desk-${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="bg-[#070707] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E50914]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
    >
      <div className="h-48 overflow-hidden relative shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-baseline mb-2 gap-2">
            <h4 className="text-base font-serif text-white font-medium group-hover:text-[#E50914] transition-colors leading-snug">
              {item.title}
            </h4>
          </div>
          <span className="text-white font-bold text-sm block font-serif">
            R$ {item.price}
          </span>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <span className="flex items-center gap-1.5 text-white text-[11px] font-medium">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>Preparo 24 Horas</span>
          </span>
          <span className="text-[11px] text-zinc-400 font-light">
            Serviço no quarto
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="gastronomia"
      className="py-24 relative border-y border-red-950/40 overflow-hidden bg-gradient-to-b from-[#140204] via-[#220408] to-[#120204]"
    >
      {/* Continuous animated ambient gradients & shooting star flashes */}
      <AnimatedRedBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Showcase Information Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Mostruário Culinário 24 Horas
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2">
              Sabores para Completar sua Estadia
            </h2>
            <p className="hidden md:block text-sm text-zinc-400 max-w-2xl font-light mt-3 leading-relaxed">
              Conheça uma seleção especial dos pratos, vinhos, espumantes e cafés que preparamos na hora. Todos os itens são servidos com total privacidade no conforto da sua acomodação.
            </p>
          </div>

          {/* Luxury Showcase Information Badge (replacing the cart) */}
          <div className="bg-[#050505] p-4 rounded-2xl border border-[#E50914]/40 flex items-center gap-4 shadow-xl shrink-0">
            <div className="w-11 h-11 rounded-xl bg-[#E50914]/10 text-[#E50914] flex items-center justify-center font-bold">
              <ConciergeBell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E50914] block font-bold">
                Room Service Privativo 24h
              </span>
              <span className="text-xs text-zinc-400 block font-light">
                Solicite diretamente da suíte via interfone
              </span>
              <span className="text-[10px] text-white/70 block">
                Entrega discreta via passa-pratos térmico
              </span>
            </div>
          </div>
        </div>

        {/* Categories Bar: Seductive Motel Capsule Rail */}
        <div className="relative mb-10 sm:mb-12 p-1.5 sm:p-2 rounded-2xl bg-[#090203]/90 border border-red-950/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 overflow-x-auto sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
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

        {/* Menu Items Showcase - Vertical Paired Grid on Mobile, 4-col Grid on Desktop */}
        <div>
          {/* Mobile View: Pequenos cards verticais em dupla + Botão Saber mais */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-3 xs:gap-4">
              {mobileVisibleItems.map((item, idx) => renderMobileCard(item, idx))}
            </div>

            {filteredItems.length > 4 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllMobile((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E50914] border border-[#E50914]/40 bg-[#050505] hover:bg-[#E50914] hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{showAllMobile ? 'Mostrar menos' : 'Saber mais'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllMobile ? 'rotate-180' : ''}`} />
                </button>
              </div>
            )}
          </div>

          {/* Desktop View: Grid padrão */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => renderDesktopCard(item, idx))}
          </div>
        </div>

        {/* Footer Note about In-Room Menu */}
        <div className="mt-12 bg-[#050505]/80 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] flex items-center justify-center shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-serif text-white font-medium">
                Cardápio Completo na Suíte
              </h4>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Mais de 40 opções de pratos, drinks autorais e cartas de vinhos disponíveis no menu digital e físico ao entrar na acomodação.
              </p>
            </div>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#E50914] font-semibold border border-[#E50914]/40 px-4 py-2 rounded-full whitespace-nowrap">
            Atendimento 24h sem contato
          </div>
        </div>
      </div>
    </section>
  );
};

