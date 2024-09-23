import React, { useEffect, useRef, useState } from 'react';
import e from "../../style/experince.module.css"; 
import StarIcon from "../../imgs/star-icon.svg";

interface ExperienceProps {
  Experience: string;
  ExperinceYear: string;
  WorkPlace: string;
}

function Experience({ Experience, ExperinceYear, WorkPlace }: ExperienceProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowAnimation(true); 
          observer.unobserve(entry.target); 
        }
      });
    });

    const element = ref.current; 
    if (element) {
      observer.observe(element); 
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); 

  return (
    <div ref={ref} className={e.flexrow}>
      <div className={e.flexrow}>
        <img className={showAnimation ? e.scale : ''} src={StarIcon} alt="suitcase icon" />
        <div className={e.experince_item}>
          <h1 className="h3">{Experience}</h1>
          <p className={e.workplace}>{WorkPlace}</p>
        </div>
      </div>
      <p>{ExperinceYear}</p>
    </div>
  );
}

export default Experience;
