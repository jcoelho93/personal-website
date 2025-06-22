import React from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable my-name">
              {Resume.basics.name}
            </a>
            <span
              role="button"
              className="navbar-burger"
              aria-label="menu"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div
            className={
              "navbar-menu " + (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="About Me" href="#aboutMe" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Certifications" href="#certifications" />
              <MenuItem text="Experience" href="#experience" />
              <MenuItem text="Articles" href="#articles" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
