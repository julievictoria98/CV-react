import Experience from "./Experience";

function Experiences() {
  return (
    <>
      <h1>Experince</h1>
      <div className="flex-column">
        <Experience Experience="Normal su-chef" />
        <Experience Experience="Barnepige" />
        <Experience Experience="tester3" />
      </div>
    </>
  );
}

export default Experiences;
