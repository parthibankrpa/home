import { useEffect, useLayoutEffect, useState } from "react";
import useResumeContext from "../hooks/ResumeHooks";
import { Col, Row } from "react-bootstrap";
import { SkillType } from "../types/types";
import { sort } from "../utils/utils";

function Skills() {
  const [sortedSkills, sortSkills] = useState([]);
  const { skills } = useResumeContext();
  const sortFn = (a, b) => {
    return (a.experience_in_year - b.experience_in_year) * -1;
  };

  useEffect(() => {
    const sortedskills = sort(skills, sortFn);
    sortSkills([...sortedskills]);
  }, [skills]);

  return (
    <Row>
      <h3 className="text-[var(--thm-white)] font-bold"> Skills </h3>
      {sortedSkills.map((skillitem) => (
        <Skill {...skillitem} key={skillitem.skill} />
      ))}
    </Row>
  );
}

export default Skills;
function Skill({ skill, experience_in_year }: SkillType) {
  const [widthPercentage, setWidthPercentage] = useState(experience_in_year);

  useLayoutEffect(() => {
    const percentage = Math.floor((experience_in_year / 12.6) * 100);
    setWidthPercentage(percentage);
  }, [experience_in_year]);

  return (
    <Col xs={12} sm={6} className="skill-outline box-border py-1 min-width">
      <h4> {skill}</h4>
      <div className="hairline-shadow rounded-md">
        <div
          className={`skill-inner w-full rounded-md text-right`}
          style={{ maxWidth: `${widthPercentage}%` }}
        >
          <h5>{experience_in_year} Years</h5>
        </div>
      </div>
    </Col>
  );
}
