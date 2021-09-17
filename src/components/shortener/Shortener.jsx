import React, { useState, useRef } from "react";

import Results from "./Results";
import "./Shortener.scss";

function Shortener() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [showingResults, setShowingResults] = useState(false);
  const [results, setResults] = useState([]);
  const currentUrl = useRef("");

  const handleChange = (e) => {
    if (e.target.value === undefined) {
      e.target.value = "";
      return setError(true);
    }
    setUrl(e.target.value);
    setError(false);
  };

  const validateUrl = (originalUrl) => {
    const urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return urlRegex.test(originalUrl);
  };

  const formatUrl = (originalUrl) => {
    const formatUrlRegex = /((http(s)?)?:\/\/)?(www\.)?/;
    return originalUrl.replace(formatUrlRegex, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url) || url === "") return setError(true);
    currentUrl.current = formatUrl(url);
    getShortenenedUrl(currentUrl.current);
    document.getElementById("shortener_form").reset();
    setError(false);
    setUrl("");
  };

  async function getShortenenedUrl(originalUrl) {
    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + originalUrl
    );
    const data = await response.json();
    const dataObj = {
      originalUrl: "https://" + originalUrl,
      shortUrl: data.result.full_short_link2,
    };
    setResults([...results, dataObj]);
    setShowingResults(true);
  }

  return (
    <section className='shortener container'>
      <div className='shortener__wrapper'>
        <form
          className='shortener__form'
          id='shortener_form'
          onSubmit={handleSubmit}>
          <div className='input_wrapper'>
            <input
              type='text'
              className={error ? "shortener__input error" : "shortener__input"}
              placeholder='Shorten a link here...'
              onChange={(e) => handleChange(e)}
            />
            {error && <div className='shortener__error'>Please add a link</div>}
          </div>
          <button type='submit' className='shortener__button'>
            Shorten It!
          </button>
        </form>
      </div>
      <div className='results_wrapper'>
        {showingResults &&
          results.map((data, index) => <Results data={data} key={index} />)}
      </div>
    </section>
  );
}

export default Shortener;
