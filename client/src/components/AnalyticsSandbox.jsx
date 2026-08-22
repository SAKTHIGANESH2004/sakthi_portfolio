import React, { useState, useEffect } from 'react';
import { BarChart3, Terminal, Users, Sparkles } from 'lucide-react';
import { fetchAnalyticsData, fetchSqlPresets, executeSqlQuery } from '../utils/api';
import MarketTab from './sandbox/MarketTab';
import SqlStudioTab from './sandbox/SqlStudioTab';
import CohortTab from './sandbox/CohortTab';

export default function AnalyticsSandbox({ theme }) {
  const [activeTab, setActiveTab] = useState('market'); // market | sql | cohort
  
  const [marketData, setMarketData] = useState(null);
  const [cohortData, setCohortData] = useState(null);
  const [sqlPresets, setSqlPresets] = useState([]);
  const [initialQuery, setInitialQuery] = useState(null);
  const [initialResult, setInitialResult] = useState(null);

  useEffect(() => {
    const loadAllData = async () => {
      const [mRes, cRes, presets] = await Promise.all([
        fetchAnalyticsData('market'),
        fetchAnalyticsData('cohort'),
        fetchSqlPresets()
      ]);
      setMarketData(mRes);
      setCohortData(cRes);
      setSqlPresets(presets || []);

      if (presets && presets.length > 0) {
        setInitialQuery(presets[0]);
        const res = await executeSqlQuery(presets[0].id);
        setInitialResult(res);
      }
    };
    loadAllData();
  }, []);

  return (
    <section id="analytics-sandbox" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-500/40 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP LIVE ANALYTICS WORKSPACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Data Analyst Interactive Sandbox
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Interact directly with live datasets, execute live SQL queries, and simulate customer cohort retention matrices from my GitHub repositories.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              ⚡ 780K+ Postings Dataset
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              ⚡ Live SQL CTE Runner
            </span>
          </div>
        </div>

        {/* Sandbox Container */}
        <div className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090e1c] p-2 gap-2">
            
            <button
              onClick={() => setActiveTab('market')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'market'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>1. U.S. Job Market Explorer (780K EDA)</span>
            </button>

            <button
              onClick={() => setActiveTab('sql')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sql'
                  ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black shadow-md shadow-cyan-500/20 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>2. Interactive SQL Studio (CTEs & Window Funcs)</span>
            </button>

            <button
              onClick={() => setActiveTab('cohort')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'cohort'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>3. Cohort Retention & Churn Matrix</span>
            </button>

          </div>

          {/* Active Tab Views */}
          {activeTab === 'market' && <MarketTab marketData={marketData} />}
          {activeTab === 'sql' && (
            <SqlStudioTab 
              sqlPresets={sqlPresets} 
              initialQuery={initialQuery} 
              initialResult={initialResult} 
            />
          )}
          {activeTab === 'cohort' && <CohortTab cohortData={cohortData} />}

        </div>
      </div>
    </section>
  );
}
