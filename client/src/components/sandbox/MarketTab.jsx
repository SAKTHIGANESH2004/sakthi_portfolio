import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area, Cell, Legend
} from 'recharts';
import { ArrowUpRight } from 'lucide-react';

export default function MarketTab({ marketData }) {
  const [marketView, setMarketView] = useState('demand'); // demand | salary | roles | distribution

  if (!marketData) return null;

  return (
    <div className="p-6 space-y-6">
      {/* Top Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMarketView('demand')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              marketView === 'demand' ? 'bg-cyan-500 text-black shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Skill Demand %
          </button>
          <button
            onClick={() => setMarketView('salary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              marketView === 'salary' ? 'bg-cyan-500 text-black shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Top Paying Skills ($)
          </button>
          <button
            onClick={() => setMarketView('roles')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              marketView === 'roles' ? 'bg-cyan-500 text-black shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Role Salary Ranges
          </button>
          <button
            onClick={() => setMarketView('distribution')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              marketView === 'distribution' ? 'bg-cyan-500 text-black shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Salary Distribution
          </button>
        </div>

        <a
          href="https://github.com/SAKTHIGANESH2004/python-data-analyst-market-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30 transition-colors self-start lg:self-auto"
        >
          <span>Repo: python-data-analyst-market-analysis</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="text-xs text-slate-400">Total Analyzed</div>
          <div className="text-xl font-bold font-mono text-cyan-400">{marketData.summary.totalPostingsAnalyzed.toLocaleString()}+</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="text-xs text-slate-400">Avg Analyst Salary</div>
          <div className="text-xl font-bold font-mono text-emerald-400">${marketData.summary.avgDataAnalystSalary.toLocaleString()}</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="text-xs text-slate-400">Most Demanded Skill</div>
          <div className="text-xl font-bold font-mono text-purple-400">SQL (62.4%)</div>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <div className="text-xs text-slate-400">Remote Work Share</div>
          <div className="text-xl font-bold font-mono text-amber-400">{marketData.summary.remoteShare}</div>
        </div>
      </div>

      {/* Dynamic Chart Container */}
      <div className="bg-[#060a14] p-5 rounded-2xl border border-slate-800/90 h-[380px]">
        {marketView === 'demand' && (
          <div className="h-full flex flex-col">
            <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
              <span>SKILL DEMAND FREQUENCY (% OF 780K+ POSTINGS)</span>
              <span className="text-cyan-400">Core Prerequisite: SQL & Python</span>
            </div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData.topInDemandSkills} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="skill" stroke="#94a3b8" tick={{ fontSize: 11 }} angle={-15} textAnchor="end" />
                  <YAxis stroke="#94a3b8" unit="%" tick={{ fontSize: 11 }} domain={[0, 70]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Job Postings Demand']}
                  />
                  <Bar dataKey="demandPercent" fill="#06b6d4" radius={[6, 6, 0, 0]}>
                    {marketData.topInDemandSkills.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={idx === 0 ? '#38bdf8' : idx === 1 ? '#22d3ee' : idx === 2 ? '#34d399' : '#0891b2'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {marketView === 'salary' && (
          <div className="h-full flex flex-col">
            <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
              <span>AVERAGE ANNUAL COMPENSATION BY SPECIALTY ($ USD)</span>
              <span className="text-emerald-400">Premium: Cloud & Distributed Pipelines</span>
            </div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData.topPayingSkills} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis type="number" stroke="#94a3b8" tickFormatter={(v) => `$${v/1000}k`} tick={{ fontSize: 11 }} domain={[80000, 140000]} />
                  <YAxis dataKey="skill" type="category" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Avg Annual Salary']}
                  />
                  <Bar dataKey="avgSalary" fill="#10b981" radius={[0, 6, 6, 0]}>
                    {marketData.topPayingSkills.map((entry, idx) => (
                      <Cell key={`pay-${idx}`} fill={idx < 3 ? '#34d399' : '#059669'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {marketView === 'roles' && (
          <div className="h-full flex flex-col">
            <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
              <span>ANALYTICS ROLE SALARY SPREAD (MIN, AVG, MAX)</span>
              <span className="text-purple-400">Growth: BI & Analytics Engineering (+29%)</span>
            </div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketData.roles} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="title" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v/1000}k`} tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    formatter={(val, name) => [`$${val.toLocaleString()}`, name]}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                  <Bar dataKey="minSalary" name="Min Salary" fill="#64748b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="avgSalary" name="Average Salary" fill="#818cf8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="maxSalary" name="Max Salary" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {marketView === 'distribution' && (
          <div className="h-full flex flex-col">
            <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
              <span>SALARY BRACKET DENSITY FOR U.S. DATA ANALYSTS</span>
              <span className="text-amber-400">Sweet Spot: $80K - $100K (34.2%)</span>
            </div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData.salaryDistribution} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                  <defs>
                    <linearGradient id="salaryDistGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="range" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" unit="%" tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    formatter={(val, name, item) => [`${val}% (${item.payload.count.toLocaleString()} jobs)`, 'Postings Share']}
                  />
                  <Area type="monotone" dataKey="percentage" stroke="#f59e0b" fillOpacity={1} fill="url(#salaryDistGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
