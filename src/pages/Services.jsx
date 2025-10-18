// import React from 'react'
// import { FaLock, FaUserShield, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'

// export default function Services(){
//   const services = [
//     { id:1, title:'Passwords', icon:<FaLock size={36} />, desc:'Create and manage strong unique passwords.'},
//     { id:2, title:'Social Media', icon:<FaUserShield size={36} />, desc:'Secure your social media accounts and privacy.'},
//     { id:3, title:'Telegram', icon:<FaTelegramPlane size={36} />, desc:'Protect your Telegram chats and settings.'},
//     { id:4, title:'Email', icon:<FaEnvelope size={36} />, desc:'Email hygiene and two-factor authentication.'},
//   ]
//   return (
//     <section className="py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//         <div className="grid md:grid-cols-4 gap-6">
//           {services.map(s => (
//             <div key={s.id} className="group bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition">
//               <div className="text-indigo-600 mb-4">{s.icon}</div>
//               <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
//               <p className="text-gray-600">{s.desc}</p>
//               <button onClick={()=>alert(`${s.title}: ${s.desc}`)} className="mt-4 bg-indigo-50 text-indigo-700 px-3 py-2 rounded hover:bg-indigo-100">Learn more</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import React from 'react'
import { FaLock, FaUserShield, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Services(){
  const { t, i18n } = useTranslation()

  const services = [
    { id:1, title: t('service_passwords'), icon:<FaLock size={36} />, desc:t('service_passwords_desc')},
    { id:2, title: t('service_social_media'), icon:<FaUserShield size={36} />, desc:t('service_social_media_desc')},
    { id:3, title: t('service_telegram'), icon:<FaTelegramPlane size={36} />, desc:t('service_telegram_desc')},
    { id:4, title: t('service_email'), icon:<FaEnvelope size={36} />, desc:t('service_email_desc')},
  ]

  return (
    <section className="py-20" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('services_title')}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map(s => (
            <div key={s.id} className="group bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition">
              <div className="text-indigo-600 mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
              <button onClick={()=>alert(`${s.title}: ${s.desc}`)} className="mt-4 bg-indigo-50 text-indigo-700 px-3 py-2 rounded hover:bg-indigo-100">{t('learn_more')}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
