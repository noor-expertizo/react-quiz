"use client";
import React from "react";
import { QuestionHeading } from "./types";

const QuestionHeading: React.FC<QuestionHeading> = ({
  count,
  total,
  title,
}: QuestionHeading) => {
  const displayCount = Math.min(count, total);

  // Remove "Entertainment" from the title if it is present
  const cleanedTitle = title.toLowerCase().includes("entertainment")
    ? title.replace(/entertainment:/i, "").trim()
    : title;

  return (
    <div>
      <p className="text-gray-600 font-medium text-2xl ">
        {" "}
        Question {displayCount} of {total}
      </p>
      <p className="text-gray-500 font-medium text-sm ">
        Entertainment: {cleanedTitle}
      </p>
    </div>
  );
};

export default QuestionHeading;
