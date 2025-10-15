import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import EmailSecurity from './pages/EmailSecurity'
import FAQ from './pages/FAQ'
import Chatbot from './pages/Chatbot'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/email-security" element={<EmailSecurity />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
