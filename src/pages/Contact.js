import React, { useState } from 'react';
import './styles/Contact.css';
<form action="https://formspree.io/f/{your-form-id}" method="POST">
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="success-message">
          <p>Thank you for your message! We'll respond shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
                <div className="contact-info">
  <h2>Get in Touch</h2>
  <p>Email: contact@myblog.com</p>
  <p>Phone: +1 234 567 890</p>
  <p>Address: 123 Blog Street, Digital City</p>
</div>
                
        </form>
      )}
    </div>
  );
};

export default Contact;
