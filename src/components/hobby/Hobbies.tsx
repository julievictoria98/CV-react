import Hobby from "./Hobby";
import BookIcon from "../../assets/Icons/book-icon.svg";
import controllerIcon from "../../assets/Icons/controller-icon.svg";
import HeadphonesIcon from "../../assets/Icons/headphones-icon.svg";
import FriendsIcon from "../../assets/Icons/friends-icon.svg";
import DrawingRocksIcon from "../../assets/Icons/drawing-rocks-icon.svg";
import RunningShoeIcon from "../../assets/Icons/runnning-shoe-icon.svg";

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
            HoverText="I love reading books, especially fantasy and science fiction."
          />
          <Hobby
            HobbyName="Video Games"
            HobbyIlluAlt="Controller Icon"
            HobbyIllu={controllerIcon}
            HoverText="I enjoy playing video games, especially RPGs and strategy games."
          />
          <Hobby
            HobbyName=" Music"
            HobbyIlluAlt="Headphones Icon"
            HobbyIllu={HeadphonesIcon}
            HoverText="I love listening to music, especially rock and metal."
          />
          <Hobby
            HobbyName="Friends"
            HobbyIlluAlt="People Icon"
            HobbyIllu={FriendsIcon}
            HoverText="I enjoy spending time with my friends, going out or staying"
          />
          <Hobby
            HobbyName="Drawing"
            HobbyIlluAlt="Painting on rocks Icon"
            HobbyIllu={DrawingRocksIcon}
            HoverText="I enjoy drawing, especially on rocks."
          />
          <Hobby
            HobbyName="Running"
            HobbyIlluAlt="runningshoe Icon"
            HobbyIllu={RunningShoeIcon}
            HoverText="I enjoy running, especially in the forest."
          />
        </div>
      </div>
    </>
  );
}

export default Hobbies;
