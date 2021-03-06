import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import sr from '../../../assets/js/withScrollReveal';

MemberInfo.propTypes = {
  member: PropTypes.object.isRequired
};

function MemberInfo(props) {
  const { member } = props;
  const section = useRef(null);
  
  const sectionConfig = {
    origin: 'bottom',
    duration: 2000,
    delay: 500,
    distance: '500px'
  };
  
  useEffect(() => {
    sr.reveal(section.current, sectionConfig);
  }, []);

  return (
    <div className="member-info" ref={section}>
      <div className="image">
        <img src={require(`../assets/images/members/${member.image}`)} alt="" />
        <div className="media">
          <a href="/" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="globe">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
      <div className="caption">
        <h1>{member.name}</h1>
        <h3>{member.title}</h3>
      </div>
    </div>
  );
}

export default MemberInfo;