import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-utensils"></i> Restaurant Menu
      </Link>
      <div className="navbar-links">
        <Link to="/add-category"><i className="fas fa-plus"></i> Add Category</Link>
        <Link to="/add-menu-item"><i className="fas fa-hamburger"></i> Add Menu Item</Link>
        <Link to="/add-beverage"><i className="fas fa-coffee"></i> Add Beverage</Link>
        <Link to="/menu"><i className="fas fa-list"></i> Menu</Link>
        <Link to="/beverages"><i className="fas fa-glass-cheers"></i> Beverages</Link>
        <Link to="/recipes"><i className="fas fa-glass-cheers"></i> Recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
