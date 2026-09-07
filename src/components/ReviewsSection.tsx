import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/content';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    if (offsetWidth === 0) return;
    const cardWidth = offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), REVIEWS.length - 1));
  };

  const scrollToIndex = (idx: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[idx] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(idx);
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
          Depoimentos Verificados
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-zinc-400 text-sm mt-3 font-light">
          Avaliações anônimas de hóspedes que viveram a experiência Lumière.
        </p>
      </div>

      {/* Reviews Container: Horizontal snap carousel on mobile, 3-column grid on desktop */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-2 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:pt-0 md:mx-0 md:px-0"
      >
        {REVIEWS.map((rev: Review) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="shrink-0 w-[86vw] max-w-[340px] snap-center md:w-auto md:shrink bg-[#0B0B0B] p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-[#E50914]/40 transition-colors duration-200 shadow-xl flex flex-col justify-between relative self-stretch min-h-[250px]"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E50914]/15 pointer-events-none" />

            <div>
              {/* Star rating */}
              <div className="flex text-[#E50914] gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E50914]" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 italic font-light leading-relaxed mb-6">
                “{rev.comment}”
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block">
                  {rev.author}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                  {rev.role}
                </span>
              </div>
              <span className="text-[10px] text-[#E50914] bg-[#E50914]/10 px-2.5 py-1 rounded-full border border-[#E50914]/30">
                {rev.suite}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-only Carousel Navigation Controls & Indicators */}
      <div className="flex md:hidden items-center justify-between mt-4 px-2">
        <button
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Depoimento anterior"
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ver depoimento ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === idx ? 'w-6 bg-[#E50914]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(Math.min(REVIEWS.length - 1, activeIndex + 1))}
          disabled={activeIndex === REVIEWS.length - 1}
          aria-label="Próximo depoimento"
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
