import "../../style/Grade.css";

interface GradeProps {
  grade: string;
  gradeText: string;
}

function Grade({ grade, gradeText }: GradeProps) {
  return (
    <>
      <div className="grade-flex">
        <p className="grade-text">{gradeText}</p>
        <div className="grade-image-container">
          <h1>{grade}</h1>
        </div>
      </div>
    </>
  );
}

export default Grade;
