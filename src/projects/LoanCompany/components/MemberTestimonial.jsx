import React from 'react';
import PropTypes from 'prop-types';

import testimonialImg from '../assets/images/testimonial.png';

MemberTestimonial.propTypes = {
  member: PropTypes.object.isRequired
};

function MemberTestimonial(props) {
  const { member } = props;

  return (
    <div className="member-testimonial">
      <img className="testimonial-img" src={testimonialImg} alt="" />
      <h1 className="testimonial">Logisti Group is a representative logistics operator providing full range of ser
of customs clearance and transportation worl.</h1>
      <div className="member-info">
        <div className="image">
          <img src={require(`../assets/images/members/${member.image}`)} alt="" />
        </div>
        <div className="info">
          <h3>{member.name}</h3>
          <h6>{member.position}</h6>
        </div>
      </div>
    </div>
  );
}

export default MemberTestimonial;