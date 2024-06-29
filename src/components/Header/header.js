import React from 'react';
import './header.css';
import logo from '../../logo.svg'; // лого свое закиньте и юзайте

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Header;
