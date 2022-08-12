import React from "react";

function Skill(props) {
    return (
        <div className="card skill-card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <span className={`skill-icon has-text-link is-size-3 fa-solid ${props.icon}`}></span>
                    </div>
                    <div className="media-content">
                        <p className="skill-title is-size-6">{props.text}</p>
                        <p className="has-text-grey is-size-7">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;