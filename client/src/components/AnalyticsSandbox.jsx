import React, { useState, useEffect } from 'react';
import { BarChart3, Terminal, Users, TrendingUp, Sparkles } from 'lucide-react';
import { fetchAnalyticsData, fetchSqlPresets, executeSqlQuery } from '../utils/api';
import MarketTab from './sandbox/MarketTab';
import SqlStudioTab from './sandbox/SqlStudioTab';
import CohortTab from './sandbox/CohortTab';
import ForecastTab from './sandbox/ForecastTab';

export default function AnalyticsSandbox() {
  const [activeTab, setActiveTab] = useState('market'); // market | sql | cohort | forecast
  
  const [marketData, setMarketData] = useState(null);
  const [cohortData, setCohortData] = useState(null);
  const [energyData, setEnergyData] = useState(null);
  const [sqlPresets, setSqlPresets] = useState([]);
  const [initialQuery, setInitialQuery] = useState(null);
  const [initialResult, setInitialResult] = useState(null);

  useEffect(() => {
    const loadAllData = async () => {
      const [mRes, cRes, eRes, presets] = await Promise.all([
        fetchAnalyticsData('market'),
        fetchAnalyticsData('cohort'),
        fetchAnalyticsData('energy-forecast'),
        fetchSqlPresets()
      ]);
      setMarketData(mRes);
      setCohortData(cRes);
      setEnergyData(eRes);
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP LIVE WORKSPACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Data Analyst Interactive Sandbox
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Interact directly with live datasets, execute live SQL queries, simulate customer cohort retention, and explore time-series forecasts from my GitHub repositories.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
              ⚡ 780K+ Postings Dataset
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
              ⚡ Live SQL CTE Runner
            </span>
          </div>
        </div>

        {/* Sandbox Container */}
        <div className="glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-slate-800 bg-[#090e1c] p-2 gap-2">
            
            <button
              onClick={() => setActiveTab('market')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'market'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>1. U.S. Job Market Explorer (780K EDA)</span>
            </button>

            <button
              onClick={() => setActiveTab('sql')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sql'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>2. Interactive SQL Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('cohort')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'cohort'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>3. Cohort Retention & Churn Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('forecast')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'forecast'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>4. Energy Demand Predictive Forecast</span>
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
          {activeTab === 'forecast' && <ForecastTab energyData={energyData} />}

        </div>
      </div>
    </section>
  );
}
