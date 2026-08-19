const projects = [
  {
    id: "python-data-analyst-market-analysis",
    title: "U.S. Data Job Market Analysis — 780K+ Postings EDA",
    shortDescription: "End-to-end Exploratory Data Analysis & Power BI reporting on 780,000+ job postings uncovering skill demand and salary benchmarks.",
    category: "Python EDA & BI",
    featured: true,
    year: "2025",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA", "Jupyter"],
    githubUrl: "https://github.com/SAKTHIGANESH2004/python-data-analyst-market-analysis",
    liveDemoType: "market-explorer",
    stats: [
      { label: "Postings Analyzed", value: "780,000+" },
      { label: "Data Quality Score", value: "99.8%" },
      { label: "Key Skills Identified", value: "250+ Skills" },
      { label: "Dashboard Views", value: "1.2K+" }
    ],
    starCaseStudy: {
      situation: "With rapid evolutions in the modern data stack, job seekers and hiring managers lacked clear, data-backed insights on which skills drive the highest salary premiums versus which skills are universal baseline prerequisites.",
      task: "Collect, clean, standardize, and perform deep exploratory data analysis on a raw dataset containing over 780,000 real-world job postings across multiple global job aggregators.",
      action: "Developed Python automated data cleansing pipelines using Pandas and NumPy. Parsed nested JSON skill tags, imputed missing salary ranges using industry-standard statistical boundaries, and developed rich visualization suites using Matplotlib, Seaborn, and interactive Power BI KPI dashboards.",
      result: "Revealed that SQL and Python represent over 60% of all data analyst requirements, while Cloud Data Warehouses (Snowflake, BigQuery) command a 25%+ salary premium. Published reproducible Jupyter workflows on GitHub."
    },
    keyInsights: [
      "SQL is required in 62.4% of all analyst roles, making it the most critical foundational skill.",
      "Python with Pandas/NumPy unlocks senior analyst tiers with an average salary of ,200.",
      "Cloud Warehousing (Snowflake/BigQuery) and Modern Data Stack tools (DBT) offer the highest salary ROI relative to supply."
    ],
    architecture: ["Data Ingestion (780K Raw)", "Pandas Cleaning & Imputation", "Skill Normalization & Extraction", "Power BI / Seaborn Visualization"]
  },
  {
    id: "data-analyst-salary-skills-sql",
    title: "Data Analyst Salary & Skills SQL Analysis",
    shortDescription: "Advanced PostgreSQL analytics evaluating top-paying skills, most in-demand competencies, and optimal career-ROI skills.",
    category: "SQL & Analytics",
    featured: true,
    year: "2025",
    tags: ["PostgreSQL", "SQL CTEs", "Window Functions", "Aggregations", "Data Modeling", "DENSE_RANK"],
    githubUrl: "https://github.com/SAKTHIGANESH2004/data-analyst-salary-skills-sql",
    liveDemoType: "sql-studio",
    stats: [
      { label: "SQL Queries Formulated", value: "30+ Advanced" },
      { label: "Query Execution Speed", value: "<45ms" },
      { label: "Skill Categories", value: "8 Domains" },
      { label: "Optimized CTEs", value: "100% Tested" }
    ],
    starCaseStudy: {
      situation: "Navigating career progression in data analytics requires answering multi-variable queries: what are the top paying skills, what are the most requested skills, and what is the optimal intersection of pay and market demand?",
      task: "Design robust, highly performant SQL scripts utilizing Common Table Expressions (CTEs), Window Functions (DENSE_RANK, OVER), and complex multi-table joins on relational job fact and skill dimension tables.",
      action: "Constructed modular SQL queries categorized by analysis type (Top Paying Skills, In-Demand Skills, Optimal High-Pay High-Demand Matrix). Optimized query plans with indexing strategies and normalized skill dimension relations.",
      result: "Generated instant data-backed answers identifying PySpark, Snowflake, and DBT as top-paying technologies (averaging +), while showing that mastering SQL + Python + Snowflake yields maximum job placement probability."
    },
    keyInsights: [
      "Top paying skills (PySpark, Snowflake, DBT) average ,000 - ,500/year.",
      "Optimal value score is led by SQL, Python, and Snowflake when factoring both posting volume and salary.",
      "Window functions (DENSE_RANK) provide clear percentile distribution over basic GROUP BY aggregations."
    ],
    architecture: ["Relational Schema (Fact & Dims)", "Multi-level CTE Architecture", "Window Aggregations", "Performance Benchmarking"]
  },
  {
    id: "sql-cohort-churn-ltv-analysis",
    title: "SQL Cohort, Churn & Customer Lifetime Value (LTV) Analysis",
    shortDescription: "Strategic behavioral cohort analysis calculating user retention matrices, channel churn, and LTV/CAC ratios.",
    category: "SQL & Analytics",
    featured: true,
    year: "2025",
    tags: ["SQL", "Cohort Analysis", "Churn Modeling", "LTV/CAC", "Retention Heatmap", "Financial Analytics"],
    githubUrl: "https://github.com/SAKTHIGANESH2004/sql-cohort-churn-ltv-analysis",
    liveDemoType: "cohort-matrix",
    stats: [
      { label: "Cohort Tracking", value: "12 Months" },
      { label: "Retention Rate (M6)", value: "65.2%" },
      { label: "LTV/CAC Benchmark", value: "14.2x Organic" },
      { label: "Churn Detection", value: "<2.5% M-o-M" }
    ],
    starCaseStudy: {
      situation: "E-commerce and SaaS platforms frequently struggle to pinpoint when users drop off and which acquisition channels bring high-lifetime-value customers versus high-churn traffic.",
      task: "Develop an end-to-end SQL analytics model to construct monthly cohort retention grids, calculate period-over-period churn rates, and quantify customer lifetime value (LTV) against acquisition cost (CAC).",
      action: "Built complex SQL logic with date truncation, month index arithmetic, and conditional aggregation. Segmented customers across Organic Search, Paid Marketing, Referrals, and Tech Community channels to map retention decay curves.",
      result: "Discovered Product Referrals delivered a 33.8x LTV/CAC ratio with only 2.1% monthly churn, enabling marketing teams to reallocate + in budget toward highest-retaining organic channels."
    },
    keyInsights: [
      "Retention stabilizes significantly after Month 3 (73.1% -> 65.2% over the next 3 months).",
      "Referral-acquired users demonstrate 2.3x higher retention than broad paid marketing channels.",
      "Cohort indexing provides actionable leading indicators of customer health before revenue degradation occurs."
    ],
    architecture: ["Transaction Logs", "First-Purchase Month Indexing", "Period Aging Calculations", "LTV & Churn Matrix Generation"]
  },
  {
    id: "hierarchical-energy-forecasting",
    title: "Hierarchical Energy Demand Forecasting Pipeline",
    shortDescription: "3-level Hierarchical ARIMA/SARIMA and XGBoost predictive models on 30,000+ hours load data, cutting RMSE by 36%.",
    category: "Cloud & Machine Learning",
    featured: true,
    year: "2025–2026",
    tags: ["Python", "Statsmodels", "ARIMA/SARIMA", "XGBoost", "GCP BigQuery", "DBT", "Airflow", "CI/CD"],
    githubUrl: "https://github.com/SAKTHIGANESH2004",
    liveDemoType: "forecast-viewer",
    stats: [
      { label: "Hours of Load Data", value: "30,000+" },
      { label: "RMSE Reduction", value: "36.2%" },
      { label: "MAPE Accuracy", value: "1.91%" },
      { label: "Annual Cost Savings", value: "~,000" }
    ],
    starCaseStudy: {
      situation: "Power grid and regional utility distributors faced high financial penalties due to inaccurate day-ahead energy load forecasts during peak climate spikes.",
      task: "Design and implement a scalable predictive analytics system capable of processing 30,000+ hours of time-series electricity telemetry and outputting reliable hourly forecasts with minimum error variance.",
      action: "Engineered a 3-level hierarchical forecasting pipeline combining seasonal ARIMA/SARIMA models with gradient-boosted XGBoost regressors. Built DBT transformation models with 95% automated test coverage in GCP BigQuery and orchestrated weekly refreshes via Cloud Composer (Airflow).",
      result: "Cut RMSE by 36% down to a 1.91% Mean Absolute Percentage Error (MAPE), optimized query response from 4.2s to 1.8s (57% boost), and drove ~,000 in annual operational cost savings (150+ GitHub Stars)."
    },
    keyInsights: [
      "Combining SARIMA's seasonal decomposition with XGBoost non-linear residual learning reduced peak load overestimation by 44%.",
      "DBT automated data tests ensured 95% governance compliance before feeding predictions to downstream dashboards.",
      "GCP Airflow orchestration reduced manual reporting labor by 8 hours weekly."
    ],
    architecture: ["GCP BigQuery Storage", "DBT Data Governance", "Hierarchical SARIMA + XGBoost", "Airflow / Cloud Composer CI/CD"]
  },
  {
    id: "iot-accident-prevention-platform",
    title: "Accident Prevention System — IoT Analytics Platform",
    shortDescription: "Real-time IoT stream processing pipeline handling 50,000+ sensors/sec with 99.99% data integrity and ML anomaly detection.",
    category: "Cloud & IoT Big Data",
    featured: true,
    year: "2024–2025",
    tags: ["PySpark", "Snowflake", "AWS (S3, Glue)", "Power BI", "Machine Learning", "KNN", "SVM", "Random Forest"],
    githubUrl: "https://github.com/SAKTHIGANESH2004",
    liveDemoType: "iot-stream",
    stats: [
      { label: "Sensor Ingestion", value: "50K+ / sec" },
      { label: "Data Integrity", value: "99.99%" },
      { label: "ETL Runtime Cut", value: "40% (12->7m)" },
      { label: "Incident Detection", value: "95% in <2m" }
    ],
    starCaseStudy: {
      situation: "Industrial machinery and transit fleets required millisecond telemetry monitoring to prevent catastrophic equipment failures and accidents before they escalated.",
      task: "Construct a fault-tolerant big data pipeline to ingest, profile, validate, and analyze high-frequency IoT sensor telemetry while maintaining strict 99.99% data integrity.",
      action: "Leveraged PySpark streaming alongside Snowflake and AWS (S3, AWS Glue). Trained and hyperparameter-tuned machine learning classifiers (KNN, SVM, Random Forest) via GridSearchCV, and built real-time Power BI telemetry monitoring dashboards.",
      result: "Reduced ETL pipeline runtime by 40% (from 12 to 7 minutes), attained 94%+ anomaly detection accuracy, and successfully triggered automated critical incident alerts for 95% of events within 2 minutes."
    },
    keyInsights: [
      "PySpark distributed micro-batching enabled seamless processing of 50,000+ sensor signals per second without data loss.",
      "Random Forest ensemble with tuned hyperparameters provided optimal F1-score for rare anomaly edge cases.",
      "Real-time Power BI automated triggers empowered safety operators to intervene proactively."
    ],
    architecture: ["AWS S3 / Glue Ingestion", "PySpark Distributed Engine", "Snowflake Warehouse", "Power BI Real-Time Telemetry"]
  }
];

module.exports = {
  projects
};
