import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Error from '../../components/Error';

import './assets/scss/app.scss';

function GoodFoods() {
  return (
    <div className="container">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Router component={Error} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default GoodFoods;