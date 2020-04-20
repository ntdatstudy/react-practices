import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Projects from './components/Projects';

import {
  GoodFoods,
  LoanCompany,
  Covid19Tracker
} from './projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/goodfoods" component={GoodFoods} />
        <Route path="/loan-company" component={LoanCompany} />
        <Route path="/covid-19-tracker" component={Covid19Tracker} />
      </Switch>
    </Router>
  );
}

export default App;
