import React from 'react';

import Header from './components/Header';

import Home from './pages/Home';

import './assets/scss/app.scss';

function GoodFoods() {
  return (
    <div className="goodfoods-container">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default GoodFoods;