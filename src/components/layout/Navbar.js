import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span style={{ fontSize: 30 }}>Chatapp</span>
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/signin" className="navbar-item">
            Sign In
          </Link>
          <Link to="/" className="navbar-item">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
