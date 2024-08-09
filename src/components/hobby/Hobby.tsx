import "../../style/Hobby.css";
interface HobbyeProps {
  HobbyName: string;
  HobbyIllu: string;
  HobbyIlluAlt: string;
  HoverText: string;
}
function Hobby({ HobbyName, HobbyIllu, HobbyIlluAlt, HoverText }: HobbyeProps) {
  return (
    <div className="hobby">
      <div className="hover_container">
        <p className="hover_text">{HoverText}</p>
      </div>
      <img className="hobby-img" src={HobbyIllu} alt={HobbyIlluAlt} />
      <h1 className="h3">{HobbyName}</h1>
    </div>
  );
}
export default Hobby;
