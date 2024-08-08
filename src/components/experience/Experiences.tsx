import Experience from "./Experience";
import e from "../../style/Experince.module.css";

function Experiences() {
  return (
    <>
      <div className={e.flexcolumn}>
        <h1 className="h2">Experince</h1>

        <Experience Experience="Normal su-chef" />
        <Experience Experience="Barnepige" />
        <Experience Experience="tester3" />
      </div>
    </>
  );
}

export default Experiences;
