import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help">
      <h2>Have a question or need more help? Email us!</h2>
      <form className="help-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company*</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Help;
