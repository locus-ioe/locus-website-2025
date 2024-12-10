import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarData = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Events", path: "/events" },
    { id: 4, title: "Past Locus", path: "/past-locus" },
    { id: 5, title: "Sponsors", path: "/sponsors" },
    { id: 6, title: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="nav-center">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Locus 2025 Logo" className="logo" />
        </div>
        <ul className="navbar-links">
          {navbarData.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
