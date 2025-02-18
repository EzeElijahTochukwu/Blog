import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My Blog. All rights reserved.</p>
      <div className="contact-section">
        <h4>Contact Us</h4>
        <p>Email: contact@myblog.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Blog Street, Blog City</p>
      </div>
      <div className="links-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
  
