import React from 'react'
import Logo from '../HomePageAssets/logo.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <ul className="navigation-links">
            <li>About</li>
            <li>Creative</li>
            <li>Events</li>
            <li>Blog</li>
        </ul>
        <div className="get-ticket">
            Get your ticket
        </div>
    </div>
  )
}

export default Header;