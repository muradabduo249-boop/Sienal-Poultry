import React from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO, VISION_MISSION_VALUES } from '../../data/content';
import { Eye, Compass, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const objectives = [
    {
      ar: 'توفير منتجات دواجن تلبي احتياجات السوق',
      en: 'Providing poultry products that fulfill market needs',
    },
    {
      ar: 'تعزيز حضور الشركة في قطاع إنتاج الدواجن',
      en: 'Strengthening company presence across the poultry production industry',
    },
    {
      ar: 'بناء شراكات تجارية تسهم في تطوير الأعمال',
      en: 'Building commercial partnerships that advance business development',
    },
    {
      ar: 'الاهتمام المستمر بمعايير الجودة وسلامة الغذاء',
      en: 'Continuous commitment to quality and food safety standards',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 2.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-start">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'شركة سنال لإنتاج الدواجن المحدودة' : 'Sienal for Poultry Production Co. Ltd.'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {language === 'ar' ? 'تعرف على سنال' : 'About Sienal'}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'شركة سنال لإنتاج الدواجن المحدودة، نعمل في قطاع إنتاج الدواجن وتوفير المنتجات التي تلبي احتياجات السوق.'
              : 'Sienal for Poultry Production Co. Ltd. operates in the poultry production sector, providing quality products tailored to market demands.'}
          </p>
        </div>
      </section>

      {/* 2.2 نبذة عن الشركة */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-14 border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-start">
              <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
                {language === 'ar' ? 'نبذة عن الشركة' : 'Company Overview'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-stone-900 leading-tight">
                {language === 'ar' ? 'من نحن' : 'Who We Are'}
              </h2>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {language === 'ar'
                    ? 'سنال لإنتاج الدواجن المحدودة شركة تعمل في قطاع إنتاج الدواجن، وتشمل أنشطتها إنتاج كتاكيت عمر يوم وإنتاج وتجهيز الدجاج اللاحم المجمد.'
                    : 'Sienal for Poultry Production Co. Ltd. operates in the poultry industry, with activities encompassing day-old broiler chick incubation as well as the processing of premium frozen broilers.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نؤمن بأهمية تقديم منتجات تلبي احتياجات العملاء، ونسعى إلى تعزيز ثقتهم من خلال الاهتمام بالجودة وسلامة الغذاء وتطوير أعمالنا باستمرار.'
                    : 'We believe in delivering products that meet client expectations and strive to strengthen their trust through meticulous quality, food safety, and ongoing operational development.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <span>{language === 'ar' ? 'استعراض منتجاتنا' : 'Browse Products'}</span>
                  <Arrow className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs bg-white">
                <img
                  src={COMPANY_INFO.farmInteriorImage}
                  alt="مزارع سنال"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.3 رؤيتنا & 2.4 رسالتنا - Clean White Editorial Cards */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* رؤيتنا */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'رؤيتنا المستقبلية' : 'Future Vision'}</span>
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {VISION_MISSION_VALUES.vision.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {VISION_MISSION_VALUES.vision.content[language]}
            </p>
          </div>

          {/* رسالتنا */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-4 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'رسالتنا الأساسية' : 'Core Mission'}</span>
            </div>
            <h3 className="text-2xl font-black text-stone-900">
              {VISION_MISSION_VALUES.mission.title[language]}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {VISION_MISSION_VALUES.mission.content[language]}
            </p>
          </div>

        </div>
      </section>

      {/* 2.5 قيمنا: القيم التي نعمل بها - High-End Human-Engineered Numbered Layout (No AI Icon Slop) */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-start max-w-2xl">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'مبادئنا الثابتة' : 'Core Principles'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
            {language === 'ar' ? 'القيم التي نعمل بها' : 'Values We Live By'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISION_MISSION_VALUES.values.items.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/90 p-7 shadow-xs space-y-4 text-start hover:border-[#008744]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-2xl font-black text-[#008744]/35 block">
                  0{idx + 1}
                </span>
                <h4 className="text-xl font-black text-stone-900 tracking-tight">
                  {val[language]}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {val.desc[language]}
                </p>
              </div>
              <div className="w-8 h-1 bg-[#008744]/25 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* 2.6 أهدافنا - White Card Layout with Dark Typography (No Dark Background) */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 space-y-6 text-start border border-stone-200 shadow-xs">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
              {language === 'ar' ? 'التوجه الاستراتيجي' : 'Strategic Roadmap'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              {language === 'ar' ? 'أهدافنا' : 'Our Strategic Goals'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-50 border border-stone-200/80"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold text-stone-800 leading-relaxed">
                  {obj[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
