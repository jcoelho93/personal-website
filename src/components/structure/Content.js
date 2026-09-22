import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";
import { SHOW_EXPERIENCE } from "../../config";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Certifications />
      {SHOW_EXPERIENCE && <Experience />}
      <Articles />
    </main>
  );
}

export default Content;
