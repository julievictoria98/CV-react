import e from "../../style/Experince.module.css";
import SuitcaseIcon from "../../assets/Icons/suitcase-icon.svg";

interface ExperienceProps {
  Experience: string;
}

function Experience({ Experience }: ExperienceProps) {
  return (
    <div className={e.flexrow}>
      <div className="flex-row">
        <img src={SuitcaseIcon} alt="suitcase icon" />
        <h1 className="h3">{Experience}</h1>
      </div>
      <p>2014</p>
    </div>
  );
}
export default Experience;
