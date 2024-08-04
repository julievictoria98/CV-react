import Grade from "./Grade";

function Grades() {
  return (
    <>
      <h1>Grades</h1>
      <div className="grade-flex">
        <Grade grade="12" />
        <Grade grade="12" />
      </div>
    </>
  );
}

export default Grades;
