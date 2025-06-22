import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-link" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width="180px"
            height="180px"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = Resume.basics.x_pictureFallback;
            }}
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <div
          className="subtitle is-5 has-text-white has-text-weight-light summary-text"
          dangerouslySetInnerHTML={{ __html: Resume.basics.summary }}
        ></div>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
