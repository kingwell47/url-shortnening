import React from "react";
// import Card from "./Card";
import "./Features.scss";
import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import custom from "../../images/icon-fully-customizable.svg";

function Features() {
  const cardContent = [
    {
      src: brand,
      title: "Brand Recognition",
      text: `Boost your brand recognition with each click. Generic links don’t mean
    a thing. Branded links help instil confidence in your content.`,
    },
    {
      src: records,
      title: "Detailed Records",
      text: `Gain insights into who is clicking your links. Knowing when and where
      people engage with your content helps inform better decisions.`,
    },
    {
      src: custom,
      title: "Fully Customizable",
      text: `Improve brand awareness and content discoverability through
      customizable links, supercharging audience engagement.`,
    },
  ];

  function Card(props) {
    return (
      <div className='features__card'>
        <div className='features__card_image'>
          <img src={props.src} alt='' />
        </div>
        <h3 className='features__card_title'>{props.title}</h3>
        <p className='features__card_text'>{props.text}</p>
      </div>
    );
  }

  return (
    <main>
      <section className='features container'>
        <div className='features__text_wrapper'>
          <h2 className='features__title'>Advanced Statistics</h2>
          <p className='features__title_text'>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className='features__card_wrapper'>
          {cardContent.map((item, index) => {
            return (
              <Card
                key={index}
                src={item.src}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </section>
      <section className='features__cta container'>
        <h2 className='features__cta_title'>Boost your links today</h2>
        <button className='features__cta_button'>Get Started</button>
      </section>
    </main>
  );
}

export default Features;
