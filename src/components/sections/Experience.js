import React from "react";

import Timeline from "../elements/Timeline";

function Experience(props) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h1 className="title">{props.text.experience}</h1>
        <Timeline language={props.language}/>
      </div>
    </section>
  );
}

export default Experience;
