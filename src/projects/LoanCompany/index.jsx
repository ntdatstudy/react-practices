
import React, { useEffect, useState } from 'react';
import Favicon from 'react-favicon';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Footer from './components/Footer';
import AppProvider from './contexts/AppContext';

import './assets/scss/App.scss';
import favicon from './assets/images/favicon.png';

function LoanCompany() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) setScrollTop(true);
      else setScrollTop(false);
    });
  }, []);

  return (
    <AppProvider>
      <Favicon url={favicon} />
      <div className="loancompany-container">
        <Header />
        <main>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
        </main>
        <Footer />
      </div>
      {scrollTop && <ScrollToTop />}
    </AppProvider>
  );
}

export default LoanCompany;