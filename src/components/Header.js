import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import '../style/header.css';

const Header = ({ children }) => (
  <section className="navigation-bar">
    <header className="header">
      <logo className="logo">Math Magicians</logo>
      <Navbar />
    </header>
    {children}
  </section>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
