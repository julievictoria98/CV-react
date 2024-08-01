import React from "react";

interface JSInfoProps {
  skillText: string;
}

function JSInfo({ skillText }: JSInfoProps) {
  return (
    <div>
      <p>{skillText}</p>
    </div>
  );
}

export default JSInfo;
