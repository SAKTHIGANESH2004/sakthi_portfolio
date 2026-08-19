const API_BASE = '/api';
const TARGET_INBOX = 'sakthiganeshk27@gmail.com';

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
  } catch (err) {
    return {
      name: 'Sakthiganesh K',
      title: 'Data Analyst | Analytics • Reporting • Business Insights',
      phone: '7603868752',
      formattedPhone: '+91 7603868752',
      email: TARGET_INBOX,
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
      ]
    };
  }
};

export const fetchProjects = async (category = 'All') => {
  try {
    const query = category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE}/projects${query}`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const data = await res.json();
    return data.projects || [];
  } catch (err) {
    console.warn('API fetchProjects error:', err);
    return [];
  }
};

export const fetchAnalyticsData = async (datasetName) => {
  try {
    const res = await fetch(`${API_BASE}/analytics-data/${datasetName}`);
    if (!res.ok) throw new Error(`Failed to fetch dataset ${datasetName}`);
    return await res.json();
  } catch (err) {
    console.warn(`API fetchAnalyticsData (${datasetName}) error:`, err);
    return null;
  }
};

export const fetchSqlPresets = async () => {
  try {
    const res = await fetch(`${API_BASE}/sql/presets`);
    if (!res.ok) throw new Error('Failed to fetch SQL presets');
    return await res.json();
  } catch (err) {
    console.warn('API fetchSqlPresets error:', err);
    return [];
  }
};

export const executeSqlQuery = async (queryId, customSql) => {
  try {
    const res = await fetch(`${API_BASE}/sql/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ queryId, customSql })
    });
    if (!res.ok) throw new Error('Query execution failed');
    return await res.json();
  } catch (err) {
    console.warn('API executeSqlQuery error:', err);
    return { success: false, error: err.message };
  }
};

// Dual delivery: Sends to backend API and sends direct Gmail notification via FormSubmit
export const sendContactMessage = async (formData) => {
  let backendResult = null;
  let emailDeliveryResult = null;

  // 1. Send to Portfolio Express Backend (Stores in DB & Logs)
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      backendResult = await res.json();
    }
  } catch (backendErr) {
    console.warn('Backend contact save note:', backendErr.message);
  }

  // 2. Direct Inbox Delivery to sakthiganeshk27@gmail.com via FormSubmit
  try {
    const mailRes = await fetch(`https://formsubmit.co/ajax/${TARGET_INBOX}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `[Portfolio Candidate Inquiry] ${formData.subject || 'Data Analyst Role'} - ${formData.name}`,
        _template: 'table',
        _captcha: 'false',
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        subject: formData.subject || 'Data Analyst Opportunity',
        message: formData.message
      })
    });
    if (mailRes.ok) {
      emailDeliveryResult = await mailRes.json();
    }
  } catch (mailErr) {
    console.warn('Direct mail dispatch note:', mailErr.message);
  }

  return {
    success: true,
    backend: backendResult,
    emailDelivery: emailDeliveryResult,
    targetInbox: TARGET_INBOX
  };
};

export const fetchLiveStats = async () => {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to fetch stats');
    return await res.json();
  } catch (err) {
    return { pageViews: 1420, queriesExecuted: 328, resumesDownloaded: 89, projectsExplored: 615 };
  }
};

export const trackAction = async (action) => {
  try {
    await fetch(`${API_BASE}/stats/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action })
    });
  } catch (e) {}
};
