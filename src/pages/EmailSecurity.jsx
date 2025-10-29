// import React from 'react';

// export default function EmailSecurity() {
//   const tips = [
//     'Use strong unique passwords',
//     'Enable two-factor authentication (2FA)',
//     'Avoid clicking suspicious links',
//     'Regularly update your email password',
//   ];

//   const additionalTips = [
//     'Beware of phishing emails and verify senders carefully',
//     'Use encrypted email services when possible',
//     'Regularly review account activity and security settings',
//     'Do not reuse your email password on other accounts',
//   ];

//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-7xl mx-auto px-4 space-y-10">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
//             Email Security
//           </h2>
//           <p className="text-[#6A1B9A] text-lg md:text-xl">
//             Protecting your email is crucial for your online safety. Follow these tips to stay secure.
//           </p>
//         </div>

//         {/* Main Tips */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {tips.map((t, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-3 bg-[#6A1B9A] p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             >
//               <span className="text-[#FFD166] text-2xl">✅</span>
//               <span className="text-[#F8BBD0]">{t}</span>
//             </div>
//           ))}
//         </div>

//         {/* Additional Tips */}
//         <div>
//           <h3 className="text-2xl font-semibold text-[#6A1B9A] mb-4">
//             Additional Tips
//           </h3>
//           <ul className="space-y-3">
//             {additionalTips.map((t, i) => (
//               <li key={i} className="flex items-center gap-3">
//                 <span className="text-[#FFD166] text-xl">✔️</span>
//                 <span className="text-[#6A1B9A]">{t}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center mt-10">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             Stay proactive about your email security to protect your personal information online.
//           </p>
//           <button
//             className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//           >
//             Learn More Security Tips
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function EmailSecurity() {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   return (
//     <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
//       <div className="max-w-7xl mx-auto px-4 space-y-10">

//         {/* Heading */}
//         <div className={`text-center ${isRTL ? "text-right" : ""}`}>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
//             {t("emailSecurity.heading")}
//           </h2>
//           <p className="text-[#6A1B9A] text-lg md:text-xl">
//             {t("emailSecurity.desc")}
//           </p>
//         </div>

//         {/* Main Tips */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {t("emailSecurity.tips", { returnObjects: true }).map((tip, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-3 bg-[#6A1B9A] p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             >
//               <span className="text-[#FFD166] text-2xl">✅</span>
//               <span className="text-[#F8BBD0]">{tip}</span>
//             </div>
//           ))}
//         </div>

//         {/* Additional Tips */}
//         <div>
//           <h3 className="text-2xl font-semibold text-[#6A1B9A] mb-4">
//             {t("emailSecurity.additionalHeading")}
//           </h3>
//           <ul className="space-y-3">
//             {t("emailSecurity.additionalTips", { returnObjects: true }).map((tip, i) => (
//               <li key={i} className="flex items-center gap-3">
//                 <span className="text-[#FFD166] text-xl">✔️</span>
//                 <span className="text-[#6A1B9A]">{tip}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center mt-10">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             {t("emailSecurity.cta")}
//           </p>
//           <button
//             className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//           >
//             {t("emailSecurity.ctaButton")}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function EmailSecurity() {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   return (
//     <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
//       <div className="max-w-7xl mx-auto px-4 space-y-10">

//         {/* Heading */}
//         <div className={`text-center ${isRTL ? "text-right" : ""}`}>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
//             {t("emailSecurity.heading")}
//           </h2>
//           <p className="text-[#6A1B9A] text-lg md:text-xl">
//             {t("emailSecurity.desc")}
//           </p>
//         </div>

//         {/* Main Tips */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {t("emailSecurity.tips", { returnObjects: true }).map((tip, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-3 bg-[#6A1B9A] p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             >
//               <span className="text-[#FFD166] text-2xl">✅</span>
//               <span className="text-[#F8BBD0]">{tip}</span>
//             </div>
//           ))}
//         </div>

//         {/* Additional Tips */}
//         <div>
//           <h3 className="text-2xl font-semibold text-[#6A1B9A] mb-4">
//             {t("emailSecurity.additionalHeading")}
//           </h3>
//           <ul className="space-y-3">
//             {t("emailSecurity.additionalTips", { returnObjects: true }).map((tip, i) => (
//               <li key={i} className="flex items-center gap-3">
//                 {/* فقط آیکون سمت راست در فارسی، متن بدون تغییر */}
//                 <span className={`text-[#FFD166] text-xl ${isRTL ? "ml-auto" : ""}`}>✔️</span>
//                 <span className="text-[#6A1B9A]">{tip}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center mt-10">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             {t("emailSecurity.cta")}
//           </p>
//           <button
//             className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//           >
//             {t("emailSecurity.ctaButton")}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { useTranslation } from "react-i18next";

export default function EmailSecurity() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  return (
    <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 space-y-10">

        {/* Heading */}
        <div className={`text-center ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
            {t("emailSecurity.heading")}
          </h2>
          <p className="text-[#6A1B9A] text-lg md:text-xl">
            {t("emailSecurity.desc")}
          </p>
        </div>

        {/* Main Tips */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t("emailSecurity.tips", { returnObjects: true }).map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#6A1B9A] p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <span className="text-[#FFD166] text-2xl">✅</span>
              <span className="text-[#F8BBD0]">{tip}</span>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div>
          <h3 className={`text-2xl font-semibold text-[#6A1B9A] mb-4 ${isRTL ? "text-right" : ""}`}>
            {t("emailSecurity.additionalHeading")}
          </h3>
          <ul className="space-y-3">
            {t("emailSecurity.additionalTips", { returnObjects: true }).map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* آیکون همیشه سمت چپ */}
                <span className="text-[#FFD166] text-xl mt-1">✔️</span>
                {/* متن راست‌چین در فارسی */}
                <span className={`text-[#6A1B9A] ${isRTL ? "text-right" : ""}`}>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10">
          <p className="text-[#6A1B9A] text-lg mb-4">
            {t("emailSecurity.cta")}
          </p>
          <button
            className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
          >
            {t("emailSecurity.ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
}
