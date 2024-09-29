import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import s from "../style/socialsBtn.module.css";

const iconsArray = [
    { icon: <FaPhoneAlt style={{ color: "black" }}  />, alt: "Phone Icon" },
    { icon: <MdEmail style={{ color: "black" }}  />, alt: "Email Icon" },
    { icon: <FaLinkedin style={{ color: "black" }}  />, alt: "LinkedIn Icon" },
];

interface SocialsBtnProps {
    socialIconIndex: number;
    socialLink: string;      
    socialText: string;      
}

function SocialsBtn({ socialIconIndex, socialLink, socialText }: SocialsBtnProps) {
    const selectedIcon = iconsArray[socialIconIndex]; // Get the selected icon

    return (
            <a href={socialLink} target="_blank" rel="noreferrer">
                <div className={s.socials_btn}>
                    <span aria-label={selectedIcon.alt}>
                        {selectedIcon.icon} 
                    </span>
                    <p className={s.social_text}>{socialText}</p>
                </div>
            </a>
       
    );
}

export default SocialsBtn;