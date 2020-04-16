import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Chevron from './Chevron';

import '../assets/scss/Accordion.scss';

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

Accordion.defaultProps = {
  title: '',
  content: ''
};

function Accordion(props) {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0');
  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === '' ? 'active' : '');
    setHeight(active === '' ? `${content.current.scrollHeight}px` : '0');
  }

  return (
    <div className="accordion-container">
      <button
        className={`accordion-toggler ${active}`}
        onClick={toggleAccordion}
      >
        <p>{props.title}</p>
        <Chevron width="15px" height="15px" />
      </button>
      <div
        ref={content}
        className="accordion-content"
        style={{ maxHeight: height }}
      >
        <div 
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;