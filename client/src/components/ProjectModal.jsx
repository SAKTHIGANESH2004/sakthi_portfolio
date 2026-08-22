import React from 'react';
import { X, Github, ExternalLink, CheckCircle, Database, Layers, TrendingUp, Sparkles, Code2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, theme }) {
  if (!project) return null;
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl border rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 ${
        isDark ? 'bg-[#090e1c] border-cyan-500/30' : 'bg-white border-slate-300'
      }`}>
        
        {/* Header Bar */}
        <div className={`flex items-start justify-between p-6 border-b ${
          isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
                isDark ? 'bg-cyan-950 text-cyan-300 border-cyan-800' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
              }`}>
                {project.category}
              </span>
              <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Year: {project.year}</span>
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Metric Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map((st, idx) => (
              <div key={idx} className={`p-3.5 rounded-xl border text-center ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`text-xl font-bold font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{st.value}</div>
                <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{st.label}</div>
              </div>
            ))}
          </div>

          {/* STAR Methodology Deep-Dive */}
          <div className="space-y-4">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              <Sparkles className="w-4 h-4" /> STAR Analysis & Implementation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#050811] border-slate-800/90' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> 1. Situation & Context
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.starCaseStudy.situation}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#050811] border-slate-800/90' : 'bg-slate-50 border-slate-200'}`}>
                <div className={`text-xs font-mono font-bold uppercase mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></span> 2. Task & Target
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.starCaseStudy.task}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#050811] border-slate-800/90' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs font-mono font-bold text-blue-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span> 3. Engineering Action Taken
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.starCaseStudy.action}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#050811] border-slate-800/90' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 4. Business & Technical Result
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.starCaseStudy.result}
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className={`text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <Layers className="w-4 h-4 text-purple-400" /> Pipeline Architecture Flow
              </h4>
              <div className={`flex flex-wrap items-center gap-2 p-3 rounded-xl border text-xs font-mono ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className={`px-3 py-1.5 rounded-lg border ${
                      isDark ? 'bg-slate-900 text-cyan-300 border-slate-700/80' : 'bg-white text-cyan-700 border-slate-300'
                    }`}>
                      {step}
                    </div>
                    {idx < project.architecture.length - 1 && (
                      <ArrowRight className={`w-4 h-4 shrink-0 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Key Insights */}
          <div className="space-y-2.5">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Core Strategic Insights
            </h4>
            <div className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                  isDark ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className={`p-6 border-t flex flex-wrap items-center justify-between gap-4 ${
          isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Open-Source Project Repository
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-medium ${
                isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Close
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
