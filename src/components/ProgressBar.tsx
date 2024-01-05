// import React from "react";

// interface ProgressBarProps {
//   totalScore: number;
//   obtainedScore: number;
//   minimumScore: number;
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({
//   totalScore,
//   obtainedScore,
//   minimumScore,
// }) => {
//   const totalWidth = (totalScore / 100) * 100;
//   const obtainedWidth = (obtainedScore / totalScore) * 100;
//   const minimumWidth = (minimumScore / totalScore) * 100;

//   return (
//     <div className="relative pt-1">
//       <div className="flex mb-2 items-center justify-between">
//         <div>
//           <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-white">
//             Score: {obtainedScore}%
//           </span>
//         </div>
//         <div className="text-right">
//           <span className="text-xs font-semibold inline-block text-slate-600">
//             Max Score: {totalScore}%
//           </span>
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="flex w-full mb-2 border-2 border-slate-500 rounded-md">
//         <div
//           style={{ width: `${minimumWidth}%`, transition: "ease-in-out", transitionDuration: "0.3s" }}
//           className="rounded-l bg-black h-6"
//         ></div>
//         <div
//           style={{ width: `${obtainedWidth - minimumWidth}%`, transition: "ease-in-out", transitionDuration: "0.3s" }}
//           className="bg-gray-600 h-6"
//         ></div>
//         <div
//           style={{ width: `${totalWidth - obtainedWidth}%`, transition: "ease-in-out", transitionDuration: "0.3s" }}
//           className="rounded-r bg-slate-300 h-6"
//         ></div>
//       </div>

//     </div>
//   );
// };

import React from "react";
import { Progress } from "reactstrap";

interface ProgressBar {
  value: number;
  color: string;
}

interface MultiProgressBarProps {
  bars: ProgressBar[];
  totalScore: number;
  obtainedScore: number;
}

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({
  bars,
  totalScore,
  obtainedScore,
}) => {
  console.log("bars", bars)
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
      <Progress multi style={{height: "24px", border: "1px solid black"}}>
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
