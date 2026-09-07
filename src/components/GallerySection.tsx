import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const activeItem = selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null;

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="galeria" className="py-28 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
          Tour Visual
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2">
          Galeria de Ambientes
        </h2>
        <p className="text-zinc-400 text-sm mt-3 font-light">
          Clique sobre qualquer imagem para expandir em alta resolução.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_ITEMS.map((item: GalleryItem, idx: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedIdx(idx)}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-80 border border-white/10 ${item.spanClass || ''}`}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-[#050505]/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center mb-3 transform scale-90 group-hover:scale-100 transition duration-300 shadow-lg shadow-[#E50914]/40">
                <Maximize2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#E50914] font-bold">
                {item.category}
              </span>
              <h4 className="text-sm font-serif text-white font-medium mt-1">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-[#E50914] transition-colors p-2 z-10 cursor-pointer"
              aria-label="Fechar Galeria"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev/Next Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-[#E50914] bg-[#0A0A0A]/90 p-3 rounded-full border border-white/10 hover:border-[#E50914] transition-colors cursor-pointer z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-[#E50914] bg-[#0A0A0A]/90 p-3 rounded-full border border-white/10 hover:border-[#E50914] transition-colors cursor-pointer z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] text-center"
            >
              <img
                src={activeItem.imgSrc}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto mx-auto rounded-xl shadow-2xl border border-white/20 object-contain"
              />
              <div className="mt-4">
                <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold">
                  {activeItem.category}
                </span>
                <p className="text-sm sm:text-base text-white font-serif mt-1">
                  {activeItem.title}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
