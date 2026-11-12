import React, { useState } from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { PRODUCTS, COMPANY_INFO } from '../../data/content';
import { Check, MessageSquare, Phone, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, Play } from 'lucide-react';

interface ProductsPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  setCurrentPage,
}) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [showChicksVideo, setShowChicksVideo] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 3.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-start">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'سلسلة الإنتاج المعتمدة' : 'Official Production Lines'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'نقدم مجموعة من منتجات الدواجن تشمل كتاكيت عمر يوم ومنتجات الدجاج اللاحم المجمد، مع الاهتمام بالجودة وتلبية متطلبات السوق.'
              : 'We provide a portfolio of poultry products comprising day-old chicks and frozen broiler lines, emphasizing quality and market requirements.'}
          </p>
        </div>
      </section>

      {/* 3.2, 3.3, 3.4 تفاصيل المنتجات */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:border-[#008744]/40 transition-all p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Product Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-4/3">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#008744] shadow-xs">
                      {product.badge[language]}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Specifications & Text */}
              <div className={`lg:col-span-7 space-y-5 text-start ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold">
                  <span>{product.category[language]}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                  {product.name[language]}
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {product.fullDescription[language]}
                </p>

                {/* Target Audience / Details Box */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-900 block">
                    {language === 'ar' ? 'الفئة المستهدفة وبيانات المنتج:' : 'Target Audience & Details:'}
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {product.features[language].map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video Preview for Day-old Chicks */}
                {product.id === 'day-old-chicks' && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowChicksVideo(!showChicksVideo)}
                      className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-4 py-2 rounded-xl font-bold text-xs border border-stone-200 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 text-[#008744] fill-current" />
                      <span>
                        {showChicksVideo
                          ? (language === 'ar' ? 'إخفاء الفيديو التوضيحي' : 'Hide Chicks Video')
                          : (language === 'ar' ? 'شاهد فيديو توضيحي لكتاكيت سنال عن قرب' : 'Watch Chicks Video')}
                      </span>
                    </button>

                    {showChicksVideo && (
                      <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                        <div className="rounded-xl overflow-hidden bg-black max-w-xs aspect-9/16 max-h-[380px]">
                          <video
                            src="/assets/aistudio/_____47ab04fe.mp4"
                            poster="/src/assets/images/hero_chicks_hatchery_1794027907385.jpg"
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {language === 'ar'
                            ? 'زبائننا الكرام✨ نشارككم فيديو توضيحي لكتاكيت سنال، لتشاهدوا عن قرب الجودة والحيوية والعناية التي نحرص عليها دائمًا.'
                            : 'Our valued customers✨ Watch up close the vitality and care we give to Sienal day-old chicks.'}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Button: استفسر عن المنتج */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      language === 'ar'
                        ? `مرحباً شركة سنال، أود الاستفسار عن تفاصيل وتوفر منتج: ${product.name.ar}.`
                        : `Hello Sienal, I would like to inquire about: ${product.name.en}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === 'ar' ? 'استفسر عن المنتج' : 'Inquire About Product'}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* 3.5 قسم الطلب والاستفسار */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#008744] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-md">
          <HelpCircle className="w-12 h-12 mx-auto text-emerald-200" />
          
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black">
              {language === 'ar'
                ? 'استفسر عن منتجاتنا أو اطلب معلومات إضافية'
                : 'Inquire About Our Products or Request Additional Information'}
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {language === 'ar'
                ? 'يسعدنا تواصلك معنا لمعرفة المزيد عن توفر المنتجات وتفاصيل التوريد.'
                : 'We are delighted to connect with you to share product availability and supply schedules.'}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-[#008744] hover:bg-emerald-50 px-8 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-sm"
            >
              <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              <Arrow className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً سنال، أود الاستفسار عن كتاكيت التسمين وتفاصيل التوريد.'
                  : 'Hello Sienal, I want to inquire about day-old chicks and supply details.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#007038] hover:bg-[#005a2d] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
