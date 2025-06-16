import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Us */}
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            We are committed to providing the best services with integrity and passion.
          </p>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">1234 Bandhans St, Sydney, NSW 2000</p>
          <p className="footer-text">Phone: (02) 1234 5678</p>
          <p className="footer-text">Email: info@bandhans.com.au</p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter Signup</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              className="footer-input"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="footer-button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bandhans Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
// This is the Footer component for the Bandhans application.
// It includes sections for "About Us", "Contact Us", and a newsletter signup form. 