import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import {
  COMPANY_INFO,
  PRODUCTS,
  PRODUCTION_JOURNEY_VIDEO,
  STRATEGIC_PARTNERSHIP,
} from '../../data/content';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Handshake,
  MapPin,
  MessageSquare,
  Sparkles,
  Play,
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hero carousel background images from authentic company facilities
  const heroBackgrounds = [
    COMPANY_INFO.poultryFarmFacilityImage,
    COMPANY_INFO.chicksHatcheryImage,
    COMPANY_INFO.frozenBroilerImage,
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  return (
    <div className="bg-white text-stone-900 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* ========================================================
          1.2 القسم الرئيسي HERO SECTION
         ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-stone-900 select-none">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === bgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={bg}
              alt="شركة سنال لإنتاج الدواجن"
              className="w-full h-full object-cover object-center brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'ar'
                ? 'شركة سنال لإنتاج الدواجن المحدودة'
                : 'Sienal for Poultry Production Co. Ltd.'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto drop-shadow-md">
            {language === 'ar' ? (
              <>جودة تثق بها... <span className="text-emerald-400">ومنتجات أقرب إليك</span></>
            ) : (
              <>Quality You Trust... <span className="text-emerald-400">Products Closer to You</span></>
            )}
          </h1>

          <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
            {language === 'ar'
              ? 'نعمل في مجال إنتاج الدواجن وتوفير منتجات تلبي احتياجات السوق، مع الاهتمام بالجودة وسلامة الغذاء وبناء علاقات قائمة على الثقة مع عملائنا وشركائنا.'
              : 'We operate in poultry production to meet market demands, focusing on food quality and safety while cultivating enduring relationships built on trust with our clients and partners.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('products')}
              className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all transform hover:scale-102 cursor-pointer"
            >
              <span>{language === 'ar' ? 'اكتشف منتجاتنا' : 'Discover Our Products'}</span>
              <Arrow className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer"
            >
              <span>{language === 'ar' ? 'تعرف على سنال' : 'About Sienal'}</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroBackgrounds.map((_, i) => (
            <button
              key={i}
              onClick={() => setBgIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === bgIndex ? 'w-8 bg-[#008744]' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          1.3 قسم التعريف بالشركة
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white">
                <img
                  src={COMPANY_INFO.chicksHatcheryImage}
                  alt="منشآت تفريخ سنال"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold p-3 rounded-xl bg-black/40 backdrop-blur-xs">
                  {language === 'ar' ? 'إنتاج كتاكيت عمر يوم ودواجن مجمدة عالية الجودة' : 'Day-old chick incubation and high standard frozen broilers'}
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#008744] text-xs font-bold">
                <span>{language === 'ar' ? 'نبذة عن الشركة' : 'Company Overview'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                {language === 'ar' ? 'من الإنتاج إلى مائدتك' : 'From Production to Your Table'}
              </h2>

              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {language === 'ar'
                    ? 'في سنال، نعمل في قطاع إنتاج الدواجن من خلال توفير كتاكيت عمر يوم ومنتجات الدجاج اللاحم المجمد، واضعين احتياجات عملائنا واهتمامهم بجودة المنتجات في مقدمة أولوياتنا.'
                    : 'At Sienal, we operate across poultry production by supplying day-old chicks and frozen broiler products, placing client requirements and superior product quality at the forefront of our priorities.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نسعى إلى تقديم تجربة موثوقة لعملائنا وشركائنا، من خلال منتجات واضحة وخدمات يسهل الوصول إليها.'
                    : 'We strive to provide a dependable experience for clients and partners through transparent products and accessible customer services.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <span>{language === 'ar' ? 'اكتشف قصتنا' : 'Discover Our Story'}</span>
                  <Arrow className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          VIDEO SHOWCASE SECTION (رحلة منتجات سنال: جودة تُرى وتُذاق)
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-white border-b border-stone-200/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-12 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Video Player */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-black relative aspect-9/16 sm:max-h-[520px]">
                  <video
                    src={PRODUCTION_JOURNEY_VIDEO.videoUrl}
                    poster={PRODUCTION_JOURNEY_VIDEO.posterImage}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    {language === 'ar' ? 'المتصفح لا يدعم تشغيل الفيديو.' : 'Your browser does not support HTML video.'}
                  </video>
                </div>
              </div>

              {/* Video Text & User Description */}
              <div className="lg:col-span-6 space-y-6 text-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#008744] text-xs font-bold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{PRODUCTION_JOURNEY_VIDEO.audienceTitle[language]}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                  {PRODUCTION_JOURNEY_VIDEO.title[language]}
                </h2>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {PRODUCTION_JOURNEY_VIDEO.caption[language]}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateTo('products')}
                    className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{language === 'ar' ? 'استعراض منتجاتنا' : 'Browse Products'}</span>
                    <Arrow className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('media-center')}
                    className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3 rounded-xl font-bold text-sm border border-stone-200 transition-colors cursor-pointer"
                  >
                    <span>{language === 'ar' ? 'المركز الإعلامي' : 'Media Center'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1.4 قسم المنتجات
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
              {language === 'ar' ? 'تشكيلة سنال المعتمدة' : 'Official Sienal Range'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              {language === 'ar'
                ? 'مجموعة من منتجات الدواجن التي تلبي احتياجات قطاعات مختلفة من السوق.'
                : 'A dedicated range of poultry products fulfilling the requirements of diverse market sectors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#008744]/50 transition-all flex flex-col"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
                  <img
                    src={prod.image}
                    alt={prod.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#008744] shadow-xs">
                      {prod.badge[language]}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col grow justify-between space-y-4 text-start">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-stone-400 block">
                      {prod.category[language]}
                    </span>
                    <h3 className="text-xl font-black text-stone-900 group-hover:text-[#008744] transition-colors">
                      {prod.name[language]}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {prod.shortDescription[language]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => navigateTo('products')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#008744] hover:text-[#007038] cursor-pointer"
                    >
                      <span>{language === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        language === 'ar'
                          ? `مرحباً سنال، أود الاستفسار عن ${prod.name.ar}.`
                          : `Hello Sienal, I want to inquire about ${prod.name.en}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#008744] transition-colors"
                      title={language === 'ar' ? 'استفسار سريع' : 'Quick Inquiry'}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigateTo('products')}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
            >
              <span>{language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}</span>
              <Arrow className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          1.5 قسم الجودة
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-stone-50 border-y border-stone-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8 space-y-5 text-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'سلامة الغذاء' : 'Food Safety'}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                  {language === 'ar' ? 'الجودة مسؤولية في كل مرحلة' : 'Quality is Our Responsibility at Every Stage'}
                </h2>

                <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    {language === 'ar'
                      ? 'نؤمن في سنال بأن جودة المنتجات تبدأ بالاهتمام بمراحل الإنتاج والتجهيز، وتمتد إلى طريقة التعامل مع المنتجات وتقديمها للعملاء.'
                      : 'At Sienal, we believe product excellence starts with rigorous attention during breeding and processing, extending through storage and customer delivery.'}
                  </p>
                  <p>
                    {language === 'ar'
                      ? 'لذلك نحرص على الاهتمام بالجودة وسلامة الغذاء باعتبارهما جزءاً أساسياً من مسؤوليتنا تجاه عملائنا.'
                      : 'Therefore, maintaining rigorous food safety standards remains a core pillar of our duty to consumers and partners.'}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('quality')}
                    className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
                  >
                    <span>{language === 'ar' ? 'تعرف على اهتمامنا بالجودة' : 'Learn About Our Quality Focus'}</span>
                    <Arrow className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50">
                  <img
                    src={COMPANY_INFO.qualityInspectionImage}
                    alt="معايير جودة الدواجن في سنال"
                    className="w-full h-64 sm:h-72 object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1.6 قسم الشراكات - Clean White Card (Per User Request)
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white text-stone-900 rounded-3xl p-8 sm:p-14 text-center space-y-6 border border-stone-200 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center mx-auto">
              <Handshake className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-stone-900">
              {language === 'ar' ? 'شراكات تصنع قيمة' : 'Partnerships Creating Value'}
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نؤمن بأهمية التعاون والشراكات في تطوير الأعمال وتعزيز حضورنا في قطاع الدواجن، ونسعى إلى بناء علاقات تجارية قائمة على الثقة وتحقيق المصالح المشتركة.'
                : 'We believe in the power of constructive partnerships to advance operations and bolster presence in the poultry industry, cultivating commercial bonds founded on trust and shared value.'}
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('partnership')}
                className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>{language === 'ar' ? 'اكتشف شراكاتنا' : 'Discover Our Partnerships'}</span>
                <Arrow className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1.7 قسم مراكز البيع
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#008744] text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'شبكة التوزيع' : 'Retail Network'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-stone-900">
                {language === 'ar' ? 'سنال أقرب إليك' : 'Sienal is Closer to You'}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {language === 'ar'
                  ? 'نسعى إلى تسهيل وصول عملائنا إلى منتجاتنا من خلال مراكز البيع المنتشرة في عدد من المناطق.'
                  : 'We make it easy for our clients to access our fresh poultry products through distribution and sales centers located across key areas.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => navigateTo('sales-centers')}
                className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>{language === 'ar' ? 'اكتشف مراكز البيع' : 'Discover Sales Centers'}</span>
                <Arrow className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          1.8 قسم التواصل
         ======================================================== */}
      <section className="reveal-on-scroll py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-stone-900">
            {language === 'ar' ? 'هل لديك استفسار؟ نحن هنا لمساعدتك' : 'Have a Question? We Are Here to Assist'}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {language === 'ar'
              ? 'للاستفسار عن منتجاتنا أو فرص التعاون التجاري، يسعد فريق سنال بالتواصل معك والإجابة عن استفساراتك.'
              : 'For inquiries regarding our poultry products or commercial collaboration, the Sienal team is pleased to connect with you and address your requests.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
            >
              <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              <Arrow className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                language === 'ar'
                  ? 'مرحباً سنال، أود الاستفسار عن المنتجات وفرص التعاون.'
                  : 'Hello Sienal, I want to inquire about products and collaboration.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3.5 rounded-xl font-bold text-sm border border-stone-200 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#008744]" />
              <span>{language === 'ar' ? 'محادثة عبر واتساب' : 'WhatsApp Chat'}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
