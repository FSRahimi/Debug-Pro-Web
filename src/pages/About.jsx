// import React from 'react';

// export default function About() {
//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-7xl mx-auto px-4 space-y-12">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
//             About DigitalSafe
//           </h2>
//           <p className="text-[#6A1B9A] text-lg md:text-xl">
//             DigitalSafe helps Afghan women learn how to stay safe online with practical tips, workshops, and resources.
//           </p>
//         </div>

//         {/* Highlighted features */}
//         <div className="grid sm:grid-cols-2 gap-8">
//           <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
//             <h3 className="text-[#FFD166] font-semibold text-xl mb-2">Privacy First</h3>
//             <p className="text-[#F8BBD0]">
//               Learn how to manage your personal data and protect your online privacy.
//             </p>
//           </div>
//           <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
//             <h3 className="text-[#FFD166] font-semibold text-xl mb-2">Secure Messaging</h3>
//             <p className="text-[#F8BBD0]">
//               Tips for secure messaging apps like Telegram and WhatsApp.
//             </p>
//           </div>
//           <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
//             <h3 className="text-[#FFD166] font-semibold text-xl mb-2">Email Safety</h3>
//             <p className="text-[#F8BBD0]">
//               Protect your email accounts with strong passwords and two-factor authentication.
//             </p>
//           </div>
//           <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
//             <h3 className="text-[#FFD166] font-semibold text-xl mb-2">Digital Literacy</h3>
//             <p className="text-[#F8BBD0]">
//               Learn the fundamentals of safe online behavior and internet skills.
//             </p>
//           </div>
//         </div>

//         {/* Footer call-to-action */}
//         <div className="text-center mt-12">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             Ready to secure your digital life? Start exploring our services today!
//           </p>
//           <button className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300">
//             Explore Services
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#EDE7F6]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
            {t('about.heading')}
          </h2>
          <p className="text-[#6A1B9A] text-lg md:text-xl">
            {t('about.desc')}
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <h3 className="text-[#FFD166] font-semibold text-xl mb-2">{t('about.features.privacy')}</h3>
            <p className="text-[#F8BBD0]">{t('about.features.privacyDesc')}</p>
          </div>

          <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <h3 className="text-[#FFD166] font-semibold text-xl mb-2">{t('about.features.messaging')}</h3>
            <p className="text-[#F8BBD0]">{t('about.features.messagingDesc')}</p>
          </div>
    
          <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <h3 className="text-[#FFD166] font-semibold text-xl mb-2">{t('about.features.email')}</h3>
            <p className="text-[#F8BBD0]">{t('about.features.emailDesc')}</p>
          </div>

          <div className="bg-[#6A1B9A] rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
            <h3 className="text-[#FFD166] font-semibold text-xl mb-2">{t('about.features.literacy')}</h3>
            <p className="text-[#F8BBD0]">{t('about.features.literacyDesc')}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6A1B9A] text-lg mb-4">{t('about.cta')}</p>
          <button className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300">
            {t('about.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
