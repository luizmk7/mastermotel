import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, MessageSquare, Clock, DollarSign } from 'lucide-react';
import { Suite } from '../types';

interface SuiteModalProps {
  suite: Suite | null;
  onClose: () => void;
  onReserve: (suiteTitle: string) => void;
}

export const SuiteModal: React.FC<SuiteModalProps> = ({ suite, onClose, onReserve }) => {
  const [activeImg, setActiveImg] = useState<string>('');

  useEffect(() => {
    if (suite) {
      setActiveImg(suite.mainImg);
    }
  }, [suite]);

  if (!suite) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-[#0B0B0B] border border-[#E50914]/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-white my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#050505] border border-white/20 hover:border-[#E50914] text-white hover:text-[#E50914] flex items-center justify-center transition-all cursor-pointer z-10"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Gallery Left */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 mb-3 h-72 sm:h-80 relative">
                <img
                  src={activeImg || suite.mainImg}
                  alt={suite.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#E50914] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {suite.badge}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {suite.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      activeImg === img
                        ? 'border-[#E50914] ring-2 ring-[#E50914]/30 scale-105'
                        : 'border-white/15 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info Right */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                {suite.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                {suite.fullDesc}
              </p>

              {/* Amenities */}
              <h4 className="text-xs uppercase tracking-widest text-[#E50914] font-semibold mb-3">
                Comodidades Inclusas:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-200 mb-6">
                {suite.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing Matrix Table */}
              <div className="bg-[#050505] p-4 rounded-xl border border-white/10 mb-6">
                <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3 border-b border-white/10 pb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E50914]" /> Tarifário de Hospedagem
                </h4>
                <div className="space-y-2 text-xs">
                  {suite.pricing.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-1 border-b border-white/5 last:border-0"
                    >
                      <span className="text-zinc-400">{tier.period}</span>
                      <span className="font-bold text-[#E50914] font-serif">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve Button */}
              <button
                onClick={() => {
                  onClose();
                  onReserve(suite.title);
                }}
                className="w-full py-4 rounded-xl bg-[#E50914] hover:bg-[#FF2B37] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-[#E50914]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reservar Esta Suíte</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
