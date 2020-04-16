import React, { useContext } from 'react';

import NavItem from './NavItem';
import { AppContext } from '../contexts/AppContext';

import navs from '../data/navs.json';

function Nav() {
  const { navOpen } = useContext(AppContext);
  const className = navOpen ? 'nav active' : 'nav';

  return (
    <ul className={className}>
      {navs.map(nav => (
        <NavItem key={nav.href} nav={nav} />
      ))}
    </ul>
  );
}

export default Nav;