import React, { useState } from 'react';
import { Calendar, Clock, Bed, ArrowRight, ShieldCheck } from 'lucide-react';
import { SUITES_DATA } from '../data/suites';

interface QuickBookingProps {
  onQuickSubmit: (data: { date: string; period: string; suiteId: string }) => void;
}

export const QuickBooking: React.FC<QuickBookingProps> = ({ onQuickSubmit }) => {
  const [date, setDate] = useState('Chegada Hoje (Imediata)');
  const [period, setPeriod] = useState('4 horas');
  const [suiteId, setSuiteId] = useState('premium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSubmit({ date, period, suiteId });
  };

  return (
    <section id="reserva-rapida" className="relative z-20 -mt-16 sm:-mt-20 max-w-6xl mx-auto px-6">
      <div className="bg-[#0B0B0B]/95 backdrop-blur-2xl border border-[#E50914]/35 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden shadow-black/80">
        {/* Subtle Ambient Light */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center sm:text-left mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-5 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E50914]">
              Agendamento & Chegada Imediata
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
              Reserve sua Experiência
            </h2>
          </div>
          <p className="text-xs text-zinc-400 flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-[#E50914]" />
            Confirmação instantânea e discreta via WhatsApp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Arrival Date */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E50914]" /> Entrada
            </label>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors"
            >
              <option value="Chegada Hoje (Imediata)">Chegada Hoje (Imediata)</option>
              <option value="Amanhã">Amanhã</option>
              <option value="Próxima Sexta-feira">Próxima Sexta-feira</option>
              <option value="Próximo Sábado">Próximo Sábado</option>
              <option value="Data personalizada">Outra data (informar no envio)</option>
            </select>
          </div>

          {/* Period */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E50914]" /> Período
            </label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors"
            >
              <option value="2 horas">Período de 2 Horas</option>
              <option value="4 horas">Período de 4 Horas (Recomendado)</option>
              <option value="Pernoite (12h)">Pernoite Completo (12h)</option>
              <option value="Diária VIP (24h)">Diária 24 Horas VIP</option>
            </select>
          </div>

          {/* Desired Suite */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#E50914]" /> Suíte Desejada
            </label>
            <select
              value={suiteId}
              onChange={(e) => setSuiteId(e.target.value)}
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors"
            >
              {SUITES_DATA.map((suite) => (
                <option key={suite.id} value={suite.id}>
                  {suite.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Action */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-[#E50914] hover:bg-[#FF2B37] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl py-3.5 px-4 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E50914]/25 cursor-pointer"
            >
              <span>Continuar Reserva</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
