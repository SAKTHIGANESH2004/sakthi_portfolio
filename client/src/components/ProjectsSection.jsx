import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Database, 
  Layers, 
  BarChart2, 
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { fetchProjects } from '../utils/api';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ theme }) {
  const isDark = theme === 'dark';
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Python EDA & BI', 'SQL & Analytics', 'Cloud & IoT Big Data', 'Cloud & Machine Learning'];

  useEffect(() => {
    const loadProjects = async () => {
      const list = await fetchProjects(selectedCategory);
      setProjects(list);
    };
    loadProjects();
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-2 ${
              isDark
                ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400'
                : 'bg-cyan-50 border border-cyan-300 text-cyan-700'
            }`}>
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION ANALYTICS & CODE REPOSITORIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Featured Analytics Projects
            </h2>
            <p className={`text-sm sm:text-base mt-1 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              End-to-end data analytics solutions across exploratory data analysis, SQL warehouse optimization, cohort churn modeling, IoT telemetry, and predictive forecasting.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                    : isDark
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 border flex flex-col justify-between group relative overflow-hidden ${
                isDark
                  ? 'border-slate-800 hover:border-cyan-500/50'
                  : 'border-slate-200 hover:border-cyan-400'
              }`}
            >
              {/* Category & Year Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${
                    isDark
                      ? 'bg-slate-900 text-cyan-400 border-slate-700/80'
                      : 'bg-slate-100 text-cyan-600 border-slate-200'
                  }`}>
                    {proj.category}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{proj.year}</span>
                </div>

                <h3 className={`text-lg font-bold group-hover:text-cyan-400 transition-colors mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {proj.title}
                </h3>

                <p className={`text-xs line-clamp-3 mb-4 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {proj.shortDescription}
                </p>

                {/* Mini Stats Banner */}
                <div className={`grid grid-cols-2 gap-2 p-2.5 rounded-xl border mb-4 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800/80'
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  {proj.stats.slice(0, 2).map((st, idx) => (
                    <div key={idx}>
                      <div className={`text-xs font-bold font-mono ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>{st.value}</div>
                      <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.slice(0, 5).map((t, idx) => (
                    <span key={idx} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark
                        ? 'bg-slate-900 text-slate-400 border-slate-800'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {t}
                    </span>
                  ))}
                  {proj.tags.length > 5 && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isDark
                        ? 'bg-slate-900 text-slate-500'
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      +{proj.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`pt-4 border-t flex items-center justify-between gap-2 ${
                isDark ? 'border-slate-800/80' : 'border-slate-200'
              }`}>
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Case Study (STAR)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal View */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
            theme={theme}
          />
        )}

      </div>
    </section>
  );
}
