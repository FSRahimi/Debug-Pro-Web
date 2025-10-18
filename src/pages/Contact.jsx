// import React, { useState } from 'react'

// export default function Contact(){
//   const [data, setData] = useState({name:'', email:'', message:''})
//   const [sent, setSent] = useState(false)
//   const change = e => setData({...data, [e.target.name]: e.target.value})
//   const submit = e => {
//     e.preventDefault()
//     if(!data.name || !data.email || !data.message) return
//     setSent(true)
//     setData({name:'', email:'', message:''})
//   }
//   return (
//     <section className="py-20">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-4">Contact</h2>
//         {sent && <p className="text-green-600 mb-4">Message sent! We'll contact you soon.</p>}
//         <form onSubmit={submit} className="space-y-3 max-w-lg">
//           <input name="name" value={data.name} onChange={change} placeholder="Your name" className="w-full px-4 py-2 border rounded" required />
//           <input name="email" value={data.email} onChange={change} placeholder="Email" className="w-full px-4 py-2 border rounded" required />
//           <textarea name="message" value={data.message} onChange={change} rows="5" placeholder="Message" className="w-full px-4 py-2 border rounded" required />
//           <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded">Send Message</button>
//         </form>
//       </div>
//     </section>
//   )
// }

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t, i18n } = useTranslation()
  const [data, setData] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)

  const change = e => setData({...data, [e.target.name]: e.target.value})

  const submit = e => {
    e.preventDefault()
    if(!data.name || !data.email || !data.message) return
    setSent(true)
    setData({name:'', email:'', message:''})
  }

  return (
    <section className="py-20" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{t('contact_title')}</h2>
        {sent && <p className="text-green-600 mb-4">{t('contact_sent')}</p>}
        <form onSubmit={submit} className="space-y-3 max-w-lg">
          <input 
            name="name" 
            value={data.name} 
            onChange={change} 
            placeholder={t('contact_name')} 
            className="w-full px-4 py-2 border rounded" 
            required 
          />
          <input 
            name="email" 
            value={data.email} 
            onChange={change} 
            placeholder={t('contact_email')} 
            className="w-full px-4 py-2 border rounded" 
            required 
          />
          <textarea 
            name="message" 
            value={data.message} 
            onChange={change} 
            rows="5" 
            placeholder={t('contact_message')} 
            className="w-full px-4 py-2 border rounded" 
            required 
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded">{t('contact_send')}</button>
        </form>
      </div>
    </section>
  )
}

