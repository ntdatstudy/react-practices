import React, { useContext } from 'react';

import leftButton from '../assets/images/controls/left-square.png';
import rightButton from '../assets/images/controls/right-square.png';

import { HomeContext } from '../contexts/HomeContext';

function Controls() {
  const { onChangeNextBanner, onChangePrevBanner } = useContext(HomeContext);

  return (
    <ul className="controls">
      <li onClick={onChangePrevBanner}>
        <img src={leftButton} alt="" />
      </li>
      <li onClick={onChangeNextBanner}>
        <img src={rightButton} alt="" />
      </li>
    </ul>
  );
}

export default Controls;