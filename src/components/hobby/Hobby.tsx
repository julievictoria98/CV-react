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
        <div className="hover_container">
          <p className="hover_text">{HoverText}</p>
        </div>
        <img className="hobby-img" src={HobbyIllu} alt={HobbyIlluAlt} />
        <h1 className="h3 hobby_name">{HobbyName}</h1>
      </div>
    </div>
  );
}
export default Hobby;
