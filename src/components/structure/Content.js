import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";

function Content(props) {
  return (
    <main>
      <AboutMe text={props.text} language={props.language}/>
      <Skills text={props.text} language={props.language}/>
      <Experience text={props.text} language={props.language}/>
      <Articles text={props.text} language={props.language}/>
    </main>
  );
}

export default Content;
