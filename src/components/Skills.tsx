import { useEffect, useLayoutEffect, useState } from "react";
import useResumeContext from "../hooks/ResumeHooks";
import { Col, Row } from "react-bootstrap";
import { ResumeInterface, SkillType } from "../types/types";

type SkillTypeArr = SkillType[];

function Skills() {
  const [sortedSkills, sortSkills] = useState<SkillTypeArr>();
  const ResumeData: ResumeInterface = useResumeContext();
  const sortFn = (a: SkillType, b: SkillType) => {
    return (a.experience_in_year - b.experience_in_year) * -1;
  };

  useEffect(() => {
    // let sortedArray: SkillType[] = sort(ResumeData.skills, sortFn);
    const sortedArray = ResumeData.skills.sort(sortFn);
    sortSkills([...sortedArray]);
  }, [ResumeData]);

  return (
    <Row>
      <h3 className="text-[var(--thm-white)] font-bold"> Skills </h3>
      {sortedSkills &&
        sortedSkills.map((skillitem) => (
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
