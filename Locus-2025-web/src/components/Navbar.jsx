import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importing the React icon for hamburger
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let lastScrollY = 0;
  const location = useLocation();

  useEffect(() => {
    setIsMobile(false); // Close mobile menu when location changes
  }, [location]);

  const menuRef = useRef(null); // Reference for the mobile menu
  const hamburgerRef = useRef(null); // Reference for the hamburger button

  const navItems = [
    { title: "Home", path: "/locus-website-2025" },
    { title: "About Us", path: "/locus-website-2025/about-us" },
    { title: "Events", path: "/locus-website-2025/events" },
    { title: "Past Locus", path: "/locus-website-2025/past-locus" },
    { title: "Sponsors", path: "/locus-website-2025/sponsors" },
    { title: "Contact Us", path: "/locus-website-2025/contact-us" },
  ];

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) && // Check if click is outside the menu
      !hamburgerRef.current.contains(e.target) // Check if click is outside the hamburger button
    ) {
      setIsMobile(false); // Close menu if click is outside
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down
        setScrollingDown(true);
        setIsMobile(false); // Close mobile menu when scrolling down
      } else {
        // If scrolling up
        setScrollingDown(false);
        setIsMobile(false); // Close mobile menu when scrolling up
      }

      // Check if scrolled down past a threshold
      if (window.scrollY > 50) {
        setIsScrolled(true); // Make navbar color darker after scrolling 50px
      } else {
        setIsScrolled(false);
      }

      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY; // For Mobile Safari
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside); // Add click listener to close menu
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <div
      className={`fixed top-[30px] left-1/2 transform -translate-x-1/2 w-full px-4 z-50 transition-all ${
        scrollingDown ? "opacity-0" : "opacity-100"
      }`}
    >
      <nav
        className={`flex justify-between items-center p-4 px-8 rounded-full w-full max-w-[1200px] h-[80px] mx-auto transition-all ${
          isScrolled ? "bg-[#424242]" : "bg-[#53535361]"
        }`}
      >
        {/* Logo */}
        <div className='navbar-logo flex items-center'>
          <img
            src={logo}
            alt='Locus 2025 Logo'
            className='w-[10rem] sm:w-[12rem] md:w-[14rem] lg:w-[16rem] xl:w-[16rem] mr-2' // Adjusted widths for breakpoints
          />
        </div>

        {/* Hamburger menu toggle for mobile */}
        <button
          ref={hamburgerRef} // Add ref to hamburger button
          className='lg:hidden text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl' // Adjusted button size across breakpoints
          onClick={handleToggleMenu}
        >
          <FaBars />
        </button>

        {/* Desktop Navbar links */}
        <ul className={`hidden lg:flex space-x-6`}>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={`text-lg font-semibold hover:text-[#00f2ea] ${
               "text-[#00f2ea]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar links */}
        <ul
          ref={menuRef} // Set the reference to the mobile menu
          className={`lg:hidden flex-col absolute top-full left-1/2 transform -translate-x-1/2 bg-[#424242] w-full p-4 transition-all ${
            isMobile ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.title}
              className='my-3 hover:bg-[#00f2ea] hover:text-black transition-all duration-200'
            >
              <Link
                to={item.path}
                className={`text-lg font-semibold ${
                  isScrolled ? "text-white" : "text-[#00f2ea]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
