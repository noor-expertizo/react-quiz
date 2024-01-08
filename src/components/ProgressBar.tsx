import React from "react";

interface ProgressBarProps {
  totalScore: number;
  obtainedScore: number;
  minimumScore: number;
  maximumScore: number;
}

const MultiProgressBar: React.FC<ProgressBarProps> = ({
  totalScore,
  obtainedScore,
  minimumScore,
  maximumScore,
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

      <div className="flex w-full mb-2 border-3 border-slate-900 rounded-md relative h-[39px]">
        <div
          style={{ width: `${obtainedScore}%` }}
          className="rounded-l bg-black h-[34.5px] transition-width duration-500 ease-in-out absolute z-50"
        ></div>

        <div
          style={{ width: `${minimumScore}%` }}
          className="bg-gray-500 rounded-l h-[34.5px] transition-width duration-500 ease-in-out absolute z-40"
        ></div>

        <div
          style={{ width: `${maximumScore}%` }}
          className=" bg-gray-400 rounded-l h-[34.5px] transition-width duration-500 ease-in-out absolute z-30"
        ></div>
      </div>
    </div>
  );
};

export default MultiProgressBar;
