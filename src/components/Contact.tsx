import "../style/contact.css";
import ContactArrow from "../components/ContactArrow";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_flex_column">
        <ContactArrow />
        <div className="contact-flex">
          <p className="contact-box">mail: julieradant@gmail.com</p>
          <p className="contact-box">Phonenumber: 50523491</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
