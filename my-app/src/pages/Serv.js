import React, { useState } from 'react';
import { fetchStockData } from '../utils/database';

const Serv = () => {
  const [query, setQuery] = useState('');
  const [stockData, setStockData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchStockData(query);
    setStockData(data);
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
