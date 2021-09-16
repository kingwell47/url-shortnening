import React, { useState } from "react";
function Results(props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  return (
    <div className='results'>
      <p className='results__original'>
        {props.data.originalUrl}https://kingwell47.com
      </p>
      <p className='results__shortened'>
        {props.data.shortUrl}https://9qr.de/Iik18e
      </p>
      <button
        className='results__button_copy'
        onClick={() => copyToClipboard(props.data.shortUrl)}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Results;
