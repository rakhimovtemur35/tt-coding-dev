import React, { useState, useEffect } from 'react'
import { Cpu, Wifi, HardDrive, Brain, Zap, Bell, ShieldCheck, Activity } from 'lucide-react'

const Dashboard = () => {
  // 1. Real vaqtda o'zgaradigan neon ko'rsatkichlar shtati
  const [metrics, setMetrics] = useState({ ping: 12, ram: 48, cpu: 22 })
  
  // 2. Grafik to'lqinlarini harakatlantirish uchun sun'iy ma'lumotlar generatori
  const [wavePoints, setWavePoints] = useState([30, 45, 35, 60, 40, 75, 50, 90, 65, 80])

  useEffect(() => {
    const interval = setInterval(() => {
      // Metriklarni jonlantirish
      setMetrics({
        ping: Math.floor(Math.random() * (16 - 8) + 8),
        ram: Math.floor(Math.random() * (52 - 45) + 45),
        cpu: Math.floor(Math.random() * (28 - 18) + 18)
      })

      // Grafik to'lqinini tasodifiy siljitish
      setWavePoints(prev => [...prev.slice(1), Math.floor(Math.random() * (95 - 30) + 30)])
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8 relative">
      
      {/* 🌌 LOYIHA ICHIDAGI HOLLOGRAMMA VA DYNAMIK NEON TARMOQLAR (Rasmga o'xshash fon) */}
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none"></div>

      {/* 🚀 Top Premium Panel (Sarlavha va Xabarnoma) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-900/40 border border-slate-800/60 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 uppercase tracking-widest">v5.0 Global</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            DEV.X PLATFORM
          </h1>
        </div>
        
        {/* Yuqori O'ng burchakdagi xabarnomalar oynasi (Rasmga mos holatda) */}
        <div className="mt-4 sm:mt-0 flex items-center gap-4 bg-slate-950/60 px-4 py-2.5 rounded-2xl border border-slate-800/80">
          <div className="relative">
            <Bell className="w-4 h-4 text-slate-400 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          </div>
          <div className="text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-bold">AI Status:</span> OPTIMAL
          </div>
        </div>
      </div>

      {/* 🖥️ DAHSHATLI SHISHA KARTA GRIDLARI (3 ta ustunli tartib) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* ULAsh 1: NEON TO'LQINLI GRAFIK (DATA CHART) */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/40 border border-slate-800/80 p-6 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-between h-[320px] hover:border-indigo-500/30 transition-all duration-500 group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <h3 className="text-sm font-bold text-slate-200 tracking-wide">Live Telemetry</h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase tracking-widest animate-pulse">● Pulsing</span>
          </div>

          {/* Dasturlangan CSS To'lqin Simulyatsiyasi */}
          <div className="h-32 w-full flex items-end gap-1.5 pt-6 border-b border-slate-800 pl-2 pb-1 relative">
            {wavePoints.map((h, i) => (
              <div key={i} className="flex-1 bg-slate-800/30 rounded-t-md h-full flex items-end">
                <div 
                  className="w-full bg-gradient-to-t from-indigo-600 via-purple-500 to-cyan-400 rounded-t-md shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-500 ease-in-out"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex justify-between items-center">
            <span>AI CODE GENERATION: OPTIMAL</span>
            <span className="text-cyan-400 font-bold">{metrics.cpu * 2} ops/s</span>
          </div>
        </div>

        {/* ULAsh 2: INTEGRATSIYALASHGAN INTEGRAL SMILIES INTERFEYSI */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/40 border border-slate-800/80 p-6 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-between h-[320px] hover:border-purple-500/30 transition-all duration-500 group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold text-slate-200 tracking-wide">Similes Compiler</h3>
            </div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            </div>
          </div>

          {/* Haqiqiy dasturchilar kodi ko'rinishi */}
          <div className="bg-[#05070f] p-4 rounded-xl border border-slate-800/80 font-mono text-[11px] text-cyan-400 space-y-1 overflow-hidden h-40 shadow-inner">
            <div className="text-purple-400">export default function DevX() &#123;</div>
            <div className="pl-3 text-slate-500">const networkState = &#123;</div>
            <div className="pl-6 text-slate-300">ping: <span className="text-amber-400 font-bold">"{metrics.ping}ms"</span>,</div>
            <div className="pl-6 text-slate-300">status: <span className="text-emerald-400">"CONNECTED"</span></div>
            <div className="pl-3 text-slate-500">&#125;;</div>
            <div className="pl-3 text-indigo-400">return ( &lt;DataChart /&gt; );</div>
            <div className="text-purple-400">&#125;</div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> HMR (Hot Module) Active
          </div>
        </div>

        {/* ULAsh 3: ENERGY CHARTS & BARS (Energiya o'lchagichlari) */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/40 border border-slate-800/80 p-6 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col justify-between h-[320px] hover:border-cyan-500/30 transition-all duration-500 group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-slate-200 tracking-wide">Energy Charts</h3>
            </div>
          </div>

          {/* Rasmdagi kabi vertikal neon energiya ustunlari */}
          <div className="grid grid-cols-3 gap-4 py-4">
            {/* PING metr */}
            <div className="space-y-2 text-center">
              <div className="w-full bg-slate-950 h-28 border border-slate-800 rounded-xl flex items-end p-1 overflow-hidden relative">
                <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-lg shadow-[0_0_10px_#06b6d4] transition-all duration-500" style={{ height: `${(metrics.ping / 25) * 100}%` }}></div>
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase">PING ({metrics.ping}ms)</div>
            </div>

            {/* RAM metr */}
            <div className="space-y-2 text-center">
              <div className="w-full bg-slate-950 h-28 border border-slate-800 rounded-xl flex items-end p-1 overflow-hidden relative">
                <div className="w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-lg shadow-[0_0_10px_#d946ef] transition-all duration-500" style={{ height: `${metrics.ram}%` }}></div>
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase">RAM ({metrics.ram}%)</div>
            </div>

            {/* CPU LOAD metr */}
            <div className="space-y-2 text-center">
              <div className="w-full bg-slate-950 h-28 border border-slate-800 rounded-xl flex items-end p-1 overflow-hidden relative">
                <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-lg shadow-[0_0_10px_#6366f1] transition-all duration-500" style={{ height: `${metrics.cpu}%` }}></div>
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase">CPU ({metrics.cpu}%)</div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 text-center">
            CORE ENGINES: STABLE AND SECURE
          </div>
        </div>

      </div>

      {/* 📊 PASTKI QISM: INTERAKTIV ENERGY BAR (Rasmdagi kabi ajoyib gorizontal visual) */}
      <div className="bg-gradient-to-r from-slate-900/60 to-slate-950/20 border border-slate-800/80 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-4 h-4 text-pink-400" />
          <h3 className="text-sm font-bold text-slate-200">System Energy Bar</h3>
        </div>

        {/* Dinamik ravishda to'lib-toshadigan neon progress line */}
        <div className="w-full bg-slate-950 border border-slate-800 h-4 rounded-xl overflow-hidden p-0.5 relative">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-700 ease-out"
            style={{ width: `${metrics.ram}%` }}
          />
        </div>
        
        <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
          <span>0% OVERLOAD</span>
          <span className="text-pink-400 animate-pulse">LIVE SYSTEM FEED</span>
          <span>100% MAXIMUM</span>
        </div>
      </div>

    </div>
  )
}

export default Dashboard