import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Code2, Terminal, LayoutDashboard, Bookmark, Bell, MessageSquare } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19]/70 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-black text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          <Code2 className="w-7 h-7 text-indigo-400 animate-pulse" />
          <span>DEV.X</span>
        </Link>
        
        {/* Navigatsiya Linklari */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80">
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}>Bosh sahifa</NavLink>
          <NavLink to="/articles" className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}>Kutubxona</NavLink>
          <NavLink to="/simulator" className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}><Terminal className="w-4 h-4" /> Sandbox</NavLink>
          <NavLink to="/chat" className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}><MessageSquare className="w-4 h-4" /> Global Chat</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}><LayoutDashboard className="w-4 h-4" /> Dashboard</NavLink>
        </div>

        {/* O'ng tomondagi Foydalanuvchi Paneli */}
        <div className="flex items-center gap-4">
          <Link to="/saved" className="p-2 text-slate-400 hover:text-indigo-400 transition-colors relative">
            <Bookmark className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
          </Link>
          <button className="p-2 text-slate-400 hover:text-indigo-400 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] cursor-pointer">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-xs font-bold text-cyan-400">PRO</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar