import React from "react";
//THIS ISN'T WORKING for some reason! Try the map method!
function Results(props) {
  return (
    <div className='results'>
      <p className='results__original'>{props.data.originalUrl}</p>
      <p className='results__shortened'>{props.data.shortUrl}</p>
      <button className='results__button_copy'>Copy</button>
    </div>
  );
}

export default Results;
