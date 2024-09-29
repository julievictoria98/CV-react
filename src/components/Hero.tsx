import s from "../style/hero.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import HeroImg from "./HeroImg";
import SocialsBtn from "./SocialsBtn";

function Hero() {
  return (
    <header className="full">
      <div className={`${s.hero_grid} full`}>
        <HeroImg/>
        <div>
          <h2 className="subtitle">Frontend Developer</h2>
          <h1 className="display_title">Julie Radant</h1>
          <div className={s.hero_flex}>
          <SocialsBtn socialIconIndex={2} socialLink="https://www.linkedin.com/in/julie-mundrup-radant-93227b28a/" socialText="/julie-mundrup-radant" />
          <SocialsBtn socialIconIndex={1} socialLink="mailto:" socialText="julieradant@gmail.com"/>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
