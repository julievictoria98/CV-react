import "../style/contact.css";
import SocialsBtn from "./SocialsBtn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_flex_column">
       <h1 className="h2">I HOPE TO HEAR FROM YOU</h1>
        <div className="contacts-flex">
          <SocialsBtn
                socialIconIndex={0} 
                socialLink="tel:+123456789"
                socialText="+45 50 52 34 91"
            />
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
