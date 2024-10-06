// src/server.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const db = require('./utils/db'); // Ensure this connects to your database
const config = require('./config/config');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json()); // To parse JSON bodies

// Define your routes here
app.get('/', (req, res) => {
    res.send('Welcome to the Library Management System!');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
