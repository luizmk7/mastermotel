import { GalleryItem, Review, FaqItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Suíte Imperial com Hidromassagem Aquecida',
    category: 'Suíte Imperial',
    imgSrc: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-1'
  },
  {
    id: '2',
    title: 'Banheira de Hidromassagem Dupla com Iluminação Cênica',
    category: 'Bem-estar',
    imgSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-2'
  },
  {
    id: '3',
    title: 'Quarto com Cama Super King e Revestimento em Mármore',
    category: 'Suíte Master',
    imgSrc: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-1'
  },
  {
    id: '4',
    title: 'Fachada Noturna Discreta & Entrada Iluminada',
    category: 'Estrutura Privê',
    imgSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-2'
  },
  {
    id: '5',
    title: 'Drinks e Coquetelaria Exclusiva Servidos no Quarto',
    category: 'Gastronomia',
    imgSrc: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-1'
  },
  {
    id: '6',
    title: 'Área da Piscina Privativa Aquecida com Iluminação Subaquática',
    category: 'Suíte Master',
    imgSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    spanClass: 'col-span-1 md:col-span-1'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rodrigo & Camila M.',
    role: 'Casal Hóspede',
    suite: 'Suíte Master Royal',
    rating: 5,
    comment: 'Ambiente impecável, atendimento extremamente discreto e suíte espetacular! A piscina aquecida com a iluminação de LED cria um clima aconchegante e inesquecível que supera qualquer expectativa.'
  },
  {
    id: '2',
    author: 'Eduardo S.',
    role: 'Hóspede Frequente',
    suite: 'Suíte Imperial',
    rating: 5,
    comment: 'O padrão de acabamento é de um hotel boutique 5 estrelas internacional. A gastronomia servida no quarto chegou quente, muito bem apresentada e o teto solar elétrico na Suíte Imperial é sensacional.'
  },
  {
    id: '3',
    author: 'Juliana & Lucas T.',
    role: 'Comemoração de Aniversário',
    suite: 'Suíte Premium Gold',
    rating: 5,
    comment: 'Comemoramos nosso aniversário de casamento e encomendamos a decoração com pétalas e champanhe previamente gelado. A reserva via WhatsApp foi hiper rápida e atenciosa. Recomendo de olhos fechados!'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso fazer reserva antecipada para entrar no Master Motel?',
    answer: 'Não é obrigatório, você pode chegar diretamente em qualquer horário do dia ou da noite. No entanto, para garantir a disponibilidade de suítes de altíssima procura (com piscina e teto solar), recomendamos a pré-reserva rápida pelo nosso canal direto no WhatsApp.',
    category: 'Reserva'
  },
  {
    id: 'faq-2',
    question: 'Quais são as formas de pagamento aceitas e como fica o extrato bancário?',
    answer: 'Aceitamos Pix instantâneo com QR Code privativo, cartões de crédito e débito (com máquina portátil entregue pelo compartimento seguro) e dinheiro em espécie. Para sua total privacidade, a fatura do cartão exibirá uma razão social neutra, sem qualquer menção a motel.',
    category: 'Pagamento'
  },
  {
    id: 'faq-3',
    question: 'Como funciona o estacionamento privativo e a entrada discreta?',
    answer: 'Cada suíte possui uma garagem privativa exclusiva equipada com portão de fechamento ultra-rápido. Você estaciona o veículo, fecha o portão com controle e acessa a acomodação diretamente, sem passar por corredores comuns ou recepcionistas.',
    category: 'Privacidade'
  },
  {
    id: 'faq-4',
    question: 'O motel funciona 24 horas por dia, inclusive feriados e fins de semana?',
    answer: 'Sim! Nossa estrutura completa — incluindo governança, atendimento de recepção e a cozinha gourmet 24 horas — opera ininterruptamente 365 dias por ano.',
    category: 'Estrutura'
  },
  {
    id: 'faq-5',
    question: 'Como funciona a higienização das hidromassagens e piscinas?',
    answer: 'Seguimos protocolos internacionais rigorosos de sanitização hospitalar. Entre cada estadia, as banheiras e tubulações passam por ciclo automático de higienização com ozônio, desinfetantes bactericidas de alta eficácia e filtragem contínua da água da piscina.',
    category: 'Estrutura'
  },
  {
    id: 'faq-6',
    question: 'Posso solicitar decoração especial para datas comemorativas?',
    answer: 'Com certeza! Oferecemos kits românticos personalizados contendo pétalas de rosas importadas, velas aromáticas de LED, espumante gelado e bombons artesanais. Basta assinalar a opção na sua solicitação de reserva.',
    category: 'Reserva'
  }
];
