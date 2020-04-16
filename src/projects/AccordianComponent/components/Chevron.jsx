import React from 'react';
import PropTypes from 'prop-types';

Chevron.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};

Chevron.defaultProps = {
  width: '30px',
  height: '30px',
  color: '#000'
};

function Chevron(props) {
  return (
    <svg
      id="Layer_1"
      height={props.height}
      width={props.width}
      enableBackground="new 0 0 56.69 56.69"
      viewBox="0 0 56.69 56.69"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill={props.color} d="m17.2 51.779c-2.127 0-4.279-1.673-4.279-4.871v-37.125c0-3.198 2.152-4.872 4.279-4.872.792 0 2.011.229 3.317 1.322l21.133 17.682c1.348 1.126 2.119 2.739 2.119 4.427s-.771 3.301-2.119 4.428l-21.133 17.684c-1.308 1.096-2.525 1.325-3.317 1.325zm0-44.868c-1.135 0-2.279.888-2.279 2.872v37.125c0 1.983 1.145 2.871 2.279 2.871.46 0 1.187-.149 2.034-.858l21.133-17.686c.893-.746 1.402-1.8 1.402-2.894 0-1.093-.51-2.147-1.402-2.893l-21.133-17.68c-.847-.708-1.573-.857-2.034-.857z"/>
      </g>
    </svg>
  );
}

export default Chevron;