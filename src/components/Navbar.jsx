// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Navbar(){
//   const linkClass = ({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
//   return (
//     <nav className="bg-white shadow fixed w-full z-20 top-0">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold text-indigo-600">DigitalSafe</div>
//         <ul className="flex space-x-6">
//           <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
//           <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
//           <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
//           <li><NavLink to="/email-security" className={linkClass}>Email Security</NavLink></li>
//           <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
//           <li><NavLink to="/chatbot" className={linkClass}>Chatbot</NavLink></li>
//           <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar(){
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className={`bg-indigo-600 text-white px-6 py-4 flex justify-between items-center ${i18n.language === 'fa' ? 'rtl' : 'ltr'}`}>
      <div className="text-xl font-bold">{t('nav_home')}</div>
      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:underline">{t('nav_home')}</Link></li>
        <li><Link to="/services" className="hover:underline">{t('nav_services')}</Link></li>
        <li><Link to="/about" className="hover:underline">{t('nav_about')}</Link></li>
        <li><Link to="/email-security" className="hover:underline">{t('nav_email')}</Link></li>
        <li><Link to="/faq" className="hover:underline">{t('nav_faq')}</Link></li>
        <li><Link to="/chatbot" className="hover:underline">{t('nav_chatbot')}</Link></li>
        <li><Link to="/contact" className="hover:underline">{t('nav_contact')}</Link></li>
        <li>
          <button onClick={toggleLanguage} className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-gray-100">
            {t('switch_lang')}
          </button>
        </li>
      </ul>
    </nav>
  )
}
