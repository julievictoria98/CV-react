import Grade from "./Grade";
import "../../style/grade.css";

function Grades() {
  return (
      <div className="grades">
        <div className="grades-flex">
          <h1 className="h2">Exams and Grades</h1>
          <Grade
            grade="12"
            gradeText="In the first semester exam, I built a portfolio website from scratch using HTML, CSS, and JavaScript. The site had to follow specific criteria such as valid code, responsiveness, and user-friendliness. It included a homepage, a project showcase, and an 'About Me' page with a bio, photo, and CV. The exam included a written report and an oral defense, where I explained my design and development choices. I received the highest grade, 12."
          />
          <Grade
            grade="12"
            gradeText="The 2nd semester exam had two parts. First, as a group, we created a digital solution for a Danish B2C company, including a website prototype and design system in Figma aligned with the client’s values. The site was built using Astro with a mobile-first, responsive design, dynamic content from Supabase, and deployed on Netlify. We also produced website and social media content. The second part was an individual oral presentation where each student highlighted their unique contribution. I received the highest grade, 12."
          />
        </div>
      </div>
  );
}

export default Grades;
