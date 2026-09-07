export interface PricingTier {
  period: string;
  price: string;
  rawPrice: number;
}

export interface Suite {
  id: string;
  title: string;
  category: 'imperial' | 'master' | 'premium' | 'boutique';
  categoryLabel: string;
  badge: string;
  badgeColor?: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  mainImg: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  pricing: PricingTier[];
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'Bebidas' | 'Pratos Principais' | 'Petiscos' | 'Sobremesas' | 'Café da Manhã';
  price: number;
  desc: string;
  image: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imgSrc: string;
  spanClass?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  suite: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Reserva' | 'Pagamento' | 'Privacidade' | 'Estrutura';
}

export interface ToastState {
  show: boolean;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

export interface BookingFormData {
  name: string;
  suiteId: string;
  suiteTitle: string;
  date: string;
  period: string;
  guests: string;
  romanticSetup: boolean;
  notes: string;
}
