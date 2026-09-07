import React from 'react';

interface FlashStarConfig {
  id: number;
  top: string;
  left: string;
  width: string;
  rotation: string;
  animationType: 'normal' | 'fast';
  duration: string;
  delay: string;
  opacity: number;
}

interface TwinkleStarConfig {
  id: number;
  top: string;
  left?: string;
  right?: string;
  size: string;
  duration: string;
  delay: string;
}

const FLASH_STARS: FlashStarConfig[] = [
  // Upper sector (estrelas cadentes com queda suave da esquerda para a direita)
  { id: 1, top: '5%', left: '4%', width: '95px', rotation: 'rotate-[34deg]', animationType: 'normal', duration: '4.2s', delay: '0s', opacity: 0.85 },
  { id: 2, top: '9%', left: '26%', width: '70px', rotation: 'rotate-[32deg]', animationType: 'fast', duration: '3.6s', delay: '0.4s', opacity: 0.7 },
  { id: 3, top: '13%', left: '48%', width: '85px', rotation: 'rotate-[36deg]', animationType: 'normal', duration: '4.4s', delay: '0.9s', opacity: 0.75 },
  { id: 4, top: '17%', left: '12%', width: '110px', rotation: 'rotate-[35deg]', animationType: 'normal', duration: '4.6s', delay: '1.4s', opacity: 0.85 },
  { id: 5, top: '21%', left: '38%', width: '75px', rotation: 'rotate-[33deg]', animationType: 'fast', duration: '3.7s', delay: '1.8s', opacity: 0.7 },
  { id: 6, top: '25%', left: '6%', width: '100px', rotation: 'rotate-[36deg]', animationType: 'normal', duration: '4.5s', delay: '2.2s', opacity: 0.8 },
  { id: 7, top: '29%', left: '56%', width: '65px', rotation: 'rotate-[34deg]', animationType: 'fast', duration: '3.5s', delay: '2.6s', opacity: 0.65 },
  
  // Mid-upper sector
  { id: 8, top: '33%', left: '20%', width: '90px', rotation: 'rotate-[35deg]', animationType: 'normal', duration: '4.3s', delay: '0.2s', opacity: 0.75 },
  { id: 9, top: '37%', left: '42%', width: '105px', rotation: 'rotate-[37deg]', animationType: 'normal', duration: '4.7s', delay: '0.7s', opacity: 0.8 },
  { id: 10, top: '41%', left: '8%', width: '75px', rotation: 'rotate-[33deg]', animationType: 'fast', duration: '3.6s', delay: '1.1s', opacity: 0.7 },
  { id: 11, top: '45%', left: '30%', width: '85px', rotation: 'rotate-[35deg]', animationType: 'normal', duration: '4.2s', delay: '1.6s', opacity: 0.75 },
  { id: 12, top: '49%', left: '52%', width: '115px', rotation: 'rotate-[38deg]', animationType: 'normal', duration: '4.8s', delay: '2.1s', opacity: 0.85 },
  { id: 13, top: '53%', left: '16%', width: '70px', rotation: 'rotate-[32deg]', animationType: 'fast', duration: '3.5s', delay: '2.5s', opacity: 0.65 },
  { id: 14, top: '57%', left: '36%', width: '95px', rotation: 'rotate-[36deg]', animationType: 'normal', duration: '4.4s', delay: '3.0s', opacity: 0.8 },

  // Mid-lower sector
  { id: 15, top: '61%', left: '4%', width: '80px', rotation: 'rotate-[34deg]', animationType: 'fast', duration: '3.8s', delay: '0.5s', opacity: 0.7 },
  { id: 16, top: '65%', left: '24%', width: '110px', rotation: 'rotate-[36deg]', animationType: 'normal', duration: '4.6s', delay: '1.0s', opacity: 0.85 },
  { id: 17, top: '69%', left: '46%', width: '65px', rotation: 'rotate-[33deg]', animationType: 'fast', duration: '3.6s', delay: '1.5s', opacity: 0.65 },
  { id: 18, top: '73%', left: '10%', width: '100px', rotation: 'rotate-[37deg]', animationType: 'normal', duration: '4.5s', delay: '1.9s', opacity: 0.8 },
  { id: 19, top: '77%', left: '32%', width: '85px', rotation: 'rotate-[35deg]', animationType: 'normal', duration: '4.3s', delay: '2.4s', opacity: 0.75 },
  { id: 20, top: '81%', left: '54%', width: '70px', rotation: 'rotate-[32deg]', animationType: 'fast', duration: '3.5s', delay: '2.8s', opacity: 0.65 },
  { id: 21, top: '85%', left: '18%', width: '115px', rotation: 'rotate-[38deg]', animationType: 'normal', duration: '4.7s', delay: '3.2s', opacity: 0.85 },
  { id: 22, top: '89%', left: '40%', width: '70px', rotation: 'rotate-[34deg]', animationType: 'fast', duration: '3.7s', delay: '0.3s', opacity: 0.65 },
  { id: 23, top: '93%', left: '8%', width: '85px', rotation: 'rotate-[35deg]', animationType: 'normal', duration: '4.2s', delay: '0.8s', opacity: 0.7 },

  // Supplementary celestial streaks for depth & balance
  { id: 24, top: '11%', left: '68%', width: '80px', rotation: 'rotate-[34deg]', animationType: 'fast', duration: '3.7s', delay: '1.3s', opacity: 0.7 },
  { id: 25, top: '35%', left: '64%', width: '75px', rotation: 'rotate-[36deg]', animationType: 'normal', duration: '4.1s', delay: '2.7s', opacity: 0.65 },
  { id: 26, top: '59%', left: '60%', width: '65px', rotation: 'rotate-[33deg]', animationType: 'fast', duration: '3.5s', delay: '1.7s', opacity: 0.6 },
  { id: 27, top: '79%', left: '66%', width: '100px', rotation: 'rotate-[37deg]', animationType: 'normal', duration: '4.5s', delay: '3.3s', opacity: 0.8 },
  { id: 28, top: '47%', left: '2%', width: '90px', rotation: 'rotate-[35deg]', animationType: 'fast', duration: '3.8s', delay: '2.0s', opacity: 0.7 },
];

const TWINKLE_STARS: TwinkleStarConfig[] = [
  { id: 1, top: '8%', left: '12%', size: 'w-1 h-1', duration: '3.4s', delay: '0s' },
  { id: 2, top: '14%', left: '34%', size: 'w-1.5 h-1.5', duration: '4.2s', delay: '0.8s' },
  { id: 3, top: '11%', right: '24%', size: 'w-1 h-1', duration: '3.8s', delay: '1.6s' },
  { id: 4, top: '22%', right: '12%', size: 'w-1.5 h-1.5', duration: '4.6s', delay: '2.2s' },
  { id: 5, top: '28%', left: '20%', size: 'w-1 h-1', duration: '3.2s', delay: '0.4s' },
  { id: 6, top: '35%', left: '46%', size: 'w-1.5 h-1.5', duration: '4.8s', delay: '1.2s' },
  { id: 7, top: '40%', right: '36%', size: 'w-1 h-1', duration: '3.6s', delay: '2.8s' },
  { id: 8, top: '47%', right: '18%', size: 'w-1.5 h-1.5', duration: '4.4s', delay: '0.6s' },
  { id: 9, top: '53%', left: '14%', size: 'w-1 h-1', duration: '3.9s', delay: '1.8s' },
  { id: 10, top: '59%', left: '38%', size: 'w-1.5 h-1.5', duration: '4.5s', delay: '2.4s' },
  { id: 11, top: '65%', right: '28%', size: 'w-1 h-1', duration: '3.5s', delay: '3.0s' },
  { id: 12, top: '72%', right: '8%', size: 'w-1.5 h-1.5', duration: '4.7s', delay: '1.0s' },
  { id: 13, top: '77%', left: '26%', size: 'w-1 h-1', duration: '3.3s', delay: '2.0s' },
  { id: 14, top: '83%', left: '50%', size: 'w-1.5 h-1.5', duration: '4.3s', delay: '0.2s' },
  { id: 15, top: '88%', right: '40%', size: 'w-1 h-1', duration: '3.7s', delay: '1.4s' },
  { id: 16, top: '92%', right: '15%', size: 'w-1.5 h-1.5', duration: '4.9s', delay: '2.6s' },
  { id: 17, top: '18%', left: '60%', size: 'w-1 h-1', duration: '3.6s', delay: '1.5s' },
  { id: 18, top: '68%', left: '52%', size: 'w-1 h-1', duration: '4.0s', delay: '2.7s' },
];

export const AnimatedRedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Volumetric breathing red ambient glow 1 */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#7F0E1E]/35 via-[#4A0A10]/25 to-transparent blur-[120px] will-change-transform"
        style={{ animation: 'ambientGlow1 14s ease-in-out infinite' }}
      />

      {/* Volumetric breathing red ambient glow 2 */}
      <div
        className="absolute -bottom-40 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#8A1121]/35 via-[#3B070D]/30 to-transparent blur-[130px] will-change-transform"
        style={{ animation: 'ambientGlow2 18s ease-in-out infinite' }}
      />

      {/* Central soft breathing ruby light */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[500px] rounded-full bg-[#E50914]/15 blur-[140px] will-change-transform"
        style={{ animation: 'ambientPulse 10s ease-in-out infinite' }}
      />

      {/* Estrelas Cadentes com Queda Natural da Esquerda para a Direita */}
      {FLASH_STARS.map((star) => (
        <div
          key={star.id}
          className={`absolute pointer-events-none ${star.rotation} will-change-transform`}
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          {/* O movimento viaja para a frente (ao longo do eixo local rotacionado em queda suave) */}
          <div
            className="flex items-center will-change-transform"
            style={{
              animation: `${star.animationType === 'fast' ? 'shootingStarFallFast' : 'shootingStarFall'} ${star.duration} cubic-bezier(0.25, 0.1, 0.25, 1) ${star.delay} infinite`,
            }}
          >
            {/* Rastro de luz natural: nasce transparente à esquerda e ganha intensidade luminosa até a ponta à direita */}
            <div
              className="h-[1.5px] rounded-full will-change-transform"
              style={{
                width: star.width,
                opacity: star.opacity,
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(229, 9, 20, 0.2) 25%, rgba(255, 110, 125, 0.7) 70%, rgba(255, 255, 255, 0.95) 96%, #ffffff 100%)',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 16px rgba(229, 9, 20, 0.7)',
              }}
            />

            {/* Cabeça da estrela cadente: ponta branca e radiante que lidera a queda à frente */}
            <div
              className="w-1.5 h-1.5 rounded-full bg-white -ml-1 shrink-0"
              style={{
                boxShadow: '0 0 6px 1px #ffffff, 0 0 14px 2px #ff2b37, 0 0 22px 3px rgba(229, 9, 20, 0.75)',
              }}
            />
          </div>
        </div>
      ))}

      {/* Constellation of subtle starlight twinkles */}
      {TWINKLE_STARS.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.size} rounded-full bg-white shadow-[0_0_6px_#ffffff] will-change-transform`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animation: `starTwinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}

      {/* Subtle dark vignette overlay for depth */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#140204]/40 to-[#0A0203]/90" />
    </div>
  );
};
