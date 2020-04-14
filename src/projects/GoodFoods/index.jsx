import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from '../../components/Error';

import './assets/scss/app.scss';

function GoodFoods() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Router component={Error} />
      </Switch>
    </Router>
  );
}

export default GoodFoods;