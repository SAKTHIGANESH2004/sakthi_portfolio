import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, Check, Copy, ExternalLink, Zap } from 'lucide-react';
import { executeSqlQuery, trackAction } from '../../utils/api';

export default function SqlStudioTab({ sqlPresets, initialQuery, initialResult }) {
  const [selectedPresetId, setSelectedPresetId] = useState(initialQuery ? initialQuery.id : 'top-paying-skills');
  const [currentQuery, setCurrentQuery] = useState(initialQuery);
  const [queryResult, setQueryResult] = useState(initialResult);
  const [isRunningQuery, setIsRunningQuery] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handlePresetSelect = async (presetId) => {
    setSelectedPresetId(presetId);
    const found = sqlPresets.find(p => p.id === presetId);
    if (found) {
      setCurrentQuery(found);
      setIsRunningQuery(true);
      const res = await executeSqlQuery(presetId);
      setQueryResult(res);
      setIsRunningQuery(false);
    }
  };

  const handleRunQuery = async () => {
    if (!selectedPresetId) return;
    setIsRunningQuery(true);
    trackAction('queryRun');
    const res = await executeSqlQuery(selectedPresetId);
    setTimeout(() => {
      setQueryResult(res);
      setIsRunningQuery(false);
    }, 200);
  };

  const handleCopyCode = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Preset Selector & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400 font-semibold">SELECT SQL QUERY PRESET:</div>
          <select
            value={selectedPresetId}
            onChange={(e) => handlePresetSelect(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs sm:text-sm font-mono focus:outline-none focus:border-cyan-500 w-full md:w-auto"
          >
            {sqlPresets.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunQuery}
            disabled={isRunningQuery}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isRunningQuery ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            <span>{isRunningQuery ? 'Executing SQL...' : 'Run Query'}</span>
          </button>

          <button
            onClick={() => handleCopyCode(currentQuery ? currentQuery.sql : '')}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="Copy SQL Query"
          >
            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* SQL Code View */}
      {currentQuery && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              PostgreSQL Engine (CTE / Window Functions)
            </span>
            {currentQuery.repo && (
              <a
                href={`https://github.com/SAKTHIGANESH2004/${currentQuery.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                GitHub Repo: {currentQuery.repo} <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="bg-[#050811] p-4 rounded-xl border border-slate-800/90 font-mono text-xs text-slate-200 overflow-x-auto max-h-56 leading-relaxed">
            <pre>{currentQuery.sql}</pre>
          </div>
        </div>
      )}

      {/* Query Result Grid Table */}
      {queryResult && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                Query Returned {queryResult.totalRows} Rows in {queryResult.executionTimeMs}ms
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Format: Tabular ResultSet
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#080d1a]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/90 text-cyan-400 border-b border-slate-800">
                <tr>
                  {queryResult.columns.map((col, idx) => (
                    <th key={idx} className="py-2.5 px-4 font-semibold uppercase tracking-wider">
                      {col.replace(/_/g, ' ')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {queryResult.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                    {queryResult.columns.map((col, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-4">
                        {col.includes('tier') ? (
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            String(row[col]).includes('Premium') 
                              ? 'bg-purple-950 text-purple-300 border border-purple-800' 
                              : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                          }`}>
                            {row[col]}
                          </span>
                        ) : col.includes('rank') ? (
                          <span className="font-bold text-cyan-400">#{row[col]}</span>
                        ) : (
                          row[col]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {queryResult.explanation && (
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400">
              <strong className="text-slate-200">Analytical Explanation: </strong>
              {queryResult.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
