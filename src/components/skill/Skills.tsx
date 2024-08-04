import Skill from "./Skill";

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <div>
        <div className="skill-boxes-grid">
          <div>
            <Skill skillName="CSS" skillText="CSS skill text" />
          </div>
          <div>
            <Skill skillName="JavaScript" skillText="JavaScript skill text" />
          </div>
          <div>
            <Skill skillName="React" skillText="React skill text" />
          </div>
          <div>
            <Skill skillName="Figma" skillText="Figma skill text" />
          </div>
          <div>
            <Skill skillName="Tailwind" skillText="Tailwind skill text" />
          </div>
          <div>
            <Skill
              skillName="Adobe Illustrator"
              skillText="Adobe Illustrator skill text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
