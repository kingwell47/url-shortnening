import React from "react";
import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import custom from "../../images/icon-fully-customizable.svg";

function Card() {
  return (
    <>
      <div className='features__card'>
        <img src={brand} alt='' className='features__card_image' />
        <h3 className='features__card_title'>Brand Recognition</h3>
        <p className='features__card_text'>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className='features__card'>
        <img src={records} alt='' className='features__card_image' />
        <h3 className='features__card_title'>Detailed Records</h3>
        <p className='features__card_text'>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className='features__card'>
        <img src={custom} alt='' className='features__card_image' />
        <h3 className='features__card_title'>Fully Customizable</h3>
        <p className='features__card_text'>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </>
  );
}

export default Card;
