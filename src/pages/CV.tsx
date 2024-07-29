import { useState } from "react";
import JSInfo from "../components/JSInfo";

function CV() {
  const [showJSInfo, setShowJSInfo] = useState(false);
  const [showCSSInfo, setShowCSSInfo] = useState(false);

  return (
    <div className="">
      <h1>Curriculum Vitae</h1>
      <p>Here is my CV</p>
      <button onClick={() => setShowJSInfo(!showJSInfo)}>
        {showJSInfo ? "^" : "v"}
      </button>
      <button onClick={() => setShowCSSInfo(!showCSSInfo)}>
        {showCSSInfo ? "^" : "v"}
      </button>
      {showJSInfo && (
        <div>
          <JSInfo />
        </div>
      )}
      {showCSSInfo && (
        <div>
          <h1>CSSInfo</h1>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML. CSS is a cornerstone technology of the World
            Wide Web, alongside HTML and JavaScript.
          </p>
        </div>
      )}
    </div>
  );
}

export default CV;

//export {CV, CV2, CV3}
