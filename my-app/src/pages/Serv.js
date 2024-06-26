import React, { useState, useEffect } from 'react';
import { fetchAllStockData, fetchStockData } from '../utils/database';
import StockDetails from './StockDetails';
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
        // Fetch alternative stocks (for simplicity, just showing the first three from the list)
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
                <th>Trend</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock, index) => (
                <tr
                  key={index}
                  className={stock.ticker === highlightedTicker ? 'highlighted' : ''}
                  onClick={() => handleRowClick(stock)}
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
        {selectedStock && (
          <StockDetails stock={selectedStock} alternativeStocks={alternativeStocks} />
        )}
      </div>
    </div>
  );
};

export default Serv;
