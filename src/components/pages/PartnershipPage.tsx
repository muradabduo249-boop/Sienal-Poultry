import React from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { STRATEGIC_PARTNERSHIP, COMPANY_INFO } from '../../data/content';
import { Handshake, MessageSquare, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface PartnershipPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({
  setCurrentPage,
}) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 5.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'التحالفات والشراكات الوطنية' : 'National Strategic Alliances'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {STRATEGIC_PARTNERSHIP.title[language]}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'شراكة تجمع بين الجودة والخبرة، وتوحّد الجهود لتقديم منتجات تلبي تطلعات عملائنا، وتسهم في تطوير قطاع الصناعات الغذائية في السودان.'
              : 'A partnership combining quality and expertise, uniting efforts to deliver food products that fulfill our customers’ aspirations.'}
          </p>
        </div>
      </section>

      {/* 5.2 الشراكة الاستراتيجية - White Card with Editorial Design */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 text-stone-900 border border-stone-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* LOOLI & Sienal Meeting Poster */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-white p-2 w-full max-w-md">
                <img
                  src={STRATEGIC_PARTNERSHIP.partnerPoster}
                  alt="لقاء يجمع بين لولي وسنال - نحو تعاون مثمر ومستقبل مشترك"
                  className="w-full h-auto object-contain rounded-xl hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs font-bold">
                <Handshake className="w-3.5 h-3.5 text-[#008744]" />
                <span>{STRATEGIC_PARTNERSHIP.partnerName[language]}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-stone-900">
                {STRATEGIC_PARTNERSHIP.headline[language]}
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {STRATEGIC_PARTNERSHIP.description[language]}
              </p>

              {/* Slogan & Coming Soon Notice */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
                  {language === 'ar' ? 'رؤية الشراكة:' : 'Partnership Vision:'}
                </span>
                <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed">
                  {STRATEGIC_PARTNERSHIP.slogan[language]}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <span>{language === 'ar' ? 'تواصل مع إدارة الشراكات' : 'Contact Partnerships Desk'}</span>
                  <Arrow className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3 rounded-xl font-bold text-sm border border-stone-200 transition-colors cursor-pointer"
                >
                  <span>{language === 'ar' ? 'استعراض المنتجات' : 'View Products'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5.3 أهداف الشراكة - Clean Human-Engineered Numbered Cards (Anti-AI slop) */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl text-start">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'محاور التعاون' : 'Core Focus Areas'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
            {language === 'ar' ? 'أهداف الشراكة ومساراتها' : 'Partnership Objectives'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGIC_PARTNERSHIP.objectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-8 shadow-xs hover:border-[#008744]/50 transition-all flex flex-col justify-between space-y-6 text-start"
            >
              <div className="space-y-4">
                <span className="font-mono text-3xl font-black text-[#008744]/30 block">
                  0{idx + 1}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-stone-900 leading-snug">
                  {obj.title[language]}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {obj[language]}
                </p>
              </div>
              <div className="h-1 w-12 bg-[#008744]/20 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* 5.4 قسم التواصل للشراكات - White Clean Card */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 border border-stone-200 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center mx-auto">
            <Handshake className="w-7 h-7" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              {STRATEGIC_PARTNERSHIP.contactCta.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {STRATEGIC_PARTNERSHIP.contactCta.text[language]}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
            >
              <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              <Arrow className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً سنال، أود الاستفسار عن فرص التعاون والشراكة التجارية.'
                  : 'Hello Sienal, I want to inquire about partnership opportunities.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3.5 rounded-xl font-bold text-sm border border-stone-200 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#008744]" />
              <span>{language === 'ar' ? 'واتساب الشراكات' : 'Partnership WhatsApp'}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
