import React from 'react';
import PropTypes from 'prop-types';

FooterLink.propTypes = {
  link: PropTypes.object.isRequired
};

function FooterLink(props) {
  const { link } = props;

  return (
    <div className="link">
      <h3 className="title">{link.title}</h3>
      {link.subLinks.length > 0 && (
        <ul>
          {link.subLinks.map((subLink, index) => (
            <li key={index}>
              <a href="/">{subLink.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FooterLink;