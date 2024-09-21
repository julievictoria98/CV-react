import e from "../../style/experince.module.css";
import StarIcon from "../../imgs/star-icon.svg";

interface ExperienceProps {
  Experience: string;
  ExperinceYear: string;
  WorkPlace: string;
}

function Experience({ Experience, ExperinceYear, WorkPlace }: ExperienceProps) {
  return (
    <div className={e.flexrow}>
      <div className={e.flexrow}>
        <img src={StarIcon} alt="suitcase icon" />
        <div className={e.experince_item}>
          <h1 className="h3">{Experience}</h1>
          <p className={e.workplace}>{WorkPlace}</p>
        </div>
      </div>
      <p>{ExperinceYear}</p>
    </div>
  );
}
export default Experience;
