import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

export default function ForecastTab({ energyData }) {
  const [showArima, setShowArima] = useState(true);
  const [showXgboost, setShowXgboost] = useState(true);

  if (!energyData) return null;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            3-Level Hierarchical ARIMA/SARIMA & XGBoost Forecasting
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Evaluated on 30,000+ hours of electricity load data with GCP BigQuery & DBT (150+ Stars).
          </p>
        </div>

        {/* Model Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowXgboost(!showXgboost)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              showXgboost ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {showXgboost ? '✓ XGBoost (1.91% MAPE)' : '+ XGBoost'}
          </button>
          <button
            onClick={() => setShowArima(!showArima)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              showArima ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {showArima ? '✓ SARIMA (2.98% MAPE)' : '+ SARIMA'}
          </button>
        </div>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">Data Scale</div>
          <div className="text-lg font-bold font-mono text-white">{energyData.metrics.hoursAnalyzed} Hours</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">RMSE Reduction</div>
          <div className="text-lg font-bold font-mono text-emerald-400">-{energyData.metrics.rmseReduction}</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">Forecast Accuracy</div>
          <div className="text-lg font-bold font-mono text-amber-400">{energyData.metrics.mape} MAPE</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">Financial Impact</div>
          <div className="text-lg font-bold font-mono text-cyan-400">{energyData.metrics.annualSavings}/yr</div>
        </div>
      </div>

      {/* Time Series Forecast Chart */}
      <div className="bg-[#060a14] p-5 rounded-2xl border border-slate-800/90 h-[380px] flex flex-col">
        <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
          <span>24-HOUR HOURLY MEGAWATT (MW) LOAD: ACTUAL VS MODELS</span>
          <span className="text-emerald-400">Tuned XGBoost tracks peak load with &lt;1.9% variance</span>
        </div>
        <div className="flex-1 w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={energyData.timeseries} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="hour" stroke="#94a3b8" tick={{ fontSize: 11 }} />
              <YAxis stroke="#94a3b8" unit=" MW" tick={{ fontSize: 11 }} domain={[3000, 7500]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                formatter={(val, name) => [`${val.toLocaleString()} MW`, name]}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              
              <Line type="monotone" dataKey="actualLoad" name="Actual Load (MW)" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
              {showXgboost && (
                <Line type="monotone" dataKey="xgboostForecast" name="XGBoost (1.91% MAPE)" stroke="#10b981" strokeWidth={2} strokeDasharray="4 4" dot={false} />
              )}
              {showArima && (
                <Line type="monotone" dataKey="arimaForecast" name="SARIMA (2.98% MAPE)" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="3 3" dot={false} />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
