
import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
  onChange?: (rating: number) => void;
  rating: number;
  // setRating: (starIndex: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, onChange, rating }) => {
  // const [rating, setRating] = useState(initialRating);

  // const handleStarClick = (starIndex: number) => {
  //   const newRating = starIndex + 1;
  //   setRating(newRating);
  //   if (onChange) {
  //     onChange(newRating);
  //   }
  // };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <button
          key={index}
          // onClick={() => handleStarClick(index)}
          className={`text-2xl focus:outline-none ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
};

export default StarRating;
