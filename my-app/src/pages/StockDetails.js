import React from 'react';
import './Serv.css';

const StockDetails = ({ stock, alternativeStocks, onExit }) => {
  return (
    <div className="stock-details">
      <button className="exit-button" onClick={onExit}>x</button>
      <h2>Stock Details</h2>
      <p><strong>Name:</strong> {stock.name}</p>
      <p><strong>Ticker:</strong> {stock.ticker}</p>
      <p><strong>Industry:</strong> {stock.industry}</p>
      <p><strong>Price:</strong> {stock.price}</p>
      <p><strong>Trend:</strong> {stock.trend}</p>
      <p><strong>Ratings:</strong> {stock.ratings}</p>

      <h3>Placeholder Graph</h3>
      <div className="placeholder-graph" style={{ width: '100%', height: '200px', backgroundColor: '#ddd' }}></div>

      <h3>Placeholder Piechart</h3>
      <div className="placeholder-piechart" style={{ width: '200px', height: '200px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>

      <h3>Alternative Stocks</h3>
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
          {alternativeStocks.map((altStock, index) => (
            <tr key={index}>
              <td>{altStock.name}</td>
              <td>{altStock.ticker}</td>
              <td>{altStock.industry}</td>
              <td>{altStock.price}</td>
              <td>{altStock.trend}</td>
              <td>{altStock.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDetails;
