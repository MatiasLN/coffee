import React from "react";
import Star from "./Star";

function StarRating({ rating, setRating }) {
  const renderStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={rating > i}
          setRating={() => setRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };

  return <ul className="stars">{renderStars()}</ul>;
}

export default StarRating;
