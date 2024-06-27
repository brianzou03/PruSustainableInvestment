const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5001;

app.use(cors());

const dbPath = path.resolve(__dirname, '../stockData.db');
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
  const ticker = req.params.ticker.toUpperCase();
  db.get('SELECT * FROM stocks WHERE ticker = ?', [ticker], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.json({ data: row });
    } else {
      res.status(404).json({ error: 'Stock not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
