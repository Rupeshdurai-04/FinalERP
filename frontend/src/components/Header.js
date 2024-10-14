import React from 'react';
import './Header.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import person from '../assets/headericon.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="header-icons">
        <FaBell className="icon" />
        <img src={person} alt="User" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
