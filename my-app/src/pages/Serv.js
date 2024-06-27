import React, { useState, useEffect } from 'react';
import { fetchAllStockData, fetchStockData } from '../utils/database';
import StockDetails from './StockDetails'; // Make sure to import the StockDetails component
import './Serv.css';

const Serv = () => {
  const [query, setQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [highlightedTicker, setHighlightedTicker] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const [alternativeStocks, setAlternativeStocks] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllStockData();
      setStockData(data);
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchStockData(query.toUpperCase());
      if (data.length === 0) {
        setHighlightedTicker('');
        setSelectedStock(null);
      } else {
        setHighlightedTicker(query.toUpperCase());
        setSelectedStock(data[0]);
        const altStocks = stockData.filter(stock => stock.ticker !== data[0].ticker).slice(0, 3);
        setAlternativeStocks(altStocks);
      }
    } catch (err) {
      console.error('Error fetching stock data:', err);
      setHighlightedTicker('');
      setSelectedStock(null);
    }
  };

  const handleRowClick = (stock) => {
    setSelectedStock(stock);
    setHighlightedTicker(stock.ticker);
    const altStocks = stockData.filter(s => s.ticker !== stock.ticker).slice(0, 3);
    setAlternativeStocks(altStocks);
  };

  const handleExit = () => {
    setSelectedStock(null);
    setHighlightedTicker('');
  };

  const getEcoFriendliness = (rating) => {
    if (rating < 0.7) {
      return 'Good CO2 emission value';
    } else if (rating >= 0.7 && rating <= 1.0) {
      return 'Okay CO2 emission value';
    } else {
      return 'Bad CO2 emission value';
    }
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const filteredStockData = selectedIndustry === 'All' 
    ? stockData 
    : stockData.filter(stock => stock.industry === selectedIndustry);

  const industries = [...new Set(stockData.map(stock => stock.industry))];

  return (
    <div className="serv">
      <div className="search-container">
        <select onChange={handleIndustryChange} value={selectedIndustry}>
          <option value="All">All Industries</option>
          {industries.map((industry, index) => (
            <option key={index} value={industry}>{industry}</option>
          ))}
        </select>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter stock ticker"
        />
        <button onClick={handleSearch}>Search</button> 
      </div>
      <div className="serv-content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Industry</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {filteredStockData.map((stock, index) => (
                <tr
                  key={index}
                  className={stock.ticker === highlightedTicker ? 'highlighted' : ''}
                  onClick={() => handleRowClick(stock)}
                >
                  <td>{stock.name}</td>
                  <td>{stock.ticker}</td>
                  <td>{stock.industry}</td>
                  <td>{stock.price}</td>
                  <td>{stock.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedStock && (
          <StockDetails
            stock={selectedStock}
            alternativeStocks={alternativeStocks}
            onExit={handleExit}
          />
        )}
      </div>
    </div>
  );
};

export default Serv;
