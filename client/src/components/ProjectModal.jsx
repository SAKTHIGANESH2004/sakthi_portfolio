import React from 'react';
import { X, Github, ExternalLink, CheckCircle, Database, Layers, TrendingUp, Sparkles, Code2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">Year: {project.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Metric Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map((st, idx) => (
              <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-cyan-400">{st.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{st.label}</div>
              </div>
            ))}
          </div>

          {/* STAR Methodology Deep-Dive */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> STAR Analysis & Implementation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#050811] p-4 rounded-xl border border-slate-800/90">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> 1. Situation & Context
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.starCaseStudy.situation}
                </p>
              </div>

              <div className="bg-[#050811] p-4 rounded-xl border border-slate-800/90">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span> 2. Task & Target
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.starCaseStudy.task}
                </p>
              </div>

              <div className="bg-[#050811] p-4 rounded-xl border border-slate-800/90">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span> 3. Engineering Action Taken
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.starCaseStudy.action}
                </p>
              </div>

              <div className="bg-[#050811] p-4 rounded-xl border border-slate-800/90">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 4. Business & Technical Result
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.starCaseStudy.result}
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" /> Pipeline Architecture Flow
              </h4>
              <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono">
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-cyan-300 border border-slate-700/80">
                      {step}
                    </div>
                    {idx < project.architecture.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Key Insights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
              Core Strategic Insights
            </h4>
            <div className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              Tech Stack & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Open-Source Project Repository
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium"
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
