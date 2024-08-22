import "../style/contact.css";
import ContactArrow from "../components/ContactArrow";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_flex_column">
        <ContactArrow />
        <div className="contacts-flex">
          <div className="contact-flex">
            <MdEmail style={{ color: "#514c45" }} />
            <p>julieradant@gmail.com</p>
          </div>
          <div className="contact-flex">
            <FaPhoneAlt style={{ color: "#514c45" }} />
            <p> (+45) 50 52 34 91</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
