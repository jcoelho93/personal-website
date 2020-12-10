import React from "react";
import Hero from "../elements/Hero";

function Header(props) {
  return (
    <header>
      <Hero text={props.text} language={props.language} handleLanguageClick={props.handleLanguageClick}/>
    </header>
  );
}

export default Header;
