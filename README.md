# PruSustainableInvestment
Prudential's 2024 Intern Hackathon - Team PRUfessionals

## PruSERV (Sustainable Environmental Resource Valuation) the Environment
Our platform aims to track the environmental impact of corporate investments, analyze and visualize the sustainability of investments, then offer more sustainable alternative investments. 

## Project Details

### Installations
```
npm install
```

### How to run

#### 1. Run the backend (in console 1)
```
cd my-app
cd backend
node server.js
```

#### 2. Run the frontend (in console 2)
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

### Creating an example database:
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

INSERT INTO stocks (name, ticker, industry, price, rating) VALUES 
('Prudential', 'PRU', 'finance', 119', 0.002),
('Simon Property Group', 'SPG', 'real estate', 147, 3),
('Apple', 'AAPL', 'tech', 213, 4),
('Walmart', 'WMT', 'retail', 68.41, 3.67);

SELECT * FROM stocks;

.exit

```

### How our Comprehensive DB was assembled
We used Python scripting to scrape stock values, then established ratings based on a calculations of the (total emissions / market cap) of each company. This results in an accurate metric of carbon emissions where lower values mean less carbon footprint and higher values means higher carbon footprint. Ranges between 0-0.7 are deemed "Good carbon emissions range", 0.7-1.0 as "Okay carbon emissions range", and 1.0+ as "Bad carbon emissions range".


### Future Expansion
In the future we hope to achieve the following:
1. Use Prudential's data to display Prudential's investments in the SERV table
2. Upgrade the search feature to include an LLM, using the model to generate explanations for company ratings
3. Deploy a Prudential rendition of the application with CI/CD pipelines for testing and deployment
4. Analyze fluctuations in Prudential's environmental impact through reports and analytics


### Hackathon Team
* Brian Zou (Node/React Fullstack)
* Guyllian Dela Rosa (Research + Presentation)
* Matthew Cruz (Database + AWS)
* Sydney Dizon (Figma + Presentation)
* Riya Chandran (Figma + Presentation)
