import React, { useState } from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO, MEDIA_GALLERY, LATEST_NEWS } from '../../data/content';
import { Newspaper, Image, Film, Calendar, ArrowLeft, ArrowRight, Play, ExternalLink, MessageSquare } from 'lucide-react';

interface MediaCenterPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const MediaCenterPage: React.FC<MediaCenterPageProps> = ({ setCurrentPage }) => {
  const { language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'gallery' | 'videos'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-16 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 7.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#008744] font-extrabold text-xs uppercase tracking-wider block">
            {COMPANY_INFO.shortName[language]}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            {language === 'ar' ? 'المركز الإعلامي' : 'Media Center'}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'تابع أحدث أخبار شركة سنال والأنشطة والفعاليات ومحتوى الوسائط المتعددة.'
              : 'Follow the latest news of Sienal, company activities, events, and multimedia content.'}
          </p>

          {/* Navigation Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#008744] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {language === 'ar' ? 'كافة المواد' : 'All Media'}
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-[#008744] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {language === 'ar' ? 'آخر الأخبار' : 'Latest News'}
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#008744] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-[#008744] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {language === 'ar' ? 'الفيديوهات' : 'Videos'}
            </button>
          </div>
        </div>
      </section>

      {/* 7.2 الأخبار والتحديثات */}
      {(activeTab === 'all' || activeTab === 'news') && (
        <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-2xl font-black text-stone-900 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-[#008744]" />
                <span>{language === 'ar' ? 'آخر الأخبار والتحديثات' : 'Latest News & Updates'}</span>
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {language === 'ar' ? 'أخبار الشركة وتحديثاتها ومشاركاتها وأنشطتها.' : 'Company news, updates, participation, and active operations.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LATEST_NEWS.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {article.image && (
                    <div className="h-56 overflow-hidden bg-stone-100">
                      <img
                        src={article.image}
                        alt={article.title[language]}
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-3 text-start">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-bold text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-md">
                        {article.category[language]}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 leading-snug">
                      {article.title[language]}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {article.summary[language]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-start">
                  <button
                    onClick={() => {
                      if (article.id === 'news-looli-partnership') {
                        setCurrentPage('partnership');
                      } else {
                        setCurrentPage('products');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-[#008744] hover:text-[#006e37] text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>
                      {article.id === 'news-looli-partnership'
                        ? (language === 'ar' ? 'تفاصيل الشراكة مع لولي' : 'LOOLI Partnership Details')
                        : (language === 'ar' ? 'متابعة المنتجات' : 'Explore Related Products')}
                    </span>
                    <Arrow className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7.3 معرض الصور */}
      {(activeTab === 'all' || activeTab === 'gallery') && (
        <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-2xl font-black text-stone-900 flex items-center gap-2">
                <Image className="w-5 h-5 text-[#008744]" />
                <span>{language === 'ar' ? 'سنال بالصور' : 'Sienal in Pictures'}</span>
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {language === 'ar'
                  ? 'مجموعة من الصور التي توثق منتجات الشركة وأنشطتها ومراكز البيع ومرافقها.'
                  : 'Documentary photographs highlighting company products, facilities, and activities.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_GALLERY.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer text-start"
              >
                <div className="h-48 overflow-hidden bg-stone-100 relative">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-stone-900 px-3 py-1 rounded-full text-xs font-bold shadow-xs transition-opacity">
                      {language === 'ar' ? 'عرض الصورة' : 'View'}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm leading-tight">
                    {item.title[language]}
                  </h4>
                  <p className="text-stone-500 text-xs line-clamp-2">
                    {item.caption[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7.4 الفيديوهات - Official Videos Showcase */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-2xl font-black text-stone-900 flex items-center gap-2">
                <Film className="w-5 h-5 text-[#008744]" />
                <span>{language === 'ar' ? 'فيديوهات شركة سنال' : 'Sienal Official Videos'}</span>
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {language === 'ar' ? 'مواد مرئية توثق مراحل التفريخ والتربية والتجهيز والجودة العالية.' : 'Documenting chick incubation, farm care, and certified processing.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Video 1: رحلة منتجاتنا */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-5 text-start">
              <div className="space-y-4">
                <div className="w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-black aspect-9/16 max-h-[420px] mx-auto flex items-center justify-center">
                  <video
                    src="/assets/aistudio/SNAL_9db1526d.mp4"
                    poster="/assets/aistudio/image_5a13cf24.png"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    {language === 'ar' ? 'المتصفح لا يدعم تشغيل الفيديو.' : 'Your browser does not support HTML video.'}
                  </video>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'ar' ? 'رحلة منتجات سنال' : 'Sienal Production Journey'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                  {language === 'ar' ? 'رحلة منتجاتنا: جودةً تُرى وتُذاق' : 'Our Products Journey: Quality Seen & Tasted'}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {language === 'ar'
                    ? 'عملاء شركة سنال لإنتاج الدواجن المحدودة: يسرّنا أن نشارككم رحلة منتجاتنا؛ رحلة تبدأ من الفقس ورعاية الكتاكيت، مرورًا بمراحل التربية والذبح والتعبئة، وصولًا إليكم بأفضل صورة وأعلى معايير الجودة. في سنال، نعتني بكل مرحلة لنقدّم لكم جودةً تُرى وتُذاق.'
                    : 'Dear customers: We are pleased to share our journey from hatching and chick breeding through certified slaughtering and packaging. At Sienal, we care for every stage to deliver quality seen and tasted.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <span>{language === 'ar' ? 'استعراض المنتجات' : 'View Products'}</span>
                  <Arrow className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video 2: كتاكيت سنال */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-5 text-start">
              <div className="space-y-4">
                <div className="w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-black aspect-9/16 max-h-[420px] mx-auto flex items-center justify-center">
                  <video
                    src="/assets/aistudio/_____47ab04fe.mp4"
                    poster="/src/assets/images/hero_chicks_hatchery_1794027907385.jpg"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    {language === 'ar' ? 'المتصفح لا يدعم تشغيل الفيديو.' : 'Your browser does not support HTML video.'}
                  </video>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'ar' ? 'كتاكيت عمر يوم' : 'Day-Old Chicks Vitality'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                  {language === 'ar' ? 'كتاكيت سنال: نرعاها باهتمام ونقدمها بثقة' : 'Sienal Chicks: Raised with Care, Delivered with Confidence'}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {language === 'ar'
                    ? 'زبائننا الكرام✨ نشارككم فيديو توضيحي لكتاكيت سنال، لتشاهدوا عن قرب الجودة والحيوية والعناية التي نحرص عليها دائمًا.'
                    : 'Our valued customers✨ We share with you an illustrative video of Sienal chicks, showing up close the vitality, quality, and meticulous care we always maintain.'}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    language === 'ar'
                      ? 'مرحباً سنال، أود الاستفسار وحجز دفعات كتاكيت التسمين عمر يوم.'
                      : 'Hello Sienal, I want to inquire about booking day-old chicks.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#008744] hover:bg-[#007038] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'ar' ? 'حجز واستفسار الكتاكيت' : 'Book & Inquire Chicks'}</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Lightbox Modal for Gallery Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2">
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 end-4 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
