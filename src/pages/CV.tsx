import Hero from "../components/Hero";
import Skills from "../components/skill/Skills";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/experience/Experiences";
import Hobbies from "../components/hobby/Hobbies";
import Grades from "../components/grade/Grades";
import Contact from "../components/Contact";

function CV() {
  return (
    <div>
      <div className="blue-background">
        <Hero />
      </div>
      <div>
        <AboutMe />
      </div>
      <div className="blue-background">
        <Skills />
      </div>
      <div className="beige-background">
        <Experiences />
      </div>
      <div className="blue-background">
        <Hobbies />
      </div>
      <div className="beige-background">
        <Grades />
      </div>
      <div className="blue-background">
        <Contact />
      </div>
    </div>
  );
}

export default CV;
