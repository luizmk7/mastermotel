import { Suite } from '../types';

export const SUITES_DATA: Suite[] = [
  {
    id: 'imperial',
    title: 'Suíte Imperial Lumière',
    category: 'imperial',
    categoryLabel: 'Edição Especial & Teto Solar',
    badge: 'Mais Desejada',
    badgeColor: 'bg-[#E50914]',
    shortDesc: 'Hidromassagem aquecida, teto solar retrátil e vista para as estrelas.',
    fullDesc: 'Arquitetura sofisticada com teto solar retrátil, hidromassagem dupla aquecida e acabamento nobre em mármore.',
    startingPrice: 290,
    mainImg: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85'
    ],
    amenities: [
      'Cama Super King 600 fios Algodão Egípcio',
      'Hidromassagem Dupla Aquecida com Ozônio',
      'Teto Solar Panorâmico Retrátil elétrico',
      'Smart TV 75" 4K com Netflix & Canais Privados',
      'Sistema de Som Bluetooth com Acústica Estúdio',
      'Chuveiro Duplo de Teto com Cromoterapia',
      'Frigobar Gourmet com Champanheira',
      'Garagem Dupla Fechada com Portão de Alta Velocidade'
    ],
    highlights: ['Cama Super King', 'Hidro Aquecida Dupla', 'Smart TV 75" 4K', 'Teto Solar Retrátil'],
    pricing: [
      { period: '2 Horas', price: 'R$ 290,00', rawPrice: 290 },
      { period: '4 Horas', price: 'R$ 380,00', rawPrice: 380 },
      { period: 'Pernoite (12 horas)', price: 'R$ 560,00', rawPrice: 560 },
      { period: 'Diária VIP (24 horas)', price: 'R$ 950,00', rawPrice: 950 }
    ]
  },
  {
    id: 'master',
    title: 'Suíte Master Royal',
    category: 'master',
    categoryLabel: 'Exclusividade com Piscina',
    badge: 'Piscina Privativa',
    badgeColor: 'bg-[#080808]/80',
    shortDesc: 'Piscina aquecida com cascata, sauna seca privativa e som imersivo.',
    fullDesc: 'Piscina privativa aquecida com cascata luminosa, sauna seca em cedro nobre e som imersivo.',
    startingPrice: 380,
    mainImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85'
    ],
    amenities: [
      'Piscina Privativa com Cascata Aquecida 32°C',
      'Sauna Seca Acabamento em Cedro Canadense',
      'Hidromassagem Dupla com Oxigenação por Ozônio',
      'Pole Dance de Design em Aço Inox Polido',
      'Smart TV 82" 4K de Última Geração',
      'Som Surround JBL com Zonas Independentes',
      'Climatização Dual Zone Inverter Silenciosa',
      'Café da Manhã Especial Inclusivo no Pernoite'
    ],
    highlights: ['Piscina Aquecida', 'Sauna Seca Privativa', 'Som Surround JBL', 'Área Externa Privé'],
    pricing: [
      { period: '2 Horas', price: 'R$ 380,00', rawPrice: 380 },
      { period: '4 Horas', price: 'R$ 490,00', rawPrice: 490 },
      { period: 'Pernoite (12 horas)', price: 'R$ 720,00', rawPrice: 720 },
      { period: 'Diária VIP (24 horas)', price: 'R$ 1.250,00', rawPrice: 1250 }
    ]
  },
  {
    id: 'premium',
    title: 'Suíte Premium Gold',
    category: 'premium',
    categoryLabel: 'Contemporânea & Sensorial',
    badge: 'Contemporânea',
    badgeColor: 'bg-[#191919]',
    shortDesc: 'Design contemporâneo, iluminação cênica âmbar e hidromassagem relaxante.',
    fullDesc: 'Design contemporâneo com hidromassagem sensorial, iluminação cênica âmbar e ducha dupla.',
    startingPrice: 220,
    mainImg: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85'
    ],
    amenities: [
      'Hidromassagem com Cromoterapia Regulável',
      'Cama King Size com Molas Ensacadas Individuais',
      'Chuveiro Duplo com Jatos de Pressão Relaxante',
      'Painel de Iluminação Cênica Touch Screen',
      'Smart TV 65" com Conteúdo Exclusivo',
      'Frigobar Gourmet & Cafeteira Nespresso',
      'Wi-Fi 6 de Alta Velocidade & Isolamento Acústico',
      'Garagem Fechada Privativa e Discreta'
    ],
    highlights: ['Hidro Relax com LEDs', 'Chuveiro Duplo Teto', 'Frigobar Gourmet', 'Iluminação Touch'],
    pricing: [
      { period: '2 Horas', price: 'R$ 220,00', rawPrice: 220 },
      { period: '4 Horas', price: 'R$ 290,00', rawPrice: 290 },
      { period: 'Pernoite (12 horas)', price: 'R$ 440,00', rawPrice: 440 },
      { period: 'Diária VIP (24 horas)', price: 'R$ 720,00', rawPrice: 720 }
    ]
  },
  {
    id: 'boutique',
    title: 'Suíte Boutique Privé',
    category: 'boutique',
    categoryLabel: 'Intimista & Aconchegante',
    badge: 'Aconchegante',
    badgeColor: 'bg-[#991B1B]',
    shortDesc: 'Atmosfera intimista, iluminação dimmerizável suave e ducha dupla.',
    fullDesc: 'Atmosfera intimista e aconchegante com iluminação suave, cama Queen e ducha dupla.',
    startingPrice: 170,
    mainImg: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85'
    ],
    amenities: [
      'Cama Queen Size com Enxoval de Algodão Macio',
      'Chuveiro Duplo Teto com Regulagem de Temperatura',
      'Iluminação Intimista Dimmerizável',
      'Smart TV 55" com Aplicativos de Streaming',
      'Som Bluetooth com Conexão Rápida',
      'Ar Condicionado Split Inverter',
      'Atendimento 24h pelo Passa-Pratos Privativo',
      'Garagem Automática Fechada'
    ],
    highlights: ['Iluminação Dimerizável', 'Cama Queen Premium', 'Ducha Dupla', 'Privacidade Total'],
    pricing: [
      { period: '2 Horas', price: 'R$ 170,00', rawPrice: 170 },
      { period: '4 Horas', price: 'R$ 230,00', rawPrice: 230 },
      { period: 'Pernoite (12 horas)', price: 'R$ 350,00', rawPrice: 350 },
      { period: 'Diária VIP (24 horas)', price: 'R$ 580,00', rawPrice: 580 }
    ]
  }
];
