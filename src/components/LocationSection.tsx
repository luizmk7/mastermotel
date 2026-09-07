import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation, CalendarCheck } from 'lucide-react';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="localizacao" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Dark Map Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#0B0B0B] rounded-3xl overflow-hidden border border-white/10 h-96 relative group shadow-2xl"
        >
          <iframe
            title="Mapa de Localização MASTER MOTEL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332354785465!2d-38.53!3d-3.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDUnMDAuMCJTIDM4wrAzMSc0OC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-75 group-hover:opacity-100 transition duration-500"
            loading="lazy"
          />
          {/* Map Overlay Badge */}
          <div className="absolute bottom-4 left-4 bg-[#050505]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E50914]/40 text-xs text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E50914]" />
            <span>Acesso rápido pelas principais avenidas</span>
          </div>
        </motion.div>

        {/* Info Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal mt-2 mb-6">
            MASTER MOTEL
          </h2>

          <div className="space-y-6 text-sm text-zinc-400 font-light mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-medium">Endereço Discreto:</strong>
                <span>Av. Central, 850 — Bairro Aldeota / Sul</span>
                <br />
                <span>Fortaleza - CE, CEP 60130-000</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-medium">Horário de Funcionamento:</strong>
                <span>Aberto 24 horas ininterruptamente todos os dias</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] flex items-center justify-center shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-medium">Central de Informações:</strong>
                <span>(85) 3000-0000 • WhatsApp: (85) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#E50914] text-white hover:text-[#E50914] text-xs uppercase tracking-widest font-semibold text-center transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Como Chegar (GPS)</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#FF2B37] text-white text-xs uppercase tracking-widest font-bold text-center transition-all shadow-lg shadow-[#E50914]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reservar Agora</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
