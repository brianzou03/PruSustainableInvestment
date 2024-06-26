import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <img src={'/images/carbon_emissions_page.png'} alt="Sustainable Environment" />
        </div>
        <div className="home-right">
          <p>
            <b>Sustainable Environmental Resource Valuation (SERV)</b>. We aim to create a sustainable future through eco-friendly investments by divesting from environmentally unsustainable companies and suggesting alternative companies to invest in, based on an algorithm that takes into account the stock prices, trends, and sustainability rating.
          </p>
        </div>
      </div>
      <div className="home-bottom">
        <h2>Established solution, looming challenge</h2>
        <p className="section-title">Welcome to PruSERV</p>
        <p className="section-subtitle">The premier tool for eco-friendly investment</p>
        <p className="section-content">
          Our Mission At PruServ, we are dedicated to illuminating the environmental impact of Prudential’s investments. Founded on Prudential’s enduring belief that financial security should be accessible to everyone, our mission extends this principle to encompass sustainable investing. We aim to guide individuals and organizations towards choices that not only promise financial growth but also ensure the well-being of our planet for future generations.
        </p>
        <p className="section-title">Our Vision</p>
        <p className="section-content">
          We envision a world where financial success and environmental stewardship go hand in hand. PruServ aspires to be a leading platform where transparency meets innovation, offering insights and alternatives that promote both economic prosperity and ecological balance. By evaluating and presenting the environmental impact of investments, we strive to foster a community of informed investors who prioritize sustainability alongside profitability.
        </p>
        <p className="section-title">Explore PruServ</p>
        <p className="section-content">
          Discover how Prudential’s investments impact the environment and explore suggestions for more sustainable alternatives. Join us in our journey towards a future where financial security and environmental sustainability are seamlessly integrated.
        </p>
      </div>
    </div>
  );
};

export default Home;
