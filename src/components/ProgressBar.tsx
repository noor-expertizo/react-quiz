import React from "react";
import { Progress } from "reactstrap";
import { MultiProgressBarProps } from "./types";

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({
  bars,
  totalScore,
  obtainedScore,
}) => {
  return (
    <div>
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
      <Progress multi style={{ height: "24px", border: "1px solid black" }}>
        {bars.map((bar, index) => (
          <Progress
            key={index}
            bar
            value={bar.value * 100}
            style={{ backgroundColor: bar.color, width: bar.value }}
          />
        ))}
      </Progress>
    </div>
  );
};

export default MultiProgressBar;
