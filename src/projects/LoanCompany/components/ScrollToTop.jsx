import React from 'react';
import ScrollTopIcon from './Icons/ScrollTopIcon';

function ScrollToTop() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button className="btn-scroll-to-top" onClick={scrollTop}>
      <ScrollTopIcon color="#FFF" />
    </button>
  );
}

export default ScrollToTop;