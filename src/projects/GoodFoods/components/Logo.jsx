import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="logo" to="/">
      Good<span>Foods</span>
    </Link>
  );
}

export default Logo;