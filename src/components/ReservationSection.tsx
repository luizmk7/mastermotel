import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Heart, Sparkles, Shield, Send, X, Calendar, Clock } from 'lucide-react';
import { SUITES_DATA } from '../data/suites';
import { MenuItem, BookingFormData } from '../types';

interface ReservationSectionProps {
  initialSuiteId?: string;
  initialDate?: string;
  initialPeriod?: string;
  whatsappNumber: string;
  onShowToast: (title: string, message: string, type: 'success' | 'info' | 'warning') => void;
}

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getCurrentTimeString = () => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return `${hh}-${mm}`;
};

const formatBrazilianDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
};

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialSuiteId = 'premium',
  initialDate = '',
  initialPeriod = '4 horas',
  whatsappNumber,
  onShowToast,
}) => {
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [selectedTime, setSelectedTime] = useState(getCurrentTimeString());

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    suiteId: initialSuiteId,
    suiteTitle: SUITES_DATA.find((s) => s.id === initialSuiteId)?.title || 'Suíte Premium Gold',
    date: '',
    period: initialPeriod,
    guests: '1 Casal (2 pessoas)',
    romanticSetup: false,
    notes: '',
  });

  const currentSuite = SUITES_DATA.find((s) => s.id === formData.suiteId) || SUITES_DATA[0];

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (showConfirmModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showConfirmModal]);

  useEffect(() => {
    if (initialSuiteId) {
      const suite = SUITES_DATA.find((s) => s.id === initialSuiteId);
      if (suite) {
        setFormData((prev) => ({ ...prev, suiteId: suite.id, suiteTitle: suite.title }));
      }
    }
  }, [initialSuiteId]);

  useEffect(() => {
    if (initialDate) {
      // If a pre-filled date string was passed, we try to see if we can parse it as YYYY-MM-DD
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dateRegex.test(initialDate)) {
        setSelectedDate(initialDate);
      }
    }
  }, [initialDate]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date: `${formatBrazilianDate(selectedDate)} às ${selectedTime}h`,
    }));
  }, [selectedDate, selectedTime]);

  useEffect(() => {
    if (initialPeriod) {
      setFormData((prev) => ({ ...prev, period: initialPeriod }));
    }
  }, [initialPeriod]);

  const buildWhatsappMessage = () => {
    const name = formData.name.trim() || 'Anônimo / Cliente';
    const date = formData.date.trim() || 'Chegada Imediata';
    const setupText = formData.romanticSetup
      ? 'SIM (Pétalas de rosas & velas aromáticas)'
      : 'Não solicitada';
    const notes = formData.notes.trim() || 'Sem observações especiais';

    return `Olá, gostaria de fazer uma pré-reserva no Master Motel.

📌 NOME: ${name}
🏨 SUÍTE: ${formData.suiteTitle}
📅 DATA / HORÁRIO: ${date}
⏳ PERÍODO: ${formData.period}
👥 HÓSPEDES: ${formData.guests}
🌹 DECORAÇÃO ROMÂNTICA: ${setupText}
📝 OBSERVAÇÕES: ${notes}

Gostaria de confirmar a disponibilidade e a entrada discreta. Obrigado!`;
  };

  const handleCopyMessage = () => {
    const msg = buildWhatsappMessage();
    navigator.clipboard.writeText(msg).then(
      () => {
        onShowToast('Texto Copiado!', 'A mensagem formatada de reserva está na sua área de transferência.', 'success');
      },
      () => {
        // Fallback for iframe constraints
        const textarea = document.createElement('textarea');
        textarea.value = msg;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        onShowToast('Texto Copiado!', 'A mensagem formatada de reserva está na sua área de transferência.', 'success');
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmAndSend = () => {
    setShowConfirmModal(false);
    const msg = buildWhatsappMessage();

    if (whatsappNumber && whatsappNumber.trim() !== '') {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
      try {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        window.open(url, '_blank');
      }
      onShowToast('Encaminhando ao WhatsApp', 'Sua pré-reserva foi enviada com total sigilo.', 'success');
    } else {
      handleCopyMessage();
    }
  };

  return (
    <section id="reserva-final" className="py-24 bg-gradient-to-b from-[#050505] to-[#450A0A]/20 relative border-t border-[#E50914]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B0B0B] border-2 border-[#E50914]/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[#E50914] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
              <MessageSquare className="w-4 h-4" />
              Atendimento Personalizado
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
              Faça sua Pré-Reserva
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
              Preencha os campos para gerar instantaneamente a mensagem estruturada para nossa recepção no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                  Seu Nome ou Como Deseja Ser Chamado(a)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Lucas / Anônimo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Suite Selection with Real Room Photo & Visual Switcher */}
              <div className="sm:col-span-2 bg-[#050505] p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-[#E50914]/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold">
                    Suíte Selecionada para Pré-Reserva
                  </label>
                  <span className="text-[11px] text-[#FF4D58] font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#E50914]" />
                    Foto real do quarto vinculada à reserva
                  </span>
                </div>

                {/* Selected Room Photo Banner & Info */}
                <div className="relative rounded-xl overflow-hidden border border-white/15 mb-3.5 bg-black">
                  <div className="relative h-40 xs:h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={currentSuite.mainImg}
                      alt={currentSuite.title}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-xs font-serif font-bold px-3 py-1 rounded-full border border-white/20">
                      A partir de R$ {currentSuite.startingPrice}
                    </div>

                    {/* Bottom Caption Overlay on the photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <h4 className="text-base sm:text-xl font-serif text-white font-medium drop-shadow-md">
                        {currentSuite.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Quick Visual Suite Switcher Cards */}
                <div className="mt-2">
                  {/* Horizontal carousel on mobile (flex overflow-x-auto snap-x), grid on desktop */}
                  <div className="flex sm:grid sm:grid-cols-4 gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1 pt-0.5 -mx-1 px-1 sm:mx-0 sm:px-0 sm:overflow-visible sm:pb-0">
                    {SUITES_DATA.map((s) => {
                      const isSelected = s.id === formData.suiteId;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              suiteId: s.id,
                              suiteTitle: s.title,
                            }));
                          }}
                          className={`group relative rounded-lg overflow-hidden border text-left transition-all p-2 sm:p-1.5 flex items-center gap-2.5 sm:gap-2 cursor-pointer shrink-0 w-[170px] xs:w-[185px] sm:w-auto snap-start ${
                            isSelected
                              ? 'border-[#E50914] bg-[#E50914]/15 ring-1 ring-[#E50914]'
                              : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                          }`}
                        >
                          <img
                            src={s.mainImg}
                            alt={s.title}
                            className="w-12 h-10 sm:w-11 sm:h-9 rounded object-cover shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <span className={`text-[11px] font-serif font-medium truncate block leading-tight ${
                              isSelected ? 'text-[#FF4D58]' : 'text-zinc-200 group-hover:text-white'
                            }`}>
                              {s.title.replace('Suíte ', '')}
                            </span>
                            <span className="text-[9px] text-zinc-400 block truncate font-mono">
                              R$ {s.startingPrice}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Data e Horário Previsto (Profissional) */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                    Data de Chegada
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E50914] pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      min={getTodayDateString()}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3.5 pl-11 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#E50914] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                    Horário de Chegada
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E50914] pointer-events-none" />
                    <input
                      type="time"
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3.5 pl-11 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#E50914] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Period */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                  Período de Permanência
                </label>
                <select
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm focus:outline-none transition-colors"
                >
                  <option value="2 horas">2 Horas</option>
                  <option value="4 horas">4 Horas (Recomendado)</option>
                  <option value="Pernoite (12h)">Pernoite (12 Horas)</option>
                  <option value="Diária VIP (24h)">Diária Completa (24 Horas VIP)</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                  Quantidade de Pessoas
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm focus:outline-none transition-colors"
                >
                  <option value="1 Casal (2 pessoas)">1 Casal (2 pessoas)</option>
                  <option value="1 Pessoa (Individual)">1 Pessoa (Individual)</option>
                  <option value="Grupo / Festa Privativa (3+ pessoas)">3 ou mais pessoas (Consultar regras)</option>
                </select>
              </div>
            </div>

            {/* Romantic Setup Option */}
            <div className="bg-[#050505] p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#E50914] shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-white block">
                    Decoração Romântica Especial
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    Inclui pétalas de rosas importadas, velas aromáticas de LED e aroma personalizado.
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={formData.romanticSetup}
                onChange={(e) => setFormData({ ...formData, romanticSetup: e.target.checked })}
                className="w-5 h-5 accent-[#E50914] cursor-pointer"
              />
            </div>

            {/* Special Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                Observações Especiais (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Gostaria de champanhe previamente gelado na suíte, temperatura do ar em 21°C..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#050505] border border-white/15 focus:border-[#E50914] text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors"
              />
            </div>

            {/* Actions */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#E50914] hover:bg-[#FF2B37] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-[#E50914]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pré-Reserva pelo WhatsApp</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-zinc-400 mt-3 font-light flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#E50914]" />
              Seus dados são confidenciais e utilizados estritamente para o atendimento privativo.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Pre-Send Confirmation Review Modal Card */}
      <AnimatePresence>
        {showConfirmModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowConfirmModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B0B0B] border border-[#E50914]/40 rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative my-auto flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF4D58] font-bold block mb-1">
                    Revisão da Pré-Reserva
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                    Revise antes de enviar
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 font-light">
                    Confira todos os dados antes de prosseguir para o WhatsApp oficial.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label="Fechar revisão"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto py-4 space-y-3.5 no-scrollbar pr-0.5">
                {/* Selected Suite preview */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <img
                    src={currentSuite.mainImg}
                    alt={currentSuite.title}
                    className="w-16 h-12 rounded-lg object-cover shrink-0 border border-white/10"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] text-[#E50914] font-mono uppercase tracking-wider block">
                      {currentSuite.categoryLabel}
                    </span>
                    <h4 className="text-sm font-serif font-semibold text-white truncate">
                      {currentSuite.title}
                    </h4>
                    <span className="text-xs text-zinc-300 font-mono">
                      A partir de R$ {currentSuite.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Structured info tiles */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#141414] p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Nome / Hóspede
                    </span>
                    <span className="text-white font-medium truncate block">
                      {formData.name.trim() || 'Cliente Anônimo'}
                    </span>
                  </div>

                  <div className="bg-[#141414] p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Data / Horário
                    </span>
                    <span className="text-white font-medium truncate block">
                      {formData.date.trim() || 'Chegada Imediata'}
                    </span>
                  </div>

                  <div className="bg-[#141414] p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Período
                    </span>
                    <span className="text-white font-medium truncate block">
                      {formData.period}
                    </span>
                  </div>

                  <div className="bg-[#141414] p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Decoração Especial
                    </span>
                    <span className={`font-medium truncate block ${formData.romanticSetup ? 'text-[#FF4D58]' : 'text-zinc-400'}`}>
                      {formData.romanticSetup ? 'Sim (Pétalas & Velas)' : 'Não solicitada'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-3.5 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleConfirmAndSend}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5c] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar e Abrir WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="py-3 px-4 rounded-xl border border-white/20 hover:border-white/40 text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center cursor-pointer"
                >
                  <span>Ajustar Informações</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
