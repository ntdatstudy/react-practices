
import React from 'react';
import Header from './components/Header';

import './assets/scss/App.scss';

import AppProvider from './contexts/AppContext';

function LoanCompany() {
  return (
    <AppProvider>
      <div className="loancompany-container">
        <Header />
        {/* <main>
          <h1>Loan Company</h1>
        </main> */}
      </div>
    </AppProvider>
  );
}

export default LoanCompany;