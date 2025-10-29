// import React from 'react';
// import { FaLock, FaUserShield, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

// export default function Services() {
//   const services = [
//     {
//       id: 1,
//       title: 'Passwords',
//       icon: <FaLock size={36} />,
//       desc: 'Create and manage strong unique passwords.',
//       link: 'https://www.lastpass.com/password-manager' // Example link
//     },
//     {
//       id: 2,
//       title: 'Social Media',
//       icon: <FaUserShield size={36} />,
//       desc: 'Secure your social media accounts and privacy.',
//       link: 'https://www.cyberaware.gov/social-media-safety'
//     },
//     {
//       id: 3,
//       title: 'Telegram',
//       icon: <FaTelegramPlane size={36} />,
//       desc: 'Protect your Telegram chats and settings.',
//       link: 'https://telegram.org/faq_security'
//     },
//     {
//       id: 4,
//       title: 'Email',
//       icon: <FaEnvelope size={36} />,
//       desc: 'Email hygiene and two-factor authentication.',
//       link: 'https://www.google.com/landing/2step/'
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#6A1B9A]">Our Services</h2>
//         <div className="grid md:grid-cols-4 gap-6">
//           {services.map(s => (
//             <div key={s.id} className="group bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition">
//               <div className="text-[#6A1B9A] mb-4">{s.icon}</div>
//               <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
//               <p className="text-gray-700">{s.desc}</p>
//               <a
//                 href={s.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block bg-[#FFD166] text-[#6A1B9A] px-3 py-2 rounded hover:bg-[#BA68C8] hover:text-white transition"
//               >
//                 Learn more
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLock, FaUserShield, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.passwords.title'),
      icon: <FaLock size={36} />,
      desc: t('services.passwords.desc'),
      link: 'https://www.lastpass.com/password-manager'
    },
    {
      id: 2,
      title: t('services.socialMedia.title'),
      icon: <FaUserShield size={36} />,
      desc: t('services.socialMedia.desc'),
      link: 'https://www.apu.apus.edu/area-of-study/business-and-management/resources/how-social-media-sites-affect-society/'
    },
    {
      id: 3,
      title: t('services.telegram.title'),
      icon: <FaTelegramPlane size={36} />,
      desc: t('services.telegram.desc'),
      link: 'https://telegram.org/faq_security'
    },
    {
      id: 4,
      title: t('services.email.title'),
      icon: <FaEnvelope size={36} />,
      desc: t('services.email.desc'),
      link: 'https://www.google.com/landing/2step/'
    },
  ];

  return (
    <section className="py-20 bg-[#EDE7F6]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6A1B9A]">
          {t('services.heading')}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map(s => (
            <div
              key={s.id}
              className="group bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition text-center"
            >
              <div className="text-[#6A1B9A] mb-4 flex justify-center">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-700 mb-4">{s.desc}</p>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#FFD166] text-[#6A1B9A] px-3 py-2 rounded hover:bg-[#BA68C8] hover:text-white transition"
              >
                {t('services.learnMore')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
