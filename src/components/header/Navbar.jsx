import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../images/logo.svg";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    document.querySelector("body").classList.toggle("open");
    setClicked(!clicked);
  };

  return (
    <nav className='navbar limit-wrapper'>
      <div className='logo-wrapper'>
        <img src={logo} alt='Shortly' className='header__logo' />
        <ul className='header__desktop_links hide-for-mobile'>
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
      </div>
      {clicked && <MobileMenu />}
      <button
        className={
          clicked
            ? "header__toggle hide-for-desktop open"
            : "header__toggle hide-for-desktop"
        }
        title='mobile menu'
        aria-label='open-menu'
        aria-expanded='false'
        onClick={() => handleClick()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className='header__desktop_cta hide-for-mobile'>
        <li className='header__desktop_link'>
          <a href='/#'>Login</a>
        </li>
        <li>
          <button className='header__desktop_button'>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
