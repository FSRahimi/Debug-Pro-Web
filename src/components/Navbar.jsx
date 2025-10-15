import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const linkClass = ({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
  return (
    <nav className="bg-white shadow fixed w-full z-20 top-0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">DigitalSafe</div>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/email-security" className={linkClass}>Email Security</NavLink></li>
          <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
          <li><NavLink to="/chatbot" className={linkClass}>Chatbot</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
