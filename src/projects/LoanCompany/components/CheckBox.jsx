import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

CheckBox.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.bool
};

CheckBox.defaultProps = {
  text: '',
  children: '',
  checked: false
};

function CheckBox(props) {
  const { children, text, checked } = props;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checked);
  }, []);

  function onCheckBoxChange() {
    setCheck(!check);
  }

  return (
    <label className="loancompany-checkbox">
      {children === '' ? text : children}
      <input type="checkbox" onChange={onCheckBoxChange} checked={check} />
      <span></span>
    </label>
  );
}

export default CheckBox;