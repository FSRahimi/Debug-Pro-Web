// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// export default function FAQ() {
//   const [open, setOpen] = useState(null);

//   const faqs = [
//     { q: 'How can I protect my online privacy?', a: 'Use strong passwords, enable 2FA, and avoid sharing personal info.' },
//     { q: 'Is Telegram safe?', a: 'Use secret chats, enable two-step verification, and check forwarding settings.' },
//     { q: 'How to secure email?', a: 'Use unique passwords, 2FA, and be careful with links and attachments.' },
//     { q: 'How can I detect phishing emails?', a: 'Check sender email addresses, avoid suspicious links, and verify messages.' },
//     { q: 'What are secure password practices?', a: 'Use long, unique passwords with symbols, numbers, and letters.' }
//   ];

//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-3xl mx-auto px-4 space-y-8">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">FAQ</h2>
//           <p className="text-[#6A1B9A] text-lg">
//             Find answers to common questions about digital safety for Afghan women.
//           </p>
//         </div>

//         {/* FAQ list */}
//         <div className="space-y-4">
//           {faqs.map((f, idx) => (
//             <div
//               key={idx}
//               className="bg-[#6A1B9A] rounded-xl shadow-lg overflow-hidden transition-all duration-300"
//             >
//               <button
//                 onClick={() => setOpen(open === idx ? null : idx)}
//                 className="w-full flex justify-between items-center px-6 py-4 text-[#FFD166] font-semibold text-left focus:outline-none hover:bg-[#BA68C8] transition-colors duration-300"
//               >
//                 <span>{f.q}</span>
//                 <span className="ml-2">
//                   {open === idx ? <FaChevronUp /> : <FaChevronDown />}
//                 </span>
//               </button>
//               <div
//                 style={{ maxHeight: open === idx ? '300px' : '0px', transition: 'max-height 0.35s ease' }}
//                 className="overflow-hidden px-6 py-4 bg-[#F8BBD0] text-[#6A1B9A]"
//               >
//                 {f.a}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center mt-10">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             Have more questions? Feel free to reach out to us!
//           </p>
//           <button
//             onClick={() => alert('Redirect to contact page')}
//             className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useTranslation } from "react-i18next";

// export default function FAQ() {
//   const [open, setOpen] = useState(null);
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   const faqs = t("faq.items", { returnObjects: true });

//   return (
//     <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
//       <div className="max-w-3xl mx-auto px-4 space-y-8">

//         {/* Heading */}
//         <div className={`text-center ${isRTL ? "text-right" : ""}`}>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
//             {t("faq.heading")}
//           </h2>
//           <p className="text-[#6A1B9A] text-lg">
//             {t("faq.desc")}
//           </p>
//         </div>

//         {/* FAQ list */}
//         <div className="space-y-4">
//           {faqs.map((f, idx) => (
//             <div
//               key={idx}
//               className="bg-[#6A1B9A] rounded-xl shadow-lg overflow-hidden transition-all duration-300"
//             >
//               <button
//                 onClick={() => setOpen(open === idx ? null : idx)}
//                 className="w-full flex justify-between items-center px-6 py-4 text-[#FFD166] font-semibold text-left focus:outline-none hover:bg-[#BA68C8] transition-colors duration-300"
//               >
//                 <span>{f.q}</span>
//                 <span className="ml-2">
//                   {open === idx ? <FaChevronUp /> : <FaChevronDown />}
//                 </span>
//               </button>
//               <div
//                 style={{ maxHeight: open === idx ? "300px" : "0px", transition: "max-height 0.35s ease" }}
//                 className="overflow-hidden px-6 py-4 bg-[#F8BBD0] text-[#6A1B9A]"
//               >
//                 {f.a}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call-to-action */}
//         <div className="text-center mt-10">
//           <p className="text-[#6A1B9A] text-lg mb-4">
//             {t("faq.cta")}
//           </p>
//           <button
//             onClick={() => alert('Redirect to contact page')}
//             className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//           >
//             {t("faq.ctaButton")}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const faqs = t("faq.items", { returnObjects: true });

  return (
    <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4 space-y-8">

        {/* Heading */}
        <div className={`text-center ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-4">
            {t("faq.heading")}
          </h2>
          <p className="text-[#6A1B9A] text-lg">
            {t("faq.desc")}
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#6A1B9A] rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-[#FFD166] font-semibold text-left focus:outline-none hover:bg-[#BA68C8] transition-colors duration-300"
              >
                <span>{f.q}</span>
                <span className="ml-2">
                  {open === idx ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* پاسخ سؤال */}
              <div
                style={{
                  maxHeight: open === idx ? "300px" : "0px",
                  opacity: open === idx ? 1 : 0,
                  transition: "all 0.35s ease"
                }}
                className="overflow-hidden px-6 py-0 bg-[#F8BBD0] text-[#6A1B9A]"
              >
                <div className={`${open === idx ? "py-4" : "py-0"}`}>
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10">
          <p className="text-[#6A1B9A] text-lg mb-4">
            {t("faq.cta")}
          </p>
          <button
            onClick={() => alert('Redirect to contact page')}
            className="bg-[#FFD166] text-[#6A1B9A] px-6 py-3 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
          >
            {t("faq.ctaButton")}
          </button>
        </div>

      </div>
    </section>
  );
}
