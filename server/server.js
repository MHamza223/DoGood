// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();  // Load .env file for environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// API endpoint to fetch news articles
app.get('/api/news', async (req, res) => {
  const newsAPIKey = 'bbb9909e0bb94e30b96cec5e9c388bf0';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`;
  
  try {
    const response = await axios.get(url);
    res.json(response.data);  // Send news data to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching news" });
  }
});

// Serve static files (if you want to serve the frontend as well)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
