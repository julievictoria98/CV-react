import JuliePhoto from "../assets/Icons/Julie-CV-photo.png";
import "../style/Generel.css";
import s from "../style/Hero.module.css";
function Hero() {
  return (
    <header>
      <div className={s.hero_grid}>
        <img className={s.hero_img} src={JuliePhoto} alt="" />
        <div>
          <h2 className={s.h2}>Frontend Developer</h2>
          <h1 className={s.h1}>Julie Radant</h1>
        </div>
      </div>
    </header>
  );
}
export default Hero;
