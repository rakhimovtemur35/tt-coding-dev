import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Dashboard from './pages/Dashboard'
import CodeSimulator from './pages/CodeSimulator'
import Saved from './pages/Saved'
import GlobalChat from './pages/GlobalChat'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased relative overflow-hidden selection:bg-indigo-500/30 selection:text-white">
        
        {/* Global Premium Fon Gradientlari */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none"></div>

        {/* Global Navigatsiya */}
        <Navbar />

        {/* Asosiy Kontent Platformasi */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/simulator" element={<CodeSimulator />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<GlobalChat />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </main>

        {/* Premium Footer */}
        <footer className="border-t border-slate-900 bg-slate-950/20 py-6 text-center text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} DEV.X Platforms Inc. Barcha huquqlar himoyalangan.
        </footer>
      </div>
    </Router>
  )
}

export default App