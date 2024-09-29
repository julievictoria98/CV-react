import "../style/generel.css";

import Hero from "../components/Hero";
import Skills from "../components/skill/Skills";
import AboutMe from "../components/AboutMe";
import Grades from "../components/grade/Grades";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRef, useState, useEffect } from "react";
import BurgerMenu from "../components/BurgerMenu";
import Folders from "../components/work/Folders";
import JobDescriptions from "../components/jobDescription/JobDescriptions";

function CV() {
  const [activeSection, setActiveSection] = useState<string>("");

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const gradesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "aboutMe", ref: aboutMeRef },
        { id: "skills", ref: skillsRef },
        { id: "experiences", ref: experiencesRef },
        { id: "hobbies", ref: hobbiesRef },
        { id: "grades", ref: gradesRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition <= offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <BurgerMenu
        scrollToHero={() =>
          heroRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAboutMe={() =>
          aboutMeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSkills={() =>
          skillsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToExperiences={() =>
          experiencesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToHobbies={() =>
          hobbiesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToGrades={() =>
          gradesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <NavBar
        scrollToHero={() =>
          heroRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAboutMe={() =>
          aboutMeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSkills={() =>
          skillsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToExperiences={() =>
          experiencesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToHobbies={() =>
          hobbiesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToGrades={() =>
          gradesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        activeSection={activeSection}
      />
      <div className="full" ref={heroRef}>
        <Hero />
      </div>
      <div className="pop_out " ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={gradesRef}>
        <Grades />
      </div>
      <div className="main_grid " ref={experiencesRef}>
        <JobDescriptions/>
      </div>
      <div ref={hobbiesRef}>
        <Folders/>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default CV;
 