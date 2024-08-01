import { useState } from "react";
import JSInfo from "../components/JSInfo";
import AboutMe from "../components/AboutMe";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Experince from "../components/Experince";
import Hobby from "../components/Hobby";
import BookIcon from "../assets/Icons/book-icon.png";
import controllerIcon from "../assets/Icons/controller-icon.png";
import DrawingRocksIcon from "../assets/Icons/drawing-rocks-icon.png";
import FriendsIcon from "../assets/Icons/friends-icon.png";
import HeadphonesIcon from "../assets/Icons/headphones-icon.png";
import RunningShoeIcon from "../assets/Icons/running-shoe-icon.png";
import Grade from "../components/Grade";

function CV() {
  const [showJSInfo, setShowJSInfo] = useState(false);
  const [showCSSInfo, setShowCSSInfo] = useState(false);
  const [showReact, setshowReact] = useState(false);

  let skillText = "";

  return (
    <div>
      <div>
        <AboutMe />
      </div>
      <div className="blue-background">
        <h1>Skills</h1>
        <div>
          <div className="skill-boxes-grid">
            <div>
              <div className="skill-box">
                <div className="flex-row">
                  <h2>CSS</h2>
                  <div
                    className="show-skill-btn"
                    onClick={() => setShowCSSInfo(!showCSSInfo)}
                  >
                    {showCSSInfo ? (
                      <IoIosArrowDown className="icons" />
                    ) : (
                      <IoIosArrowUp className="icons" />
                    )}
                  </div>
                </div>

                {showCSSInfo && (
                  <div>
                    <JSInfo skillText="CSS skill text" />
                  </div>
                )}
              </div>
            </div>
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
                    <JSInfo skillText="hejsa" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="skill-box">
                <div className="flex-row">
                  <h2>Javacript</h2>
                  <div
                    className="show-skill-btn"
                    onClick={() => setShowJSInfo(!showJSInfo)}
                  >
                    {showJSInfo ? (
                      <IoIosArrowDown className="icons" />
                    ) : (
                      <IoIosArrowUp className="icons" />
                    )}
                  </div>
                </div>

                {showJSInfo && (
                  <div>
                    <JSInfo skillText="JavaScript skill text" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="skill-box">
                <div className="flex-row">
                  <h2>Figma</h2>
                  <div
                    className="show-skill-btn"
                    onClick={() => setShowJSInfo(!showJSInfo)}
                  >
                    {showJSInfo ? (
                      <IoIosArrowDown className="icons" />
                    ) : (
                      <IoIosArrowUp className="icons" />
                    )}
                  </div>
                </div>

                {showJSInfo && (
                  <div>
                    <JSInfo skillText="JavaScript skill text" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="skill-box">
                <div className="flex-row">
                  <h2>Tailwind</h2>
                  <div
                    className="show-skill-btn"
                    onClick={() => setShowJSInfo(!showJSInfo)}
                  >
                    {showJSInfo ? (
                      <IoIosArrowDown className="icons" />
                    ) : (
                      <IoIosArrowUp className="icons" />
                    )}
                  </div>
                </div>

                {showJSInfo && (
                  <div>
                    <JSInfo skillText="JavaScript skill text" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="skill-box">
                <div className="flex-row">
                  <h2>Adobe Illustrator</h2>
                  <div
                    className="show-skill-btn"
                    onClick={() => setShowJSInfo(!showJSInfo)}
                  >
                    {showJSInfo ? (
                      <IoIosArrowDown className="icons" />
                    ) : (
                      <IoIosArrowUp className="icons" />
                    )}
                  </div>
                </div>

                {showJSInfo && (
                  <div>
                    <JSInfo skillText="JavaScript skill text" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="beige-background">
        <h1>Experince</h1>
        <div className="flex-column">
          <Experince Experince="Normal su-chef" />
          <Experince Experince="Barnepige" />
          <Experince Experince="tester3" />
        </div>
      </div>
      <div className="blue-background">
        <h1>Hobbies</h1>
        <div className="hobby-grid">
          <Hobby
            HobbyName="Reading"
            HobbyIlluAlt="Book Icon"
            HobbyIllu={BookIcon}
          />
          <Hobby
            HobbyName="Video Games"
            HobbyIlluAlt="Controller Icon"
            HobbyIllu={controllerIcon}
          />
          <Hobby
            HobbyName=" Music"
            HobbyIlluAlt="Headphones Icon"
            HobbyIllu={HeadphonesIcon}
          />
          <Hobby
            HobbyName="Friends"
            HobbyIlluAlt="People Icon"
            HobbyIllu={FriendsIcon}
          />
          <Hobby
            HobbyName="Drawing"
            HobbyIlluAlt="Painting on rocks Icon"
            HobbyIllu={DrawingRocksIcon}
          />
          <Hobby
            HobbyName="Running"
            HobbyIlluAlt="runningshoe Icon"
            HobbyIllu={RunningShoeIcon}
          />
        </div>
      </div>
      <div className="beige-background">
        <h1>Grades</h1>
        <div className="grade-flex">
          <Grade grade="12" />
          <Grade grade="12" />
        </div>
      </div>
      <div className="blue-background">
        <h1>Contact</h1>
        <p></p>
      </div>
    </div>
  );
}

export default CV;
