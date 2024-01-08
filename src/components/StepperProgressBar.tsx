import React from "react";
import { StepperProgressBarProps } from "./types";


const StepperProgressBar: React.FC<StepperProgressBarProps> = ({ currentQuestionIndex, totalQuestions }) => {
  const percent = (currentQuestionIndex / totalQuestions) * 100;
  const gradient = `linear-gradient(90deg, #bdc3c7 ${percent}%, #bdc3c7 ${percent}%)`;

  return (
    <div className="relative h-6 w-full bg-slate-100 overflow-hidden transition-all">
      <div
        className="absolute h-full "
        style={{ width: `${percent}%`, background: gradient, transition: "ease-in", transitionDuration: "0.5s" }}
      ></div>
    </div>
  );
};

export default StepperProgressBar;

