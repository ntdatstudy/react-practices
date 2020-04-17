import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoanCompanyLink from './LoanCompanyLink';
import { AppContext } from '../contexts/AppContext';

import { capitalize } from '../../../assets/common';

Promotion.propTypes = {
  promotion: PropTypes.object.isRequired
};

function Promotion(props) {
  const { promotion, index } = props;
  const { currentPromotion } = useContext(AppContext);
  const className = currentPromotion === index ? 'promotion-container active' : 'promotion-container';

  return (
    <div className={className}>
      <div className="promotion-info">
        <h3>{capitalize(promotion.title)}</h3>
        <h1>{promotion.content}</h1>
        <LoanCompanyLink text="Apply For Loan" />
      </div>
      <div className="promotion-img">
        <img
          src={require(`../assets/images/promotion/${promotion.image}`)}
          alt={promotion.title} 
        />
      </div>
    </div>
  );
}

export default Promotion;