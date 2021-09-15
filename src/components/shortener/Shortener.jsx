import React, { useState, useRef } from "react";
import Results from "./Results";

function Shortener() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState({
    originalUrl: "",
    shortUrl: "",
  });
  const currentUrl = useRef("");

  const handleChange = (e) => {
    if (e.target.value === undefined) {
      e.target.value = "";
      return handleError();
    }
    setUrl(e.target.value);
  };

  const validateUrl = (originalUrl) => {
    const urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return urlRegex.test(originalUrl);
  };

  const formatUrl = (originalUrl) => {
    //TODO: format URL into this string format (url=example.org/very/long/link.html)
    const formatUrlRegex = /((http(s)?)?:\/\/)?(www\.)?/;
    return originalUrl.replace(formatUrlRegex, "");
  };

  const handleError = () => {
    console.error("Please add a link");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url) || url === "") return handleError();
    currentUrl.current = formatUrl(url);
    getShortenenedUrl(currentUrl.current);
    document.getElementById("shortener").reset();
  };

  const pushResults = (resultData) => {
    //TODO: make results into array, push results using this method
  };

  async function getShortenenedUrl(originalUrl) {
    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + originalUrl
    );
    const data = await response.json();
    setResults({
      originalUrl: "https://" + originalUrl,
      shortUrl: data.result.full_short_link2,
    });
  }

  return (
    <>
      <form className='shortener' id='shortener' onSubmit={handleSubmit}>
        <input
          type='text'
          className='shortener__input'
          placeholder='Shorten a link here...'
          onChange={(e) => handleChange(e)}
        />
        <button type='submit' className='shortener__button'>
          Shorten It!
        </button>
      </form>
      <Results data={results} />
    </>
  );
}

export default Shortener;