import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const nav = useNavigate()
  return (
    <section className="bg-indigo-50 py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Digital Safety for Afghan Women</h1>
          <p className="text-gray-700 text-lg">Learn essential tips to protect your privacy and security online.</p>
          <div className="flex gap-4">
            <button onClick={() => nav('/chatbot')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Chat with Bot</button>
            <button onClick={() => nav('/services')} className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:shadow">Our Services</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/4P1H7Qw/afghan-women.png" alt="afghan women" className="rounded-xl shadow-lg w-full" />
        </div>
      </div>
    </section>
  )
}
