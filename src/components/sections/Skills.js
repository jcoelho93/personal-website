import React from "react"
import SkillsList from "../elements/SkillsList"

function Skills() {
    return(
        <section className="section" id="skills">
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-cogs"></i>
                            </span>
                            <h2 className="title is-5">DevOps</h2>
                        </div>
                        <SkillsList
                            skills = {{
                                'Jenkins': 90,
                                'Continuous Integration': 80,
                                'Scripting': 95,
                                'Containers': 60,
                                'Cloud': 60,
                                'Troubleshootin': 95,
                                'Infrastructure Automation': 50
                            }}
                        />
                    </div>
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-laptop-code"></i>
                            </span>
                            <h2 className="title is-5">Software Development</h2>
                        </div>
                        <ul className="skill-list">
                            <li>
                                <span className="title is-5">Object Oriented Programming</span>
                                <span className="subtitle is-6">95%</span>
                                <progress className="progress is-success" value="95" max="100">95%</progress>
                            </li>
                            <li>
                                <span className="title is-5">Design Patterns</span>
                                <span className="subtitle is-6">70%</span>
                                <progress className="progress is-success" value="70" max="100">70%</progress>
                            </li>
                            <li>
                                <span className="title is-5">Git</span>
                                <span className="subtitle is-6">75%</span>
                                <progress className="progress is-success" value="75" max="100">75%</progress>
                            </li>
                            <li>
                                <span className="title is-5">REST API</span>
                                <span className="subtitle is-6">85%</span>
                                <progress className="progress is-success" value="85" max="100">85%</progress>
                            </li>
                            <li>
                                <span className="title is-5">Unit Testing</span>
                                <span className="subtitle is-6">80%</span>
                                <progress className="progress is-success" value="80" max="100">80%</progress>
                            </li>
                            <li>
                                <span className="title is-5">MySQL</span>
                                <span className="subtitle is-6">60%</span>
                                <progress className="progress is-success" value="60" max="100">60%</progress>
                            </li>
                            <li>
                                <span className="title is-5">MongoDB</span>
                                <span className="subtitle is-6">60%</span>
                                <progress className="progress is-success" value="60" max="100">60%</progress>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills