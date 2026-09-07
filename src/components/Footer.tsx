import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center mb-1">
              <img
                src="https://res.cloudinary.com/lvl0nq3r/image/upload/v1788733969/master_motel_logo_leve_hgbj24.webp"
                alt="Master Motel Logo"
                className="h-14 sm:h-16 w-auto object-contain cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Uma atmosfera intimista que transcende o convencional. O refúgio perfeito para celebrações inesquecíveis e momentos de puro relaxamento.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0E0E] border border-[#E50914]/40 text-[10px] text-[#E50914]">
                <ShieldCheck className="w-3 h-3" /> Total Sigilo & Privacidade
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li>
                <a href="#suites" onClick={(e) => scrollTo(e, 'suites')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Nossas Suítes
                </a>
              </li>
              <li>
                <a href="#experiencias" onClick={(e) => scrollTo(e, 'experiencias')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Experiências Exclusivas
                </a>
              </li>
              <li>
                <a href="#gastronomia" onClick={(e) => scrollTo(e, 'gastronomia')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Cardápio 24 Horas
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => scrollTo(e, 'galeria')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Galeria Fotográfica
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914] mb-4">
              Acomodações
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li>
                <a href="#suites" onClick={(e) => scrollTo(e, 'suites')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Suíte Imperial Master
                </a>
              </li>
              <li>
                <a href="#suites" onClick={(e) => scrollTo(e, 'suites')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Suíte Master Royal com Piscina
                </a>
              </li>
              <li>
                <a href="#suites" onClick={(e) => scrollTo(e, 'suites')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Suíte Premium Gold
                </a>
              </li>
              <li>
                <a href="#experiencias" onClick={(e) => scrollTo(e, 'experiencias')} className="hover:text-[#E50914] transition-colors cursor-pointer">
                  Decoração Romântica Especial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914] mb-4">
              Atendimento
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3 font-light">
              Av. Central, 850 — Fortaleza, CE
              <br />
              Atendimento contínuo 24 Horas
              <br />
              Telefone: (85) 3000-0000
            </p>
            <div className="inline-block px-3 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/35 text-[10px] text-[#E50914] font-medium">
              Total Discrição e Sigilo
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Motel Lumière Premium. Todos os direitos reservados.</p>
          <p className="italic font-serif text-[#E50914]/90">
            “Motel Lumière Premium — momentos criados para serem lembrados.”
          </p>
        </div>
      </div>
    </footer>
  );
};
