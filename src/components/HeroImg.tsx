import { useState, useEffect } from "react";
import JuliePhoto from "../imgs/polaroid-img.png";
import s from "../style/hero.module.css";

function HeroImg(){

    const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setRotate(true);
    };

    // Attach the event listener
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

    return(
        <div className={ `${s.img_container} ${rotate ? s.rotate : ""}`}>
            <img className={ `${s.resume_photo} ${rotate ? `s.rotate ` : "" }`} src={JuliePhoto} alt="" />
        </div>
    )

}
export default HeroImg;
