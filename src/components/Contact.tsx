import "../style/contact.css";
import SocialsBtn from "./SocialsBtn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_flex_column">
       <h1 className="h2">I HOPE TO HEAR FROM YOU</h1>
        <div className="contacts-flex">
          <SocialsBtn socialIconIndex={2} socialLink="https://www.linkedin.com/in/julie-mundrup-radant-93227b28a/" socialText="/julie-mundrup-radant" />
          <SocialsBtn
                socialIconIndex={1} 
                socialLink="mailto:example@example.com"
                socialText="julieradant@gmail.com"
            />
        </div>
      </div>
    </div>
  );
}

export default Contact;
