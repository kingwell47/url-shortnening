import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import MobileMenu from "./MobileMenu";
import logo from "../../images/logo.svg";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const transitions = useTransition(clicked, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: clicked,
    delay: 0,
    duration: 150,
  });

  const handleClick = () => {
    document.querySelector("body").classList.toggle("open");
    setClicked(!clicked);
  };

  return (
    <nav className='navbar container'>
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
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <MobileMenu />
            </animated.div>
          )
      )}
      {/* {clicked && <MobileMenu />} */}
      <button
        className={
          clicked
            ? "header__toggle hide-for-desktop open"
            : "header__toggle hide-for-desktop"
        }
        title='mobile menu'
        aria-label='open-menu'
        aria-expanded={clicked}
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
