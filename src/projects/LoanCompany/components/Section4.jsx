import React from 'react';
import CheckBox from './CheckBox';
import img from '../assets/images/single2.jpg';

function Section4() {
  return (
    <div className="section4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section4-1" data-text="Since 1992">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section4-2">
              <div className="info">
                <h3 className="primary-title">Why Choose Our Company</h3>
                <h1 className="secondary-title">We Promise Sustainable Future For You.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              </div>
              <div className="benefits">
                <CheckBox checked={true}>Aorem ipsum dgolor sitnfd amet dfgbn fbsdg</CheckBox>
                <CheckBox checked={true}>Consectetur adipisicing bfnelit, sedb dvbnfo</CheckBox>
                <CheckBox checked={true}>Eiusmod tempor incididunt vmgldupout labore</CheckBox>
                <CheckBox checked={true}>Admkde mibvnim veniam, quivds cnostrud.</CheckBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;