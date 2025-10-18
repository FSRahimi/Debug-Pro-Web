// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Home page
          digital_safety: "Digital Safety for Afghan Women",
          learn_privacy_tips: "Learn essential tips to protect your privacy and security online.",
          chat_with_bot: "Chat with Bot",
          our_services: "Our Services",

          // About page
          about_title: "About DigitalSafe",
          about_desc1: "DigitalSafe helps Afghan women learn how to stay safe online with practical tips, workshops, and resources.",
          about_desc2: "We focus on privacy, secure messaging, email safety and digital literacy.",
        // FAQ pagge 
        faq_title: "FAQ",
        faq_q1: "How can I protect my online privacy?",
        faq_a1: "Use strong passwords, enable 2FA, and avoid sharing personal info.",
        faq_q2: "Is Telegram safe?",
        faq_a2: "Use secret chats, enable two-step verification, and check forwarding settings.",
        faq_q3: "How to secure email?",
        faq_a3: "Use unique passwords, 2FA, and be careful with links and attachments.",
        // Services page
        services_title: "Our Services",
        service_passwords: "Passwords",
        service_passwords_desc: "Create and manage strong unique passwords.",
        service_social_media: "Social Media",
        service_social_media_desc: "Secure your social media accounts and privacy.",
        service_telegram: "Telegram",
        service_telegram_desc: "Protect your Telegram chats and settings.",
        service_email: "Email",
        service_email_desc: "Email hygiene and two-factor authentication.",
        learn_more: "Learn more",

            // EmailSecurity page
        email_title: "Email Security",
        email_tip1: "Use strong unique passwords",
        email_tip2: "Enable two-factor authentication (2FA)",
        email_tip3: "Avoid clicking suspicious links",
        email_tip4: "Regularly update your email password",

         // Contact page
        contact_title: "Contact",
        contact_sent: "Message sent! We'll contact you soon.",
        contact_name: "Your name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send Message",

        },
      },
      fa: {
        translation: {
          // Home page
          digital_safety: "امنیت دیجیتال برای زنان افغان",
          learn_privacy_tips: "یاد بگیرید چگونه حریم خصوصی و امنیت خود را آنلاین حفظ کنید.",
          chat_with_bot: "گفتگو با ربات",
          our_services: "خدمات ما",

          // About page
          about_title: "درباره DigitalSafe",
          about_desc1: "DigitalSafe به زنان افغان کمک می‌کند تا با نکات عملی، کارگاه‌ها و منابع، آنلاین ایمن بمانند.",
          about_desc2: "تمرکز ما بر حریم خصوصی، پیام‌رسانی امن، امنیت ایمیل و سواد دیجیتال است.",
            
          // FAG Page
           faq_title: "سوالات متداول",
           faq_q1: "چگونه حریم خصوصی آنلاین خود را محافظت کنم؟",
           faq_a1: "از رمزهای قوی استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و از اشتراک اطلاعات شخصی خودداری کنید.",
           faq_q2: "آیا تلگرام ایمن است؟",
           faq_a2: "چت‌های مخفی را استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و تنظیمات فوروارد را بررسی کنید.",
           faq_q3: "چگونه ایمیل خود را ایمن کنم؟",
           faq_a3: "از رمزهای منحصربه‌فرد استفاده کنید، تأیید دو مرحله‌ای را فعال کنید و مراقب لینک‌ها و فایل‌های پیوست باشید.",
            
           // Services page
            services_title: "خدمات ما",
            service_passwords: "رمزهای عبور",
            service_passwords_desc: "ایجاد و مدیریت رمزهای عبور قوی و منحصربه‌فرد.",
            service_social_media: "شبکه‌های اجتماعی",
            service_social_media_desc: "حساب‌ها و حریم خصوصی شبکه‌های اجتماعی خود را ایمن کنید.",
            service_telegram: "تلگرام",
            service_telegram_desc: "چت‌ها و تنظیمات تلگرام خود را محافظت کنید.",
            service_email: "ایمیل",
            service_email_desc: "بهداشت ایمیل و تأیید دو مرحله‌ای.",
            learn_more: "بیشتر بدانید",

            // EmailSecurity page
            email_title: "امنیت ایمیل",
            email_tip1: "استفاده از رمزهای قوی و منحصربه‌فرد",
            email_tip2: "فعال کردن تأیید دو مرحله‌ای (2FA)",
            email_tip3: "از کلیک روی لینک‌های مشکوک خودداری کنید",
            email_tip4: "رمز ایمیل خود را به‌طور منظم به‌روزرسانی کنید",

                // Contact page
            contact_title: "تماس با ما",
            contact_sent: "پیام ارسال شد! به زودی با شما تماس خواهیم گرفت.",
            contact_name: "نام شما",
            contact_email: "ایمیل",
            contact_message: "پیام",
            contact_send: "ارسال پیام",
                    
        },
      },
    },
    lng: "fa", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
