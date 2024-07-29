import { useState } from "react";
import JSInfo from "../components/JSInfo";

function CV() {
  const [showJSInfo, setShowJSInfo] = useState(false);

  return (
    <div className="">
      <h1>Curriculum Vitae</h1>
      <p>Here is my CV</p>
      <button onClick={() => setShowJSInfo(!showJSInfo)}>
        {showJSInfo ? "^" : "v"}
      </button>
      {showJSInfo && (
        <div>
          <JSInfo />
        </div>
      )}
    </div>
  );
}

export default CV;

//export {CV, CV2, CV3}
