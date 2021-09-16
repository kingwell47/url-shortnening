import React from "react";

function MobileMenu() {
  return (
    <div className='header__mobile_menu hide-for-desktop'>
      <ul className='header__mobile_links'>
        <li className='header__mobile_link'>
          <a href='/#'>Features</a>
        </li>
        <li className='header__mobile_link'>
          <a href='/#'>Pricing</a>
        </li>
        <li className='header__mobile_link'>
          <a href='/#'>Resources</a>
        </li>
      </ul>
      <hr />
      <ul className='header__mobile_cta'>
        <li className='header__mobile_link'>
          <a href='/#'>Login</a>
        </li>
        <li>
          <button className='header__mobile_button'>Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
