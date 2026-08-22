import React from 'react';
import { Database, ShieldCheck, Clock, TrendingUp, Cpu, BarChart3, Layers, DollarSign } from 'lucide-react';

export default function ImpactMetrics({ theme }) {
  const isDark = theme === 'dark';

  const metrics = [
    {
      id: 1,
      value: "780K+",
      label: "Job Postings Analyzed",
      subtext: "Exploratory Data Analysis & Data Profiling",
      detail: "Cleaned, standardized, and extracted KPI trends across 780,000+ market records using Python & Power BI.",
      icon: Database,
      accent: "from-cyan-500 to-blue-500",
      borderColor: "group-hover:border-cyan-500/50",
      textColor: "text-cyan-400"
    },
    {
      id: 2,
      value: "99.99%",
      label: "Data Stream Integrity",
      subtext: "PySpark & Snowflake IoT Pipeline",
      detail: "Engineered scalable telemetry pipelines ingesting 50,000+ sensor records/sec with zero packet loss.",
      icon: ShieldCheck,
      accent: "from-emerald-500 to-teal-500",
      borderColor: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400"
    },
    {
      id: 3,
      value: "40%",
      label: "ETL Runtime Reduced",
      subtext: "12 min → 7 min Pipeline Optimization",
      detail: "Tuned distributed data transforms and ML models, reaching 94%+ anomaly accuracy and 95% alerts < 2 mins.",
      icon: Clock,
      accent: "from-purple-500 to-indigo-500",
      borderColor: "group-hover:border-purple-500/50",
      textColor: "text-purple-400"
    },
    {
      id: 4,
      value: "~$50K",
      label: "Annual Cost Savings",
      subtext: "36% Predictive RMSE Reduction",
      detail: "Built 3-level Hierarchical ARIMA/SARIMA + XGBoost forecasting models with 1.91% MAPE on 30,000+ hours data.",
      icon: DollarSign,
      accent: "from-amber-400 to-orange-500",
      borderColor: "group-hover:border-amber-500/50",
      textColor: "text-amber-400"
    }
  ];

  return (
    <section id="impact" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className={`text-xs font-mono font-bold tracking-widest uppercase mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
            Quantified Business & Engineering Outcomes
          </h2>
          <p className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            High-Impact Analytics Delivered at Scale
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group glass-panel rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${item.borderColor} shadow-lg relative overflow-hidden ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
              >
                {/* Subtle top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${isDark ? 'bg-slate-900/90 border border-slate-700/60' : 'bg-slate-100 border border-slate-200'}`}>
                    <Icon className={`w-5 h-5 ${item.textColor}`} />
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${isDark ? 'bg-slate-800/80 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-500 border border-slate-300'}`}>
                    VERIFIED
                  </span>
                </div>

                <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight mb-1 group-hover:${item.textColor} transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.value}
                </div>

                <div className={`text-sm font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                  {item.label}
                </div>

                <div className={`text-xs font-medium mb-3 ${isDark ? 'text-cyan-400/90' : 'text-cyan-600'}`}>
                  {item.subtext}
                </div>

                <p className={`text-xs leading-relaxed border-t pt-3 ${isDark ? 'text-slate-400 border-slate-800/80' : 'text-slate-500 border-slate-200'}`}>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
