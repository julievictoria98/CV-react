import Skill from "./Skill";
import s from "../../style/skill.module.css";

function Skills() {
  return (
    <>
      <div>
        <div className={s.skill_boxes_grid}>
          <h1 className="h2">Skills</h1>
          <div>
            <Skill
              skillName="CSS"
              skillText="I have been working with CSS since the beginning of my education, and I now possess a strong and solid understanding of its principles and applications.This includes a understanding for selectors, properties, and the box model. I am experienced in using Flexbox and CSS Grid for responsive layouts, as well as understanding various positioning techniques. My skills extend to creating adaptive designs with media queries, using rem/em units for scalability, and implementing advanced CSS features like animations, transitions, pseudo-elements, and CSS variables."
            />
          </div>
          <div>
            <Skill
              skillName="JavaScript"
              skillText="
During my studies I've been learning the theory behind JavaScript, and I have a solid grasp of key concepts like: variable, as well as understanding different data types I'm also familiar with using various operators and writing conditional statements like if, else, and switch.
In the browser, I've practiced DOM manipulation by selecting elements with methods like getElementById and querySelector, and modifying them with methods like appendChild and createElement. I can also handle common events using addEventListener.

Additionally, I have knowledge of array methods such as .map(), .filter(), .reduce(), and .forEach(). 
"
            />
          </div>
          <div>
            <Skill
              skillName="Astro"
              skillText="In the second semester, we worked with the static site generator Astro. This allowed me to get a better understanding of atomic design as it introduced us to component-based development, where we could break down our designs into reusable and modular pieces, enhancing both the scalability and maintainability of our projects which makes it easy for continuity in a design system."
            />
          </div>
          <div>
            <Skill
              skillName="React"
              skillText="During this summer vacation, I have been learning the React framework, which I used to create this resume. My prior experience with Astro, which also employs a component-based architecture, made the learning process easier. I actively engaged with key features such as props and hooks and I have particularly enjoyed using React icons, which has made the whole design process easy. I am excited to continue learning more about this framework in my upcoming semester."
            />
          </div>
          <div>
            <Skill
              skillName="Figma"
              skillText="Throughout my entire education, Figma has been an essential tool in the design process. It has played a key role in creating mockups, as well as both high-fidelity and low-fidelity prototypes, that has made it easier than ever to perform user tests. Figma has significantly enhanced my understanding of atomic design, which has improved the process of creating design system. Moreover, Figma has made it easier to move from design to code by using tools such as design tokens and auto layout."
            />
          </div>
          <div>
            <Skill
              skillName="Tailwind"
              skillText="This summer, I tried Tailwind CSS for the first time and learned about its pre-made utility classes and I was impressed by how Tailwind allows for quick styling, making it easier and faster to design and reducing the need for custom CSS. As I'm writing this, I actually regret not using Tailwind for my resume."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
