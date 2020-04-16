import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Projects from './components/Projects';
import GoodFoods from './projects/GoodFoods';
import LoanCompany from './projects/LoanCompany';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/goodfoods" component={GoodFoods} />
        <Route path="/loan-company" component={LoanCompany} />
      </Switch>
    </Router>
  );
}

export default App;
