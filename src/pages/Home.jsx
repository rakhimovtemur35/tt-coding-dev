import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Terminal, Star, Users, Zap, Code } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="text-center max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 fill-current" /> Platforma v2.0 Yangilanishi
        </span>
        
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] text-white">
          Kodingizni <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">Kosmik Darajaga</span> Olib Chiqing
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Dasturchilar uchun global ekotizim. Kod yozing, loyihalaringizni sinab ko'ring, tahlil qiling va eng kuchlilar hamjamiyatiga qo'shiling.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/articles" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-indigo-600/20 hover:-translate-y-0.5">
            Kutubxonaga kirish <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/simulator" className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-850 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all hover:border-slate-700">
            <Code className="w-5 h-5" /> Kod Sandbox
          </Link>
        </div>
      </div>

      {/* Live Global Statistics Counter */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl backdrop-blur-md">
        {[
          { icon: Users, label: "Aktiv Dasturchilar", count: "142,800+" },
          { icon: Terminal, label: "Yozilgan Kodlar", count: "12.4M" },
          { icon: Star, label: "Olingan Baholar", count: "4.9 / 5.0" },
          { icon: Zap, label: "Oylik So'rovlar", count: "89.2M" }
        ].map((stat, idx) => (
          <div key={idx} className="text-center p-4 space-y-2">
            <stat.icon className="w-6 h-6 mx-auto text-indigo-400" />
            <div className="text-3xl font-extrabold text-white">{stat.count}</div>
            <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home