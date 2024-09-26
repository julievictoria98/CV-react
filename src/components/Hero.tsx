import s from "../style/hero.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <header className="full">
      <div className={`${s.hero_grid} full`}>
        <HeroImg/>
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
