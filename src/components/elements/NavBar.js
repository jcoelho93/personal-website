import React from "react"
import MenuItem from "./MenuItem"


//document.querySelector('.nav-menu').classList.toggle('is-active')
//this.classList.toggle('is-active')

function NavBar() {
    return(
        <nav className="navbar is-transparent">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item title is-unselectable my-name">
                        José Coelho
                    </a>
                    <span className="navbar-burger burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="navbar-menu nav-menu">
                    <div className="navbar-end">
                        <MenuItem
                            text = "About Me"
                            href = "#aboutMe"
                        />
                        <MenuItem
                            text = "Skills"
                            href = "#skills"
                        />
                        <MenuItem
                            text = "Experience"
                            href = "#experience"
                        />
                        <MenuItem
                            text = "Articles"
                            href = "#articles"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar