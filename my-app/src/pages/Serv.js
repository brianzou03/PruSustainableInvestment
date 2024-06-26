import React, { useState, useEffect } from 'react';
import { fetchAllStockData, fetchStockData } from '../utils/database';
import './Serv.css';

const Serv = () => {
  const [query, setQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [highlightedTicker, setHighlightedTicker] = useState('');

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
      } else {
        setHighlightedTicker(query.toUpperCase());
      }
    } catch (err) {
      console.error('Error fetching stock data:', err);
      setHighlightedTicker('');
    }
  };

  return (
    <div className="serv">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter stock ticker"
      />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Industry</th>
            <th>Price</th>
            <th>Trend</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr
              key={index}
              className={stock.ticker === highlightedTicker ? 'highlighted' : ''}
            >
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.industry}</td>
              <td>{stock.price}</td>
              <td>{stock.trend}</td>
              <td>{stock.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Serv;
