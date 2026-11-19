/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { QualityPage } from './components/pages/QualityPage';
import { PartnershipPage } from './components/pages/PartnershipPage';
import { SalesCentersPage } from './components/pages/SalesCentersPage';
import { MediaCenterPage } from './components/pages/MediaCenterPage';
import { ContactPage } from './components/pages/ContactPage';
import { COMPANY_INFO } from './data/content';
import { MessageSquare } from 'lucide-react';

function AppContent() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Global scroll reveal observer across all pages and route transitions
  useEffect(() => {
    const handleObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));

      return observer;
    };

    const timer = setTimeout(() => {
      const observer = handleObserver();
      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'quality':
        return <QualityPage setCurrentPage={setCurrentPage} />;
      case 'partnership':
        return <PartnershipPage setCurrentPage={setCurrentPage} />;
      case 'sales-centers':
        return <SalesCentersPage setCurrentPage={setCurrentPage} />;
      case 'media-center':
        return <MediaCenterPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-white text-stone-900 selection:bg-[#008744]/15 selection:text-[#008744] font-['IBM_Plex_Sans_Arabic',sans-serif]">
      {/* Official Top Bar */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Page Content */}
      <main className="grow">
        {renderCurrentPage()}
      </main>

      {/* Corporate Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
      />

      {/* Direct WhatsApp Contact Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
          language === 'ar'
            ? 'مرحباً سنال، أود الاستفسار عن كتاكيت التسمين ومنتجات الدواجن المتاحة.'
            : 'Hello Sienal, I would like to inquire about day-old chicks and poultry supplies.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 bg-[#008744] hover:bg-[#007038] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center focus:outline-hidden"
        aria-label="Direct WhatsApp Contact"
        title={language === 'ar' ? 'تواصل مباشرة عبر واتساب' : 'Chat on WhatsApp'}
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
