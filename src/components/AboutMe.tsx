import { FaLocationDot } from "react-icons/fa6";
import s from "../style/aboutMe.module.css";

export function AboutMe() {
  return (
    <div className={s.about_me_container }>
        <h1 className="h2">About me</h1>
        <div className={s.about_me_flex}>
          <p>
            Hi, my name is Julie, and I'm a Danish Multimedia Design student currently in my third semester, living in Copenhagen. I have decided to focus on front-end development for the remainder of my education because I enjoy creating engaging, user-friendly, and visually appealing websites. I have a solid foundation in HTML, CSS, and JavaScript, and we have begun exploring frameworks like React and Astro, which emphasize atomic design and component-based architecture.<br/><br/> I am looking for an internship starting in January 2025, where I can further develop my skills and contribute to meaningful projects. This internship will last for 10 weeks and will be unpaid. I love creating and am always eager to learn new skills. This past summer, I started my journey with React and explored game development using tools like Godot. Additionally, I've begun to delve into the basics of back-end development, expanding my skill set and broadening my understanding of the full development process. <br/><br/>  If you're interested in learning more, feel free to check out a more detailed description of my skills and the types of tasks I could take on during an internship by scrolling further down this page. 
          </p>
          <div className={s.info_flex_column}>
            <div>
              <h2 className="h3">Based in</h2>
              <div className={s.based_in_flex}>
                <FaLocationDot style={{ color: "#443f39" }} />
                <p>Copenhagen, Denmark</p>
              </div>
            </div>
            <div>
              <h2 className="h3">Language</h2>
              <p>Danish, English</p>
            </div>
          </div>
        </div>
    </div>
  );
}
export default AboutMe;
