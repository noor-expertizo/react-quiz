"use client"; // This is a client component 

import React from "react";

interface QuestionHeading {
  count: number;
  total: number;
  title: string
}

 const QuestionHeading:React.FC<QuestionHeading> = ({count, total, title}: QuestionHeading) => {
  const displayCount = Math.min(count, total);

  return (
    <div>
      <p className="text-gray-600 font-medium text-2xl "> Question {displayCount} of {total}</p>
      <p className="text-gray-500 font-medium text-sm ">
        Entertainment: {title}
      </p>
    </div>
  );
}

export default QuestionHeading