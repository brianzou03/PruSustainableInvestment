# PruSustainableInvestment
Hackathon project focusing on tracking investments in order to suggest more environmentally friendly alternatives, and to align with a more sustainable company goal.

### How to run
```
npm install react-router-dom
npm install sqlite3
npm install chart.js

cd backend
npm init -y
npm install express sqlite3 cors

node server.js

cd my-app
npm start
```

### Technology Stack
* Node
* React
* SQLite3 DB
* Amazon AWS hosting

Creating the database:
```
sqlite3 stockData.db

CREATE TABLE stocks (
    id INTEGER PRIMARY KEY,
    name TEXT,
    ticker TEXT,
    industry TEXT,
    price REAL,
    trend TEXT,
    ratings TEXT
);

INSERT INTO stocks (name, ticker, industry, price, trend, ratings) VALUES 
('Prudential', 'PRU', 'finance', 119, 'positive', NULL),
('Simon Property Group', 'SPG', 'real estate', 147, 'negative', NULL),
('Apple', 'AAPL', 'tech', 213, 'negative', NULL);

SELECT * FROM stocks;

.exit

```