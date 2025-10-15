import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} DigitalSafe — All rights reserved</p>
      </div>
    </footer>
  )
}
