import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, Calendar, MapPin, Sparkles, Building } from 'lucide-react';

export default function ExperienceEducation({ theme }) {
  const isDark = theme === 'dark';

  const certifications = [
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      year: '2025',
      badge: 'Verified Credential',
      skills: ['Business Requirements Gathering', 'Data Storytelling', 'Tableau Dashboards', 'Root Cause Analysis'],
      description: 'Completed practical simulations in business requirement analysis, data profiling, root cause diagnostics, and executive KPI reporting for corporate stakeholders.'
    },
    {
      title: 'Gen AI Analytics Job Simulation',
      issuer: 'TCS (Forage)',
      year: '2025',
      badge: 'Verified Credential',
      skills: ['Predictive Modeling', 'Prompt Engineering for Analytics', 'Automated Workflows', 'Scenario Analysis'],
      description: 'Implemented generative AI solutions for automated exploratory analysis, synthetic data generation, and rapid predictive scenario evaluation.'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-2 ${isDark ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400' : 'bg-cyan-50 border border-cyan-300 text-cyan-700'}`}>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Education & Certifications
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Solid foundations in Computer Science coupled with rigorous industry analytics certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <div className={`lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border space-y-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`flex items-center gap-3 border-b pb-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className={`p-3 rounded-xl ${isDark ? 'bg-cyan-950/80 border border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border border-cyan-300 text-cyan-600'}`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Bachelor of Engineering (B.E.)</h3>
                <div className={`text-xs font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Computer Science & Engineering</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`flex flex-wrap items-center justify-between text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <span className={`flex items-center gap-1.5 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Building className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} /> Mangyarkarasi College of Engineering
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} /> 2021 – 2025
                </span>
              </div>

              {/* CGPA Badge */}
              <div className={`p-4 rounded-xl flex items-center justify-between ${isDark ? 'bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-slate-50 border border-cyan-200'}`}>
                <div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Academic Standing</div>
                  <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>CGPA: 7.79 / 10.0</div>
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded ${isDark ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-700' : 'bg-cyan-50 text-cyan-700 border border-cyan-300'}`}>
                  First Class
                </span>
              </div>

              {/* Coursework */}
              <div className="space-y-2">
                <div className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Database Management Systems (DBMS)', 'Machine Learning & Predictive Modeling', 'Big Data Analytics', 'Cloud Computing Architecture', 'Probability & Statistics'].map((course, idx) => (
                    <span key={idx} className={`text-xs px-2.5 py-1 rounded-lg border ${isDark ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Certifications List */}
          <div className="lg:col-span-6 space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 border space-y-4 transition-all ${isDark ? 'border-slate-800 hover:border-slate-700' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border text-emerald-400 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h4>
                      <div className="text-xs font-mono text-emerald-400 font-semibold">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    {cert.badge}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((sk, sIdx) => (
                    <span key={sIdx} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isDark ? 'bg-slate-900 text-cyan-300 border-slate-800' : 'bg-slate-100 text-cyan-600 border-slate-200'}`}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
