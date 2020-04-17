import React from 'react';
import Service from './Service';

import services from '../data/services.json';

function Section3() {
  return (
    <div className="section3">
      <div class="services-title">
        <h3>Services that we are providing</h3>
        <h1>High Performance Services For All Industries.</h1>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Section3;