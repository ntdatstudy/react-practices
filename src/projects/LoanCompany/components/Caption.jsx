import React from 'react';
import PropTypes from 'prop-types';

Caption.propTypes = {
  caption: PropTypes.object.isRequired
};

function Caption(props) {
  const { caption } = props;

  return (
    <div className="caption-container">
      <div className="caption-icon">
        <img src={require(`../assets/images/svg/${caption.icon}`)} alt="" />
      </div>
      <div className="caption">
        <p>{caption.title1}</p>
        <p>{caption.title2}</p>
      </div>
    </div>
  );
}

export default Caption;