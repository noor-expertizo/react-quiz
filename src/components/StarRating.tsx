import React, { useState } from "react";

interface StarRatingProps {
  totalStars: number;
  onChange?: (rating: number) => void;
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  onChange,
  rating,
}) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <button
          key={index}
          className={`text-2xl focus:outline-none ${
            index < rating ? "text-black" : "text-gray-300"
          }`}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
};

export default StarRating;
