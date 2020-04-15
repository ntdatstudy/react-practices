import React, { useContext } from 'react';

import Banner from '../components/Banner';
import Media from '../components/Media';
import Controls from '../components/Controls';

import HomeProvider, { HomeContext } from '../contexts/HomeContext';

function Home() {
  const { banners } = useContext(HomeContext);

  return (
    <HomeProvider>
      {banners.map((banner, index) => (
        <Banner key={index} banner={banner} index={index} />
      ))}
      <div className="icons">
        <Media />
        <Controls />
      </div>
    </HomeProvider>
  );
}

export default Home;