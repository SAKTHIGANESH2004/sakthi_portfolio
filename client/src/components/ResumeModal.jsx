import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, FileText, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { trackAction } from '../utils/api';

export default function ResumeModal({ onClose }) {
  const TARGET_EMAIL = 'sakthiganeshk27@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/sakthiganesh-k-60ba8b292';

  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    trackAction('resumeDownload');
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in duration-200">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-white font-mono">SAKTHIGANESH_K_DATA_ANALYST_RESUME.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold hover:scale-105 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="p-8 sm:p-12 bg-white text-slate-900 max-h-[80vh] overflow-y-auto font-sans leading-relaxed text-xs sm:text-sm">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase mb-1">
              SAKTHIGANESH K
            </h1>
            <div className="text-slate-700 font-semibold text-xs sm:text-sm mb-2">
              Data Analyst | Analytics • Reporting • Business Insights
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-600" /> {TARGET_EMAIL}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 7603868752
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" /> Madurai, India
              </span>
              <span>•</span>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-blue-700 underline font-semibold">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href="https://github.com/SAKTHIGANESH2004" target="_blank" rel="noreferrer" className="text-cyan-700 underline font-semibold">
                GitHub: SAKTHIGANESH2004
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800">
              <li>
                Data Analyst experienced in <strong>Exploratory Data Analysis (EDA)</strong>, data profiling, and root cause analysis, building end-to-end analytics projects on real-world datasets (<strong>780K+ records</strong>) using Python, SQL, Advanced Excel (Macros/VBA), Power BI, Tableau, and statistical/predictive modeling.
              </li>
              <li>
                Delivered actionable, predictive insights and automated reporting workflows; gathered business requirements from cross-functional stakeholders; monitored KPIs and improved process efficiency by <strong>40%</strong> while ensuring data accuracy, integrity, quality governance, and confidentiality.
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-slate-800">
              <p>• <strong>Analytics & Visualization:</strong> Power BI, Tableau, Advanced Excel (Pivot Tables, VLOOKUP/XLOOKUP, Excel Macros/VBA), Dashboards & KPI Reporting, Matplotlib, Seaborn</p>
              <p>• <strong>Data Processing & Analysis:</strong> Python (Pandas, NumPy), SQL & Database Management, Exploratory Data Analysis (EDA), Data Profiling & Quality Checks, Statistics (Hypothesis Testing, Regression Analysis), Predictive Modeling, ETL Pipelines, Data Cleaning</p>
              <p>• <strong>Analytical Methods:</strong> Root Cause Analysis, Scenario & What-If Analysis, Requirements Management, Data Governance & Validation</p>
              <p>• <strong>Cloud & Big Data:</strong> Snowflake, AWS (S3, Glue), GCP (BigQuery, Composer), PySpark, DBT, Airflow</p>
              <p>• <strong>Tools & Platforms:</strong> Jupyter Notebook, Git, GitHub, Google Sheets, Microsoft Office Suite</p>
              <p>• <strong>Core Competencies:</strong> Analytical Thinking, Strategic & Enterprise Mindset, Data Storytelling, Process Improvement, Cross-Departmental Collaboration</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2">
              KEY ACHIEVEMENTS
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-800">
              <li>Analyzed <strong>780,000+ job postings</strong> using EDA and data profiling to uncover skill demand trends and salary benchmarks</li>
              <li>Built IoT data pipeline processing <strong>50,000+ sensors/second</strong> with <strong>99.99% data integrity</strong></li>
              <li>Reduced ETL runtime by <strong>40%</strong> and achieved <strong>94%+ anomaly detection accuracy</strong> through root cause analysis and model tuning</li>
              <li>Cut forecasting error (RMSE) by <strong>36%</strong> via predictive modeling, enabling <strong>~$50K annual savings</strong></li>
            </ul>
          </div>

          {/* Project Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-3">
              PROJECT EXPERIENCE
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>U.S. Data Job Market Analysis — EDA</span>
                  <span className="font-mono text-xs">2025</span>
                </div>
                <div className="text-xs text-slate-600 font-medium mb-1">
                  Python (Pandas, NumPy, Matplotlib, Seaborn), Jupyter, Power BI
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Collected and analyzed 780,000+ job postings from multiple sources through Exploratory Data Analysis (EDA) to identify KPI-driven skill demand trends and salary benchmarks.</li>
                  <li>Performed data profiling and quality checks — handled missing values, parsed nested skill data, and standardized formats for analysis-ready datasets.</li>
                  <li>Built interactive Power BI dashboards and Matplotlib/Seaborn reports to present findings to stakeholders; published on GitHub.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>Accident Prevention System — IoT Analytics Platform</span>
                  <span className="font-mono text-xs">2024–2025</span>
                </div>
                <div className="text-xs text-slate-600 font-medium mb-1">
                  Python, PySpark, Snowflake, AWS, Power BI, Machine Learning (KNN/SVM/RF)
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Built end-to-end IoT data pipeline (PySpark, Snowflake, AWS) processing 50,000+ sensors/second with 99.99% data integrity.</li>
                  <li>Reduced ETL runtime 40% (12→7 min) and achieved 94%+ anomaly detection accuracy via ML models tuned with GridSearchCV.</li>
                  <li>Designed real-time Power BI dashboards to monitor KPIs and automated alerts detecting 95% of incidents within 2 minutes.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>Hierarchical Energy Demand Forecasting</span>
                  <span className="font-mono text-xs">2025–2026</span>
                </div>
                <div className="text-xs text-slate-600 font-medium mb-1">
                  Python, Statsmodels, ARIMA/SARIMA, XGBoost, GCP (BigQuery, Composer), DBT, Airflow
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Developed 3-level Hierarchical ARIMA/SARIMA and XGBoost predictive models on 30,000+ hours of electricity load data, cutting RMSE 36% (1.91% MAPE).</li>
                  <li>Built DBT transformation models (95% test coverage) supporting data governance and validation; optimized SQL queries for 57% faster processing (4.2s → 1.8s).</li>
                  <li>Automated weekly reporting refreshes via GCP Cloud Composer (Airflow); published with CI/CD pipeline (150+ GitHub stars), saving ~$50K annually.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2">
              CERTIFICATIONS & EDUCATION
            </h2>
            <div className="space-y-1.5 text-slate-800">
              <p>• <strong>Certifications:</strong> Data Analytics Simulation – Deloitte (Forage), 2025 | Gen AI Analytics Simulation – TCS (Forage), 2025</p>
              <p>• <strong>Education:</strong> B.E. Computer Science, Mangyarkarasi College of Engineering | 2021–2025 | <strong>CGPA: 7.79/10</strong></p>
              <p>• <strong>Coursework:</strong> Database Systems, Machine Learning, Cloud Computing, Big Data Analytics</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
