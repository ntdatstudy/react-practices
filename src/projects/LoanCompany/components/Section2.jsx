import React, { useRef, useEffect } from 'react';
import LoanCompanyLink from './LoanCompanyLink';
import sr from '../../../assets/js/withScrollReveal';

import image1 from '../assets/images/about1.png';
import image2 from '../assets/images/about2.png';

function Section2() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  
  const img1Config = {
    origin: 'left',
    duration: 2000,
    distance: '500px'
  };

  const img2Config = {
    ...img1Config,
    origin: 'right'
  }

  useEffect(() => {
    sr.reveal(img1.current, img1Config);
    sr.reveal(img2.current, img2Config);
  }, []);

  return (
    <div className="section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left-container">
            <h3 className="primary-title">About Out Company</h3>
            <h1 className="secondary-title">Building a Brighter financial Future & Good Support.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniminixm, quis nostrud exercitation ullamco laboris nisi ut aliquip exeaoauat. Duis aute irure dolor in reprehe.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliq.</p>
            <LoanCompanyLink text="Apply For Loan" />
          </div>
          <div className="col-lg-6 right-container">
            <div className="image1" ref={img1}>
              <img src={image1} alt="" />
            </div>
            <div className="image2" ref={img2}>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="left-container">
        <h3>About Out Company</h3>
        <h1>Building a Brighter financial Future & Good Support.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniminixm, quis nostrud exercitation ullamco laboris nisi ut aliquip exeaoauat. Duis aute irure dolor in reprehe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliq.</p>
        <LoanCompanyLink text="Apply For Loan" />
      </div>
      <div className="right-container">
        <div className="image1">
          <img src={image1} alt="" />
        </div>
        <div className="image2">
          <img src={image2} alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Section2;