require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sakthiganesh_portfolio';

// Middlewares
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Serve Client Static Build in Production / Unified Deployment
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).json({
        message: 'Sakthiganesh K Portfolio API is Online',
        frontend: 'Please run npm run build in client directory to serve frontend bundle.'
      });
    }
  });
});

// Database Connection with graceful fallback
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 });
      console.log('MongoDB Connected successfully to:', MONGODB_URI);
    } else {
      console.log('No MONGODB_URI provided in env. Portfolio backend using High-Performance In-Memory store (zero configuration needed).');
    }
  } catch (err) {
    console.warn('MongoDB connection attempt timed out or unavailable. Operating safely in in-memory fallback mode.');
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('====================================================');
    console.log('  Sakthiganesh K Portfolio Server Running on Port ' + PORT);
    console.log('  Health: http://localhost:' + PORT + '/api/health');
    console.log('  Unified App: http://localhost:' + PORT);
    console.log('====================================================');
  });
});
