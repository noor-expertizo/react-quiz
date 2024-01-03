import React from 'react';

interface ProgressBarProps {
  percent: number;
  maxPercent?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, maxPercent = 100 }) => {
  console.log("percent", percent)
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
        <span className="text-xs font-bold inline-block text-teal-600">
            Score: {`${percent}%`}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-800">
            Max Score: {`${maxPercent}%`}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="relative pt-1">
       
          <div className="flex-shrink-0 h-6 overflow-hidden rounded w-full border-2">
            <div className="h-full bg-gradient-to-r from-black via-gray-800 to-slate-100  rounded" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
