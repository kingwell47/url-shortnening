import React from "react";
import Card from "./Card";

function Features() {
  return (
    <main>
      <section className='features'>
        <div className='features__text_wrapper'>
          <h2 className='features__title'>Advanced Statistics</h2>
          <p className='features__title_text'>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <Card />
      </section>
      <section className='features__cta'>
        <h2 className='features__cta_title'>Boost your links today</h2>
        <button className='features__cta_button'>Get Started</button>
      </section>
    </main>
  );
}

export default Features;
