import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='nav-center'>
        <nav className='navbar'>
          <div className='navbar-logo'>
            <img
              src={logo}
              alt='Locus 2025 Logo'
              className='logo'
            />
            {/* <span className="navbar-title">LOCUS 2025</span> */}
          </div>
          <ul className='navbar-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-us'>About</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/past-locus'>Past Locus</Link>
            </li>
            <li>
              <Link to='/sponsors'>Sponsors</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
