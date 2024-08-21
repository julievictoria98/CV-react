import Experience from "./Experience";
import e from "../../style/experince.module.css";

function Experiences() {
  return (
    <div className={e.experience}>
      <div className={e.flexcolumn}>
        <h1 className="h2">Former Jobs</h1>
        <Experience
          Experience="Assistant manager"
          ExperinceYear="2022/2023"
          WorkPlace="Normal"
        />
        <Experience
          Experience="Academic Tutor"
          ExperinceYear="2021/2022"
          WorkPlace="Private Household"
        />
        <Experience
          Experience="Family Assistant"
          ExperinceYear="2017/2020"
          WorkPlace="Private Household"
        />
        <Experience
          Experience="Sales Assistant (Seasonal)"
          ExperinceYear="2015/2016"
          WorkPlace="Zoologisk Have"
        />
      </div>
    </div>
  );
}

export default Experiences;
