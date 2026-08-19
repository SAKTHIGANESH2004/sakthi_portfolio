import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Database, 
  Sparkles, 
  ArrowRight, 
  FileDown, 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Zap, 
  Terminal, 
  Cpu, 
  Award,
  ExternalLink,
  Code2,
  Activity,
  Layers
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Data Analyst",
    "Analytics & BI Engineer",
    "SQL & ETL Specialist",
    "Predictive Modeling Practitioner"
  ];

  const [activeCodeTab, setActiveCodeTab] = useState('sql');
  const [sensorCount, setSensorCount] = useState(50240);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const sensorInterval = setInterval(() => {
      setSensorCount(prev => prev + Math.floor(Math.random() * 40) - 20);
    }, 1500);
    return () => clearInterval(sensorInterval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Live Stream Telemetry Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-[11px] font-mono shadow-lg overflow-x-auto">
          <div className="flex items-center gap-2 text-emerald-400 shrink-0 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Activity className="w-3.5 h-3.5" />
            <span>STREAM TELEMETRY: {sensorCount.toLocaleString()} SENSORS/SEC (99.99% INTEGRITY)</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-400 shrink-0">
            <span>• 784,250 RECORDS INDEXED</span>
            <span>• QUERY LATENCY: 38ms</span>
            <span className="text-cyan-400">⚡ AIRFLOW AUTOMATION ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Glow Radial Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[140px] pointer-events-none -z-10 rounded-full"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[350px] bg-emerald-500/10 blur-[150px] pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-inner shadow-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">Open for Data Analyst & BI Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> Madurai, India
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Sakthiganesh K</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                  I transform data into strategy as a{' '}
                  <span className="text-cyan-400 font-mono underline decoration-cyan-500/40 underline-offset-8 transition-all duration-300">
                    {roles[roleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Converting <strong className="text-white font-medium">780,000+ complex real-world records</strong> into predictive insights and automated reporting workflows. Specialized in <span className="text-cyan-300 font-semibold">SQL CTEs, Python (Pandas/NumPy), Power BI, Snowflake</span>, and Cloud Analytics Pipelines with a proven record of cutting forecasting errors by 36% and boosting ETL speeds by 40%.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#analytics-sandbox"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Launch Interactive Sandbox</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm transition-all shadow-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/70 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Explore Projects</span>
              </a>
            </div>

            {/* Credential Tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Deloitte Certified Analyst
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> TCS Gen AI Simulation
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" /> B.E. CSE (CGPA: 7.79)
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Code & Telemetry Showcase Widget */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-5 border border-slate-700/70 shadow-2xl relative group overflow-hidden">
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> sakthiganesh-query.sql
                  </span>
                </div>
                
                {/* Switcher Tab */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCodeTab('sql')}
                    className={`px-2.5 py-1 rounded cursor-pointer ${activeCodeTab === 'sql' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    SQL Query
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('python')}
                    className={`px-2.5 py-1 rounded cursor-pointer ${activeCodeTab === 'python' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Python EDA
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs text-slate-200 leading-relaxed bg-[#050811] p-4 rounded-xl border border-slate-800/90 overflow-x-auto">
                {activeCodeTab === 'sql' ? (
                  <pre className="space-y-1">
                    <div><span className="text-purple-400">WITH</span> <span className="text-cyan-300">salary_benchmarks</span> <span className="text-purple-400">AS</span> (</div>
                    <div className="pl-4"><span className="text-purple-400">SELECT</span> skills, <span className="text-emerald-400">AVG</span>(salary_year_avg) <span className="text-purple-400">AS</span> avg_pay</div>
                    <div className="pl-4"><span className="text-purple-400">FROM</span> job_postings_fact <span className="text-slate-500">/* 780K+ rows */</span></div>
                    <div className="pl-4"><span className="text-purple-400">WHERE</span> job_title = <span className="text-amber-300">'Data Analyst'</span></div>
                    <div className="pl-4"><span className="text-purple-400">GROUP BY</span> skills</div>
                    <div>)</div>
                    <div><span className="text-purple-400">SELECT</span> skills, avg_pay,</div>
                    <div className="pl-4"><span className="text-cyan-400">DENSE_RANK</span>() <span className="text-purple-400">OVER</span>(<span className="text-purple-400">ORDER BY</span> avg_pay <span className="text-purple-400">DESC</span>)</div>
                    <div><span className="text-purple-400">FROM</span> salary_benchmarks;</div>
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <div><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</div>
                    <div><span className="text-purple-400">import</span> statsmodels.api <span className="text-purple-400">as</span> sm</div>
                    <div className="text-slate-500"># 30K+ Hours Electricity Telemetry</div>
                    <div>df = pd.read_parquet(<span className="text-amber-300">"s3://iot-load-stream/"</span>)</div>
                    <div>model = sm.tsa.statespace.SARIMAX(</div>
                    <div className="pl-4">df[<span className="text-amber-300">'mw_load'</span>], order=(1,1,1), seasonal_order=(1,1,0,24)</div>
                    <div>).fit(disp=False)</div>
                    <div><span className="text-cyan-300">print</span>(f<span className="text-amber-300">"RMSE Reduced: 36.2% | MAPE: 1.91%"</span>)</div>
                  </pre>
                )}
              </div>

              {/* Execution Summary Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Execution: 38ms (99.99% Integrity)</span>
                </div>
                <a
                  href="#analytics-sandbox"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors"
                >
                  Live Sandbox <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
