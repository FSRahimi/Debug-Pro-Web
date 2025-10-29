// import React from "react";
// import { useNavigate } from "react-router-dom";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();

//   return (
//     <section className="bg-[#EDE7F6] py-20">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
//         {/* Left text section */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A]">
//             Digital Safety for Afghan Women
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">
//             Learn essential tips to protect your privacy and security online.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               Chat with Bot
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               Our Services
//             </button>
//           </div>
//         </div>

//         {/* Right image section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src={safeImage}
//             alt="Afghan Women"
//             className="rounded-xl shadow-2xl w-full max-w-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";
// const { t, i18n } = useTranslation();
// const isRTL = i18n.language === "fa";

// export default function HomeSection() {
//   const nav = useNavigate();
//   // const { t, i18n } = useTranslation();

//   // برای راست‌چین شدن فارسی
//   const isRTL = i18n.language === "fa";

//   return (
//     <section className="bg-[#EDE7F6] py-20" dir={isRTL ? "rtl" : "ltr"}>
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL ? "md:flex-row-reverse text-right" : "text-left"
//         }`}
//       >
//         {/* بخش متن */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A]">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 ${
//               isRTL ? "md:justify-end" : ""
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();

//   // راست‌چین برای فارسی
//   const isRTL = i18n.language === "fa";

//   return (
//     <section className="bg-[#EDE7F6] py-20" dir={isRTL ? "rtl" : "ltr"}>
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL ? "md:flex-row-reverse text-right" : "text-left"
//         }`}
//       >
//         {/* Left text section */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A]">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 ${
//               isRTL ? "md:justify-end" : ""
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* Right image section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();

//   // اگر زبان فارسی است، راست‌چین شود
//   const isRTL = i18n.language === "fa";

//   return (
//     <section
//       className="bg-[#EDE7F6] py-20 transition-all duration-500"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL
//             ? "md:flex-row-reverse text-right md:text-right"
//             : "text-left md:text-left"
//         }`}
//       >
//         {/* بخش متن */}
//         <div
//           className={`md:w-1/2 space-y-6 ${
//             isRTL ? "text-right" : "text-left"
//           }`}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 mt-4 ${
//               isRTL ? "justify-end sm:flex-row-reverse" : "justify-start"
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر */}
//         <div
//           className={`md:w-1/2 flex ${
//             isRTL ? "justify-start md:justify-start" : "justify-end"
//           }`}
//         >
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   return (
//     <section
//       className="bg-[#EDE7F6] py-20 transition-all duration-500"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 ${
//           isRTL ? "md:flex-row-reverse text-right" : "text-left"
//         }`}
//       >
//         {/* بخش متن */}
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 mt-4 ${
//               isRTL ? "sm:flex-row-reverse justify-end" : "justify-start"
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر */}
//         <div
//           className={`md:w-1/2 flex ${
//             isRTL ? "justify-end" : "justify-end"
//           }`}
//         >
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   return (
//     <section
//       className="bg-[#EDE7F6] py-20 transition-all duration-500"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       {/* کانتینر اصلی — در RTL معکوس می‌شود */}
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL ? "md:flex-row-reverse" : "md:flex-row"
//         }`}
//       >
//         {/* بخش متن — حتماً text-right در RTL و text-left در LTR */}
//         <div className={`md:w-1/2 space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div className={`flex flex-col sm:flex-row gap-4 mt-4 ${isRTL ? "sm:flex-row-reverse justify-end" : "justify-start"}`}>
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر — در RTL تصویر به سمت چپ رفتن نیاز به justify-start دارد */}
//         <div className={`md:w-1/2 flex ${isRTL ? "justify-start md:justify-start" : "justify-end md:justify-end"}`}>
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   return (
//     <section
//       className="bg-[#EDE7F6] py-20 transition-all duration-500"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       {/* کانتینر اصلی */}
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL ? "md:flex-row-reverse" : "md:flex-row"
//         }`}
//       >
//         {/* بخش متن */}
//         <div
//           className={`md:w-1/2 space-y-6 ${
//             isRTL ? "text-right md:ml-8" : "text-left md:mr-8"
//           }`}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 mt-4 ${
//               isRTL
//                 ? "sm:flex-row-reverse justify-end"
//                 : "justify-start"
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر */}
//         <div
//           className={`md:w-1/2 flex ${
//             isRTL
//               ? "justify-center md:justify-start md:mr-8"
//               : "justify-center md:justify-end md:ml-8"
//           }`}
//         >
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import safeImage from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

// export default function HomeSection() {
//   const nav = useNavigate();
//   const { t, i18n } = useTranslation();

//   const isRTL = i18n.language === "fa";

//   return (
//     <section className="bg-[#EDE7F6] py-20 transition-all duration-500">
//       {/* کانتینر اصلی — در حالت فارسی معکوس می‌شود */}
//       <div
//         className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
//           isRTL ? "md:flex-row-reverse" : "md:flex-row"
//         }`}
//       >
//         {/* بخش متن */}
//         <div
//           className={`md:w-1/2 space-y-6 ${
//             isRTL ? "text-right md:ml-8" : "text-left md:mr-8"
//           }`}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
//             {t("home.title")}
//           </h1>
//           <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

//           <div
//             className={`flex flex-col sm:flex-row gap-4 mt-4 ${
//               isRTL
//                 ? "sm:flex-row-reverse justify-end"
//                 : "justify-start"
//             }`}
//           >
//             <button
//               onClick={() => nav("/chatbot")}
//               className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.chatButton")}
//             </button>
//             <button
//               onClick={() => nav("/services")}
//               className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {t("home.servicesButton")}
//             </button>
//           </div>
//         </div>

//         {/* بخش تصویر */}
//         <div
//           className={`md:w-1/2 flex ${
//             isRTL
//               ? "justify-center md:justify-start md:mr-8"
//               : "justify-center md:justify-end md:ml-8"
//           }`}
//         >
//           <img
//             src={safeImage}
//             alt={t("home.imageAlt")}
//             className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../assets/vpn-connection-arabian-woman-using-virtual-private-network-password-security-protected-access-control-privacy-data-protection-vector-illustration-flat-cartoon-style-secure-web-traffic_189033-1928.jpg";
import img2 from "../assets/flat-safer-internet-day-illustration-isolated-white-background_917213-257314.jpg";
import img3 from "../assets/woman-forgot-password-flat-cartoon-vector_621660-6434.jpg";

export default function HomeSection() {
  const nav = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // هر 3 ثانیه تصویر عوض می‌شود
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#EDE7F6] py-20 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
          isRTL ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* بخش متن */}
        <div
          className={`md:w-1/2 space-y-6 ${
            isRTL ? "text-right md:ml-8" : "text-left md:mr-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6A1B9A] leading-snug">
            {t("home.title")}
          </h1>
          <p className="text-[#6A1B9A] text-lg">{t("home.subtitle")}</p>

          <div
            className={`flex flex-col sm:flex-row gap-4 mt-4 ${
              isRTL
                ? "sm:flex-row-reverse justify-end"
                : "justify-start"
            }`}
          >
            <button
              onClick={() => nav("/chatbot")}
              className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
            >
              {t("home.chatButton")}
            </button>
            <button
              onClick={() => nav("/services")}
              className="bg-transparent border-2 border-[#FFD166] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
            >
              {t("home.servicesButton")}
            </button>
          </div>
        </div>

        {/* بخش تصویر با انیمیشن */}
        <div
          className={`md:w-1/2 flex ${
            isRTL
              ? "justify-center md:justify-start md:mr-8"
              : "justify-center md:justify-end md:ml-8"
          }`}
        >
          <img
            src={images[currentImage]}
            alt={t("home.imageAlt")}
            className="rounded-xl shadow-2xl w-full max-w-md transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
