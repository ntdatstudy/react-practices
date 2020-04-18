import React from 'react';
import MemberInfo from './MemberInfo';
import members from '../data/members.json';

function Section6() {
  return (
    <div className="section6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="title-container">
              <h3 className="primary-title">Our Loan Section Team Mambers</h3>
              <h1 className="secondary-title">Take a look to our professional team members.</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {members.map(member => (
            <div key={member.id} className="col-lg-3 col-sm-6">
              <MemberInfo member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section6;