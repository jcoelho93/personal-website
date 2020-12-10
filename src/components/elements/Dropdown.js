import React from "react";
import Translations from "../../translations.json"

class Dropdown extends React.Component {

    handleLanguageClick = (e) => {
        this.props.handleLanguageClick(e)
        this.setState({ 
          showDropdown: false
         });
      }

    render() {
        let arr = [];
        Object.keys(Translations).forEach((k) => {
        arr.push(k);
        });
        return(
            <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                    <figure className="image is-24x24">
                        <img className="is-rounded" src={Translations[this.props.language].basics.flag_img} />
                    </figure>
                </div>
                <div className="navbar-dropdown is-boxed">
                <div>
                    {arr.map((item) => {
                    return (
                        <div onClick={() => this.handleLanguageClick(item)} key={item} className="dropdown-item" >
                                <a>
                                    <figure className="image is-24x24">
                                        <img className="is-rounded" src={Translations[item].basics.flag_img} />
                                    </figure>
                                    {item}
                                </a>
                        </div>
                    )
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Dropdown

