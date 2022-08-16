import React from "react";
import Resume from "../../resume.json";
import Skill from "../elements/Skill"


function buildSkillsRow(skills, start, end) {
  const batch = skills.slice(start, end);
  let skillsComponents = [];
  batch.forEach((value, indx) => {
    skillsComponents.push(
      <div key={indx} className="column is-3">
        <Skill
          text={value.name}
          icon={value.x_icon}
          description={value.x_description}
        />
      </div>
    )
  });
  return skillsComponents;
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">
          {buildSkillsRow(Resume.skills, 0, 4)}
        </div>
        <div className="columns">
          {buildSkillsRow(Resume.skills, 4, 8)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
