import React from 'react';
import PropTypes from 'prop-types';

MenuIcon.propTypes = {
	color: PropTypes.string
};

MenuIcon.defaultProps = {
	color: '#000'
};

function MenuIcon(props) {
  return (
    <svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg">
      <path fill={props.color} d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      <path fill={props.color} d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      <path fill={props.color} d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    </svg>
  );
}

export default MenuIcon;