import React from 'react';
import PropTypes from 'prop-types';

Service.propTypes = {
  service: PropTypes.object.isRequired
};

function Service(props) {
  const { service } = props;

  return (
    <div className="service">
      <div className="service-icon">
        <img src={require(`../assets/images/svg/${service.icon}`)} alt="" />
      </div>
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.content}</p>
      </div>
    </div>
  );
}

export default Service;