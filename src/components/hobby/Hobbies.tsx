import Hobby from "./Hobby";
import BookIcon from "../../assets/Icons/book-icon.png";
import controllerIcon from "../../assets/Icons/controller-icon.png";
import HeadphonesIcon from "../../assets/Icons/headphones-icon.png";
import FriendsIcon from "../../assets/Icons/friends-icon.png";
import DrawingRocksIcon from "../../assets/Icons/drawing-rocks-icon.png";
import RunningShoeIcon from "../../assets/Icons/running-shoe-icon.png";

function Hobbies() {
  return (
    <>
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
    </>
  );
}

export default Hobbies;
