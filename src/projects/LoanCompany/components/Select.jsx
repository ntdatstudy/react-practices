import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

DropDown.propTypes = {
  placeholder: PropTypes.string,
  list: PropTypes.array,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

DropDown.defaultProps = {
  placeholder: '',
  list: []
};

function DropDown(props) {
  const { placeholder, list, value, text } = props;

  const [indexSelected, setIndexSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0');

  const content = useRef(null);
  const target = useRef(null);
  let lastIndex = useRef(null);

  const selectClasses = open ? 'select active' : 'select';

  useEffect(() => {
    window.onclick = e => {
      const selectTarget = target.current.getBoundingClientRect();
      const startX = selectTarget.x;
      const endX = startX + selectTarget.width;
      const startY = selectTarget.y;
      const endY = startY + selectTarget.height;

      if (e.clientX < startX || e.clientX > endX || e.clientY < startY || e.clientY > endY) {
        setOpen(false);
      }
    }
  });

  useEffect(() => {
    if (indexSelected !== lastIndex) setOpen(false);
  }, [indexSelected]);

  useEffect(() => {
    setMaxHeight(open ? `${content.current.scrollHeight}px` : '0');
  }, [open]);

  function toggleOpen() {
    setOpen(!open);
  }

  function changeIndexSelected(newIndex) {
    lastIndex = indexSelected;
    setIndexSelected(newIndex);
  }

  return (
    <div className="loancompany-select" ref={target}>
      <select>
        {placeholder !== '' && <option value="">{placeholder}</option>}
        {list.map((item, index) => (
          <option key={index} value={item[value]}>{item[text]}</option>
        ))}
      </select>
      <div className={selectClasses} onClick={toggleOpen}>
        <span>
          {indexSelected === null ? placeholder : list[indexSelected][text]}
        </span>
        <ul className={open ? 'active' : ''} style={{ maxHeight }} ref={content}>
          {placeholder !== '' && (
            <li
              className={indexSelected === null ? 'selected' : ''}
              onClick={() => changeIndexSelected(null)}
            >
              {placeholder}
            </li>
          )}
          {list.map((item, index) => (
            <li
              className={indexSelected === index ? 'selected' : ''}
              key={index}
              onClick={() => changeIndexSelected(index)}
            >
              {item[text]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;