import "../style/contact.css";
import doodleArrow from "../assets/Icons/doodle-arrow.svg";
function ContactArrow() {
  return (
    <div className="contact_arrow">
      <h1 className="h2">I hope to hear from you</h1>
      <div>
        <img className="arrow" src={doodleArrow} alt="arrow-down" />
      </div>
    </div>
  );
}
export default ContactArrow;
