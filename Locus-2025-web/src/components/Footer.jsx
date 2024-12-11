import './Footer.css'; // Include CSS file
import { Instagram, Facebook, Phone } from 'lucide-react'; // Import Lucide icons

function Footer() {
  return (
    <footer className="footer-container">
      <div className="image-mountain">
        <img src="src/assets/pngwing 4.svg" alt="" />
      </div>
      <div className="footer-hero">
        <h2 className="footer-title">Join The Locus Community</h2>
        <p className="footer-description">
          Becoming a Locus Community Member is Your Exclusive Ticket to Becoming the Face and Voice of Our Vibrant Academic Community. It&apos;s Not Just a Role, It&apos;s an Opportunity to Share the Dynamic Spirit of Our Campus with the World!
        </p>
        <button className="footer-button">Join Us on Discord</button>
      </div>
      <div className="custom-line"></div>

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
          <img
            src="src/assets/OWNED2 1.png"
            alt="Locus 2025 Logo"
            className="footer-logo"
          />
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
                  <Instagram size={24} color="#ffffff" />
                </a>
                <a href="#" className="icon">
                  <Facebook size={24} color="#ffffff" />
                </a>
                <a href="#" className="icon">
                  <Phone size={24} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-line"></div>

      <div className="footer-made-with">Made with ❤️ by LOST</div>
      <div className="footer-copyright">
        ©Copyright 2024, Pulchowk Engineering Campus
      </div>
    </footer>
  );
}

export default Footer;
