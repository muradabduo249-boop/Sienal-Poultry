import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, Menu, X, Globe, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageId; labelAr: string; labelEn: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us' },
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products' },
    { id: 'quality', labelAr: 'الجودة وسلامة الغذاء', labelEn: 'Quality & Food Safety' },
    { id: 'partnership', labelAr: 'شراكاتنا', labelEn: 'Partnerships' },
    { id: 'sales-centers', labelAr: 'مراكز البيع', labelEn: 'Sales Centers' },
    { id: 'media-center', labelAr: 'المركز الإعلامي', labelEn: 'Media Center' },
    { id: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us' },
  ];

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 w-full border-b transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-stone-200 shadow-md'
          : 'bg-white border-stone-200/90'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="bg-stone-50 border-b border-stone-200/60 text-stone-600 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+249912340265"
              className="flex items-center gap-1.5 hover:text-[#008744] transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#008744]" />
              <span className="font-semibold text-stone-800">0912 340 265</span>
            </a>
            <span className="hidden sm:inline text-stone-300">·</span>
            <a
              href="mailto:Info@seinal-sd.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#008744] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#008744]" />
              <span>Info@seinal-sd.com</span>
            </a>
            <span className="hidden md:inline text-stone-300">·</span>
            <span className="hidden md:inline text-stone-500">
              {COMPANY_INFO.location[language]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 font-bold text-stone-700 hover:text-[#008744] transition-colors cursor-pointer bg-white px-2.5 py-1 rounded border border-stone-200 text-xs shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#008744]" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Corporate Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-start cursor-pointer group focus:outline-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-stone-200 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#008744] transition-colors">
              <img
                src={COMPANY_INFO.logoIcon}
                alt="سنال للدواجن"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-stone-900 text-sm sm:text-base lg:text-lg leading-tight tracking-tight group-hover:text-[#008744] transition-colors">
                {language === 'ar' ? 'سنال للدواجن' : 'Sienal Poultry'}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#008744] font-bold tracking-normal leading-tight">
                {language === 'ar' ? 'جودةً تُرى وتُذاق' : 'Quality Seen & Tasted'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#008744] bg-[#008744]/10'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-50'
                  }`}
                >
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Official CTA Button: "استفسر عن منتجاتنا" - hidden on mobile view per user request */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً سنال، أود الاستفسار عن كتاكيت عمر يوم ومنتجات الدواجن المتاحة.'
                  : 'Hello Sienal, I would like to inquire about day-old chicks and poultry products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'استفسر عن منتجاتنا' : 'Inquire About Products'}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-hidden"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-start px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#008744] bg-[#008744]/10 font-bold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:+249912340265"
              className="w-full flex items-center justify-center gap-2 bg-stone-100 text-stone-800 py-2.5 rounded-lg text-sm font-bold"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#008744]" />
              <span>0912 340 265</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#008744] text-white py-2.5 rounded-lg text-sm font-bold shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
