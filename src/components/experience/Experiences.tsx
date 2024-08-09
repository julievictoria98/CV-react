import Experience from "./Experience";
import e from "../../style/Experince.module.css";

function Experiences() {
  return (
    <div className={e.experience}>
      <div className={e.flexcolumn}>
        <h1 className="h2">Experince</h1>
        <Experience
          Experience="Assistant manager"
          ExperinceYear="2022/2023"
          WorkPlace="Normal"
        />
        <Experience
          Experience="Cashier"
          ExperinceYear="2021/2022"
          WorkPlace="Bauhaus"
        />
        <Experience Experience="Nanny" ExperinceYear="2018/2021" WorkPlace="" />
      </div>
    </div>
  );
}

export default Experiences;
