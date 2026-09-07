import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { SuitesSection } from './components/SuitesSection';
import { SuiteModal } from './components/SuiteModal';
import { Experiences } from './components/Experiences';
import { GastronomySection } from './components/GastronomySection';
import { GallerySection } from './components/GallerySection';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { SUITES_DATA } from './data/suites';
import { ToastState } from './types';

export default function App() {
  // WhatsApp destination configuration
  const whatsappNumber = '5585999999999';

  // Toast State
  const [toast, setToast] = useState<ToastState>({
    show: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ show: true, title, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  // Suite Modal State
  const [activeSuiteId, setActiveSuiteId] = useState<string | null>(null);

  // Reservation State Passed down to ReservationForm
  const [resSuiteId, setResSuiteId] = useState<string>('premium');
  const [resDate, setResDate] = useState<string>('');
  const [resPeriod, setResPeriod] = useState<string>('4 horas');

  // Reliable smooth scroll with fixed header offset
  const scrollToSection = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handlers
  const handleOpenBooking = () => {
    scrollToSection('reserva-final');
  };

  const handleExploreSuites = () => {
    scrollToSection('suites');
  };

  const handleDirectReserve = (suiteTitle: string) => {
    const suite = SUITES_DATA.find((s) => s.title === suiteTitle);
    if (suite) {
      setResSuiteId(suite.id);
    }
    handleOpenBooking();
    showToast('Suíte Selecionada', `${suiteTitle} preparada para agendamento.`, 'success');
  };

  const selectedSuite = activeSuiteId
    ? SUITES_DATA.find((s) => s.id === activeSuiteId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] relative selection:bg-[#E50914] selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast((prev) => ({ ...prev, show: false }))} />

      {/* Boutique Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="overflow-x-hidden w-full max-w-full">
        {/* Hero Section */}
        <Hero
          onExploreSuites={handleExploreSuites}
          onOpenBooking={handleOpenBooking}
        />

        {/* Brand Pillars / Differentials */}
        <Differentials />

        {/* Suites Catalog */}
        <SuitesSection
          onOpenModal={(id) => setActiveSuiteId(id)}
          onDirectReserve={handleDirectReserve}
        />

        {/* Sensory Experiences Editorial */}
        <Experiences />

        {/* 24h Gastronomy Showcase */}
        <GastronomySection />

        {/* Photo Gallery with Lightbox */}
        <GallerySection />

        {/* How Reservation Works */}
        <HowItWorks />

        {/* Verified Guest Reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Location & Contact */}
        <LocationSection onOpenBooking={handleOpenBooking} />

        {/* Full WhatsApp Reservation Form */}
        <ReservationSection
          initialSuiteId={resSuiteId}
          initialDate={resDate}
          initialPeriod={resPeriod}
          whatsappNumber={whatsappNumber}
          onShowToast={showToast}
        />
      </main>

      {/* Suite Detail Modal */}
      <SuiteModal
        suite={selectedSuite}
        onClose={() => setActiveSuiteId(null)}
        onReserve={handleDirectReserve}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
