import React from 'react';

import logo from '../../assets/images/logo.png';
import './Logo.scss';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;