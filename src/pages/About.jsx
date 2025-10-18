// import React from 'react'

// export default function About(){
//   return (
//     <section className="py-20 bg-indigo-50">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-4">About DigitalSafe</h2>
//         <p className="text-gray-700 mb-3">DigitalSafe helps Afghan women learn how to stay safe online with practical tips, workshops, and resources.</p>
//         <p className="text-gray-700">We focus on privacy, secure messaging, email safety and digital literacy.</p>
//       </div>
//     </section>
//   )
// }
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About(){
  const { t, i18n } = useTranslation()

  return (
    <section className="py-20 bg-indigo-50" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{t('about_title')}</h2>
        <p className="text-gray-700 mb-3">{t('about_desc1')}</p>
        <p className="text-gray-700">{t('about_desc2')}</p>
      </div>
    </section>
  )
}
