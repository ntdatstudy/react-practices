import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

LoanCompanyLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
};

LoanCompanyLink.defaultProps = {
  text: '',
  href: '/loan-company',
  className: ''
};

function LoanCompanyLink(props) {
  const className = props.className === '' ? 'loancompany-link' : `loancompany-link ${props.className}`;

  return (
    <Link className={className} to={props.href} data-text={props.text}>
      {props.text}
    </Link>
  );
}

export default LoanCompanyLink;