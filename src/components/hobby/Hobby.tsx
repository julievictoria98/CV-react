import "../../style/hobby.css";
interface HobbyeProps {
  HobbyName: string;
  HobbyIllu: string;
  HobbyIlluAlt: string;
  HoverText: string;
}
function Hobby({ HobbyName, HobbyIllu, HobbyIlluAlt, HoverText }: HobbyeProps) {
  return (
    <div className="hobby">
      <div className="hobby_flex">
        <div>
          <div className="img_container">
          <img className="hobby-img" src={HobbyIllu} alt={HobbyIlluAlt} />
          </div>
          <h1 className="h3 hobby_name">{HobbyName}</h1>
          <p className="">{HoverText}</p>
        </div>
        {/* <img className="hobby-img" src={HobbyIllu} alt={HobbyIlluAlt} />
        <h1 className="h3 hobby_name">{HobbyName}</h1> */}
      </div>
    </div>
  );
}
export default Hobby;
