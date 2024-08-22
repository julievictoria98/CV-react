import { FaLocationDot } from "react-icons/fa6";
import s from "../style/aboutMe.module.css";

export function AboutMe() {
  return (
    <div className={s.about_me_grid}>
      <div>
        <h1 className="h2">About me</h1>
        <div className={s.about_me_flex}>
          <p>
            My name is Julie, and I am passionate and curious multimedia design
            student entering my second year at KEA - Copenhagen school of design
            and technology. The first years as a student consisted of a lot of
            trial and error and resulted in me gaining a solid foundation in
            front-end development, including HTML, CSS, and JavaScript, as well
            as an understanding of design theory and conventions. During this
            summer vacation, I have been learning the React framework, which I
            used to create this resume. In the upcoming semester, our focus will
            be exclusively on front-end development, with an emphasis on React.
            I am excited to deepen my understanding of this framework that I
            have already come to enjoy. For details on my expertise with
            different frameworks and design tools, please see the section below.
            I am currently seeking a part-time job where I can apply my skills
            in front-end development and contribute to real-world projects,
            while continuing to grow both technically and creatively
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
    </div>
  );
}
export default AboutMe;
