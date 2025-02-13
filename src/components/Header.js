import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">My Blog</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">New Post</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
