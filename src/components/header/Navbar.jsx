import React from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../images/logo.svg";

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Shortly' className='header__logo' />
      <MobileMenu />
      <ul className='header__desktop_links'>
        <li className='header__desktop_link'>
          <a href='/#'>Features</a>
        </li>
        <li className='header__desktop_link'>
          <a href='/#'>Pricing</a>
        </li>
        <li className='header__desktop_link'>
          <a href='/#'>Resources</a>
        </li>
      </ul>
      <ul className='header__desktop_cta'>
        <li className='header__desktop_login'>
          <a href='/#'>Login</a>
        </li>
        <li className='header__desktop_button'>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
