import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <img src="/images/carbon_emissions_page.png" alt="Placeholder" />
      </div>
      <div className="home-right">
        <p>
          Sustainable environmental resource valuation. We aim to create a sustainable future through eco-friendly investments by divesting from environmentally unsustainable companies and suggesting alternative companies to invest in, based on an algorithm that takes into account the stock prices, trends, and sustainability rating.
        </p>
      </div>
    </div>
  );
};

export default Home;
