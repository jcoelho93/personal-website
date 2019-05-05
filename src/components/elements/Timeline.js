import React from "react"

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
            <div className="timeline-item is-success">
                <div className="timeline-marker is-image is-32x32">
                    <img src="" alt="" />
                </div>
                <div className="timeline-content">
                    <p className="heading">April 2018</p>
                    <h1 className="title is-4">Asseco PST</h1>
                    <p>Joined Asseco PST <strong>DevOps</strong> team to help
                        <br />them deliver happiness to their customers</p>
                </div>
            </div>
            <header className="timeline-header">
                <span className="tag is-success">2017</span>
            </header>
            <div className="timeline-item is-success">
                <div className="timeline-marker is-image is-32x32">
                    <img src="" alt="" />
                </div>
                <div className="timeline-content">
                    <p className="heading">August 2017</p>
                    <h1 className="title is-4">Asseco PST</h1>
                    <p>Started my first professional developer experience
                        <br />as a <strong>Backend Developer</strong> for Asseco PST</p>
                </div>
            </div>
            <header className="timeline-header">
                <span className="tag is-success">2016</span>
            </header>
            <div className="timeline-item is-success">
                <div className="timeline-marker is-image is-32x32">
                    <img src="" alt="" />
                </div>
                <div className="timeline-content">
                    <p className="heading">May 2016</p>
                    <h1 className="title is-4">European GNSS Agency</h1>
                    <p>Moved to <strong>Prague, Czech Republic</strong> to intern for the
                        <br/>European Commission helping them build one
                        <br/>of the biggest european projects, <a href="https://en.wikipedia.org/wiki/Galileo_(satellite_navigation)">Galileo Satellite System</a></p>
                </div>
            </div>
            <header className="timeline-header">
                <span className="tag is-success">2015</span>
            </header>
            <div className="timeline-item is-success">
                <div className="timeline-marker is-image is-32x32">
                    <img src="" alt="" />
                </div>
                <div className="timeline-content">
                    <p className="heading">March 2015</p>
                    <h1 className="title is-4">Empresa de Electricidade da Madeira</h1>
                    <p>My first real work experience. Interning as an <strong>IT Support Technician</strong> I was able
                        <br />to learn and explore way more than the workings of a big IT Infrastructure.
                        <br />I got to work with PowerShell scripting, PHP and email marketing.</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline