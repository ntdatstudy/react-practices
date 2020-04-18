import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MemberTestimonial from './MemberTestimonial';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import members from '../data/members.json';

function Section7() {
  return (
    <div className="section7">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        emulateTouch={true}
        swipeScrollTolerance={1}
      >
        {members.map(member => (
          <div key={member.id} className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-md-9">
                <MemberTestimonial key={member.id} member={member} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Section7;