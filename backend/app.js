// File: backend/app.js
// Importing required modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(cors()); // allow all origins by default
app.use(express.json());

// Importing routes
const routes = require('./routes/index');

// Using routes
app.use('/api', routes);
// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Finote Backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
