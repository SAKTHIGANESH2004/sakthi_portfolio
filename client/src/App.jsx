import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import AnalyticsSandbox from './components/AnalyticsSandbox';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceEducation from './components/ExperienceEducation';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { trackAction } from './utils/api';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Apply theme class to <html> element and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    trackAction('pageView');
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#070b14] text-slate-100'
        : 'bg-[#f8fafc] text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeOpen(true)} theme={theme} />
        <ImpactMetrics theme={theme} />
        <AnalyticsSandbox theme={theme} />
        <ProjectsSection theme={theme} />
        <SkillsMatrix theme={theme} />
        <ExperienceEducation theme={theme} />
        <ContactSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} theme={theme} />

      {/* Resume Viewer / Downloader Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} theme={theme} />
      )}

    </div>
  );
}
