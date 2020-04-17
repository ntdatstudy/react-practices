
import React from 'react';
import Favicon from 'react-favicon';

import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import AppProvider from './contexts/AppContext';

import './assets/scss/App.scss';
import favicon from './assets/images/favicon.png';

function LoanCompany() {
  return (
    <AppProvider>
      <Favicon url={favicon} />
      <div className="loancompany-container">
        <Header />
        <main>
          <Section1 />
          <Section2 />
          <Section3 />
        </main>
      </div>
    </AppProvider>
  );
}

export default LoanCompany;