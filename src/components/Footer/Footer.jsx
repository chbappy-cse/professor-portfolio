import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for page links
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="footer">
      <p>&copy; {currentYear} Professor Ch . All rights reserved.</p>
      <ul>
        <li><Link to="#">Terms of Service</Link></li>
        <li><Link to="#">Privacy Policy</Link></li>
      </ul>
    </div>
  );
};

export default Footer;
