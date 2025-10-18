// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Home page
          digital_safety: "Digital Safety for Afghan Women",
          learn_privacy_tips: "Learn essential tips to protect your privacy and security online.",
          chat_with_bot: "Chat with Bot",
          our_services: "Our Services",

          // About page
          about_title: "About DigitalSafe",
          about_desc1: "DigitalSafe helps Afghan women learn how to stay safe online with practical tips, workshops, and resources.",
          about_desc2: "We focus on privacy, secure messaging, email safety and digital literacy.",
        // FAQ pagge 
        faq_title: "FAQ",
        faq_q1: "How can I protect my online privacy?",
        faq_a1: "Use strong passwords, enable 2FA, and avoid sharing personal info.",
        faq_q2: "Is Telegram safe?",
        faq_a2: "Use secret chats, enable two-step verification, and check forwarding settings.",
        faq_q3: "How to secure email?",
        faq_a3: "Use unique passwords, 2FA, and be careful with links and attachments.",

        },
      },
      fa: {
        translation: {
          // Home page
          digital_safety: "امنیت دیجیتال برای زنان افغان",
          learn_privacy_tips: "یاد بگیرید چگونه حریم خصوصی و امنیت خود را آنلاین حفظ کنید.",
          chat_with_bot: "گفتگو با ربات",
          our_services: "خدمات ما",

          // About page
          about_title: "درباره DigitalSafe",
          about_desc1: "DigitalSafe به زنان افغان کمک می‌کند تا با نکات عملی، کارگاه‌ها و منابع، آنلاین ایمن بمانند.",
          about_desc2: "تمرکز ما بر حریم خصوصی، پیام‌رسانی امن، امنیت ایمیل و سواد دیجیتال است.",
            
          // FAG Page
           faq_title: "سوالات متداول",
           faq_q1: "چگونه حریم خصوصی آنلاین خود را محافظت کنم؟",
           faq_a1: "از رمزهای قوی استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و از اشتراک اطلاعات شخصی خودداری کنید.",
           faq_q2: "آیا تلگرام ایمن است؟",
           faq_a2: "چت‌های مخفی را استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و تنظیمات فوروارد را بررسی کنید.",
           faq_q3: "چگونه ایمیل خود را ایمن کنم؟",
          faq_a3: "از رمزهای منحصربه‌فرد استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و مراقب لینک‌ها و فایل‌های پیوست باشید.",


        },
      },
    },
    lng: "fa", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
