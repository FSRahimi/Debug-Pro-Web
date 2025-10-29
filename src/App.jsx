// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import EmailSecurity from "./pages/EmailSecurity";
// import FAQ from "./pages/FAQ";
// import Chatbot from "./pages/Chatbot";


// export default function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-1 pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/email-security" element={<EmailSecurity />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/chatbot" element={<Chatbot />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import EmailSecurity from "./pages/EmailSecurity";
// import FAQ from "./pages/FAQ";
// import Chatbot from "./pages/Chatbot";
// import Contact from "./pages/Contact";

// export default function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-1 pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/email-security" element={<EmailSecurity />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/chatbot" element={<Chatbot />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import EmailSecurity from "./pages/EmailSecurity";
import FAQ from "./pages/FAQ";
import Chatbot from "./pages/Chatbot";
import Contact from "./pages/Contact";

export default function App() {
  // 🟩 این useEffect برای تنظیم جهت زبان است
  useEffect(() => {
    // فرض کنیم زبان از localStorage یا هر منبع دیگر گرفته می‌شود
    const currentLang = localStorage.getItem("lang") || "en";

    if (currentLang === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/email-security" element={<EmailSecurity />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
