import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='nav-center'>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Locus 2025 Logo" className="logo" />
        {/* <span className="navbar-title">LOCUS 2025</span> */}
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="#past-locus">Past Locus</a>
        </li>
        <li>
        {/* <Link to="/contact-us">Sponsors</Link> */}
          <a href="/sponsors">Sponsors</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default Navbar