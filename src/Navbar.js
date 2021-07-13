import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink exact activeClassName="selected" className="link" to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="link" to="/features">Features</NavLink>
        <NavLink activeClassName="selected" className="link" to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}
export default Navbar;