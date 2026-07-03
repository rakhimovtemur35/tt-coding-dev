import React, { useState } from 'react'
import { Code2, RefreshCw, Eye, Terminal } from 'lucide-react'

const CodeSimulator = () => {
  const [code, setCode] = useState(`<div style="font-family: sans-serif; text-align: center; padding: 40px; background: linear-gradient(135deg, #1e1b4b, #0f172a); border-radius: 20px; border: 1px solid #334155; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.5);">
  <h1 style="color: #818cf8; margin-bottom: 10px; font-size: 28px;">DEV.X Sandbox Faol! 🚀</h1>
  <p style="color: #94a3b8; font-size: 14px;">Ushbu oynaga istalgan HTML/CSS kodini yozib natijani jonli koring.</p>
  <br/>
  <button style="background: linear-gradient(to right, #6366f1, #06b6d4); color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">
    Muvaffaqiyatli Ishlamoqda
  </button>
</div>`)

  const [activeTab, setActiveTab] = useState('preview')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Live Code Compiler</h1>
        <p className="text-sm text-slate-400 mt-1">Brauzerning o'zida yozilgan kodlarni HMR (Hot Module Replacement) yordamida lahzada sinab ko'ring.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-[#0f1422] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Code2 className="w-4 h-4 text-indigo-400" /> index.html / App.jsx
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[450px] bg-[#070a13] p-5 text-sm font-mono text-cyan-400 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Live Output */}
        <div className="bg-[#0f1422] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex gap-2">
              <button onClick={() => setActiveTab('preview')} className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}><Eye className="w-3.5 h-3.5" /> Live Preview</button>
              <button onClick={() => setActiveTab('console')} className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${activeTab === 'console' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}><Terminal className="w-3.5 h-3.5" /> Console</button>
            </div>
            <button onClick={() => setCode('')} className="text-slate-500 hover:text-pink-400"><RefreshCw className="w-3.5 h-3.5" /></button>
          </div>
          <div className="flex-1 bg-slate-950 p-6 overflow-auto h-[450px]">
            {activeTab === 'preview' ? (
              <div className="bg-white rounded-xl p-4 min-h-full" dangerouslySetInnerHTML={{ __html: code }} />
            ) : (
              <div className="font-mono text-xs text-emerald-400 space-y-2">
                <div>[Compiler]: Render engine version 3.0.2 successful.</div>
                <div className="text-slate-500">// Barcha o'zgarishlar optimal darajada chizildi.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeSimulator