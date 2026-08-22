import React, { useState } from 'react';
import { 
  Cpu, 
  BarChart3, 
  Database, 
  Cloud, 
  Compass, 
  Sparkles, 
  Search,
  CheckCircle2,
  Sliders
} from 'lucide-react';

export default function SkillsMatrix({ theme }) {
  const isDark = theme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      id: 'analytics-viz',
      title: 'Analytics & Visualization',
      icon: BarChart3,
      accent: isDark ? 'text-cyan-400' : 'text-cyan-600',
      borderAccent: isDark ? 'border-cyan-500/40' : 'border-cyan-400/40',
      skills: [
        { name: 'Power BI', level: 'Advanced (DAX, Modeling)', tag: 'BI & KPIs' },
        { name: 'Tableau', level: 'Advanced Dashboards', tag: 'Visual Storytelling' },
        { name: 'Advanced Excel', level: 'Pivot Tables, XLOOKUP, VBA/Macros', tag: 'Reporting' },
        { name: 'Matplotlib & Seaborn', level: 'Statistical Plotting', tag: 'Python Viz' },
        { name: 'Executive Dashboards', level: 'KPI Scorecards', tag: 'Business Insights' }
      ]
    },
    {
      id: 'data-processing',
      title: 'Data Processing & Analysis',
      icon: Database,
      accent: isDark ? 'text-emerald-400' : 'text-emerald-600',
      borderAccent: isDark ? 'border-emerald-500/40' : 'border-emerald-400/40',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 'Data Wrangling & Cleansing', tag: 'Core Analytics' },
        { name: 'SQL & Database Management', level: 'CTEs, Window Functions, Joins', tag: 'Querying' },
        { name: 'Exploratory Data Analysis (EDA)', level: '780K+ Postings Profiling', tag: 'Profiling' },
        { name: 'Data Quality & Imputation', level: 'Standardization Checks', tag: 'Governance' },
        { name: 'Statistical Modeling', level: 'Hypothesis Testing, Regression', tag: 'Predictive' },
        { name: 'ETL Pipelines', level: 'Automation & Workflow Ops', tag: 'Pipelines' }
      ]
    },
    {
      id: 'cloud-bigdata',
      title: 'Cloud & Big Data',
      icon: Cloud,
      accent: isDark ? 'text-purple-400' : 'text-purple-600',
      borderAccent: isDark ? 'border-purple-500/40' : 'border-purple-400/40',
      skills: [
        { name: 'Snowflake', level: 'Cloud Data Warehousing', tag: 'Cloud DB' },
        { name: 'AWS (S3, Glue)', level: 'Serverless Data Ingestion', tag: 'AWS Stack' },
        { name: 'GCP (BigQuery, Composer)', level: 'BigQuery SQL & Airflow', tag: 'Google Cloud' },
        { name: 'PySpark', level: '50K+ Sensors/sec Processing', tag: 'Distributed' },
        { name: 'DBT', level: 'Data Transformation & Tests', tag: 'Modeling' },
        { name: 'Airflow', level: 'Pipeline Scheduling & CI/CD', tag: 'Orchestration' }
      ]
    },
    {
      id: 'analytical-methods',
      title: 'Analytical Methods & Strategy',
      icon: Compass,
      accent: isDark ? 'text-amber-400' : 'text-amber-600',
      borderAccent: isDark ? 'border-amber-500/40' : 'border-amber-400/40',
      skills: [
        { name: 'Root Cause Analysis', level: 'Anomaly Validation', tag: 'Diagnostics' },
        { name: 'Scenario & What-If Analysis', level: 'Demand & Revenue Sim', tag: 'Decision Support' },
        { name: 'Data Governance & Validation', level: '95% Test Coverage', tag: 'Integrity' },
        { name: 'Data Storytelling', level: 'Translating Data to ROI', tag: 'Stakeholder Comms' },
        { name: 'Process Improvement', level: '40% Runtime Speedup', tag: 'Optimization' }
      ]
    }
  ];

  const filteredCategories = skillCategories.map(cat => {
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter(cat => activeCategory === 'All' || cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className={`py-20 relative ${isDark ? 'bg-slate-950/40' : 'bg-slate-50/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${isDark ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400' : 'bg-cyan-50 border-cyan-300 text-cyan-600'} border text-xs font-mono mb-2`}>
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Skills & Analytics Stack
            </h2>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm sm:text-base mt-1 max-w-2xl`}>
              Equipped with end-to-end data capabilities from query formulation and big data transformations to business storytelling.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'} absolute left-3 top-1/2 -translate-y-1/2`} />
            <input
              type="text"
              placeholder="Search skill (e.g. SQL, DBT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full ${isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-900'} border rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-cyan-500`}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`glass-panel rounded-2xl p-6 border ${isDark ? 'border-slate-800 hover:border-slate-700' : 'border-slate-200 hover:border-slate-300'} space-y-4 shadow-lg transition-all`}
              >
                <div className={`flex items-center justify-between border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} pb-3`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'} border`}>
                      <Icon className={`w-5 h-5 ${cat.accent}`} />
                    </div>
                    <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{cat.title}</h3>
                  </div>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{cat.skills.length} skills</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl ${isDark ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' : 'bg-slate-100 border-slate-200 hover:border-slate-300'} border transition-colors flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-bold text-xs ${isDark ? 'text-white' : 'text-slate-900'}`}>{skill.name}</span>
                          <span className={`text-[10px] font-mono ${isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/50' : 'text-cyan-600 bg-cyan-50 border-cyan-200'} px-1.5 py-0.5 rounded border`}>
                            {skill.tag}
                          </span>
                        </div>
                        <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
