// import React, { useState } from 'react';

// export default function Contact() {
//   const [data, setData] = useState({ name: '', email: '', message: '' });
//   const [sent, setSent] = useState(false);
//   const change = e => setData({ ...data, [e.target.name]: e.target.value });
//   const submit = e => {
//     e.preventDefault();
//     if (!data.name || !data.email || !data.message) return;
//     setSent(true);
//     setData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-3xl mx-auto px-4 space-y-8">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-2">Contact Us</h2>
//           <p className="text-[#6A1B9A] text-lg">
//             Have questions or suggestions? Send us a message and we’ll get back to you.
//           </p>
//         </div>

//         {/* Contact Form Card */}
//         <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8 border-2 border-[#6A1B9A]">
//           {sent && (
//             <p className="text-[#FFD166] bg-[#6A1B9A] px-4 py-2 rounded mb-4 text-center font-semibold">
//               Message sent! We'll contact you soon.
//             </p>
//           )}
//           <form onSubmit={submit} className="space-y-4">
//             <input
//               name="name"
//               value={data.name}
//               onChange={change}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
//               required
//             />
//             <input
//               name="email"
//               value={data.email}
//               onChange={change}
//               placeholder="Your Email"
//               type="email"
//               className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
//               required
//             />
//             <textarea
//               name="message"
//               value={data.message}
//               onChange={change}
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#6A1B9A] text-[#F8BBD0] px-6 py-3 rounded-xl font-semibold hover:bg-[#BA68C8] transition-colors duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Optional: Contact Info */}
//         <div className="text-center mt-6 space-y-2">
//           <p className="text-[#6A1B9A] font-semibold">Email: support@digitalsafe.com</p>
//           <p className="text-[#6A1B9A] font-semibold">Phone: +93 700 000 000</p>
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) return;
    setSent(true);
    setData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4 space-y-8">

        {/* Heading */}
        <div className={`text-center ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A] mb-2">
            {t("contact.heading")}
          </h2>
          <p className="text-[#6A1B9A] text-lg">{t("contact.desc")}</p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8 border-2 border-[#6A1B9A]">
          {sent && (
            <p className="text-[#FFD166] bg-[#6A1B9A] px-4 py-2 rounded mb-4 text-center font-semibold">
              {t("contact.sentMessage")}
            </p>
          )}
          <form onSubmit={submit} className="space-y-4">
            <input
              name="name"
              value={data.name}
              onChange={change}
              placeholder={t("contact.name")}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
              required
            />
            <input
              name="email"
              value={data.email}
              onChange={change}
              placeholder={t("contact.email")}
              type="email"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
              required
            />
            <textarea
              name="message"
              value={data.message}
              onChange={change}
              rows="5"
              placeholder={t("contact.message")}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#6A1B9A] text-[#F8BBD0] px-6 py-3 rounded-xl font-semibold hover:bg-[#BA68C8] transition-colors duration-300"
            >
              {t("contact.sendButton")}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className={`text-center mt-6 space-y-2 ${isRTL ? "text-right" : ""}`}>
          <p className="text-[#6A1B9A] font-semibold">{t("contact.emailInfo")}</p>
          <p className="text-[#6A1B9A] font-semibold">{t("contact.phoneInfo")}</p>
        </div>
      </div>
    </section>
  );
}
