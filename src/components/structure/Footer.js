import React from "react"

function Footer() {
    return (
        <footer className="footer has-background-link">
            <div className="content has-text-centered has-text-white">
                <p>
                    Built at <i className="fas fa-moon"></i> by <strong className="has-text-white">José Coelho</strong>
                </p>
                <p>
                    <img width="512" height="96" src="https://bulma.io/images/made-with-bulma--semiwhite.png" className="bulma-image" alt="" />
                </p>
            </div>
        </footer>
    )
}

export default Footer