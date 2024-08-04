import React, { useState, useEffect } from "react";
import "../../style/Grade.css";

interface GradeProps {
  grade: string;
}

const Grade: React.FC<GradeProps> = () => {
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    const numbers = ["00", "02", "4", "7", "10", "12"];
    let progress = 0;

    const updateNumber = () => {
      if (progress < 100) {
        progress += 20; // Increase progress to reach the final value correctly
        const index = Math.floor(progress / 20);
        setDisplayNumber(numbers[index]);
      } else {
        setDisplayNumber("12");
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateNumber, 280); // Update every 200ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="ring-container">
      <div className="ring"></div>
      <div className="number">{displayNumber}</div>
    </div>
  );
};

export default Grade;
