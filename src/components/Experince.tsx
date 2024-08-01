import "../style/Experince.css";
import SuitcaseIcon from "../assets/Icons/suitcase-icon_1.png";

interface ExperinceProps {
  Experince: string;
}

function Experince({ Experince }: ExperinceProps) {
  return (
    <div className="flex-row">
      <div className="flex-row">
        <img src={SuitcaseIcon} alt="suitcase icon" />
        <h1>{Experince}</h1>
      </div>
      <p>2014</p>
    </div>
  );
}
export default Experince;
