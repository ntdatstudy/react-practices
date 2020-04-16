import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

function Logo() {
  return (
    <Link className="logo" to="/loan-company">
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;