import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-center">
        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src={logo}
              alt="Locus 2025 Logo"
              className="logo"
            />
            {/* <span className="navbar-title">LOCUS 2025</span> */}
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/locus-website-2025">Home</Link>
            </li>
            <li>
              <Link to="/locus-website-2025/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/locus-website-2025/events">Events</Link>
            </li>
            <li>
              <Link to="/locus-website-2025/past-locus">Past Locus</Link>
            </li>
            <li>
              <Link to="/locus-website-2025/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link to="/locus-website-2025/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
