import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Projects from './components/Projects';
import GoodFoods from './projects/GoodFoods';
import LoanCompany from './projects/LoanCompany';
import AccordianComponent from './projects/AccordianComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/goodfoods" component={GoodFoods} />
        <Route path="/loan-company" component={LoanCompany} />
        <Route path="/accordian-component" component={AccordianComponent} />
      </Switch>
    </Router>
  );
}

export default App;
