import React from "react";

interface ProgressBarProps {
  totalScore: number;
  obtainedScore: number;
  minimumScore: number;
  wronglyAnswered: number;
}

const MultiProgressBar: React.FC<ProgressBarProps> = ({
  totalScore,
  obtainedScore,
  minimumScore,
  wronglyAnswered,
}) => {
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
            Max Score: {totalScore.toFixed(0)}%
          </span>
        </div>
      </div>

      <div className="flex w-full mb-2 border-2 border-slate-900 rounded-md">
        <div
          style={{ width: `${obtainedScore}%` }}
          className="rounded-l bg-black h-8 transition-width duration-500 ease-in-out"
        ></div>

        <div
          style={{ width: `${minimumScore - obtainedScore }%` }}
          className="bg-gray-500 h-8 transition-width duration-500 ease-in-out"
        ></div>

        <div
          style={{ width: `${(totalScore - minimumScore - obtainedScore) }%` }}
          className="rounded-r bg-gray-400 h-8 transition-width duration-500 ease-in-out"
        ></div>
      </div>
    </div>
  );
};

export default MultiProgressBar;
