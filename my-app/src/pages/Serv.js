import React, { useState, useEffect } from 'react';
import { fetchAllStockData, fetchStockData } from '../utils/database';
import './Serv.css';

const Serv = () => {
  const [query, setQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [highlightedTicker, setHighlightedTicker] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const [alternativeStocks, setAlternativeStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllStockData();
      if (data && data.data) {
        setStockData(data.data);
      } else {
        setStockData([]);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchStockData(query.toUpperCase());
      if (data && data.data) {
        setHighlightedTicker(query.toUpperCase());
        setSelectedStock(data.data);
        const altStocks = getAlternativeStocks(data.data);
        setAlternativeStocks(altStocks);
      } else {
        setHighlightedTicker('');
        setSelectedStock(null);
      }
    } catch (err) {
      console.error('Error fetching stock data:', err);
      setHighlightedTicker('');
      setSelectedStock(null);
    }
  };

  const handleRowClick = async (stock) => {
    try {
      const data = await fetchStockData(stock.ticker);
      if (data && data.data) {
        setSelectedStock(data.data);
        const altStocks = getAlternativeStocks(data.data);
        setAlternativeStocks(altStocks);
      }
    } catch (err) {
      console.error('Error fetching stock data:', err);
    }
  };

  const handleClose = () => {
    setSelectedStock(null);
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

  const getAlternativeStocks = (selectedStock) => {
    if (!selectedStock || !stockData || stockData.length === 0) return [];
    return stockData
      .filter(
        (stock) =>
          stock.industry === selectedStock.industry &&
          stock.ticker !== selectedStock.ticker
      )
      .sort((a, b) => a.rating - b.rating)
      .slice(0, 3);
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
              {stockData.length > 0 ? (
                stockData.map((stock, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan="5">No stocks available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {selectedStock && (
          <div className="stock-details">
            <button className="close-button" onClick={handleClose}>X</button>
            <h2>{selectedStock.name} ({selectedStock.ticker})</h2>
            <p><strong>Industry:</strong> {selectedStock.industry}</p>
            <p><strong>Price:</strong> {selectedStock.price}</p>
            <p><strong>Rating:</strong> {selectedStock.rating}</p>
            <p><strong>Eco-Friendliness:</strong> {getEcoFriendliness(selectedStock.rating)}</p>
            <h3>Alternative Stocks</h3>
            <ul>
              {alternativeStocks.map((stock, index) => (
                <li key={index}>
                  {stock.name} ({stock.ticker}) - {stock.rating}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Serv;
