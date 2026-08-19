import React, { useState } from 'react';
import { Users, Sliders, ArrowUpRight } from 'lucide-react';

export default function CohortTab({ cohortData }) {
  const [simulatedChurn, setSimulatedChurn] = useState(3.5);
  const [simulatedArpu, setSimulatedArpu] = useState(55);

  if (!cohortData) return null;

  return (
    <div className="p-6 space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400" />
            Customer Cohort Retention & Churn Dynamics
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Analyzing 12-month retention curves and acquisition channel ROI (Repo: sql-cohort-churn-ltv-analysis).
          </p>
        </div>
        <a
          href="https://github.com/SAKTHIGANESH2004/sql-cohort-churn-ltv-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/30 self-start sm:self-auto"
        >
          <span>sql-cohort-churn-ltv-analysis</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Cohort Heatmap Grid */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>MONTH-OVER-MONTH RETENTION HEATMAP (%)</span>
          <span className="text-slate-500">Green = 90%+ | Blue = 70-89% | Slate = 50-69%</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#060a14] p-3">
          <table className="w-full text-center text-xs font-mono">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800">
                <th className="py-2 px-3 text-left font-semibold">Cohort</th>
                <th className="py-2 px-2">Users</th>
                <th className="py-2 px-2">M0</th>
                <th className="py-2 px-2">M1</th>
                <th className="py-2 px-2">M2</th>
                <th className="py-2 px-2">M3</th>
                <th className="py-2 px-2">M4</th>
                <th className="py-2 px-2">M5</th>
                <th className="py-2 px-2">M6</th>
                <th className="py-2 px-2">LTV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {cohortData.cohorts.slice(0, 6).map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 text-left font-bold text-slate-200">{c.cohort}</td>
                  <td className="py-2.5 px-2 text-slate-400">{c.size.toLocaleString()}</td>
                  {c.retention.slice(0, 7).map((val, rIdx) => {
                    if (val === null) return <td key={rIdx} className="py-2 px-2 text-slate-700">-</td>;
                    
                    let cellBg = 'bg-slate-800/40 text-slate-300';
                    if (val >= 90) cellBg = 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-800/50';
                    else if (val >= 75) cellBg = 'bg-cyan-950/80 text-cyan-300 font-medium border border-cyan-800/40';
                    else if (val >= 60) cellBg = 'bg-blue-950/60 text-blue-300 border border-blue-800/30';

                    return (
                      <td key={rIdx} className="p-1">
                        <div className={`py-1 rounded text-[11px] ${cellBg}`}>
                          {val}%
                        </div>
                      </td>
                    );
                  })}
                  <td className="py-2.5 px-2 font-bold text-emerald-400 font-mono">${c.ltv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Channel Efficiency & Interactive What-If Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        
        {/* Acquisition Channels Breakdown */}
        <div className="lg:col-span-7 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <h5 className="text-xs font-mono font-bold text-slate-300 uppercase mb-3">
            Acquisition Channel Unit Economics
          </h5>
          <div className="space-y-2.5">
            {cohortData.channels.map((ch, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs">
                <div>
                  <div className="font-bold text-white">{ch.channel}</div>
                  <div className="text-slate-400 text-[11px]">Share: {ch.acquisitionShare} | Monthly Churn: <span className="text-rose-400">{ch.churnRate}</span></div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-emerald-400 font-bold">LTV/CAC: {ch.ltvCacRatio}</div>
                  <div className="text-slate-400 text-[11px]">CAC: {ch.avgCAC} → LTV: {ch.avgLTV}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Churn Simulator */}
        <div className="lg:col-span-5 bg-gradient-to-br from-purple-950/40 to-slate-900 p-5 rounded-xl border border-purple-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-purple-300 uppercase flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> What-If LTV Simulator
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-200">
              Live Formula
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Simulated Monthly Churn:</span>
                <span className="text-purple-300 font-bold">{simulatedChurn}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="0.1"
                value={simulatedChurn}
                onChange={(e) => setSimulatedChurn(parseFloat(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Average Monthly ARPU:</span>
                <span className="text-purple-300 font-bold">${simulatedArpu}</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                value={simulatedArpu}
                onChange={(e) => setSimulatedArpu(parseInt(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="pt-2 border-t border-purple-500/20 grid grid-cols-2 gap-2 text-center">
            <div className="p-2 rounded-lg bg-slate-950/70 border border-purple-500/20">
              <div className="text-[11px] text-slate-400">Customer Lifetime</div>
              <div className="text-lg font-bold font-mono text-white">
                {(1 / (simulatedChurn / 100)).toFixed(1)} <span className="text-xs text-slate-400">mos</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950/70 border border-purple-500/20">
              <div className="text-[11px] text-slate-400">Calculated LTV</div>
              <div className="text-lg font-bold font-mono text-emerald-400">
                ${Math.round(simulatedArpu / (simulatedChurn / 100)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
