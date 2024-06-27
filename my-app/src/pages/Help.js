import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help">
      <h2>Have a question or need more help? Email us!</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company*</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Help;
