// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Links use footer palette: default pink, hover purple
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-[#FFD166] font-semibold"
//       : "text-[#F8BBD0] hover:text-[#BA68C8] transition-colors duration-200";

//   return (
//     <nav className="bg-[#6A1B9A] fixed w-full z-20 top-0 shadow">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <div className="text-2xl font-bold text-[#FFD166]">DigitalSafe</div>

//         {/* Hamburger button for mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="sm:hidden focus:outline-none text-[#F8BBD0] hover:text-[#BA68C8]"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden sm:flex space-x-6">
//           {[
//             ["Home", "/"],
//             ["Services", "/services"],
//             ["About", "/about"],
//             ["Email Security", "/email-security"],
//             ["FAQ", "/faq"],
//             ["Chatbot", "/chatbot"],
//             ["Contact", "/contact"],
//           ].map(([name, path]) => (
//             <li key={name}>
//               <NavLink to={path} className={linkClass}>
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="sm:hidden bg-[#6A1B9A] border-t border-[#BA68C8]">
//           <ul className="flex flex-col items-center py-4 space-y-3">
//             {[
//               ["Home", "/"],
//               ["Services", "/services"],
//               ["About", "/about"],
//               ["Email Security", "/email-security"],
//               ["FAQ", "/faq"],
//               ["Chatbot", "/chatbot"],
//               ["Contact", "/contact"],
//             ].map(([name, path]) => (
//               <li key={name}>
//                 <NavLink
//                   onClick={() => setIsOpen(false)}
//                   to={path}
//                   className={linkClass}
//                 >
//                   {name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   // تغییر زبان بین فارسی و انگلیسی
//   const toggleLanguage = () => {
//     const newLang = i18n.language === "fa" ? "en" : "fa";
//     i18n.changeLanguage(newLang);
//     document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
//   };

//   // کلاس لینک‌ها
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-[#FFD166] font-semibold"
//       : "text-[#F8BBD0] hover:text-[#BA68C8] transition-colors duration-200";

//   // لینک‌ها (ترجمه از فایل i18n)
//   const navLinks = [
//     [t("nav.home"), "/"],
//     [t("nav.services"), "/services"],
//     [t("nav.about"), "/about"],
//     [t("nav.emailSecurity"), "/email-security"],
//     [t("nav.faq"), "/faq"],
//     [t("nav.chatbot"), "/chatbot"],
//     [t("nav.contact"), "/contact"],
//   ];

//   return (
//     <nav
//       className={`bg-[#6A1B9A] fixed w-full z-20 top-0 shadow ${
//         i18n.language === "fa" ? "rtl" : "ltr"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* لوگو */}
//         <div className="text-2xl font-bold text-[#FFD166]">
//           {i18n.language === "fa" ? "دیجیتال‌سیف" : "DigitalSafe"}
//         </div>

//         {/* دکمه تغییر زبان */}
//         <button
//           onClick={toggleLanguage}
//           className="text-[#F8BBD0] hover:text-[#FFD166] font-semibold mx-4 transition-colors duration-200"
//         >
//           {i18n.language === "fa" ? "English" : "فارسی"}
//         </button>

//         {/* دکمه منو موبایل */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="sm:hidden focus:outline-none text-[#F8BBD0] hover:text-[#BA68C8]"
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//         {/* منوی دسکتاپ */}
//         <ul
//           className={`hidden sm:flex ${
//             i18n.language === "fa" ? "space-x-reverse space-x-6" : "space-x-6"
//           }`}
//         >
//           {navLinks.map(([name, path]) => (
//             <li key={name}>
//               <NavLink to={path} className={linkClass}>
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* منوی موبایل */}
//       {isOpen && (
//         <div className="sm:hidden bg-[#6A1B9A] border-t border-[#BA68C8]">
//           <ul className="flex flex-col items-center py-4 space-y-3">
//             {navLinks.map(([name, path]) => (
//               <li key={name}>
//                 <NavLink
//                   onClick={() => setIsOpen(false)}
//                   to={path}
//                   className={linkClass}
//                 >
//                   {name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const isRTL = i18n.language === "fa";

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-[#FFD166] font-semibold"
//       : "text-[#F8BBD0] hover:text-[#BA68C8] transition-colors duration-200";

//   const links = [
//     ["home", "/"],
//     ["services", "/services"],
//     ["about", "/about"],
//     ["emailSecurity", "/email-security"],
//     ["faq", "/faq"],
//     ["chatbot", "/chatbot"],
//     ["contact", "/contact"],
//   ];

//   const toggleLanguage = () => {
//     i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
//   };

//   return (
//     <nav className="bg-[#6A1B9A] fixed w-full z-20 top-0 shadow" dir={isRTL ? "rtl" : "ltr"}>
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <div className="text-2xl font-bold text-[#FFD166]">DigitalSafe</div>

//         {/* Hamburger for mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="sm:hidden focus:outline-none text-[#F8BBD0] hover:text-[#BA68C8]"
//         >
//           {isOpen ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Menu */}
//         <ul className={`hidden sm:flex gap-x-6 ${isRTL ? "flex-row-reverse" : ""}`}>
//           {links.map(([key, path]) => (
//             <li key={key}>
//               <NavLink to={path} className={linkClass}>
//                 {t(`nav.${key}`)}
//               </NavLink>
//             </li>
//           ))}

//           {/* Language toggle button */}
//           <li>
//             <button
//               onClick={toggleLanguage}
//               className="ml-4 px-3 py-1 rounded bg-[#FFD166] text-[#6A1B9A] font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//             >
//               {i18n.language === "fa" ? "EN" : "FA"}
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="sm:hidden bg-[#6A1B9A] border-t border-[#BA68C8]">
//           <ul className={`flex flex-col py-4 px-4 gap-y-3 ${isRTL ? "items-end" : "items-start"}`}>
//             {links.map(([key, path]) => (
//               <li key={key}>
//                 <NavLink
//                   onClick={() => setIsOpen(false)}
//                   to={path}
//                   className={linkClass}
//                 >
//                   {t(`nav.${key}`)}
//                 </NavLink>
//               </li>
//             ))}

//             {/* Language toggle */}
//             <li>
//               <button
//                 onClick={toggleLanguage}
//                 className="mt-2 px-3 py-1 rounded bg-[#FFD166] text-[#6A1B9A] font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//               >
//                 {i18n.language === "fa" ? "EN" : "FA"}
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/final logo.png"; // مسیر لوگو را درست وارد کنید

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === "fa";

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#FFD166] font-semibold"
      : "text-[#F8BBD0] hover:text-[#BA68C8] transition-colors duration-200";

  const links = [
    ["home", "/"],
    ["services", "/services"],
    ["about", "/about"],
    ["emailSecurity", "/email-security"],
    ["faq", "/faq"],
    ["chatbot", "/chatbot"],
    ["contact", "/contact"],
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
  };

  return (
    <nav className="bg-[#6A1B9A] fixed w-full z-20 top-0 shadow" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo Image */}
        <div className="flex items-center">
        <img 
            src={logo}     
            alt="DigitalSafety Logo" 
            className="h-14 w-auto transform scale-150"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none text-[#F8BBD0] hover:text-[#BA68C8]"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden sm:flex gap-x-6 ${isRTL ? "flex-row-reverse" : ""} items-center`}>
          {links.map(([key, path]) => (
            <li key={key}>
              <NavLink to={path} className={linkClass}>
                {t(`nav.${key}`)}
              </NavLink>
            </li>
          ))}

          {/* Language toggle button */}
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded bg-[#FFD166] text-[#6A1B9A] font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
            >
              {i18n.language === "fa" ? "EN" : "FA"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#6A1B9A] border-t border-[#BA68C8]">
          <ul className={`flex flex-col py-4 px-4 gap-y-3 ${isRTL ? "items-end" : "items-start"}`}>
            {links.map(([key, path]) => (
              <li key={key}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={path}
                  className={linkClass}
                >
                  {t(`nav.${key}`)}
                </NavLink>
              </li>
            ))}

            {/* Language toggle */}
            <li>
              <button
                onClick={toggleLanguage}
                className="mt-2 px-3 py-1 rounded bg-[#FFD166] text-[#6A1B9A] font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
              >
                {i18n.language === "fa" ? "EN" : "FA"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
