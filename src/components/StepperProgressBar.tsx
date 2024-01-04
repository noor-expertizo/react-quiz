// import React from "react";

// interface StepperProgressBarProps {
//   percent: number;
// }

// const StepperProgressBar: React.FC<StepperProgressBarProps> = ({ percent }) => {
//   const gradient = `linear-gradient(90deg, #bdc3c7 ${percent}%, #bdc3c7 ${percent}%)`;

//   return (
//     <div className="relative h-6 w-full bg-slate-100 overflow-hidden ">
//       <div
//         className="absolute h-full "
//         style={{ width: `${percent}%`, background: gradient }}
//       ></div>
//     </div>
//   );
// };

// export default StepperProgressBar;

// StepperProgressBar.tsx
import React from "react";

interface StepperProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const StepperProgressBar: React.FC<StepperProgressBarProps> = ({ currentQuestionIndex, totalQuestions }) => {
  const percent = (currentQuestionIndex / totalQuestions) * 100;
  const gradient = `linear-gradient(90deg, #bdc3c7 ${percent}%, #bdc3c7 ${percent}%)`;

  return (
    <div className="relative h-6 w-full bg-slate-100 overflow-hidden ">
      <div
        className="absolute h-full "
        style={{ width: `${percent}%`, background: gradient }}
      ></div>
    </div>
  );
};

export default StepperProgressBar;

