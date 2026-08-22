import React, { useState, useEffect } from 'react';
import { BarChart3, Github, Linkedin, Mail, Phone, Heart, Activity, ArrowUp } from 'lucide-react';
import { fetchLiveStats } from '../utils/api';

export default function Footer({ onOpenResume, theme }) {
  const isDark = theme === 'dark';
  const [stats, setStats] = useState({ pageViews: 1420, queriesExecuted: 328 });
  const LINKEDIN_URL = "https://www.linkedin.com/in/sakthiganesh-k-60ba8b292";

  useEffect(() => {
    fetchLiveStats().then(setStats).catch(() => {});
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t ${isDark ? 'border-slate-800/80 bg-[#050811]' : 'border-slate-200 bg-white'} pt-12 pb-8 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className={`flex items-center gap-2.5 font-mono font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center text-black">
                <BarChart3 className="w-4 h-4 text-black stroke-[2.5]" />
              </div>
              <span>SAKTHIGANESH K</span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} max-w-sm leading-relaxed`}>
              Data Analyst transforming complex data into predictive insights and automated reporting workflows. Built with MERN Stack, Recharts & Tailwind CSS.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Backend API Online
              </span>
              <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-slate-500 bg-slate-100 border-slate-200'} px-2.5 py-1 rounded-md border`}>
                Queries Executed: {stats.queriesExecuted}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <div className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-wider mb-2`}>
              Navigation
            </div>
            <ul className={`space-y-1.5 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <li><a href="#hero" className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Overview</a></li>
              <li><a href="#analytics-sandbox" className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Analytics Sandbox</a></li>
              <li><a href="#projects" className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Projects & Repos</a></li>
              <li><a href="#skills" className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Skills Matrix</a></li>
              <li><a href="#experience" className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>Education & Certs</a></li>
              <li><button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors text-left">Resume (PDF)</button></li>
            </ul>
          </div>

          {/* Col 3: Repositories & Profiles */}
          <div className="space-y-2">
            <div className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'} uppercase tracking-wider mb-2`}>
              Featured Profiles
            </div>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <li>
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`hover:text-cyan-300 transition-colors flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  <Linkedin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span>LinkedIn (sakthiganesh-k-60ba8b292)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SAKTHIGANESH2004/python-data-analyst-market-analysis" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors truncate block"
                >
                  ⚡ python-data-analyst-market-analysis
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SAKTHIGANESH2004/data-analyst-salary-skills-sql" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors truncate block"
                >
                  ⚡ data-analyst-salary-skills-sql
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SAKTHIGANESH2004/sql-cohort-churn-ltv-analysis" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors truncate block"
                >
                  ⚡ sql-cohort-churn-ltv-analysis
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className={`pt-6 border-t ${isDark ? 'border-slate-800/60 text-slate-500' : 'border-slate-200 text-slate-400'} flex flex-col sm:flex-row items-center justify-between gap-4 text-xs`}>
          <div>
            © {new Date().getFullYear()} Sakthiganesh K. Direct Inbox: <span className={`${isDark ? 'text-slate-400' : 'text-slate-500'} font-mono`}>sakthiganeshk27@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-cyan-400 transition-colors cursor-pointer`}
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
