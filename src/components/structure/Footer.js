import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
        <p>
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            <img
              src="https://bulma.io/assets/images/made-with-bulma--semiwhite.png"
              className="bulma-image"
              alt=""
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
