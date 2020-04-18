import React from 'react';
import Favicon from 'react-favicon';

import Header from './components/Header';

import Home from './pages/Home';

import './assets/scss/app.scss';
import favicon from './assets/images/favicon.jpg';

function GoodFoods() {
  return (
    <div className="goodfoods-container">
      <Favicon url={favicon} />
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default GoodFoods;