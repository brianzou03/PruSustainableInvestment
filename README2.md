# PruSustainableInvestment
Hackathon project focusing on tracking investments in order to suggest more environmentally friendly alternatives, and to align with a more sustainable company goal.

### Installations
```
npm install react-router-dom
npm install sqlite3
npm install chart.js

cd backend
npm init -y
npm install express sqlite3 cors
```

### How to run

#### 1st run the backend (in console 1)
```
cd backend
node server.js
```

#### 2nd run the frontend (in console 2)
```
cd my-app
npm start
```

#### Then visit:
```http://localhost:3000/```


### Technology Stack
* Node
* React
* SQLite3 DB
* Amazon AWS hosting

Creating the database:
```
sqlite3 stockData.db
.open stockData.db

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
('Prudential', 'PRU', 'finance', 119, 'positive', 0.002),
('Simon Property Group', 'SPG', 'real estate', 147, 'negative', 3),
('Apple', 'AAPL', 'tech', 213, 'negative', 4),
('Walmart', 'WMT', 'retail', 68.41, 'positive', 3.67);

SELECT * FROM stocks;

.exit

```
