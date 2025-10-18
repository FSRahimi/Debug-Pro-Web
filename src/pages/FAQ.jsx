// import React, { useState } from 'react'

// export default function FAQ(){
//   const [open, setOpen] = useState(null)
//   const faqs = [
//     {q:'How can I protect my online privacy?', a:'Use strong passwords, enable 2FA, and avoid sharing personal info.'},
//     {q:'Is Telegram safe?', a:'Use secret chats, enable two-step verification, and check forwarding settings.'},
//     {q:'How to secure email?', a:'Use unique passwords, 2FA, and be careful with links and attachments.'}
//   ]
//   return (
//     <section className="py-20">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6">FAQ</h2>
//         <div className="space-y-3">
//           {faqs.map((f,idx)=>(
//             <div key={idx} className="border rounded overflow-hidden">
//               <button onClick={()=>setOpen(open===idx?null:idx)} className="w-full text-left px-4 py-3 bg-white flex justify-between items-center">
//                 <span>{f.q}</span>
//                 <span>{open===idx?'-':'+'}</span>
//               </button>
//               <div style={{maxHeight: open===idx? '200px':'0px', transition:'max-height 0.35s ease'}} className="overflow-hidden px-4 py-3 bg-indigo-50">
//                 {f.a}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ(){
  const [open, setOpen] = useState(null)
  const { t, i18n } = useTranslation()

  const faqs = [
    {q: t('faq_q1'), a: t('faq_a1')},
    {q: t('faq_q2'), a: t('faq_a2')},
    {q: t('faq_q3'), a: t('faq_a3')}
  ]

  return (
    <section className="py-20" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">{t('faq_title')}</h2>
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div key={idx} className="border rounded overflow-hidden">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left px-4 py-3 bg-white flex justify-between items-center">
                <span>{f.q}</span>
                <span>{open === idx ? '-' : '+'}</span>
              </button>
              <div style={{maxHeight: open === idx ? '200px' : '0px', transition:'max-height 0.35s ease'}} className="overflow-hidden px-4 py-3 bg-indigo-50">
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
