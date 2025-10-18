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
          about_desc2: "We focus on privacy, secure messaging, email safety and digital literacy."
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
          about_desc2: "تمرکز ما بر حریم خصوصی، پیام‌رسانی امن، امنیت ایمیل و سواد دیجیتال است."
        },
      },
    },
    lng: "fa", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
