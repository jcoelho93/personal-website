import React from "react";
import TimelineItem from "./TimelineItem";
import Translations from "../../translations.json";

function Timeline(props) {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Translations[props.language].work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        })
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          content.push(
            Translations[props.language].work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
