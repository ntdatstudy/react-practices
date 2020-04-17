import React, { useContext, useState, useRef, useEffect } from 'react';

import NavItem from './NavItem';
import { AppContext } from '../contexts/AppContext';
import useNavResponsive from '../hooks/useNavResponsive';

import navs from '../data/navs.json';

function Nav() {
  const [style, setStyle] = useState({});
  const navResponsive = useNavResponsive();
  const { navOpen, setNavOpen, subNavsHeight } = useContext(AppContext);
  const content = useRef(null);

  useEffect(() => {
    if (navResponsive) {
      setStyle(
        { maxHeight: navOpen ? content.current.scrollHeight + subNavsHeight + 2 : 0 }
      );
    }
  }, [navOpen, subNavsHeight]);

  useEffect(() => {
    if (!navResponsive) {
      setStyle({});
      setNavOpen(false);
    }
  }, [navResponsive]);

  // useEffect(() => {
  //   if (navResponsive) {
  //     setStyle(
  //       { maxHeight: navOpen ? content.current.scrollHeight + subNavsHeight + 2 : 0 }
  //     );
  //   } else {
  //     setStyle({});
  //     setNavOpen(false);
  //   }
  // }, [navResponsive, navOpen, subNavsHeight]);

  return (
    <nav className="nav-container" style={style}>
      <ul className="nav" ref={content}>
        {navs.map(nav => (
          <NavItem key={nav.href} nav={nav} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;