import "../style/Hobby.css";
interface HobbyeProps {
  HobbyName: string;
  HobbyIllu: string;
  HobbyIlluAlt: string;
}
function Hobby({ HobbyName, HobbyIllu, HobbyIlluAlt }: HobbyeProps) {
  return (
    <div className="hobby">
      <img className="hobby-img" src={HobbyIllu} alt={HobbyIlluAlt} />
      <h1>{HobbyName}</h1>
    </div>
  );
}
export default Hobby;
