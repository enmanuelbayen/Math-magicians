import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/home" className="txtDecoNone">Home</Link>
    <span>|</span>
    <Link to="/calculator" className="txtDecoNone">Calculator</Link>
    <span>|</span>
    <Link to="/quote" className="txtDecoNone">Quote</Link>
  </nav>
);

export default Navbar;
