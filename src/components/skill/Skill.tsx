import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";
// import SkillInfo from "./SkillInfo";
import s from "../../style/skill.module.css";

interface SkillProps {
  skillName: string;
  skillText: string;
}

function Skill({ skillName, skillText }: SkillProps) {
  const [showSkillInfo, setShowSkillInfo] = useState(false);
  return (
<div className={s.skill_box}>
      <div className={s.flex_row} onClick={() => setShowSkillInfo(!showSkillInfo)}>
        <h2 className="h3">{skillName}</h2>
        <div
          className={s.show_skill_btn}
        >
          {showSkillInfo ? (
            <IoMdArrowDropdown className="icons" />
          ) : (
            <IoMdArrowDropup className="icons" />
          )}
        </div>
      </div>
      <div>
        <p className={`${s.hidden} ${showSkillInfo ? `${s.open} ${s.shown}` : ""}`}>
          {skillText}
        </p>    
      </div>
      {/* <div>
          <SkillInfo skillText={skillText} />
        </div> */}

      {/* {showSkillInfo && (
        <div>
          <SkillInfo skillText={skillText} />
        </div>
      )} */}
    </div>
  );
}

export default Skill;


