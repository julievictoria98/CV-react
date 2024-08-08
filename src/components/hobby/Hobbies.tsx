import Hobby from "./Hobby";
import BookIcon from "../../assets/Icons/book-icon 1.svg";
import controllerIcon from "../../assets/Icons/controller-icon.svg";
import HeadphonesIcon from "../../assets/Icons/headphones-icon.svg";
import FriendsIcon from "../../assets/Icons/Group 3.svg";
import DrawingRocksIcon from "../../assets/Icons/drawing-rocks-icon.svg";
import RunningShoeIcon from "../../assets/Icons/runnning-shoe.svg";

function Hobbies() {
  return (
    <>
      <div className="hobbies">
        <h1 className="h2">Hobbies</h1>
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
    </>
  );
}

export default Hobbies;
