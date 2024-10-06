import s from "../style/navBar.module.css";

interface NavBarProps {
  scrollToHero: () => void;
  scrollToAboutMe: () => void;
  scrollToSkills: () => void;
  scrollToExperiences: () => void;
  scrollToHobbies: () => void;
  scrollToGrades: () => void;
  scrollToContact: () => void;
  activeSection: string;
}

function NavBar({
  scrollToHero,
  scrollToAboutMe,
  scrollToSkills,
  scrollToExperiences,
  scrollToHobbies,
  scrollToGrades,
  scrollToContact,
  activeSection,
}: NavBarProps) {
  return (
    <>
      <nav className={s.navbar}>
        <button
          onClick={scrollToHero}
          className={activeSection === "hero" ? s.active : ""}
        >
          Top
        </button>
        <button
          onClick={scrollToAboutMe}
          className={activeSection === "aboutMe" ? s.active : ""}
        >
          About
        </button>
        <button
          onClick={scrollToSkills}
          className={activeSection === "skills" ? s.active : ""}
        >
          Skills
        </button>
        <button
          onClick={scrollToGrades}
          className={activeSection === "grades" ? s.active : ""}
        >
          Exams & Grades
        </button>
        <button
          onClick={scrollToExperiences}
          className={activeSection === "experiences" ? s.active : ""}
        >
          Potential Tasks
        </button>
        <button
          onClick={scrollToHobbies}
          className={activeSection === "hobbies" ? s.active : ""}
        >
          Former Work
        </button>
        <button
          onClick={scrollToContact}
          className={activeSection === "contact" ? s.active : ""}
        >
          Contact
        </button>
      </nav>
    </>
  );
}

export default NavBar;
