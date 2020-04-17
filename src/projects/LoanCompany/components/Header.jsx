import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import LoanCompanyLink from './LoanCompanyLink';
import NavToggler from './NavToggler';

import useNavResponsive from '../hooks/useNavResponsive';

function Header() {
  const navResponsive = useNavResponsive();

  return (
    <header className="loancompany-header">
      <Logo />
      <Nav />
      {navResponsive ? <NavToggler /> : (
        <LoanCompanyLink text="+880.762.009.00" />
      )}
    </header>
  );
}

export default Header;