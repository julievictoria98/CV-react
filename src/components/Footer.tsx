import "../style/footer.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../imgs/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img className="logo" src={logo} alt="" />
        <div>
          <h2 className="h4">Contact</h2>
          <div className="contact_socials_flex">
            <MdEmail style={{ color: "black" }} />
            <p>julieradant@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="h4">Socials</h2>
          <a
            href="https://www.linkedin.com/in/julie-mundrup-radant-93227b28a/"
            target="blank"
          >
            <div className="contact_socials_flex">
              <FaLinkedin style={{ color: "black" }} />

              <p>LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/julievictoria98" target="blank">
            <div className="contact_socials_flex">
              <FaGithubSquare style={{ color: "black" }} />
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
