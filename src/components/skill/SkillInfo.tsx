interface JSInfoProps {
  skillText: string;
}

function SkillInfo({ skillText }: JSInfoProps) {
  return (
    <div>
      <p>{skillText}</p>
    </div>
  );
}

export default SkillInfo;
