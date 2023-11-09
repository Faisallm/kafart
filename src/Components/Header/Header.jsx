import React, { useState } from "react";
import Logo from "../HomePageAssets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="header-menu" onClick={toggleMobileMenu}>
          Menu
        </div>
      </div>
      <ul className="navigation-links">
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/fashion-designers"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Creative
          </Link>
        </li>
        <li>
          <Link to="/event" style={{ textDecoration: "none", color: "#000" }}>
            Events
          </Link>
        </li>
        <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
          Bloga
        </Link>
      </ul>
      <div className="get-ticket">Get your ticket</div>
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
      >
        <ul className="mobile-menu-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/fashion-designers">Creative</Link>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="mobile-close" onClick={toggleMobileMenu}>
          close
        </div>
      </div>
    </div>
  );
};

export default Header;
