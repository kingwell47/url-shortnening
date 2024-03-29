import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./Header.scss";

function Header() {
  return (
    <header className='header limit-wrapper'>
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
