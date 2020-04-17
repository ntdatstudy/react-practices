import React from 'react';
import PropTypes from 'prop-types';

Caption.propTypes = {
  caption: PropTypes.object.isRequired
};

function Caption(props) {
  const { caption } = props;

  return (
    <div class="caption-container">
      <div class="caption-icon">
        <img src={require(`../assets/images/${caption.icon}`)} alt="" />
      </div>
      <div className="caption">
        <p>{caption.title1}</p>
        <p>{caption.title2}</p>
      </div>
    </div>
  );
}

export default Caption;