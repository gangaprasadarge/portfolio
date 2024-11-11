import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa";
import { SiBlender, SiMicrosoftexcel, SiPowerbi, SiPython, SiR, SiTableau, SiUnity } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const techIcons = {
  "HTML": <FaHtml5 size={24} />,
  "CSS": <FaCss3Alt size={24} />,
  "Tableau": <SiTableau size={24} />,
  "Power BI": <SiPowerbi size={24} />,
  "Excel": <SiMicrosoftexcel size={24} />,
  "Unity": <SiUnity size={24} />,
  "Blender": <SiBlender size={24} />,
  "R": <SiR size={24} />,
  "Python": <SiPython size={24} />,
  "Java": <FaJava size={24} />,
  "JavaScript": <DiJavascript1 size={24} />,
  "SQL": <TbSql size={24} />
};

const TechStack = ({ techStack }) => {
  return (
    <div className="flex mx-2 space-x-4 mt-4">
      {techStack.map((tech, index) => (
        <div key={index} className="flex items-center">
          {techIcons[tech] || <span>{tech}</span>} {/* If no icon, show the tech name */}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
