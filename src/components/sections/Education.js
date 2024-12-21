import React from 'react';
import resume from '../../resume.json';
import EducationBadge from '../elements/EducationBadge';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="title">Education</h2>
        <div className="columns is-multiline">
          {resume.education.map((edu, index) => (
            <div key={index} className="column is-one-third">
              <EducationBadge
                institution={edu.institution}
                area={edu.area}
                studyType={edu.studyType}
                startDate={edu.startDate}
                endDate={edu.endDate}
                courses={edu.courses}
                image={edu.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;