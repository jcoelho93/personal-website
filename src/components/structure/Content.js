import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Badges from "../sections/Badges";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Badges />
      <Experience />
      <Articles />
    </main>
  );
}

export default Content;
