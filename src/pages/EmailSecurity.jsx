import React from 'react'

export default function EmailSecurity(){
  const tips = ['Use strong unique passwords','Enable two-factor authentication (2FA)','Avoid clicking suspicious links','Regularly update your email password']
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Email Security</h2>
        <ul className="space-y-3">
          {tips.map((t,i)=> <li key={i} className="flex items-center gap-3"><span className="text-green-600">✅</span><span className="text-gray-700">{t}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
