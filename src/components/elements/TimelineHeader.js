import React from "react";

function TimelineHeader(props) {
  return (
    <header className="timeline-header">
        <span className="tag is-success">{props.year}</span>
    </header>
  );
}

export default TimelineHeader;
