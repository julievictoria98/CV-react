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
          <SocialsBtn socialIconIndex={0} socialLink="tel:+4550523491" socialText="+45 50 52 34 91" />
          <SocialsBtn socialIconIndex={1} socialLink="mailto:" socialText="+45 50 52 34 91"/>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
