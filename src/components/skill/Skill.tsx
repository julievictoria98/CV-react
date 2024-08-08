import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SkillInfo from "./SkillInfo";

interface SkillProps {
  skillName: string;
  skillText: string;
}

function Skill({ skillName, skillText }: SkillProps) {
  const [showSkillInfo, setShowSkillInfo] = useState(false);
  return (
    <div className="skill-box">
      <div className="flex-row">
        <h2 className="h3">{skillName}</h2>
        <div
          className="show-skill-btn"
          onClick={() => setShowSkillInfo(!showSkillInfo)}
        >
          {showSkillInfo ? (
            <IoIosArrowDown className="icons" />
          ) : (
            <IoIosArrowUp className="icons" />
          )}
        </div>
      </div>

      {showSkillInfo && (
        <div>
          <SkillInfo skillText={skillText} />
        </div>
      )}
    </div>
  );
}

export default Skill;
