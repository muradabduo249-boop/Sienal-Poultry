import React from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { SALES_CENTERS, COMPANY_INFO } from '../../data/content';
import { MapPin, Phone, MessageSquare, Store, Compass } from 'lucide-react';

interface SalesCentersPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const SalesCentersPage: React.FC<SalesCentersPageProps> = ({ setCurrentPage }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-16 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 6.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#008744] font-extrabold text-xs uppercase tracking-wider block">
            {COMPANY_INFO.shortName[language]}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {language === 'ar' ? 'مراكز البيع' : 'Sales Centers'}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'نسعى إلى تسهيل وصولك إلى منتجات سنال من خلال مراكز البيع المتاحة.'
              : 'We strive to facilitate your access to Sienal products through our active sales centers.'}
          </p>
        </div>
      </section>

      {/* 6.2 مراكز البيع */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SALES_CENTERS.map((center, index) => (
            <div
              key={center.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-start"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-black">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                    {language === 'ar' ? `المركز ${index + 1}` : `Center ${index + 1}`}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                    {center.name[language]}
                  </h3>
                  <div className="flex items-center gap-2 text-stone-600 text-sm mt-2">
                    <MapPin className="w-4 h-4 text-[#008744] shrink-0" />
                    <span>
                      {language === 'ar' ? 'الموقع: ' : 'Location: '}
                      <strong className="text-stone-800 font-semibold">{center.location[language]}</strong>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-500 leading-relaxed">
                  {language === 'ar'
                    ? 'يتوفر في هذا المركز دجاج سنال المجمد وفق التوزيع المعتمد.'
                    : 'Sienal frozen poultry is available at this center according to distribution schedules.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    language === 'ar'
                      ? `مرحباً، أود الاستفسار عن توفر منتجات سنال في مركز: ${center.name.ar} (${center.location.ar})`
                      : `Hello, I want to inquire about Sienal products at: ${center.name.en}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#008744] hover:bg-[#007038] text-white py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'ar' ? 'استفسر عن هذا المركز' : 'Inquire on WhatsApp'}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${center.name.ar} ${center.location.ar} الخرطوم السودان`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 py-2 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[#008744]" />
                  <span>{language === 'ar' ? 'عرض على الخريطة' : 'View on Google Maps'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.3 قسم ختامي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#008744]/25 shadow-xs text-stone-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-start">
            <span className="text-[#008744] font-bold text-xs uppercase tracking-wider block">
              {COMPANY_INFO.shortName[language]}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              {language === 'ar' ? 'ابحث عن أقرب مركز إليك' : 'Find Your Nearest Center'}
            </h3>
            <p className="text-stone-600 text-sm max-w-xl leading-relaxed">
              {language === 'ar'
                ? 'تواصل معنا للحصول على معلومات إضافية حول مراكز البيع.'
                : 'Contact us for additional information regarding sales centers and product availability.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </button>

            <a
              href="tel:+249912340265"
              className="bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#008744]" />
              <span>0912 340 265</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
