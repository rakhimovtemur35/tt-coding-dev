import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Sparkles, Eye, Clock } from 'lucide-react'

const DUMMY_DATA = [
  { id: '1', title: 'React 19 Server Components Amaliyotda', desc: 'Arxitekturani to\'g\'ri sozlash va yuklanish tezligini 40% ga oshirish strategiyasi.', tag: 'React', views: '4.2k', time: '5 daqiqa' },
  { id: '2', title: 'Tailwind CSS v4 Engine chuqur tahlili', desc: 'Yangi rust-kompilyator yordamida loyiha hajmini maksimal darajada kamaytirish sirlari.', tag: 'Tailwind', views: '2.8k', time: '8 daqiqa' },
  { id: '3', title: 'TypeScript 5.x Advanced Utility Tiplari', desc: 'Murakkab shartli tiplar (Conditional types) yordamida xatosiz kod yozish qo\'llanmasi.', tag: 'TypeScript', views: '5.1k', time: '12 daqiqa' }
]

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredArticles = DUMMY_DATA.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === 'All' || art.tag === selectedTag
    return matchesSearch && matchesTag
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Chap Tomondagi Qidiruv va Filtr paneli */}
      <div className="space-y-6 lg:col-span-1">
        <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-sm space-y-4">
          <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Qidiruv markazi
          </h3>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
            <input 
              type="text" 
              placeholder="Kalit so'zni kiriting..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/80 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-2">Kategoriyalar</div>
          {['All', 'React', 'Tailwind', 'TypeScript'].map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all ${selectedTag === tag ? 'bg-indigo-600/20 text-indigo-400 font-semibold' : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'}`}
            >
              # {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Maqolalar ro'yxati */}
      <div className="lg:col-span-3 space-y-6">
        {filteredArticles.length > 0 ? filteredArticles.map(article => (
          <div key={article.id} className="group bg-gradient-to-r from-slate-900/60 to-slate-900/20 border border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-2xl rounded-full pointer-events-none group-hover:bg-indigo-500/10 transition-all"></div>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2.5 py-1 rounded-md font-bold">{article.tag}</span>
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.time}</span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{article.desc}</p>
            <Link to={`/article/${article.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              Kodni tahlil qilish &rarr;
            </Link>
          </div>
        )) : (
          <div className="text-center py-20 bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl text-slate-500">
            Hech qanday ma'lumot topilmadi.
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles