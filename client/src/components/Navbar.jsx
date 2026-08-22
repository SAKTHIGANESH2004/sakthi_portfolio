import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Terminal, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  Menu, 
  X,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ onOpenResume, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const LINKEDIN_URL = "https://www.linkedin.com/in/sakthiganesh-k-60ba8b292";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'impact', 'analytics-sandbox', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero', id: 'hero' },
    { name: 'Analytics Sandbox', href: '#analytics-sandbox', id: 'analytics-sandbox', highlight: true },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills Matrix', href: '#skills', id: 'skills' },
    { name: 'Education & Certs', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070b14]/90 dark:bg-[#070b14]/90 light:bg-white/90 bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/10 dark:shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Branding */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center text-black font-bold shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <BarChart3 className="w-5 h-5 text-black stroke-[2.5]" />
          </div>
          <div>
            <div className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-1 font-mono tracking-tight">
              SAKTHIGANESH<span className="text-cyan-500 dark:text-cyan-400">.K</span>
            </div>
            <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono tracking-wider flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              DATA ANALYST & INSIGHTS
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-900/70 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/90 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                activeSection === link.id
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : link.highlight
                  ? 'text-cyan-600 dark:text-cyan-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/80'
                  : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/80'
              }`}
            >
              {link.highlight && <Sparkles className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons, Theme Switcher & Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            title={theme === 'dark' ? 'Switch to Clean Light Theme' : 'Switch to Cyber Dark Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400/30" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/30" />
            )}
          </button>

          <a
            href="https://github.com/SAKTHIGANESH2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-all border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-all border border-transparent hover:border-cyan-500/30"
            title="LinkedIn Profile: sakthiganesh-k-60ba8b292"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Switcher */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={onOpenResume}
            className="p-2 text-xs font-semibold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-lg"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex gap-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href="https://github.com/SAKTHIGANESH2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-cyan-600 dark:text-cyan-400"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
