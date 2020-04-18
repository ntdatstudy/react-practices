import React from 'react';
import FooterLink from './FooterLink';
import footerLinks from '../data/footerLinks.json';
import logoFooter from '../assets/images/logo2_footer.png';

function Footer() {
  const date = new Date();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="info">
              <img src={logoFooter} alt="" />
              <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing</p>
            </div>
          </div>
          {footerLinks.map((link, index) => (
            <div className="col-lg-3 col-sm-6">
              <FooterLink key={index} link={link} />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="copy-right">
          <p>
            Copyright ©{date.getFullYear()} All rights reserved | This template is made with&nbsp;
            <i className="fa fa-heart"></i> by <span>Colorlib</span>
          </p>
          <div className="media">
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fas fa-globe"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;