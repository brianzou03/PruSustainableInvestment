const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5001;

app.use(cors());

// Define the path to the database
const dbPath = path.resolve(__dirname, '../stockData.db');

// Create a connection to the database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to database');
  }
});

// API endpoint to fetch all stock data
app.get('/api/stocks', (req, res) => {
  db.all('SELECT * FROM stocks', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// API endpoint to fetch stock data by ticker
app.get('/api/stocks/:ticker', (req, res) => {
  const ticker = req.params.ticker;
  db.all('SELECT * FROM stocks WHERE ticker = ?', [ticker], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
