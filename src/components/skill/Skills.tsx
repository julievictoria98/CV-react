import Skill from "./Skill";

function Skills() {
  return (
    <>
      <div>
        <div className="skill-boxes-grid">
          <h1 className="h2">Skills</h1>
          <div>
            <Skill skillName="CSS" skillText="CSS skill text" />
          </div>
          <div>
            <Skill skillName="JavaScript" skillText="JavaScript skill text" />
          </div>
          <div>
            <Skill skillName="Astro" skillText="React skill text" />
          </div>
          <div>
            <Skill skillName="React" skillText="Figma skill text" />
          </div>
          <div>
            <Skill skillName="Figma" skillText="Tailwind skill text" />
          </div>
          <div>
            <Skill
              skillName="Tailwind"
              skillText="Adobe Illustrator skill text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
