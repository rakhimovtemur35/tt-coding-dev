import React, { useState } from 'react'
import { Send, ShieldCheck } from 'lucide-react'

const GlobalChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Doniyor_Senior", text: "React Router DOM v6 dynamic routing juda mukammal arxitektura!", time: "12:15" },
    { id: 2, user: "Cyber_Girl", text: "Tailwind CSS bilan Glassmorphism effektlari ajoyib chiqarkan.", time: "12:17" },
  ])
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, {
      id: messages.length + 1,
      user: "Siz (Developer)",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    setInput('')
  }

  return (
    <div className="max-w-4xl mx-auto bg-[#0f1422] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[550px] flex flex-col justify-between">
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <h3 className="text-sm font-bold text-white">Global Dev Chat</h3>
            <p className="text-[11px] text-slate-500 font-mono">1,420 users active</p>
          </div>
        </div>
        <span className="text-xs text-cyan-400 flex items-center gap-1 font-mono"><ShieldCheck className="w-4 h-4" /> SSL Encrypted</span>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#070a13]/50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.user.includes('Siz') ? 'items-end' : 'items-start'}`}>
            <span className="text-[10px] text-slate-500 font-mono mb-1">{msg.user}</span>
            <div className={`p-3.5 rounded-2xl text-xs max-w-md ${msg.user.includes('Siz') ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'}`}>
              {msg.text}
            </div>
            <span className="text-[9px] text-slate-600 font-mono mt-1">{msg.time}</span>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-4 bg-slate-900 border-t border-slate-800 flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Bu yerda xabar qoldiring..." 
          className="flex-1 bg-[#070a13] border border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-indigo-500"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 p-3 rounded-xl text-white"><Send className="w-4 h-4" /></button>
      </form>
    </div>
  )
}

export default GlobalChat