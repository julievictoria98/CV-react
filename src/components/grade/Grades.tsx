import Grade from "./Grade";
import "../../style/grade.css";

function Grades() {
  return (
    <>
      <div className="grades">
        <div className="grades-flex">
          <h1 className="h2">Exams and Grades</h1>

          <Grade
            grade="12"
            gradeText="The exam for the first semester  required the creation of a portfolio website, coded from scratch using HTML, CSS, and JavaScript. The site needed to meet specific criteria, including valid HTML and CSS, responsiveness, and user-friendliness. The portfolio had to include a homepage, a section showcasing first-semester projects with links to the solutions, and an 'About Me' page featuring a descriptive text, portrait photo, and CV. The project culminated in both a written submission and an oral defense, where I presented and justified my design and development choices to my instructors. I ended up receiving the highest grade, 12.

"
          />
          <Grade
            grade="12"
            gradeText="The 2nd semester exam was divided into two parts. The first part was a group project where we created a digital solution for an established Danish B2C company. This included developing a website prototype and a design system in Figma that reflected the client’s values. The site was built using Astro, with a mobile-first, responsive design, dynamically sourced content from Supabase, and deployed on Netlify. We also produced content for the website and social media. The second part was an individual oral presentation, where each student showcased a unique contribution they had developed in connection with the group project. I ended up receiving the highest grade, 12.



"
          />
        </div>
      </div>
    </>
  );
}

export default Grades;
