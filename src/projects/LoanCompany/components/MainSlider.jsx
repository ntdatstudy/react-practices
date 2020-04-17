import React, { useContext } from 'react';

import Promotion from './Promotion';
import MainSliderController from './MainSliderController';
import { AppContext } from '../contexts/AppContext';

function MainSlider() {
  const { promotions } = useContext(AppContext);

  return (
    <div className="main-slider">
      {promotions.map((promotion, index) => (
        <Promotion key={promotion.id} promotion={promotion} index={index} />
      ))}
      <MainSliderController />
    </div>
  );
}

export default MainSlider;