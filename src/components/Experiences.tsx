import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Feather, Lock } from 'lucide-react';

export const Experiences: React.FC = () => {
  return (
    <section id="experiencias" className="py-28 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
          Sentidos & Emoções
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mt-2 leading-tight">
          Mais que uma estadia. <br />
          <span className="italic font-light red-gradient-text">Uma experiência inesquecível.</span>
        </h2>
        <p className="hidden md:block text-zinc-400 mt-4 text-sm font-light">
          A união harmônica entre design contemporâneo, gastronomia refinada e discrição pensada para pessoas que exigem o melhor.
        </p>
      </div>

      {/* Block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=85"
            alt="Ambiente de Suíte MASTER MOTEL com iluminação indireta"
            className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:pl-6"
        >
          <span className="hidden md:block text-xs uppercase tracking-widest text-[#E50914] font-bold">
            01. Atmosfera Sensorial
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-white mt-2 mb-4">
            Ambientes Planejados
          </h3>
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
            Cada detalhe foi minuciosamente desenvolvido para criar uma atmosfera relaxante e envolvente. Iluminação indireta regulável via painel touch, aromaterapia personalizada e isolamento acústico de padrão internacional.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#E50914] uppercase tracking-wider font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Harmonia entre arquitetura e conforto</span>
          </div>
        </motion.div>
      </div>

      {/* Block 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:order-1 order-2 lg:pr-6"
        >
          <span className="hidden md:block text-xs uppercase tracking-widest text-[#E50914] font-bold">
            02. Descanso Máximo
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-white mt-2 mb-4">
            Conforto Sem Concessões
          </h3>
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
            Camas king e super king equipadas com enxoval de 600 fios em algodão egípcio, menu de travesseiros com opções de plumas e viscoelástico, e banheiras com higienização automatizada em três estágios para sua total tranquilidade.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#E50914] uppercase tracking-wider font-semibold">
            <Feather className="w-4 h-4" />
            <span>Enxoval 600 fios & banheiras de hidromassagem</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 lg:order-2 order-1 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85"
            alt="Cama King com lençóis de alta densidade"
            className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Block 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Detalhes de luxo e privacidade MASTER MOTEL"
            className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:pl-6"
        >
          <span className="hidden md:block text-xs uppercase tracking-widest text-[#E50914] font-bold">
            03. Discrição Máxima
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-white mt-2 mb-4">
            Privacidade & Alta Discrição
          </h3>
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
            Privacidade não é apenas um detalhe, é nossa essência. Entrada com acesso direto à garagem automatizada com cortinas de proteção, portão rápido e atendimento exclusivo sem necessidade de contato interpessoal.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#E50914] uppercase tracking-wider font-semibold">
            <Lock className="w-4 h-4" />
            <span>Check-in e check-out 100% privativos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
