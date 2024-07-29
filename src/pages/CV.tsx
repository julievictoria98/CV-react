import { useState } from "react";
import JSInfo from "../components/JSInfo";
import AboutMe from "../components/AboutMe";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function CV() {
  const [showJSInfo, setShowJSInfo] = useState(false);
  const [showCSSInfo, setShowCSSInfo] = useState(false);
  const [showReact, setshowReact] = useState(false);

  let skillText = "hej";

  return (
    <div>
      <div>
        <AboutMe />
      </div>
      <div>
        <h1>Skills</h1>
        <p>Here is my CV</p>

        <div className="skill-boxes-grid">
          <div>
            <div className="skill-box">
              <div className="flex-row">
                <h2>React</h2>
                <div
                  className="show-skill-btn"
                  onClick={() => setshowReact(!showReact)}
                >
                  {showReact ? (
                    <IoIosArrowDown className="icons" />
                  ) : (
                    <IoIosArrowUp className="icons" />
                  )}
                </div>
              </div>

              {showReact && (
                <div>
                  <JSInfo skillText={skillText} />
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="skill-box"
              onClick={() => setShowJSInfo(!showJSInfo)}
            >
              <h2>JavaScript</h2>
              {showJSInfo ? "^" : "v"}
              {showJSInfo && (
                <div>
                  <JSInfo skillText={skillText} />
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="skill-box"
              onClick={() => setShowCSSInfo(!showCSSInfo)}
            >
              <h2>CSS</h2>
              {showCSSInfo ? "^" : "v"}
              {showCSSInfo && (
                <div>
                  <h1>CSSInfo</h1>
                  <p>
                    Cascading Style Sheets (CSS) is a style sheet language used
                    for describing the presentation of a document written in a
                    markup language such as HTML. CSS is a cornerstone
                    technology of the World Wide Web, alongside HTML and
                    JavaScript.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
