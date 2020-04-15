import React, { useContext } from 'react';
import NavItem from './NavItem';
import navs from '../data/navs.json';

import { HeaderContext } from '../contexts/HeaderContext';

function Nav() {
  const { navResponsive } = useContext(HeaderContext);

  return (
    <ul className={navResponsive ? 'active' : ''}>
      {navs.map(nav => (
        <NavItem key={nav.title} nav={nav} />
      ))}
    </ul>
  );
}

export default Nav;