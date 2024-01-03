import React from 'react';

interface StepperProgressBarProps {
  percent: number;
}

const StepperProgressBar: React.FC<StepperProgressBarProps> = ({ percent }) => {
  const gradient = `linear-gradient(90deg, #bdc3c7 ${percent}%, #bdc3c7 ${percent}%)`;

  return (
    <div className="relative h-4 w-full bg-slate-100 overflow-hidden ">
      <div
        className="absolute h-full "
        style={{ width: `${percent}%`, background: gradient }}
      ></div>
    </div>
  );
};

export default StepperProgressBar;
