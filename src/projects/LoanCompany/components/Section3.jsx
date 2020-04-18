import React from 'react';
import Service from './Service';

import services from '../data/services.json';

function Section3() {
  return (
    <div className="section3">
      <div className="service-title">
        <h3 className="primary-title">Services that we are providing</h3>
        <h1 className="secondary-title">High Performance Services For All Industries.</h1>
      </div>
      <div className="service-container">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <Service service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;