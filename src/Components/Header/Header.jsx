import React from "react";
import Logo from "../HomePageAssets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to='/'>
        <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navigation-links">
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/fashion-designers" style={{ textDecoration: "none", color: "#000" }}>
            Creative
          </Link>
        </li>
        <li>
          <Link to="/event" style={{ textDecoration: "none", color: "#000" }}>
            Events
          </Link>
        </li>
        <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
          Blog
        </Link>
      </ul>
      <div className="get-ticket">Get your ticket</div>
    </div>
  );
};

export default Header;
