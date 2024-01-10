type SkillType = {
    skill: string;
    experience_in_year: number;
  };
  
  interface ResumeInterface {
    name: string;
    professional_summary: string;
    skills: SkillType[];
  }

  export type { SkillType , ResumeInterface };