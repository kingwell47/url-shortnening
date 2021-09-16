import React from "react";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='Shortly' className='footer__logo' />
      <h4 className='footer__links_title'>Features</h4>
      <ul className='footer__links'>
        <li className='footer_link'>
          <a href='/#'>Link Shortening</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Branded Links</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Analytics</a>
        </li>
      </ul>
      <h4 className='footer__links_title'>Resources</h4>
      <ul className='footer__links'>
        <li className='footer_link'>
          <a href='/#'>Blog</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Developers</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Support</a>
        </li>
      </ul>
      <h4 className='footer__links_title'>Company</h4>
      <ul className='footer__links'>
        <li className='footer_link'>
          <a href='/#'>About</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Our Team</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Careers</a>
        </li>
        <li className='footer_link'>
          <a href='/#'>Contact</a>
        </li>
      </ul>
      <ul className='footer__social_links'>
        <li className='footer_social_link'>
          <a href='/#'>Facebook</a>
        </li>
        <li className='footer_social_link'>
          <a href='/#'>Twitter</a>
        </li>
        <li className='footer_social_link'>
          <a href='/#'>Pinterest</a>
        </li>
        <li className='footer_social_link'>
          <a href='/#'>Instagram</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
