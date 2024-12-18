import React from "react";
import "./Footer.css"; // Include CSS file
import mountain from "../assets/pngwing 4.svg";
import footerlogo from "../assets/OWNED2 1.png";

function Footer() {
  const handleJoinDiscord = () => {
    window.open("https://discord.gg/qWwVPgJJdM", "_blank");
  };
  return (
    <footer className="footer-container">
      <div className="image-mountain">
        <img src={mountain} alt="" />
      </div>
      <div className="footer-hero">
        <h2 className="footer-title">Join The Locus Community</h2>
        <p className="footer-description">
          Becoming a Locus Community Member is Your Exclusive Ticket to Becoming
          the Face and Voice of Our Vibrant Academic Community. It's Not Just a
          Role, It's an Opportunity to Share the Dynamic Spirit of Our Campus
          with the World!
        </p>
        <button
          onClick={handleJoinDiscord}
          className="footer-button px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-200"
        >
          Join Us on Discord
        </button>
      </div>
      <div class="custom-line"></div>

      <div className="footer-info">
        <div className="footer-location">
          <div className="first-column">
            <button className="footer-back">Brochure</button>
            <p className="location-title highlight">IOE PULCHOWK</p>
            <p className="font-18">Pulchowk, Lalitpur</p>
            <p className="font-18">Nepal</p>
          </div>
        </div>
        <div className="footer-center">
          {/* <div > */}
          <img src={footerlogo} alt="Locus 2025 Logo" className="footer-logo" />
          {/* <h3 className="center-title">LOCUS 2025</h3>
          <p className="center-description">21st National Technological Festival</p> */}
          {/* </div> */}
        </div>
        <div className="footer-contact">
          <div className="third-column">
            <div className="third-content">
              <p className="highlight">Contact Us</p>
              <p className="font-18">locus@ioe.edu.np</p>
            </div>
            <div className="third-content">
              <p className="highlight">Follow Us</p>
              <div className="social-icons">
                <a href="#" className="icon">
                  📸
                </a>
                <a href="#" className="icon">
                  📘
                </a>
                <a href="#" className="icon">
                  📱
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-line"></div>

      <div className="footer-made-with">Made with ❤️ by LOST</div>
      <div className="footer-copyright">
        ©Copyright 2024, Pulchowk Engineering Campus
      </div>
    </footer>
  );
}

export default Footer;
