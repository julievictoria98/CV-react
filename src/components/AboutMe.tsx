import { FaLocationDot } from "react-icons/fa6";
import s from "../style/aboutMe.module.css";

export function AboutMe() {
  return (
    <div className={s.about_me_container }>
        <h1 className="h2">About me</h1>
        <div className={s.about_me_flex}>
          <p>
            Hi, my name is Julie and I'm a danish Multimedia Design student in my third semester, living in Copenhagen.I have chosen to focus on front-end development for the rest of my education as I enjoy creating engaging, user-friendly, and visually appealing websites. I have a solid foundation in HTML, CSS, JavaScript, and we have begun learning other frameworks like React and Astro which emphasize atomic design and component-based architecture.I'm looking for an internship starting in January 2025, where I can further develop my skills and contribute to meaningful projects. The internship is for 10 weeks and is unpaid.I love to create and am always eager to learn new skills. This past summer, I began my journey with React and explored game development using tools like Godot. Additionally, I've started to delve into the basics of back-end development, expanding my skill set and broadening my understanding of the full development process.If you're interested in hearing more, you can check out a more in-depth description of my skills and the types of tasks I could take on during an internship by scrolling further down this page. 

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
