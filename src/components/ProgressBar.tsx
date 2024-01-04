import React from "react";

interface ProgressBarProps {
  totalScore: number;
  obtainedScore: number;
  minimumScore: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalScore,
  obtainedScore,
  minimumScore,
}) => {
  const totalWidth = (totalScore / 100) * 100;
  const obtainedWidth = (obtainedScore / totalScore) * 100;
  const minimumWidth = (minimumScore / totalScore) * 100;

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-white">
            Score: {obtainedScore}%
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-slate-600">
            Max Score: {totalScore}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex w-full mb-2 border-2 border-slate-500 rounded-md">
        <div
          style={{ width: `${minimumWidth}%` }}
          className="rounded-l bg-black h-6"
        ></div>
        <div
          style={{ width: `${obtainedWidth - minimumWidth}%` }}
          className="bg-gray-600 h-6"
        ></div>
        <div
          style={{ width: `${totalWidth - obtainedWidth}%` }}
          className="rounded-r bg-slate-300 h-6"
        ></div>
      </div>

 
    </div>
  );
};

export default ProgressBar;
