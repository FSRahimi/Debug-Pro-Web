// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          
//           {/* Left Side - Logo or Text */}
//           <p className="text-sm">
//             © {new Date().getFullYear()} <span className="font-semibold text-white">DigitalSafe</span> — All rights reserved.
//           </p>

//           {/* Right Side - Footer Links */}
//           <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
//             <a href="#privacy" className="hover:text-white transition-colors duration-200">
//               Privacy Policy
//             </a>
//             <a href="#terms" className="hover:text-white transition-colors duration-200">
//               Terms of Service
//             </a>
//             <a href="#contact" className="hover:text-white transition-colors duration-200">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Optional divider and social icons */}
//         <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
//           <p className="text-xs text-gray-400">
//             Built with ❤️ by the DigitalSafe Team
//           </p>

//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-white transition-colors duration-200">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="hover:text-white transition-colors duration-200">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="hover:text-white transition-colors duration-200">
//               <i className="fab fa-github"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          
          {/* Left Side - Logo or Text */}
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-white">DigitalSafe</span> — {t('footer_all_rights')}
          </p>

          {/* Right Side - Footer Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              {t('footer_privacy')}
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              {t('footer_terms')}
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              {t('footer_contact')}
            </a>
          </div>
        </div>

        {/* Optional divider and social icons */}
        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            {t('footer_built_with')}
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
