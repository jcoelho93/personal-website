import React from "react";
import MenuItem from "./MenuItem";
import Dropdown from "./Dropdown";
import Resume from "../../resume.json";
import Translations from "../../translations.json";

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
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable my-name">
              {Resume.basics.name}
            </a>
            
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <Dropdown language={this.props.language} handleLanguageClick={this.props.handleLanguageClick}/>
              <MenuItem text={this.props.text.aboutme} href="#aboutMe" />
              <MenuItem text={this.props.text.skills} href="#skills" />
              <MenuItem text={this.props.text.exp} href="#experience" />
              <MenuItem text={this.props.text.articles.title} href="#articles" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
