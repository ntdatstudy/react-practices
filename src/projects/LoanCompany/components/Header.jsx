import React, { useEffect, useState } from 'react';

import Logo from './Logo';
import Nav from './Nav';
import LoanCompanyLink from './LoanCompanyLink';
import NavToggler from './NavToggler';

import useNavResponsive from '../hooks/useNavResponsive';

function Header() {
  const navResponsive = useNavResponsive();
  const [fix, setFix] = useState(false);
  const className = fix ? 'loancompany-header fixed' : 'loancompany-header';

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) setFix(true)
      else setFix(false);
    });
  }, []);

  return (
    <header className={className}>
      <Logo />
      <Nav />
      {navResponsive ? <NavToggler /> : (
        <LoanCompanyLink text="+880.762.009.00" />
      )}
    </header>
  );
}

export default Header;