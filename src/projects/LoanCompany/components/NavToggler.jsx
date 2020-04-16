import React, { useContext } from 'react';
import menuIcon from '../assets/images/menu.svg';

import { AppContext } from '../contexts/AppContext';

function NavToggler() {
  const { toggleNavOpen } = useContext(AppContext);

  return (
    <button className="nav-toggler" onClick={toggleNavOpen}>
      <img src={menuIcon} alt="menu" />
    </button>
  );
}

export default NavToggler;