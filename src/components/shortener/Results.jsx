import React, { useState } from "react";
function Results(props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  return (
    <div className='results'>
      <p className='results__original'>{props.data.originalUrl}</p>
      <hr />
      <p className='results__shortened'>
        {props.data.shortUrl}
        <button
          className={
            copied ? "results__button_copy active" : "results__button_copy"
          }
          onClick={() => copyToClipboard(props.data.shortUrl)}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </p>
    </div>
  );
}

export default Results;
