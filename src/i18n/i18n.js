// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          digital_safety: "Digital Safety for Afghan Women",
          learn_privacy_tips: "Learn essential tips to protect your privacy and security online.",
          chat_with_bot: "Chat with Bot",
          our_services: "Our Services"
        },
      },
      fa: {
        translation: {
          digital_safety: "امنیت دیجیتال برای زنان افغان",
          learn_privacy_tips: "یاد بگیرید چگونه حریم خصوصی و امنیت خود را آنلاین حفظ کنید.",
          chat_with_bot: "گفتگو با ربات",
          our_services: "خدمات ما"
        },
      },
    },
    lng: "fa", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
