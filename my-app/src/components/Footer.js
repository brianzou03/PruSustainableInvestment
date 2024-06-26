import React from 'react';

const Footer = () => {
  return (
    <footer>
      <img src={'/images/pruSERV_Square_Logo.png'} alt="Company Logo" className="footer-logo" />
      <ul className="footer-links">
        <li><a href="https://instagram.com">Instagram</a></li>
        <li><a href="https://linkedin.com">LinkedIn</a></li>
        <li><a href="mailto:contact@example.com">Email</a></li>
      </ul>
      <div className="contact-info">
        <p>To learn how our Sustainability Tracker can help you track your sustainability indicators and reduce emissions, energy, water, and waste across your supply chain, contact our expert team on the Help page.</p>
        <button className="contact-button">Contact us ➡</button>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy | Terms of Use | Cookie Policy | Cookie Preferences</p>
        <p>©2024 PruSERV</p>
      </div>
    </footer>
  );
};

export default Footer;
