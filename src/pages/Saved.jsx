import React from 'react'
import { Bookmark, Trash2 } from 'lucide-react'

const Saved = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white">Xatcho'plar</h1>
          <p className="text-sm text-slate-400 mt-1">Keyinchalik o'qish uchun saqlangan materiallar to'plami.</p>
        </div>
        <span className="bg-slate-900 border border-slate-800 text-xs px-3 py-1.5 rounded-xl font-mono text-slate-400">Jami: 1 ta</span>
      </div>

      <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 flex items-center justify-between group hover:border-slate-750 transition-colors">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl mt-1">
            <Bookmark className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">Tailwind CSS v4 Engine chuqur tahlili</h3>
            <p className="text-xs text-slate-500 mt-0.5">Saqlangan sana: Bugun, 12:08</p>
          </div>
        </div>
        <button className="p-2 text-slate-600 hover:text-pink-500 rounded-xl hover:bg-pink-500/5 transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Saved