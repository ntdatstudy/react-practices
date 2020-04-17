import React, { useContext } from 'react';

import backIcon from '../assets/images/back.svg';
import nextIcon from '../assets/images/next.svg';

import { AppContext } from '../contexts/AppContext';

function MainSliderController() {
  const { nextPromotion, prevPromotion } = useContext(AppContext);

  return (
    <div className="main-slider-controller">
      <button className="controller prev" onClick={prevPromotion}>
        <img src={backIcon} alt="" />
      </button>
      <button className="controller next" onClick={nextPromotion}>
        <img src={nextIcon} alt="" />
      </button>
    </div>
  );
}

export default MainSliderController;