import React from 'react';
import PropTypes from 'prop-types';

ScrollTopIcon.propTypes = {
	color: PropTypes.string
};

ScrollTopIcon.defaultProps = {
	color: '#000'
};

function ScrollTopIcon(props) {
  return (
    <svg className="flaticon scrolltop-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path fill={props.color} d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path>
    </svg>
  );
}

export default ScrollTopIcon;