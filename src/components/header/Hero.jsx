import React from "react";
import heroImage from "../../images/illustration-working.svg";

function Hero() {
  return (
    <div className='header__hero container'>
      <div className='header__hero_image'>
        <img src={heroImage} alt='' />
      </div>
      <div className='header__text_wrapper'>
        <h1 className='header__title'>More than just shorter links</h1>
        <p className='header__text'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='header__button'>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
