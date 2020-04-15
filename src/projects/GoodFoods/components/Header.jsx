import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import NavToggler from './NavToggler';

import useNavResponsive from '../hooks/useNavResponsive';
import HeaderProvider from '../contexts/HeaderContext';

function Header() {
  const navResponsive = useNavResponsive();

  return (
    <HeaderProvider>
      <header>
        <Logo />
        <Nav />
        {navResponsive && <NavToggler />}
      </header>
    </HeaderProvider>
  );
}

export default Header;