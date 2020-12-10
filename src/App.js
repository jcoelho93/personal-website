import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Translations from './translations.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "English"
    }
  }
  
  componentDidMount() {
    document.title = [
      Translations[this.state.language].basics.name,
      Translations[this.state.language].basics.label,
      [Translations[this.state.language].basics.location.region, Translations[this.state.language].basics.location.country].join(", ")
    ].join(" | ");
  }

  handleLanguageClick = (lang) => {
    this.setState({language: lang})
  }

  render() {
    return (
      <div>
        <Header text={Translations[this.state.language].basics.text} language={this.state.language} handleLanguageClick={this.handleLanguageClick}/>
        <Content text={Translations[this.state.language].basics.text} language={this.state.language}/>
        <Footer text={Translations[this.state.language].basics.text} language={this.state.language}/>
      </div>
    );
  }
}

export default App;
