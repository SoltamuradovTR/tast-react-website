import React from 'react';
import Logo from './logo';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header">
      <Logo/>
      <Navbar/>
    </header>
  );
}

export default Header;