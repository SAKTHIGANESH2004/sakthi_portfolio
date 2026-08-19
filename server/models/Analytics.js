const mongoose = require('mongoose');

let statStore = {
  pageViews: 1420,
  queriesExecuted: 328,
  resumesDownloaded: 89,
  projectsExplored: 615,
  lastUpdated: new Date().toISOString()
};

const getStats = () => {
  return statStore;
};

const recordAction = (actionType) => {
  if (actionType === 'pageView') statStore.pageViews += 1;
  if (actionType === 'queryRun') statStore.queriesExecuted += 1;
  if (actionType === 'resumeDownload') statStore.resumesDownloaded += 1;
  if (actionType === 'projectExplore') statStore.projectsExplored += 1;
  statStore.lastUpdated = new Date().toISOString();
  return statStore;
};

module.exports = {
  getStats,
  recordAction
};
