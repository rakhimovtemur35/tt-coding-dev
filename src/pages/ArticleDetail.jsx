import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, CornerDownRight } from 'lucide-react'

const ArticleDetail = () => {
  const { id } = useParams()

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Kutubxonaga qaytish
      </Link>

      <div className="space-y-4 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Tanlangan Material Indeksi: #{id}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-indigo-400" /> <span>Core Team</span></div>
          <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> <span>Iyul 3, 2026</span></div>
        </div>
      </div>

      <div className="text-slate-300 space-y-6 leading-relaxed text-base">
        <p className="flex items-start gap-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800 font-mono text-sm text-indigo-300">
          <CornerDownRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
          Tizim Router so'rovini qabul qildi. Parametr identifikatori: {id}
        </p>
        <p>
          Ushbu sahifa dynamic segment hisoblanadi. Siz bu yerga Markdown formatidagi istalgan tahliliy maqolalarni, arxitektura diagrammalarini va dasturlashga oid eng qiyin muammolar yechimini joylashtirishingiz mumkin.
        </p>
      </div>
    </div>
  )
}

export default ArticleDetail