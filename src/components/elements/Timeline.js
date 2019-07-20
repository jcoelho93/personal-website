import React from "react"
import TimelineItem from "./TimelineItem"
import Resume from "../../resume.json"

function Timeline() {
    return(
        <div className="timeline is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">2019</span>
            </header>
            <div className="timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content">
                </div>
            </div>
            <header className="timeline-header">
                <span className="tag is-success">2018</span>
            </header>
            {
                Resume.work.filter(work => new Date(work.startDate).getFullYear() === 2018).map((item) => {
                    return <TimelineItem 
                                date = {new Date(item.startDate).toLocaleString('default', {month:'long', year: 'numeric'})}
                                company = {item.company}
                                summary = {item.summary}
                            />
                })
            }
            <header className="timeline-header">
                <span className="tag is-success">2017</span>
            </header>
            {
                Resume.work.filter(work => new Date(work.startDate).getFullYear() === 2017).map((item) => {
                    return <TimelineItem 
                                date = {new Date(item.startDate).toLocaleString('default', {month:'long', year: 'numeric'})}
                                company = {item.company}
                                summary = {item.summary}
                            />
                })
            }
            <header className="timeline-header">
                <span className="tag is-success">2016</span>
            </header>
            {
                Resume.work.filter(work => new Date(work.startDate).getFullYear() === 2016).map((item) => {
                    return <TimelineItem 
                                date = {new Date(item.startDate).toLocaleString('default', {month:'long', year: 'numeric'})}
                                company = {item.company}
                                summary = {item.summary}
                            />
                })
            }
            <header className="timeline-header">
                <span className="tag is-success">2015</span>
            </header>
            {
                Resume.work.filter(work => new Date(work.startDate).getFullYear() === 2015).map((item) => {
                    return <TimelineItem 
                                date = {new Date(item.startDate).toLocaleString('default', {month:'long', year: 'numeric'})}
                                company = {item.company}
                                summary = {item.summary}
                            />
                })
            }
        </div>
    )
}

export default Timeline