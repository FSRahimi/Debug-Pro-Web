import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ترجمه‌ها
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website",
      contact: "Contact us"
    }
  },
  fa: {
    translation: {
      welcome: "به وب‌سایت ما خوش آمدید",
      contact: "تماس با ما"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa", // زبان پیش‌فرض (fa برای فارسی)
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
