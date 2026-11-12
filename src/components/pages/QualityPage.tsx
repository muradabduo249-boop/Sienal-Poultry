import React from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { QUALITY_PAGE_DATA, COMPANY_INFO } from '../../data/content';
import { ShieldCheck, Award, Box, CheckCircle2, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';

interface QualityPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({
  setCurrentPage,
}) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 4.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-start">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'الجودة وسلامة الغذاء' : 'Quality & Food Safety'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {QUALITY_PAGE_DATA.hero.title[language]}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {QUALITY_PAGE_DATA.hero.description[language]}
          </p>
        </div>
      </section>

      {/* 4.2 جودة الإنتاج & 4.3 سلامة الغذاء */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 4.2 جودة الإنتاج */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start hover:border-[#008744]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {QUALITY_PAGE_DATA.productionQuality.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {QUALITY_PAGE_DATA.productionQuality.text[language]}
            </p>
          </div>

          {/* 4.3 سلامة الغذاء */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start hover:border-[#008744]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {QUALITY_PAGE_DATA.foodSafety.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {QUALITY_PAGE_DATA.foodSafety.text[language]}
            </p>
          </div>

        </div>
      </section>

      {/* 4.4 التعبئة والتغليف & 4.5 الشهادات والاعتمادات */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 4.4 التعبئة والتغليف */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start hover:border-[#008744]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {QUALITY_PAGE_DATA.packaging.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {QUALITY_PAGE_DATA.packaging.text[language]}
            </p>
          </div>

          {/* 4.5 الشهادات والاعتمادات */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start hover:border-[#008744]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {QUALITY_PAGE_DATA.certifications.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {QUALITY_PAGE_DATA.certifications.text[language]}
            </p>
          </div>

        </div>
      </section>

      {/* Inspection & Lab Showcase Banner */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3 max-h-80">
              <img
                src={COMPANY_INFO.qualityInspectionImage}
                alt="فحص جودة وسلامة الدواجن في سنال"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4 text-start">
              <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
                {language === 'ar' ? 'الرقابة المخبرية الدقيقة' : 'Laboratory Oversight'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                {language === 'ar' ? 'معايير فحص وسلامة متواصلة' : 'Continuous Safety & Cold-Chain Testing'}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {language === 'ar'
                  ? 'تخضع كافة مراحل التجهيز والتجميد السريع لرقابة دورية صارمة وفحوصات لدرجات الحرارة لضمان وصول المنتج بأعلى معايير النقاء والجودة الغذائية.'
                  : 'Every processing and blast-freezing stage undergoes rigorous temperature and hygiene audits to guarantee optimal food safety.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Call to Action - Clean White Card */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-stone-900 rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6 border border-stone-200 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              {language === 'ar' ? 'معايير سنال في كل وجبة' : 'Sienal Quality in Every Meal'}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {language === 'ar'
                ? 'نحرص دائماً على تطبيق أعلى المعايير الصحية والبيطرية لضمان سلامة وجودة منتجاتنا لكافة المستهلكين والمربين.'
                : 'We continuously maintain stringent veterinary and hygienic standards to ensure product safety for all consumers and farmers.'}
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
            >
              <span>{language === 'ar' ? 'استعراض المنتجات' : 'View Products'}</span>
              <Arrow className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-7 py-3.5 rounded-xl font-bold text-sm border border-stone-200 transition-colors cursor-pointer"
            >
              <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
