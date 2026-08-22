const jobMarketData = {
  summary: {
    totalPostingsAnalyzed: 784250,
    sourcesCount: 6,
    avgDataAnalystSalary: 92450,
    topRole: "Senior Data Analyst",
    remoteShare: "38.4%"
  },
  roles: [
    { title: "Data Analyst", avgSalary: 78500, minSalary: 55000, maxSalary: 110000, count: 320450, growth: "+14%" },
    { title: "Senior Data Analyst", avgSalary: 112000, minSalary: 85000, maxSalary: 155000, count: 184200, growth: "+21%" },
    { title: "BI / Analytics Engineer", avgSalary: 124000, minSalary: 95000, maxSalary: 168000, count: 142100, growth: "+29%" },
    { title: "Financial / Business Analyst", avgSalary: 84000, minSalary: 60000, maxSalary: 120000, count: 95300, growth: "+9%" },
    { title: "Lead Analytics Consultant", avgSalary: 145000, minSalary: 110000, maxSalary: 195000, count: 42200, growth: "+18%" }
  ],
  topInDemandSkills: [
    { skill: "SQL", demandPercent: 62.4, postingsCount: 489370, avgSalary: 96500, category: "Database & Querying" },
    { skill: "Python (Pandas/NumPy)", demandPercent: 54.8, postingsCount: 429770, avgSalary: 104200, category: "Data Science & Scripting" },
    { skill: "Power BI", demandPercent: 44.1, postingsCount: 345850, avgSalary: 91200, category: "BI & Visualization" },
    { skill: "Tableau", demandPercent: 39.7, postingsCount: 311350, avgSalary: 94800, category: "BI & Visualization" },
    { skill: "Excel (VBA/Macros)", demandPercent: 51.2, postingsCount: 401530, avgSalary: 81400, category: "Spreadsheets & Reporting" },
    { skill: "Snowflake / BigQuery", demandPercent: 28.6, postingsCount: 224300, avgSalary: 118500, category: "Cloud Data Warehouse" },
    { skill: "PySpark / Big Data", demandPercent: 19.3, postingsCount: 151360, avgSalary: 126000, category: "Big Data & Pipelines" },
    { skill: "DBT / Data Modeling", demandPercent: 17.5, postingsCount: 137240, avgSalary: 121000, category: "Modern Data Stack" }
  ],
  topPayingSkills: [
    { skill: "PySpark", avgSalary: 128500, demand: "High", domain: "Data Pipelines" },
    { skill: "Snowflake", avgSalary: 124200, demand: "High", domain: "Cloud Warehousing" },
    { skill: "DBT", avgSalary: 121800, demand: "Medium-High", domain: "Transformation" },
    { skill: "Airflow", avgSalary: 119400, demand: "Medium", domain: "Orchestration" },
    { skill: "GCP BigQuery", avgSalary: 117600, demand: "High", domain: "Cloud Analytics" },
    { skill: "Python (Pandas)", avgSalary: 104200, demand: "Very High", domain: "Core Analytics" },
    { skill: "SQL", avgSalary: 96500, demand: "Core Universal", domain: "Database" }
  ],
  salaryDistribution: [
    { range: "<$60K", count: 72000, percentage: 9.2 },
    { range: "$60K-$80K", count: 215000, percentage: 27.4 },
    { range: "$80K-$100K", count: 268000, percentage: 34.2 },
    { range: "$100K-$130K", count: 165000, percentage: 21.0 },
    { range: "$130K-$160K", count: 48000, percentage: 6.1 },
    { range: ">$160K", count: 16250, percentage: 2.1 }
  ]
};

const cohortData = {
  cohorts: [
    { cohort: "2024-01", size: 1450, retention: [100, 88.2, 79.4, 73.1, 68.5, 65.2, 62.8, 60.1, 58.4, 56.9, 55.2, 54.0], arpu: 48.5, ltv: 382.4 },
    { cohort: "2024-02", size: 1620, retention: [100, 89.5, 81.0, 75.3, 70.2, 67.1, 64.5, 62.0, 60.3, 58.8, 57.1, null], arpu: 51.2, ltv: 405.1 },
    { cohort: "2024-03", size: 1780, retention: [100, 90.1, 82.6, 77.0, 72.8, 69.4, 66.8, 64.5, 62.7, 61.0, null, null], arpu: 53.0, ltv: 426.8 },
    { cohort: "2024-04", size: 1910, retention: [100, 91.4, 84.1, 78.9, 74.5, 71.3, 68.7, 66.2, 64.1, null, null, null], arpu: 55.4, ltv: 448.2 },
    { cohort: "2024-05", size: 2100, retention: [100, 92.0, 85.3, 80.2, 76.1, 73.0, 70.4, 68.0, null, null, null, null], arpu: 56.8, ltv: 462.5 },
    { cohort: "2024-06", size: 2350, retention: [100, 93.2, 86.8, 81.9, 78.0, 75.1, 72.5, null, null, null, null, null], arpu: 58.2, ltv: 481.0 },
    { cohort: "2024-07", size: 2480, retention: [100, 93.8, 87.5, 83.1, 79.4, 76.5, null, null, null, null, null, null], arpu: 59.0, ltv: 492.3 },
    { cohort: "2024-08", size: 2600, retention: [100, 94.2, 88.4, 84.2, 80.8, null, null, null, null, null, null, null], arpu: 60.5, ltv: 508.6 },
    { cohort: "2024-09", size: 2750, retention: [100, 94.8, 89.2, 85.5, null, null, null, null, null, null, null, null], arpu: 61.8, ltv: 524.0 },
    { cohort: "2024-10", size: 2900, retention: [100, 95.1, 90.0, null, null, null, null, null, null, null, null, null], arpu: 63.0, ltv: 538.5 },
    { cohort: "2024-11", size: 3120, retention: [100, 95.7, null, null, null, null, null, null, null, null, null, null], arpu: 64.2, ltv: 552.0 },
    { cohort: "2024-12", size: 3350, retention: [100, null, null, null, null, null, null, null, null, null, null, null], arpu: 65.5, ltv: 565.0 }
  ],
  channels: [
    { channel: "Organic Search", acquisitionShare: "34%", avgCAC: "$38", avgLTV: "$542", ltvCacRatio: "14.2x", churnRate: "3.2%" },
    { channel: "Paid Marketing (Google/LinkedIn)", acquisitionShare: "28%", avgCAC: "$115", avgLTV: "$480", ltvCacRatio: "4.1x", churnRate: "4.8%" },
    { channel: "Product Referrals", acquisitionShare: "22%", avgCAC: "$18", avgLTV: "$610", ltvCacRatio: "33.8x", churnRate: "2.1%" },
    { channel: "Content & Tech Community", acquisitionShare: "16%", avgCAC: "$24", avgLTV: "$565", ltvCacRatio: "23.5x", churnRate: "2.8%" }
  ]
};

const sqlQueryPresets = [
  {
    id: "top-paying-skills",
    title: "1. Top-Paying Skills for Data Analysts (SQL CTE & Filter)",
    repo: "data-analyst-salary-skills-sql",
    sql: `WITH ranked_skills AS (
  SELECT 
    skills_dim.skills AS skill_name,
    COUNT(job_postings_fact.job_id) AS demand_count,
    ROUND(AVG(job_postings_fact.salary_year_avg), 0) AS avg_annual_salary,
    DENSE_RANK() OVER(ORDER BY AVG(job_postings_fact.salary_year_avg) DESC) AS pay_rank
  FROM job_postings_fact
  INNER JOIN skills_job_dim ON job_postings_fact.job_id = skills_job_dim.job_id
  INNER JOIN skills_dim ON skills_job_dim.skill_id = skills_dim.skill_id
  WHERE job_postings_fact.job_title_short = 'Data Analyst'
    AND job_postings_fact.salary_year_avg IS NOT NULL
  GROUP BY skills_dim.skills
  HAVING COUNT(job_postings_fact.job_id) > 20
)
SELECT 
  pay_rank,
  skill_name,
  CONCAT('$', FORMAT(avg_annual_salary, 0)) AS avg_salary,
  demand_count,
  CASE 
    WHEN avg_annual_salary >= 115000 THEN 'Tier 1 - Premium'
    WHEN avg_annual_salary >= 95000 THEN 'Tier 2 - Above Market'
    ELSE 'Tier 3 - Standard'
  END AS compensation_tier
FROM ranked_skills
WHERE pay_rank <= 8
ORDER BY pay_rank ASC;`,
    explanation: "Calculates the average salary for each skill mentioned in verified Data Analyst job postings with >20 occurrences, ranking them using DENSE_RANK().",
    executionTimeMs: 42,
    columns: ["pay_rank", "skill_name", "avg_salary", "demand_count", "compensation_tier"],
    rows: [
      { pay_rank: 1, skill_name: "PySpark", avg_salary: "$128,500", demand_count: 312, compensation_tier: "Tier 1 - Premium" },
      { pay_rank: 2, skill_name: "Snowflake", avg_salary: "$124,200", demand_count: 845, compensation_tier: "Tier 1 - Premium" },
      { pay_rank: 3, skill_name: "DBT", avg_salary: "$121,800", demand_count: 512, compensation_tier: "Tier 1 - Premium" },
      { pay_rank: 4, skill_name: "Airflow", avg_salary: "$119,400", demand_count: 428, compensation_tier: "Tier 1 - Premium" },
      { pay_rank: 5, skill_name: "BigQuery", avg_salary: "$117,600", demand_count: 670, compensation_tier: "Tier 1 - Premium" },
      { pay_rank: 6, skill_name: "AWS Glue / S3", avg_salary: "$114,300", demand_count: 580, compensation_tier: "Tier 2 - Above Market" },
      { pay_rank: 7, skill_name: "Python (Pandas)", avg_salary: "$104,200", demand_count: 2450, compensation_tier: "Tier 2 - Above Market" },
      { pay_rank: 8, skill_name: "SQL", avg_salary: "$96,500", demand_count: 4890, compensation_tier: "Tier 2 - Above Market" }
    ]
  },
  {
    id: "optimal-skills-intersection",
    title: "2. High-Demand & High-Pay Optimal Skill Matrix",
    repo: "data-analyst-salary-skills-sql",
    sql: `WITH skills_demand AS (
  SELECT 
    sd.skill_id,
    sd.skills,
    COUNT(jpf.job_id) AS total_postings
  FROM job_postings_fact jpf
  JOIN skills_job_dim sjd ON jpf.job_id = sjd.job_id
  JOIN skills_dim sd ON sjd.skill_id = sd.skill_id
  WHERE jpf.job_title_short = 'Data Analyst'
  GROUP BY sd.skill_id, sd.skills
),
skills_avg_salary AS (
  SELECT 
    sd.skill_id,
    ROUND(AVG(jpf.salary_year_avg), 0) AS avg_salary
  FROM job_postings_fact jpf
  JOIN skills_job_dim sjd ON jpf.job_id = sjd.job_id
  JOIN skills_dim sd ON sjd.skill_id = sd.skill_id
  WHERE jpf.job_title_short = 'Data Analyst'
    AND jpf.salary_year_avg IS NOT NULL
  GROUP BY sd.skill_id
)
SELECT 
  sd.skills AS target_skill,
  sd.total_postings AS market_demand,
  CONCAT('$', FORMAT(sas.avg_salary, 0)) AS market_compensation,
  ROUND((sd.total_postings * sas.avg_salary) / 1000000, 2) AS value_index_score
FROM skills_demand sd
JOIN skills_avg_salary sas ON sd.skill_id = sas.skill_id
WHERE sd.total_postings > 200 AND sas.avg_salary > 90000
ORDER BY value_index_score DESC
LIMIT 6;`,
    explanation: "Computes the intersection of high market demand and high compensation to uncover the most ROI-positive technologies for Data Analysts to master.",
    executionTimeMs: 38,
    columns: ["target_skill", "market_demand", "market_compensation", "value_index_score"],
    rows: [
      { target_skill: "SQL", market_demand: 4890, market_compensation: "$96,500", value_index_score: 471.89 },
      { target_skill: "Python", market_demand: 2450, market_compensation: "$104,200", value_index_score: 255.29 },
      { target_skill: "Snowflake", market_demand: 845, market_compensation: "$124,200", value_index_score: 104.95 },
      { target_skill: "Tableau", market_demand: 1820, market_compensation: "$94,800", value_index_score: 172.54 },
      { target_skill: "BigQuery", market_demand: 670, market_compensation: "$117,600", value_index_score: 78.79 },
      { target_skill: "DBT", market_demand: 512, market_compensation: "$121,800", value_index_score: 62.36 }
    ]
  },
  {
    id: "cohort-retention-analysis",
    title: "3. User Cohort Retention & Churn Rate Analysis",
    repo: "sql-cohort-churn-ltv-analysis",
    sql: `WITH user_cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', MIN(order_date)) AS cohort_month
  FROM transactions
  GROUP BY user_id
),
user_activities AS (
  SELECT 
    t.user_id,
    uc.cohort_month,
    DATE_PART('year', AGE(t.order_date, uc.cohort_month)) * 12 +
    DATE_PART('month', AGE(t.order_date, uc.cohort_month)) AS period_month
  FROM transactions t
  JOIN user_cohorts uc ON t.user_id = uc.user_id
)
SELECT 
  TO_CHAR(cohort_month, 'YYYY-MM') AS cohort,
  COUNT(DISTINCT CASE WHEN period_month = 0 THEN user_id END) AS month_0_users,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN period_month = 1 THEN user_id END) / COUNT(DISTINCT CASE WHEN period_month = 0 THEN user_id END), 1) AS m1_retention_pct,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN period_month = 3 THEN user_id END) / COUNT(DISTINCT CASE WHEN period_month = 0 THEN user_id END), 1) AS m3_retention_pct,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN period_month = 6 THEN user_id END) / COUNT(DISTINCT CASE WHEN period_month = 0 THEN user_id END), 1) AS m6_retention_pct
FROM user_activities
GROUP BY cohort_month
ORDER BY cohort_month ASC
LIMIT 6;`,
    explanation: "Tracks user cohort behavior by indexing first purchase month and measuring subsequent month retention percentages.",
    executionTimeMs: 51,
    columns: ["cohort", "month_0_users", "m1_retention_pct", "m3_retention_pct", "m6_retention_pct"],
    rows: [
      { cohort: "2024-01", month_0_users: 1450, m1_retention_pct: "88.2%", m3_retention_pct: "73.1%", m6_retention_pct: "65.2%" },
      { cohort: "2024-02", month_0_users: 1620, m1_retention_pct: "89.5%", m3_retention_pct: "75.3%", m6_retention_pct: "67.1%" },
      { cohort: "2024-03", month_0_users: 1780, m1_retention_pct: "90.1%", m3_retention_pct: "77.0%", m6_retention_pct: "69.4%" },
      { cohort: "2024-04", month_0_users: 1910, m1_retention_pct: "91.4%", m3_retention_pct: "78.9%", m6_retention_pct: "71.3%" },
      { cohort: "2024-05", month_0_users: 2100, m1_retention_pct: "92.0%", m3_retention_pct: "80.2%", m6_retention_pct: "73.0%" },
      { cohort: "2024-06", month_0_users: 2350, m1_retention_pct: "93.2%", m3_retention_pct: "81.9%", m6_retention_pct: "75.1%" }
    ]
  }
];

module.exports = {
  jobMarketData,
  cohortData,
  sqlQueryPresets
};
