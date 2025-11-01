// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // ترجمه‌ها
// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome to our website",
//       contact: "Contact us"
//     }
//   },
//   fa: {
//     translation: {
//       welcome: "به وب‌سایت ما خوش آمدید",
//       contact: "تماس با ما"
//     }
//   }
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: "fa", // زبان پیش‌فرض (fa برای فارسی)
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false
//     }
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fa from './locales/fa.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fa: { translation: fa },
      en: { translation: en }
    },
    lng: 'fa', // زبان پیش‌فرض
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  }); 

export default i18n;  
