import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <img src="/images/carbon_emissions_page.png" alt="Placeholder" />
        </div>
        <div className="home-right">
          <p>
            Sustainable environmental resource valuation. We aim to create a sustainable future through eco-friendly investments by divesting from environmentally unsustainable companies and suggesting alternative companies to invest in, based on an algorithm that takes into account the stock prices, trends, and sustainability rating.
          </p>
        </div>
      </div>
      <div className="home-bottom">
        <h2>Established solution, looming challenge</h2>
        <h3 className="section-title">Welcome to PruServ</h3>
        <h4 className="section-subtitle">Prudential Sustainable Environmental Resource Valuation</h4>
        <p className="section-content">
          <strong>Our Mission</strong> At PruServ, we are dedicated to illuminating the environmental impact of Prudential’s investments. Founded on Prudential’s enduring belief that financial security should be accessible to everyone, our mission extends this principle to encompass sustainable investing. We aim to guide individuals and organizations towards choices that not only promise financial growth but also ensure the well-being of our planet for future generations.
        </p>
        <p className="section-content">
          <strong>Our Vision</strong> We envision a world where financial success and environmental stewardship go hand in hand. PruServ aspires to be a leading platform where transparency meets innovation, offering insights and alternatives that promote both economic prosperity and ecological balance. By evaluating and presenting the environmental impact of investments, we strive to foster a community of informed investors who prioritize sustainability alongside profitability.
        </p>
        <p className="section-content">
          <strong>Explore PruServ</strong> Discover how Prudential’s investments impact the environment and explore suggestions for more sustainable alternatives. Join us in our journey towards a future where financial security and environmental sustainability are seamlessly integrated.
        </p>
      </div>
    </div>
  );
};

export default Home;
