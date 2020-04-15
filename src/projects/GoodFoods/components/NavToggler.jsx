import React, { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

function NavToggler() {
  const { navResponsive, handleNavResponsive } = useContext(HeaderContext);
  const className = navResponsive ? 'toggle-nav active' : 'toggle-nav';

  return (
    <button className={className} onClick={handleNavResponsive}></button>
  );
}

export default NavToggler;