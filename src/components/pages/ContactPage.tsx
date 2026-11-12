import React, { useState } from 'react';
import { PageId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../data/content';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'products',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryOptions = [
    { value: 'products', labelAr: 'استفسار عن المنتجات', labelEn: 'Product Inquiry' },
    { value: 'commercial', labelAr: 'طلب تجاري', labelEn: 'Commercial Request' },
    { value: 'partnerships', labelAr: 'شراكات وتعاون', labelEn: 'Partnerships & Collaboration' },
    { value: 'general', labelAr: 'استفسار عام', labelEn: 'General Inquiry' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى ملء الحقول المطلوبة (الاسم الكامل، رقم الهاتف، والرسالة).'
          : 'Please complete the required fields (Full name, phone, and message).'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16 font-['IBM_Plex_Sans_Arabic',sans-serif]">
      
      {/* 8.1 القسم الرئيسي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-start">
          <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
            {language === 'ar' ? 'الاتصال وخدمة العملاء' : 'Customer Service & Contact'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {language === 'ar'
              ? 'يسعدنا استقبال استفساراتكم والرد على طلباتكم وتساؤلاتكم حول منتجاتنا وخدماتنا.'
              : 'We are delighted to receive your questions, respond to your inquiries, and assist with your poultry requests.'}
          </p>
        </div>
      </section>

      {/* 8.2 بيانات التواصل المباشر & 8.3 نموذج التواصل */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 8.2 بيانات التواصل المباشر */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                {language === 'ar' ? 'بيانات التواصل المباشر' : 'Direct Contact Channels'}
              </h2>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-[#008744] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">
                      {language === 'ar' ? 'الهاتف المباشر:' : 'Direct Phone:'}
                    </span>
                    <a
                      href="tel:+249912340265"
                      className="text-stone-900 font-bold text-base hover:text-[#008744] transition-colors"
                      dir="ltr"
                    >
                      0912 340 265
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-[#008744] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">
                      {language === 'ar' ? 'البريد الإلكتروني:' : 'Email Address:'}
                    </span>
                    <a
                      href="mailto:Info@seinal-sd.com"
                      className="text-stone-900 font-bold text-sm hover:text-[#008744] transition-colors"
                    >
                      Info@seinal-sd.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-[#008744] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">
                      {language === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}
                    </span>
                    <span className="text-stone-900 font-bold text-sm">
                      {language === 'ar' ? 'السودان – الخرطوم' : 'Sudan – Khartoum'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call */}
              <div className="pt-4 border-t border-stone-200">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    language === 'ar'
                      ? 'مرحباً سنال، أود الاستفسار عن كتاكيت التسمين والمنتجات المتاحة.'
                      : 'Hello Sienal, I want to inquire about day-old chicks and poultry.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#008744] hover:bg-[#007038] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp Chat'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8.3 نموذج التواصل */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs text-start">
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 mb-6">
                {language === 'ar' ? 'نموذج التواصل' : 'Contact Form'}
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#008744] mx-auto" />
                  <h3 className="text-xl font-black text-stone-900">
                    {language === 'ar' ? 'تم استلام رسالتك بنجاح' : 'Message Received Successfully'}
                  </h3>
                  <p className="text-stone-700 text-sm max-w-md mx-auto leading-relaxed">
                    {language === 'ar'
                      ? 'شكراً لتواصلك معنا، سيقوم فريق سنال بالرد عليك في أقرب وقت.'
                      : 'Thank you for contacting us. The Sienal team will respond to you shortly.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        inquiryType: 'products',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] transition-colors cursor-pointer"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={language === 'ar' ? 'أدخل اسمك الكريم' : 'Enter your name'}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-hidden focus:border-[#008744]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={language === 'ar' ? '09xxxxxxxx' : '+249xxxxxxxxx'}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-hidden focus:border-[#008744]"
                        dir="ltr"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-hidden focus:border-[#008744]"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ar' ? 'نوع الاستفسار *' : 'Inquiry Type *'}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm focus:outline-hidden focus:border-[#008744]"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {language === 'ar' ? opt.labelAr : opt.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Details */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'ar' ? 'تفاصيل الرسالة *' : 'Message Details *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'ar'
                          ? 'اكتب استفسارك أو تفاصيل طلبك هنا...'
                          : 'Write your inquiry or request details here...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-hidden focus:border-[#008744]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#008744] hover:bg-[#007038] text-white py-3.5 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 8.4 خريطة الموقع أو التواجد الجغرافي */}
      <section className="reveal-on-scroll w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 text-start space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider block">
              {language === 'ar' ? 'التواجد الجغرافي' : 'Geographic Presence'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              {language === 'ar' ? 'موقعنا' : 'Our Location'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {language === 'ar'
                ? 'السودان – الخرطوم. تمتد شبكة مراكز بيع وتوزيع منتجات سنال لتشمل مناطق جبرة، الدخينات، السوق المركزي، والكلاكلة.'
                : 'Sudan – Khartoum. The distribution and sales network of Sienal encompasses Jabra, Al-Dukheinat, Central Market, and Kalakla.'}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 h-64 sm:h-80 bg-stone-200 relative flex items-center justify-center">
            {/* Styled Map Representation */}
            <div className="absolute inset-0 bg-[radial-gradient(#008744_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 text-center p-6 bg-white/90 backdrop-blur-xs rounded-2xl border border-stone-200 shadow-sm max-w-md mx-4">
              <MapPin className="w-8 h-8 text-[#008744] mx-auto mb-2" />
              <h3 className="text-base font-bold text-stone-900">
                {COMPANY_INFO.name[language]}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {COMPANY_INFO.address[language]}
              </p>
              <div className="mt-3">
                <button
                  onClick={() => {
                    setCurrentPage('sales-centers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-lg bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'استعراض مراكز البيع الستة' : 'View the 6 Sales Centers'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
