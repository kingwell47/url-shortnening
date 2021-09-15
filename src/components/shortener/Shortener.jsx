import React from "react";
import Results from "./Results";

function Shortener() {
  return (
    <>
      <div className='shortener'>
        <input type='text' className='shortener__input' />
        <button
          className='shortener__button'
          placeholder='Shorten a link here...'>
          Shorten It!
        </button>
      </div>
      <Results />
    </>
  );
}

export default Shortener;
