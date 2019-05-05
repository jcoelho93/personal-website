import React from "react"
import Badge from "../elements/Badge"

function AboutMe() {
    return(
        <section className="section has-background-link" id="aboutMe">
            <div className="container has-text-centered">
                <figure className="image container is-180x180">
                    <img src="images/jcoelho.jpg" alt="José Coelho" className="is-rounded" />
                </figure>
                <p className="subtitle is-4 has-text-white has-text-weight-bold">Hey There! Glad you're here</p>
                <p className="subtitle is-5 has-text-white has-text-weight-light">
                    Going on 4 years of experience in IT. Currently I’m working as a developer
                    <br />exploring the DevOps world. I’m interested in service management, all sorts
                    <br />of automation and developing front-end and back-end applications.
                </p>
                <div className="container interests">
                    <div className="field is-grouped is-grouped-multiline has-text-centered">
                        <Badge
                            text = "Travel bug"
                            faIcon = "fa-globe-africa"
                        />
                        <Badge
                            text = "Dog Lover"
                            faIcon = "fa-dog"
                        />
                        <Badge
                            text = "Foodie"
                            faIcon = "fa-utensils"
                        />
                        <Badge
                            text = "Live in the now"
                            faIcon = "fa-brain"
                        />
                    </div>        
                </div>
            </div>
        </section>
    )
}

export default AboutMe