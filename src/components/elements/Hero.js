import React from "react"
import NavBar from "./NavBar"

function Hero() {
    return (
        <section className="hero is-dark is-fullheight has-bg-image">
            <div className="hero-head">
                <NavBar />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-weight-light">I'm a</p>
                    <h1 className="title">DevOps Engineer</h1>
                    <h2 className="subtitle">Madeira Island, Portugal</h2>
                </div>
            </div>
            <div className="hero-foot" style={{paddingBottom:'20px'}}>
                <div className="columns is-mobile">
                    <div className="column is-4"></div>
                    <div className="column is-2 has-text-centered">
                        <a href="https://www.linkedin.com/in/josecoelho93" target="blank" className="is-hovered">
                            <span className="icon is-medium is-">
                                <i className="fab fa-2x fa-linkedin"></i>
                            </span>
                        </a>
                    </div>
                    <div className="column is-2 has-text-centered">
                        <a href="https://dev.to/jcoelho" target="blank" className="is-hovered">
                            <span className="icon is-medium">
                                <i className="fab fa-2x fa-dev"></i>
                            </span>
                        </a>
                    </div>
                    <div className="column is-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero