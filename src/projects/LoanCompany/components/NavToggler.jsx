import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';
import MenuIcon from './Icons/MenuIcon';

import config from '../configs/app.json';

function NavToggler() {
  const { toggleNavOpen } = useContext(AppContext);

  return (
    <button className="nav-toggler" onClick={toggleNavOpen}>
      <MenuIcon color={config.app.primary_color} />
    </button>
  );
}

export default NavToggler;