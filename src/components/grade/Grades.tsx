import Grade from "./Grade";
import "../../style/Grade.css";

function Grades() {
  return (
    <>
      <div className="grades">
        <h1 className="h2">Grades</h1>
        <div className="grade-flex-column ">
          <Grade
            grade="12"
            gradeText="The exam for the first semester consisted of two parts - a coding part and an oral part. The first part involved coding a website that described oneself as a person, where one had to showcase the projects completed during the first semester. Additionally, one had to create a sort of mini CV. The second part of the exam was the oral presentation, where one had to present their design process for 5 minutes, after which the teacher and censor could ask questions related to the curriculum. I got the highest grade, 12, for my exam."
          />
          <Grade
            grade="12"
            gradeText="The exam for the first semester consisted of two parts - a coding part and an oral part. The first part involved coding a website that described oneself as a person, where one had to showcase the projects completed during the first semester. Additionally, one had to create a sort of mini CV. The second part of the exam was the oral presentation, where one had to present their design process for 5 minutes, after which the teacher and censor could ask questions related to the curriculum. I got the highest grade, 12, for my exam."
          />
        </div>
      </div>
    </>
  );
}

export default Grades;
