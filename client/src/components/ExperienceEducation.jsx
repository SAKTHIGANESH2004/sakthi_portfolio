import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, Calendar, MapPin, Sparkles, Building } from 'lucide-react';

export default function ExperienceEducation() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Solid foundations in Computer Science coupled with rigorous industry analytics certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bachelor of Engineering (B.E.)</h3>
                <div className="text-xs font-mono text-cyan-400">Computer Science & Engineering</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Building className="w-3.5 h-3.5 text-cyan-400" /> Mangyarkarasi College of Engineering
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" /> 2021 – 2025
                </span>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Academic Standing</div>
                  <div className="text-xl font-bold font-mono text-white">CGPA: 7.79 / 10.0</div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-900/60 text-cyan-300 border border-cyan-700">
                  First Class
                </span>
              </div>

              {/* Coursework */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Database Management Systems (DBMS)', 'Machine Learning & Predictive Modeling', 'Big Data Analytics', 'Cloud Computing Architecture', 'Probability & Statistics'].map((course, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
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
                className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                      <div className="text-xs font-mono text-emerald-400 font-semibold">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    {cert.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((sk, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
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
