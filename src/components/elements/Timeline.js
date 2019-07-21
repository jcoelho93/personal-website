import React from "react"
import TimelineItem from "./TimelineItem"
import Resume from "../../resume.json"

function Timeline() {
    return(
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
            </header>
            <div className="timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>
            {
                Resume.work.map((item) => {return new Date(item.startDate).getFullYear()}).map((year, index) => {
                    let content = []
                    content.push(<header key={index} className="timeline-header">
                                    <span className="tag is-success">{year}</span>
                                   </header>)
                    content.push(Resume.work.filter(work => new Date(work.startDate).getFullYear() === year).map((item, index) => {
                            return <TimelineItem 
                                        key = {index}
                                        date = {new Date(item.startDate).toLocaleString('default', {month:'long', year: 'numeric'})}
                                        company = {item.company}
                                        summary = {item.summary}
                                    />
                        }))
                    return content
                })
            }
        </div>
    )
}

export default Timeline