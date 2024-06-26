import React, { useState } from 'react';
import { fetchStockData } from '../utils/database';
import './Serv.css'; // Ensure you have appropriate styling

const Serv = () => {
  const [query, setQuery] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchStockData(query);
      if (data.length === 0) {
        setError('No data found for the given ticker');
        setStockData(null);
      } else {
        setStockData(data);
        setError('');
      }
    } catch (err) {
      setError('Error fetching stock data');
      setStockData(null);
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
      {error && <p>{error}</p>}
      {stockData && (
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
              <tr key={index}>
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
      )}
    </div>
  );
};

export default Serv;
