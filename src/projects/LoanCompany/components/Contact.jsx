import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const contact = '+880.762.009.00';

  return (
    <Link className="contact" to="/loan-company" data-text={contact}>
      {contact}
    </Link>
  );
}

export default Contact;