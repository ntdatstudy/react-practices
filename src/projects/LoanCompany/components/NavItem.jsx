import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useNavResponsive from '../hooks/useNavResponsive';

NavItem.propTypes = {
  nav: PropTypes.object.isRequired
};

function NavItem(props) {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);
  const { nav } = props;
  const location = useLocation();
  const navResponsive = useNavResponsive();
  const hasSubMenu = nav.sub_menu.length > 0;
  let className = (location.pathname === nav.href) ? 'nav-item active' : 'nav-item';
  className = expanded ? `${className} expanded` : className;
  className = hover ? `${className} hover` : className;

  function onToggleSubMenu() {
    setExpanded(!expanded);
  }

  function onHoverSubMenu() {
    setHover(true);
  }

  function onLeaveHoverSubMenu() {
    setHover(false);
  }

  return (
    <li className={className}>
      <Link className="nav-link" to={nav.href}>{nav.title}</Link>
      {hasSubMenu && (
        <ul className="subnav" onMouseEnter={onHoverSubMenu} onMouseLeave={onLeaveHoverSubMenu}>
          {nav.sub_menu.map(subnav => (
            <li className="subnav-item" key={subnav.href}>
              <Link className="subnav-link" to={subnav.href}>
                {subnav.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {(navResponsive && hasSubMenu) && (
        <button
          className="submenu-toggler"
          onClick={onToggleSubMenu}
        >
          {expanded ? '-' : '+'}
        </button>
      )}
    </li>
  );
}

export default NavItem;