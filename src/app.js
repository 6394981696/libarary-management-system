const express = require('express');

const bodyParser = require('body-parser');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
// Add other routes similarly

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// Add other routes similarly

module.exports = app;
