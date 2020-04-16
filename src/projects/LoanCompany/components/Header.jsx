import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Contact from './Contact';
import NavToggler from './NavToggler';

import useNavResponsive from '../hooks/useNavResponsive';

function Header() {
  const navResponsive = useNavResponsive();

  return (
    <header className="loancompany-header">
      <Logo />
      <Nav />
      {navResponsive ? <NavToggler /> : <Contact />}
    </header>
  );
}

export default Header;