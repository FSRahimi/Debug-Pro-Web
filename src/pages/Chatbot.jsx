// import React, { useState, useRef, useEffect } from 'react';

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hello! Ask me about privacy, telegram, email, or social media.' }
//   ]);
//   const [input, setInput] = useState('');
//   const endRef = useRef(null);

//   const responses = {
//     privacy: 'Protect your privacy: use strong passwords, 2FA, and avoid sharing sensitive info.',
//     telegram: 'On Telegram, enable two-step verification and use secret chats for sensitive conversations.',
//     email: 'For email: enable 2FA, avoid phishing links, and keep software updated.',
//     social: 'For social media: adjust privacy settings, use strong passwords, and limit shared info.',
//     contact: 'You can reach out via the Contact page form.',
//   };

//   const send = () => {
//     if (!input.trim()) return;
//     const text = input.trim();
//     setMessages(prev => [...prev, { sender: 'user', text }]);
//     const key = Object.keys(responses).find(k => text.toLowerCase().includes(k));
//     const reply = key ? responses[key] : "Sorry, I didn't understand. Try privacy, telegram, email, or social media.";
//     setTimeout(() => setMessages(prev => [...prev, { sender: 'bot', text: reply }]), 600);
//     setInput('');
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <section className="py-20 bg-[#EDE7F6]">
//       <div className="max-w-3xl mx-auto px-4 space-y-6">

//         {/* Heading */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A]">Chat with our Bot</h2>
//           <p className="text-[#6A1B9A]">Ask questions about privacy, Telegram, email, or social media security.</p>
//         </div>

//         {/* Chat Box */}
//         <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-4 flex flex-col h-96 overflow-y-auto space-y-3 border-2 border-[#6A1B9A]">
//           {messages.map((m, i) => (
//             <div
//               key={i}
//               className={`max-w-xs break-words px-4 py-2 rounded-lg ${
//                 m.sender === 'user'
//                   ? 'self-end bg-[#FFD166] text-[#6A1B9A]'
//                   : 'self-start bg-[#6A1B9A] text-[#F8BBD0]'
//               }`}
//             >
//               {m.text}
//             </div>
//           ))}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div className="flex mt-4">
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => e.key === 'Enter' && send()}
//             className="flex-1 px-4 py-3 rounded-l-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
//             placeholder="Type a message..."
//           />
//           <button
//             onClick={send}
//             className="bg-[#6A1B9A] text-[#F8BBD0] px-6 py-3 rounded-r-xl font-semibold hover:bg-[#BA68C8] transition-colors duration-300"
//           >
//             Send
//           </button>
//         </div>

//         {/* Quick Questions */}
//         <div className="mt-6 text-center">
//           <p className="text-[#6A1B9A] mb-2 font-semibold">Try asking:</p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {['privacy', 'telegram', 'email', 'social', 'contact'].map((q, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   setInput(q);
//                   setTimeout(send, 100);
//                 }}
//                 className="bg-[#FFD166] text-[#6A1B9A] px-4 py-2 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//               >
//                 {q}
//               </button>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import fa from '../i18n/locales/fa.js';   // JS مخصوص Chatbot
// import en from '../i18n/locales/en.js';


// export default function Chatbot({ lang = 'fa' }) {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: lang === 'fa' ? fa.responses.unknown : en.responses.unknown }
//   ]);
//   const [input, setInput] = useState('');
//   const endRef = useRef(null);

//   const translations = lang === 'fa' ? fa : en;

//   const send = () => {
//     if (!input.trim()) return;
//     const text = input.trim();
//     setMessages(prev => [...prev, { sender: 'user', text }]);

//     const key = Object.keys(translations.responses).find(
//       k => k !== 'unknown' && text.toLowerCase().includes(k)
//     );
//     const reply = key ? translations.responses[key] : translations.responses.unknown;

//     setTimeout(() => setMessages(prev => [...prev, { sender: 'bot', text: reply }]), 600);
//     setInput('');
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <section
//       className={`py-20 bg-[#EDE7F6] ${lang === 'fa' ? 'rtl text-right font-[Vazirmatn]' : 'ltr text-left'}`}
//       dir={lang === 'fa' ? 'rtl' : 'ltr'}
//     >
//       <div className="max-w-3xl mx-auto px-4 space-y-6">
//         {/* Heading */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A]">{translations.heading}</h2>
//           <p className="text-[#6A1B9A]">{translations.subheading}</p>
//         </div>

//         {/* Chat Box */}
//         <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-4 flex flex-col h-96 overflow-y-auto space-y-3 border-2 border-[#6A1B9A]">
//           {messages.map((m, i) => (
//             <div
//               key={i}
//               className={`max-w-xs break-words px-4 py-2 rounded-lg ${
//                 m.sender === 'user'
//                   ? 'self-end bg-[#FFD166] text-[#6A1B9A]'
//                   : 'self-start bg-[#6A1B9A] text-[#F8BBD0]'
//               }`}
//             >
//               {m.text}
//             </div>
//           ))}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div className="flex mt-4">
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => e.key === 'Enter' && send()}
//             className="flex-1 px-4 py-3 rounded-l-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
//             placeholder={translations.placeholder}
//           />
//           <button
//             onClick={send}
//             className="bg-[#6A1B9A] text-[#F8BBD0] px-6 py-3 rounded-r-xl font-semibold hover:bg-[#BA68C8] transition-colors duration-300"
//           >
//             {translations.send}
//           </button>
//         </div>

//         {/* Quick Questions */}
//         <div className="mt-6 text-center">
//           <p className="text-[#6A1B9A] mb-2 font-semibold">{translations.try}</p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {Object.keys(translations.quickQuestions).map((q, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   setInput(q);
//                   setTimeout(send, 100);
//                 }}
//                 className="bg-[#FFD166] text-[#6A1B9A] px-4 py-2 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
//               >
//                 {translations.quickQuestions[q]}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Chatbot() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: isRTL
        ? 'سلام! می‌توانید در مورد حریم خصوصی، تلگرام، ایمیل یا شبکه‌های اجتماعی از من بپرسید.'
        : 'Hello! Ask me about privacy, Telegram, email, or social media.',
    },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  // پاسخ‌ها بر اساس کلید انگلیسی
  const responses = {
    privacy: {
      en: 'Protect your privacy: use strong passwords, 2FA, and avoid sharing sensitive info.',
      fa: 'حریم خصوصی خود را محافظت کنید: از رمزهای قوی، ۲FA و اشتراک اطلاعات حساس خودداری کنید.',
    },
    telegram: {
      en: 'On Telegram, enable two-step verification and use secret chats for sensitive conversations.',
      fa: 'در تلگرام، تأیید دو مرحله‌ای را فعال کنید و برای گفتگوهای حساس از چت‌های مخفی استفاده کنید.',
    },
    email: {
      en: 'For email: enable 2FA, avoid phishing links, and keep software updated.',
      fa: 'برای ایمیل: ۲FA را فعال کنید، از لینک‌های فیشینگ دوری کنید و نرم‌افزارها را به‌روز نگه دارید.',
    },
    social: {
      en: 'For social media: adjust privacy settings, use strong passwords, and limit shared info.',
      fa: 'برای شبکه‌های اجتماعی: تنظیمات حریم خصوصی را بررسی کنید، رمزهای قوی استفاده کنید و اطلاعات اشتراکی را محدود کنید.',
    },
    contact: {
      en: 'You can reach out via the Contact page form.',
      fa: 'می‌توانید از طریق فرم تماس با ما با ما در ارتباط باشید.',
    },
  };

  const quickKeys = ['privacy', 'telegram', 'email', 'social', 'contact'];

  const sendMessage = (text, key = null) => {
    if (!text.trim()) return;

    // اضافه کردن پیام کاربر
    setMessages(prev => [...prev, { sender: 'user', text }]);

    // تعیین پاسخ
    let reply;
    if (key && responses[key]) {
      reply = isRTL ? responses[key].fa : responses[key].en;
    } else {
      reply = isRTL
        ? 'متأسفم، متوجه نشدم. لطفاً از حریم خصوصی، تلگرام، ایمیل یا شبکه‌های اجتماعی بپرسید.'
        : "Sorry, I didn't understand. Try privacy, Telegram, email, or social media.";
    }

    // اضافه کردن پاسخ بعد از 0.5 ثانیه
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 500);

    setInput('');
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="py-20 bg-[#EDE7F6]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto px-4 space-y-6">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6A1B9A]">
            {isRTL ? 'گفتگو با ربات ما' : 'Chat with our Bot'}
          </h2>
          <p className="text-[#6A1B9A]">
            {isRTL
              ? 'در مورد حریم خصوصی، تلگرام، ایمیل یا شبکه‌های اجتماعی سؤال بپرسید.'
              : 'Ask questions about privacy, Telegram, email, or social media security.'}
          </p>
        </div>

        {/* Chat Box */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-4 flex flex-col h-96 overflow-y-auto space-y-3 border-2 border-[#6A1B9A]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-xs break-words px-4 py-2 rounded-lg ${
                m.sender === 'user'
                  ? 'self-end bg-[#FFD166] text-[#6A1B9A]'
                  : 'self-start bg-[#6A1B9A] text-[#F8BBD0]'
              }`}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef}></div>
        </div>

        {/* Input */}
        <div className="flex mt-4">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            className="flex-1 px-4 py-3 rounded-l-xl border-2 border-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-[#BA68C8]"
            placeholder={isRTL ? 'پیام خود را تایپ کنید...' : 'Type a message...'}
          />
          <button
            onClick={() => sendMessage(input)}
            className="bg-[#6A1B9A] text-[#F8BBD0] px-6 py-3 rounded-r-xl font-semibold hover:bg-[#BA68C8] transition-colors duration-300"
          >
            {isRTL ? 'ارسال' : 'Send'}
          </button>
        </div>

        {/* Quick Buttons */}
        <div className="mt-6 text-center">
          <p className="text-[#6A1B9A] mb-2 font-semibold">
            {isRTL ? 'می‌توانید این سوالات را امتحان کنید:' : 'Try asking:'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickKeys.map(key => {
              const displayText = isRTL ? t(`chatbot.quickButtons.${key}`) : key;
              return (
                <button
                  key={key}
                  onClick={() => sendMessage(displayText, key)}
                  className="bg-[#FFD166] text-[#6A1B9A] px-4 py-2 rounded-lg font-semibold hover:bg-[#BA68C8] hover:text-white transition-colors duration-300"
                >
                  {displayText}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
