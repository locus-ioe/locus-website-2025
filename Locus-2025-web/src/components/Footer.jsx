import React from 'react';
import './Footer.css'; // Include CSS file

function Footer() {
  return (
    <footer className="footer-container">
        <div className='image-mountain'><img src="src/assets/pngwing 4.svg" alt="" /></div>
      <div className="footer-hero">
        <h2 className="footer-title">Join The Locus Community</h2>
        <p className="footer-description">
          Becoming a Locus Community Member is Your Exclusive Ticket to Becoming the Face and Voice of Our Vibrant Academic Community. It's Not Just a Role, It's an Opportunity to Share the Dynamic Spirit of Our Campus with the World!
        </p>
        <button className="footer-button">Join Us on Discord</button>
      </div>
      <div className="footer-info">
        <div className="footer-location">
          <button className="footer-back">Back</button>
          <p className="location-title">IOE PULCHOWK</p>
          <p>Pulchowk, Lalitpur</p>
          <p>Nepal</p>
        </div>
        <div className="footer-center">
          <img src="locus-logo.png" alt="Locus 2025 Logo" className="footer-logo" />
          <h3 className="center-title">LOCUS 2025</h3>
          <p className="center-description">21st National Technological Festival</p>
          <p className="footer-made-with">
            Made with ❤️ by LOST
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>locus@ioe.edu.np</p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="icon">📸</a>
            <a href="#" className="icon">📘</a>
            <a href="#" className="icon">📱</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        ©Copyright 2024, Pulchowk Engineering Campus
      </div>
    </footer>
  );
}

export default Footer;
