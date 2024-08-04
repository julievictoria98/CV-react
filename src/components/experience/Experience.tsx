import "../../style/Experince.css";
import SuitcaseIcon from "../../assets/Icons/suitcase-icon_1.png";

interface ExperienceProps {
  Experience: string;
}

function Experience({ Experience }: ExperienceProps) {
  return (
    <div className="flex-row">
      <div className="flex-row">
        <img src={SuitcaseIcon} alt="suitcase icon" />
        <h1>{Experience}</h1>
      </div>
      <p>2014</p>
    </div>
  );
}
export default Experience;
