import React from "react";
import Skill from "./Skill";


function buildSkills(skills){
  let skillsList = []
  skills.forEach((skill, index) => {
    skillsList.push(
      <Skill
        key={index}
        text={skill.name}
        icon={skill.icon}
      />
    )
  });
  return skillsList
}

function SkillsList(props) {
  const skills = props.skills;
  return <ul className="skill-list">{buildSkills(skills)}</ul>;
}

export default SkillsList;
