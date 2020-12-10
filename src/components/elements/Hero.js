import React from "react";
import NavBar from "./NavBar";
import Translations from "../../translations.json";
import Resume from "../../resume.json";

function Hero(props) {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar text={props.text} language={props.language} handleLanguageClick={props.handleLanguageClick}/>
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">{props.text.intro}</p>
          <h1 className="title">{Translations[props.language].basics.label}</h1>
          <h2 className="subtitle">
            {Translations[props.language].basics.location.region}, {Translations[props.language].basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
