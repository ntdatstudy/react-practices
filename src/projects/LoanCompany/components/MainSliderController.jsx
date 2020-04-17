import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';
import BackIcon from './Icons/BackIcon';
import NextIcon from './Icons/NextIcon';

function MainSliderController() {
  const { nextPromotion, prevPromotion } = useContext(AppContext);

  return (
    <div className="main-slider-controller">
      <button className="controller prev" onClick={prevPromotion}>
        <BackIcon />
      </button>
      <button className="controller next" onClick={nextPromotion}>
        <NextIcon />
      </button>
    </div>
  );
}

export default MainSliderController;