import React from 'react';
import captions from '../data/captions.json';

import Caption from './Caption';

import sliderFooterImg from '../assets/images/slider_footer.png';

function MainSliderFooter() {
  return (
    <div className="main-slider-footer">
      <div className="caption-container">
        <div className="caption-image">
          <img src={sliderFooterImg} alt="" />
        </div>
      </div>
      {captions.map((caption, index) => (
        <Caption key={index} caption={caption} />
      ))}
    </div>
  );
}

export default MainSliderFooter;