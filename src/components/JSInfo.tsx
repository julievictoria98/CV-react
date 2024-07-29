import React from "react";

interface JSInfoProps {
  skillText: string;
}

function JSInfo({ skillText }: JSInfoProps) {
  return (
    <div>
      <p>
        JavaScript is a programming language that conforms to the ECMAScript
        specification. JavaScript is high-level, often just-in-time compiled,
        and multi-paradigm. It has curly-bracket syntax, dynamic typing,
        prototype-based object-orientation, and first-class functions.
      </p>
    </div>
  );
}

export default JSInfo;
