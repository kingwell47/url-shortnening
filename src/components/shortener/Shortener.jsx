import React, { useState, useRef, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import Results from "./Results";
import "./Shortener.scss";

function Shortener() {
  const [url, setUrl] = useState("");
  const [errorStatus, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showingResults, setShowingResults] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useLocalStorage("results", []);
  const currentUrl = useRef("");

  //TODO: Local Storage for shortenend links!

  useEffect(() => {
    if (localStorage.getItem("results") === null) return;
    const data = localStorage.getItem("results");
    setResults(JSON.parse(data));
    setShowingResults(true);
  }, []);

  const handleChange = (e) => {
    if (e.target.value === undefined) {
      e.target.value = "";
      return handleError();
    }
    setUrl(e.target.value);
    setError(false);
  };

  const validateUrl = (originalUrl) => {
    const urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return urlRegex.test(originalUrl);
  };

  const handleError = (errMessage) => {
    setError(true);
    setProcessing(false);
    if (errMessage === undefined) return setErrorMessage("Please add a link");
    setErrorMessage(errMessage);
  };

  const handleSuccess = (resObj) => {
    setResults([...results, resObj]);
    setShowingResults(true);
    setError(false);
    setProcessing(false);
  };

  const formatUrl = (originalUrl) => {
    const formatUrlRegex = /((http(s)?)?:\/\/)?(www\.)?/;
    return originalUrl.replace(formatUrlRegex, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!validateUrl(url) || url === "") return handleError();
    currentUrl.current = formatUrl(url);
    getShortenenedUrl(currentUrl.current);
    document.getElementById("shortener_form").reset();
    setUrl("");
  };

  async function getShortenenedUrl(originalUrl) {
    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + originalUrl
    );
    const { ok, error, result } = await response.json();
    if (ok) {
      return handleSuccess({
        originalUrl: "https://" + originalUrl,
        shortUrl: result.full_short_link2,
      });
    } else {
      return handleError(error);
    }
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
              className={
                errorStatus ? "shortener__input error" : "shortener__input"
              }
              placeholder='Shorten a link here...'
              onChange={(e) => handleChange(e)}
            />
            <div className='shortener__error'>
              {errorStatus ? errorMessage : ""}
            </div>
          </div>
          <button type='submit' className='shortener__button'>
            {processing ? "Shortening..." : "Shorten It!"}
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
