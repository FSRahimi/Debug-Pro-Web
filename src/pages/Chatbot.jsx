// import React, { useState, useRef, useEffect } from 'react'

// export default function Chatbot(){
//   const [messages, setMessages] = useState([{sender:'bot', text:'Hello! Ask me about privacy, telegram or email.'}])
//   const [input, setInput] = useState('')
//   const endRef = useRef(null)

//   const responses = {
//     privacy: 'Protect your privacy: use strong passwords, 2FA and do not share sensitive info.',
//     telegram: 'On Telegram enable two-step verification and use secret chats for sensitive conversations.',
//     email: 'For email: enable 2FA, avoid phishing links and keep software updated.',
//     contact: 'You can reach out via the Contact page form.'
//   }

//   const send = ()=>{
//     if(!input.trim()) return
//     const text = input.trim()
//     setMessages(prev=>[...prev, {sender:'user', text}])
//     const key = Object.keys(responses).find(k=> text.toLowerCase().includes(k))
//     const reply = key ? responses[key] : "Sorry, I didn't understand. Try privacy, telegram, or email."
//     setTimeout(()=> setMessages(prev=>[...prev, {sender:'bot', text:reply}]), 600)
//     setInput('')
//   }

//   useEffect(()=> {
//     endRef.current?.scrollIntoView({behavior:'smooth'})
//   }, [messages])

//   return (
//     <section className="py-20 bg-indigo-50">
//       <div className="max-w-2xl mx-auto px-4">
//         <h2 className="text-2xl font-bold mb-4">Chat with our Bot</h2>
//         <div className="bg-white rounded shadow p-4 flex flex-col h-96 overflow-y-auto space-y-3">
//           {messages.map((m,i)=>(
//             <div key={i} className={`max-w-xs ${m.sender==='user' ? 'self-end bg-indigo-600 text-white':'self-start bg-gray-200 text-gray-800'} rounded px-3 py-2`}>
//               {m.text}
//             </div>
//           ))}
//           <div ref={endRef}></div>
//         </div>
//         <div className="flex mt-3">
//           <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} className="flex-1 px-4 py-2 rounded-l border" placeholder="Type a message..." />
//           <button onClick={send} className="bg-indigo-600 text-white px-4 rounded-r">Send</button>
//         </div>
//       </div>
//     </section>
//   )
// }
import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Chatbot(){
  const { t, i18n } = useTranslation()
  const [messages, setMessages] = useState([{sender:'bot', text:t('chatbot_greeting')}])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  const responses = {
    privacy: t('chatbot_resp_privacy'),
    telegram: t('chatbot_resp_telegram'),
    email: t('chatbot_resp_email'),
    contact: t('chatbot_resp_contact')
  }

  const send = ()=>{
    if(!input.trim()) return
    const text = input.trim()
    setMessages(prev=>[...prev, {sender:'user', text}])
    const key = Object.keys(responses).find(k=> text.toLowerCase().includes(k))
    const reply = key ? responses[key] : t('chatbot_resp_unknown')
    setTimeout(()=> setMessages(prev=>[...prev, {sender:'bot', text:reply}]), 600)
    setInput('')
  }

  useEffect(()=> {
    endRef.current?.scrollIntoView({behavior:'smooth'})
  }, [messages])

  return (
    <section className="py-20 bg-indigo-50" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">{t('chatbot_title')}</h2>
        <div className="bg-white rounded shadow p-4 flex flex-col h-96 overflow-y-auto space-y-3">
          {messages.map((m,i)=>(
            <div key={i} className={`max-w-xs ${m.sender==='user' ? 'self-end bg-indigo-600 text-white':'self-start bg-gray-200 text-gray-800'} rounded px-3 py-2`}>
              {m.text}
            </div>
          ))}
          <div ref={endRef}></div>
        </div>
        <div className="flex mt-3">
          <input 
            value={input} 
            onChange={e=>setInput(e.target.value)} 
            onKeyDown={e=> e.key==='Enter' && send()} 
            className="flex-1 px-4 py-2 rounded-l border" 
            placeholder={t('chatbot_input_placeholder')} 
          />
          <button onClick={send} className="bg-indigo-600 text-white px-4 rounded-r">{t('chatbot_send')}</button>
        </div>
      </div>
    </section>
  )
}
