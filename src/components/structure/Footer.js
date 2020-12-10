import React from "react";

function Footer(props) {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          {props.text.footer1} <i className="fas fa-moon"></i> {props.text.footer2 + " "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
