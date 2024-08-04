import Hero from "../components/Hero";
import Skills from "../components/skill/Skills";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/experience/Experiences";
import Hobbies from "../components/hobby/Hobbies";
import Grades from "../components/grade/Grades";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import { useRef, useState, useEffect } from "react";

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
    <div>
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
      <div ref={heroRef} className="blue-background">
        <Hero />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef} className="blue-background">
        <Skills />
      </div>
      <div ref={experiencesRef} className="beige-background">
        <Experiences />
      </div>
      <div ref={hobbiesRef} className="blue-background">
        <Hobbies />
      </div>
      <div ref={gradesRef} className="beige-background">
        <Grades />
      </div>
      <div ref={contactRef} className="blue-background">
        <Contact />
      </div>
    </div>
  );
}

export default CV;