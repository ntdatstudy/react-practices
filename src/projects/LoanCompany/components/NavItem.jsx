import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useNavResponsive from '../hooks/useNavResponsive';
import { AppContext } from '../contexts/AppContext';

NavItem.propTypes = {
  nav: PropTypes.object.isRequired
};

function NavItem(props) {
  const { nav } = props;
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);
  const [subNavStyle, setSubNavStyle] = useState({});
  const { setSubNavsHeight, subNavsHeight } = useContext(AppContext);
  const subNavContent = useRef(null);
  const navResponsive = useNavResponsive();

  const location = useLocation();
  const hasSubMenu = nav.sub_menu.length > 0;
  let className = (location.pathname === nav.href) ? 'nav-item active' : 'nav-item';
  className = expanded ? `${className} expanded` : className;
  className = hover ? `${className} hover` : className;

  useEffect(() => {
    if (navResponsive) {
      const scrollHeight = subNavContent.current.scrollHeight;
      setSubNavStyle({ maxHeight: expanded ? scrollHeight : 0});
      setSubNavsHeight(expanded ? subNavsHeight + scrollHeight : subNavsHeight - scrollHeight);
    }
  }, [expanded]);

  useEffect(() => {
    if (!navResponsive) {
      setSubNavStyle({});
      setExpanded(false);
    }
  }, [navResponsive]);

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
      {nav.sub_menu.length > 0 && (
        <div
          className="subnav-container"
          ref={subNavContent}
          style={subNavStyle}
        >
          {hasSubMenu && (
            <ul
              className="subnav"
              onMouseEnter={onHoverSubMenu}
              onMouseLeave={onLeaveHoverSubMenu}
            >
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
        </div>
      )}
    </li>
  );
}

export default NavItem;