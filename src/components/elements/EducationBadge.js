import React from "react";

function EducationBadge(props) {
  return (
    <div className="education-badge">
      <figure className="image is-128x128">
        <img src={props.image} alt={props.institution} />
      </figure>
      <div className="education-info">
        <h3>{props.institution}</h3>
        <p><strong>Area of Study:</strong> {props.area}</p>
        <p><strong>Degree:</strong> {props.studyType}</p>
        <p><strong>Start Date:</strong> {props.startDate}</p>
        <p><strong>End Date:</strong> {props.endDate}</p>
        <h4>Courses:</h4>
        <ul>
          {props.courses.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EducationBadge;