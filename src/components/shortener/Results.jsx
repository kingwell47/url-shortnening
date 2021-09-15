import React from "react";

function Results() {
  return (
    <div className='results'>
      <p className='results__original'>
        https://longurllink.com/why-is-this-long/i-dont-know
      </p>
      <p className='results__shortened'>https://short.link</p>
      <button className='results__button_copy'>Copy</button>
    </div>
  );
}

export default Results;
