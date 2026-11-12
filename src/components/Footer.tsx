import React from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/content';
import { Facebook, MessageSquare, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { language } = useLanguage();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks: { id: PageId; labelAr: string; labelEn: string }[] = [
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
    <footer className="bg-stone-950 text-stone-400 pt-14 pb-10 border-t border-stone-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main 3-Column Corporate Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Company Profile (9.1) */}
          <div className="lg:col-span-5 space-y-4 text-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-stone-800 flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logoIcon}
                  alt="سنال للدواجن"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-black text-lg leading-tight">
                  {language === 'ar' ? 'سنال للدواجن' : 'Sienal Poultry'}
                </h3>
                <p className="text-xs text-[#008744] font-bold">
                  {COMPANY_INFO.slogan[language]}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {COMPANY_INFO.aboutIntro[language]}
            </p>

            <div className="flex items-start gap-2 text-xs text-stone-400 pt-1">
              <MapPin className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address[language]}</span>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-[#008744] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-[#008744] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+249912340265"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-[#008744] text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (9.2) */}
          <div className="lg:col-span-4 space-y-4 text-start">
            <h4 className="text-white font-bold text-sm border-b border-stone-800 pb-2">
              {language === 'ar' ? 'الروابط السريعة' : 'Quick Links'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="hover:text-white transition-colors cursor-pointer text-start flex items-center gap-1.5 py-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#008744] rtl:rotate-180 shrink-0" />
                  <span className="truncate">{language === 'ar' ? link.labelAr : link.labelEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info (9.3) */}
          <div className="lg:col-span-3 space-y-4 text-start">
            <h4 className="text-white font-bold text-sm border-b border-stone-800 pb-2">
              {language === 'ar' ? 'بيانات التواصل' : 'Contact Information'}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-stone-500 text-[11px] block">
                  {language === 'ar' ? 'الهاتف المباشر:' : 'Direct Phone:'}
                </span>
                <a
                  href="tel:+249912340265"
                  className="text-white font-bold text-sm hover:text-[#008744] transition-colors block"
                  dir="ltr"
                >
                  0912 340 265
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 text-[11px] block">
                  {language === 'ar' ? 'البريد الإلكتروني:' : 'Email Address:'}
                </span>
                <a
                  href="mailto:Info@seinal-sd.com"
                  className="text-white font-semibold text-xs hover:text-[#008744] transition-colors block"
                >
                  Info@seinal-sd.com
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 text-[11px] block">
                  {language === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}
                </span>
                <span className="text-stone-300 text-xs block">
                  {COMPANY_INFO.location[language]}
                </span>
              </div>

              {/* Direct WhatsApp Call to Action - hidden on mobile view per user request */}
              <div className="hidden sm:block pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    language === 'ar'
                      ? 'مرحباً سنال، أود الاستفسار عن كتاكيت التسمين والمنتجات المتاحة.'
                      : 'Hello Sienal, I want to inquire about day-old chicks and poultry.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#008744] hover:bg-[#007038] text-white py-2.5 px-3 rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 9.4 حقوق النشر */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-start">
          <p>
            {language === 'ar'
              ? 'جميع الحقوق محفوظة لشركة سنال لإنتاج الدواجن المحدودة © 2026'
              : 'All rights reserved to Sienal for Poultry Production Co. Ltd. © 2026'}
          </p>
          <div className="flex items-center gap-3 text-stone-500">
            <span>{language === 'ar' ? 'الخرطوم – السودان' : 'Khartoum, Sudan'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
