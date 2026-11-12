import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const UI_STRINGS: Record<string, { ar: string; en: string }> = {
  // Navigation
  nav_home: { ar: 'الرئيسية', en: 'Home' },
  nav_about: { ar: 'من نحن', en: 'About Us' },
  nav_products: { ar: 'منتجاتنا', en: 'Our Products' },
  nav_quality: { ar: 'الجودة والسلامة', en: 'Quality & Safety' },
  nav_distributors: { ar: 'مراكز البيع', en: 'Sales Centers' },
  nav_recipes: { ar: 'وصفات الطهي', en: 'Recipes' },
  nav_partnership: { ar: 'الشراكة الاستراتيجية', en: 'Strategic Partnership' },
  nav_media: { ar: 'المركز الإعلامي', en: 'Media Center' },
  nav_contact: { ar: 'تواصل معنا', en: 'Contact Us' },
  
  // Actions
  action_request_quote: { ar: 'طلب توريد / استفسار', en: 'Supply Inquiry' },
  action_explore_products: { ar: 'استكشف منتجاتنا', en: 'Explore Products' },
  action_find_centers: { ar: 'مراكز البيع القريبة', en: 'Locate Sales Centers' },
  action_read_more: { ar: 'اقرأ المزيد', en: 'Read Details' },
  action_call_now: { ar: 'اتصال مباشر', en: 'Call Directly' },
  action_whatsapp: { ar: 'محادثة واتساب', en: 'Chat on WhatsApp' },
  action_send_inquiry: { ar: 'إرسال الاستفسار', en: 'Submit Inquiry' },
  action_back_to_news: { ar: 'العودة للمركز الإعلامي', en: 'Back to Media Center' },
  action_view_all_news: { ar: 'جميع الأخبار والبيانات', en: 'All News & Releases' },
  action_close: { ar: 'إغلاق', en: 'Close' },
  action_copied: { ar: 'تم النسخ!', en: 'Copied!' },
  
  // Quick trust marks
  trust_local_production: { ar: 'إنتاج سوداني 100%', en: '100% Sudanese Production' },
  trust_halal: { ar: 'ذبح حلال ومطابق للشريعة', en: 'Halal Certified Slaughtering' },
  trust_safety: { ar: 'معايير سلامة غذائية صارمة', en: 'Strict Food Safety Standards' },
  trust_cold_chain: { ar: 'صعق وتبريد فوري فائق النضارة', en: 'Flash Freezing Freshness' },
  
  // Section headers
  section_about_badge: { ar: 'عن شركة سنال', en: 'About Sienal' },
  section_products_badge: { ar: 'منتجاتنا المعتمدة', en: 'Our Certified Products' },
  section_quality_badge: { ar: 'معايير الغذاء', en: 'Food Standards' },
  section_centers_badge: { ar: 'شبكة التوزيع', en: 'Distribution Network' },
  section_partner_badge: { ar: 'تحالف استراتيجي', en: 'Strategic Alliance' },
  section_testimonial_badge: { ar: 'رأي أحد عملائنا', en: 'Client Feedback' },
  section_news_badge: { ar: 'آخر التحديثات', en: 'Latest Updates' },
  
  // Footer
  footer_about_text: {
    ar: 'شركة سنال لإنتاج الدواجن المحدودة — شركة سودانية متخصصة في إنتاج كتاكيت عمر يوم وإنتاج وتجهيز الدجاج اللاحم المجمد وفق أعلى معايير الجودة والسلامة.',
    en: 'Sienal for Poultry Production Co. Ltd. — A Sudanese enterprise specialized in breeding day-old chicks and processing premium frozen broilers under rigorous safety benchmarks.',
  },
  footer_quick_links: { ar: 'روابط سريعة', en: 'Quick Links' },
  footer_products: { ar: 'خطوط الإنتاج', en: 'Production Lines' },
  footer_contact_info: { ar: 'بيانات التواصل الرسمي', en: 'Official Contact Info' },
  footer_all_rights: { ar: 'جميع الحقوق محفوظة لشركة سنال لإنتاج الدواجن المحدودة', en: 'All rights reserved to Sienal for Poultry Production Co. Ltd.' },
  footer_location_khartoum: { ar: 'الخرطوم – السودان', en: 'Khartoum – Sudan' },
  
  // Centers
  centers_title: { ar: 'سنال أقرب ليكم!', en: 'Sienal is Closer to You!' },
  centers_subtitle: {
    ar: 'منتجاتنا متوفرة الآن في العديد من مراكز البيع المعتمدة في الخرطوم لخدمتكم يومياً بجودة تستحق الثقة.',
    en: 'Our products are available across authorized sales centers in Khartoum to serve you daily with trusted quality.',
  },
  centers_filter_all: { ar: 'كافة المناطق', en: 'All Areas' },
  centers_search_placeholder: { ar: 'ابحث باسم المركز أو المنطقة...', en: 'Search by center name or area...' },
  
  // Contact page
  contact_get_in_touch: { ar: 'تواصل مع إدارة سنال', en: 'Get in Touch with Sienal' },
  contact_form_title: { ar: 'نموذج طلب توريد أو استفسار تجاري', en: 'Commercial Supply & Inquiry Form' },
  contact_name: { ar: 'الاسم الكامل', en: 'Full Name' },
  contact_org: { ar: 'اسم المزرعة أو المنشأة / الشركة (اختياري)', en: 'Farm or Organization Name (Optional)' },
  contact_phone: { ar: 'رقم الهاتف', en: 'Phone Number' },
  contact_email: { ar: 'البريد الإلكتروني', en: 'Email Address' },
  contact_type: { ar: 'نوع الاستفسار / المنتج المطلوب', en: 'Inquiry / Product Type' },
  contact_type_chicks: { ar: 'حجز كتاكيت عمر يوم للمزارع', en: 'Day-old Chicks for Farms' },
  contact_type_chicken_bulk: { ar: 'توريد دجاج لاحم مجمد بالجملة (مطاعم / جهات)', en: 'Wholesale Frozen Chicken (Restaurants / B2B)' },
  contact_type_retail: { ar: 'توزيع دجاج معبأ لمراكز البيع والتجزئة', en: 'Packaged Chicken for Retail / Distribution' },
  contact_type_general: { ar: 'استفسار عام أو شراكة', en: 'General Inquiry / Partnership' },
  contact_message: { ar: 'تفاصيل الطلب أو الرسالة', en: 'Order Details or Message' },
  contact_submit_success: {
    ar: 'شكراً لتواصلكم مع شركة سنال لإنتاج الدواجن. تم استلام طلبكم وسيقوم فريق المبيعات بالتواصل معكم قريباً.',
    en: 'Thank you for reaching out to Sienal Poultry. Your inquiry has been received, and our commercial team will contact you promptly.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    const item = UI_STRINGS[key];
    if (!item) return key;
    return item[language] || item.ar;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isRTL: language === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
