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
        <div className="hobby_grid">
          <Hobby
            HobbyName="Reading"
            HobbyIlluAlt="Book Icon"
            HobbyIllu={BookIcon}
            HoverText="I enjoy reading as a break from screens, with psychological thrillers being my favorite choice.


"
          />
          <Hobby
            HobbyName="Video Games"
            HobbyIlluAlt="Controller Icon"
            HobbyIllu={controllerIcon}
            HoverText="
I enjoyed playing video games as a kid and still make time for it today."
          />
          <Hobby
            HobbyName=" Music"
            HobbyIlluAlt="Headphones Icon"
            HobbyIllu={HeadphonesIcon}
            HoverText="I love listening to music, especially indie folk and pop."
          />
          <Hobby
            HobbyName="Friends"
            HobbyIlluAlt="People Icon"
            HobbyIllu={FriendsIcon}
            HoverText="Im always up for a good debate with my friends, whether it's about music or politics"
          />
          <Hobby
            HobbyName="Drawing"
            HobbyIlluAlt="Painting on rocks Icon"
            HobbyIllu={DrawingRocksIcon}
            HoverText="I enjoy drawing, espcially on rocks that I find on walks."
          />
          <Hobby
            HobbyName="Running"
            HobbyIlluAlt="runningshoe Icon"
            HobbyIllu={RunningShoeIcon}
            HoverText="
I enjoy running as it provides a great way to clear my mind and stay active"
          />
        </div>
      </div>
    </>
  );
}

export default Hobbies;
