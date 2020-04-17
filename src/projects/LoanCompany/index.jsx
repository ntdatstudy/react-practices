
import React from 'react';
import AppProvider from './contexts/AppContext';

import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

import './assets/scss/App.scss';


function LoanCompany() {
  return (
    <AppProvider>
      <div className="loancompany-container">
        <Header />
        <main>
          <Section1 />
          <Section2 />
        </main>
      </div>
    </AppProvider>
  );
}

export default LoanCompany;