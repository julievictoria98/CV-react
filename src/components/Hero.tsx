import JuliePhoto from "../imgs/cv-img-shape1.png";
import s from "../style/Hero.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <header>
      <div className={s.hero_grid}>
        <img className={s.hero_img} src={JuliePhoto} alt="" />
        <div>
          <h2 className="subtitle">Frontend Developer</h2>
          <h1 className="display_title">Julie Radant</h1>
          <div className={s.hero_flex}>
            <div className={s.flex_row}>
              <MdEmail style={{ color: "#443f39" }} />
              <p>julieradant@gmail.com</p>
            </div>
            <div className={s.flex_row}>
              <FaLinkedin style={{ color: "#443f39" }} />
              <p>/julie-mundrup-radant</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
