import React from "react"
import ProgressBar from "./ProgressBar"

function SkillsList(props) {
    const skills = props.skills
    return (
        <ul className="skill-list">
            {buildSkills(skills)}
        </ul>
    )
}

function buildSkills(skills){
    let progressBars = []
    let counter = 0
    Object.entries(skills).forEach(([key, value]) => {
        progressBars.push(<li key={counter}>
            <ProgressBar
                key={counter}
                text={key}
                percentage={value}
            />
        </li>)
        counter++
    })
    return progressBars
}

export default SkillsList