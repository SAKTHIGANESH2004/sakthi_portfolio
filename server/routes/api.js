const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { projects } = require('../data/projectsData');
const { jobMarketData, cohortData, energyForecastData, sqlQueryPresets } = require('../data/datasets');
const { saveContactMessage, getContactMessages } = require('../models/Contact');
const { getStats, recordAction } = require('../models/Analytics');

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Sakthiganesh K Portfolio API',
    version: '1.1.0'
  });
});

// Profile / Resume Metadata
router.get('/profile', (req, res) => {
  res.json({
    name: 'Sakthiganesh K',
    title: 'Data Analyst | Analytics • Reporting • Business Insights',
    phone: '7603868752',
    formattedPhone: '+91 7603868752',
    email: 'sakthiganeshk27@gmail.com',
    location: 'Madurai, Tamil Nadu, India',
    github: 'https://github.com/SAKTHIGANESH2004',
    linkedin: 'https://www.linkedin.com/in/sakthiganesh-k-60ba8b292',
    education: {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Mangyarkarasi College of Engineering',
      period: '2021 – 2025',
      cgpa: '7.79 / 10',
      coursework: ['Database Systems', 'Machine Learning', 'Cloud Computing', 'Big Data Analytics']
    },
    certifications: [
      {
        title: 'Data Analytics Simulation',
        issuer: 'Deloitte (Forage)',
        year: '2025',
        badge: 'Verified Credential',
        skillsGained: ['Business Insights', 'Data Storytelling', 'Tableau Dashboards', 'Root Cause Analysis']
      },
      {
        title: 'Gen AI Analytics Simulation',
        issuer: 'TCS (Forage)',
        year: '2025',
        badge: 'Verified Credential',
        skillsGained: ['Predictive Modeling', 'Prompt Engineering for Analytics', 'Automated Workflows']
      }
    ],
    technicalSkills: {
      analyticsAndViz: ['Power BI', 'Tableau', 'Advanced Excel (Pivot, VLOOKUP/XLOOKUP, VBA/Macros)', 'Matplotlib', 'Seaborn', 'KPI Dashboards'],
      dataProcessing: ['Python (Pandas, NumPy)', 'SQL & DB Management', 'Exploratory Data Analysis (EDA)', 'Data Profiling & Quality Checks', 'Statistics & Regression', 'ETL Pipelines'],
      analyticalMethods: ['Root Cause Analysis', 'Scenario & What-If Analysis', 'Requirements Management', 'Data Governance & Validation'],
      cloudAndBigData: ['Snowflake', 'AWS (S3, Glue)', 'GCP (BigQuery, Composer)', 'PySpark', 'DBT', 'Airflow'],
      tools: ['Jupyter Notebook', 'Git', 'GitHub', 'Google Sheets', 'Microsoft Office Suite']
    },
    keyAchievements: [
      { metric: '780K+', label: 'Job Postings Analyzed', detail: 'Conducted end-to-end EDA & data profiling to isolate skill demand and salary benchmarks.' },
      { metric: '99.99%', label: 'Data Pipeline Integrity', detail: 'Built PySpark + Snowflake streaming architecture handling 50,000+ sensors/second.' },
      { metric: '40%', label: 'ETL Runtime Reduction', detail: 'Trimmed pipeline runtime from 12 to 7 minutes with 94%+ ML anomaly detection accuracy.' },
      { metric: '~$50K', label: 'Annual Cost Savings', detail: 'Cut forecasting RMSE by 36% (1.91% MAPE) with hierarchical SARIMA + XGBoost models.' }
    ]
  });
});

// Projects Listing & Filtering
router.get('/projects', (req, res) => {
  const { category, featured } = req.query;
  let result = [...projects];

  if (featured === 'true') {
    result = result.filter(p => p.featured);
  }
  if (category && category !== 'All') {
    result = result.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  recordAction('projectExplore');
  res.json({ count: result.length, projects: result });
});

// Individual Project Details
router.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// Analytics Datasets for Interactive Visualizations
router.get('/analytics-data/market', (req, res) => {
  res.json(jobMarketData);
});

router.get('/analytics-data/cohort', (req, res) => {
  res.json(cohortData);
});

router.get('/analytics-data/energy-forecast', (req, res) => {
  res.json(energyForecastData);
});

// SQL Playground Presets & Execution
router.get('/sql/presets', (req, res) => {
  res.json(sqlQueryPresets);
});

router.post('/sql/execute', (req, res) => {
  const { queryId, customSql } = req.body;
  recordAction('queryRun');

  const preset = sqlQueryPresets.find(p => p.id === queryId);
  if (preset) {
    return res.json({
      success: true,
      queryId: preset.id,
      title: preset.title,
      sql: preset.sql,
      executionTimeMs: preset.executionTimeMs + Math.floor(Math.random() * 8) - 4,
      totalRows: preset.rows.length,
      columns: preset.columns,
      rows: preset.rows,
      explanation: preset.explanation
    });
  }

  res.json({
    success: true,
    custom: true,
    executionTimeMs: Math.floor(Math.random() * 30) + 20,
    totalRows: 4,
    columns: ["metric_segment", "sample_count", "calculated_metric", "variance_status"],
    rows: [
      { metric_segment: "Custom Segment A", sample_count: 1420, calculated_metric: "89.4%", variance_status: "Nominal" },
      { metric_segment: "Custom Segment B", sample_count: 980, calculated_metric: "94.1%", variance_status: "Above Benchmark" },
      { metric_segment: "Custom Segment C", sample_count: 1850, calculated_metric: "78.2%", variance_status: "Within Range" },
      { metric_segment: "Aggregated Average", sample_count: 4250, calculated_metric: "87.2%", variance_status: "Optimal" }
    ],
    explanation: "Custom SQL evaluated successfully against simulated analytics warehouse."
  });
});

// Contact Inquiries with Email Dispatch & Persistence
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, company, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const targetEmail = 'sakthiganeshk27@gmail.com';
    const saved = await saveContactMessage({ name, email, subject, company, message });

    // Console notification & Email dispatch logging
    console.log(`\n======================================================`);
    console.log(`📧 NEW RECRUITER / CANDIDATE MESSAGE RECEIVED!`);
    console.log(`➡️ Recipient: ${targetEmail}`);
    console.log(`👤 From: ${name} (${email}) - Company: ${company || 'N/A'}`);
    console.log(`📌 Subject: ${subject || 'Portfolio Inquiry'}`);
    console.log(`💬 Message:\n${message}`);
    console.log(`======================================================\n`);

    // Optional Nodemailer SMTP dispatch if env variables are present
    let emailStatus = 'recorded';
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"${name}" <${process.env.SMTP_USER}>`,
          replyTo: email,
          to: targetEmail,
          subject: `[Portfolio Inquiry] ${subject || 'Data Analyst Role'} - ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`
        });
        emailStatus = 'sent_via_smtp';
      } catch (mailErr) {
        console.warn('SMTP dispatch notice:', mailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received for Sakthiganesh K (sakthiganeshk27@gmail.com).',
      targetEmail: targetEmail,
      emailStatus: emailStatus,
      data: saved
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process contact inquiry: ' + err.message });
  }
});

router.get('/contact/messages', async (req, res) => {
  const messages = await getContactMessages();
  res.json({ count: messages.length, targetInbox: 'sakthiganeshk27@gmail.com', messages });
});

// Live Stats Tracker
router.get('/stats', (req, res) => {
  res.json(getStats());
});

router.post('/stats/track', (req, res) => {
  const { action } = req.body;
  const updated = recordAction(action);
  res.json(updated);
});

module.exports = router;
