import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

NavItem.propTypes = {
  nav: PropTypes.object.isRequired
};

function NavItem(props) {
  const { nav } = props;
  const location = useLocation();
  const className = location.pathname === nav.path ? 'active' : '';

  return (
    <li>
      <Link className={className} to={nav.path}>
        {nav.title}
      </Link>
    </li>
  );
}

export default NavItem;